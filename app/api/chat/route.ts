import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "redis";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize Redis client
const redis = await createClient({
  url: process.env.REDIS_URL!,
}).connect();

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-nano",
      messages,
    });

    const assistantMessage = response.choices[0].message;

    // Log to Redis
    const logEntry = {
      timestamp: new Date().toISOString(),
      messages,
      response: assistantMessage,
    };

    // Store in a list with timestamp as score for chronological ordering
    await redis.zAdd("immanuelai:conversations", {
      value: JSON.stringify(logEntry),
      score: Date.now(),
    });

    // Keep only last 1000 conversations
    await redis.zRemRangeByRank("immanuelai:conversations", 0, -1001);

    return NextResponse.json(assistantMessage);
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to get response" },
      { status: 500 }
    );
  }
}
