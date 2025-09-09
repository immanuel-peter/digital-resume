import { NextResponse } from "next/server";
import OpenAI from "openai";
import { biography } from "@/public/biography";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages, previous_response_id } = await req.json();

    const input = (Array.isArray(messages) ? messages : [])
      .filter((m) => m && m.role === "user")
      .map((m) => ({
        role: "user" as const,
        content: [
          {
            type: "input_text" as const,
            text: typeof m.content === "string" ? m.content : String(m.content ?? ""),
          },
        ],
      }));

    const createPayload: any = {
      model: "gpt-5-nano",
      store: true,
      include: ["reasoning.encrypted_content", "web_search_call.action.sources"],
      reasoning: { effort: "low", summary: "auto" },
      instructions: biography,
      tool_choice: "auto",
      tools: [
        {
          type: "web_search",
          filters: {
            allowed_domains: [
              "github.com",
              "huggingface.co",
              "ipeter.dev",
              "linkedin.com",
              "raw.githubusercontent.com",
              "uchicago.box.com",
            ],
          },
        },
      ],
      input,
    };

    if (previous_response_id) {
      createPayload.previous_response_id = previous_response_id;
    }

    const response = await openai.responses.create(createPayload);

    const getReasoningText = async (response: any) => {
      const output = response.output;
      var text = "";
      for (const part of output) {
        if (part.type === "reasoning") {
          if (part.summary) {
            for (const summary of part.summary) {
              if (summary.text) {
                text += summary.text;
                text += "\n";
              }
            }
          }
        }
      }
      return text;
    };

    const reasoning_text = await getReasoningText(response);

    return NextResponse.json({
      output_text: response.output_text,
      response_id: response.id,
      reasoning_text: reasoning_text,
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to get response" },
      { status: 500 }
    );
  }
}
