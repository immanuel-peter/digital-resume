"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useSearchParams } from "next/navigation";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";
import queryPrompts from "../lib/utils/queryPrompts.json";

type ChatMessage = { role: string; content: string; reasoning?: string };

const ImmanuelAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isComposingRef = useRef(false);
  const [previousResponseId, setPreviousResponseId] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const isSendingRef = useRef(false);
  const messagesRef = useRef(messages);
  const lastAutoPromptKeyRef = useRef<string | null>(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const appendAssistantMessage = useCallback((content: string) => {
    setMessages((currentMessages) => {
      const lastMessage = currentMessages[currentMessages.length - 1];

      if (
        lastMessage?.role === "assistant" &&
        lastMessage.content === content
      ) {
        return currentMessages;
      }

      const updatedMessages = [
        ...currentMessages,
        {
          role: "assistant" as const,
          content,
        },
      ];
      messagesRef.current = updatedMessages;
      return updatedMessages;
    });
  }, []);

  const appendErrorMessage = useCallback(() => {
    const errorContent = "Sorry, I couldn't respond.";

    setMessages((currentMessages) => {
      const lastMessage = currentMessages[currentMessages.length - 1];

      if (
        lastMessage?.role === "assistant" &&
        lastMessage.content === errorContent
      ) {
        return currentMessages;
      }

      const updatedMessages = [
        ...currentMessages,
        { role: "assistant" as const, content: errorContent },
      ];
      messagesRef.current = updatedMessages;
      return updatedMessages;
    });
  }, []);

  const sendMessage = useCallback(async (input: string) => {
    const content = input.trim();
    if (!content) return;

    if (isSendingRef.current) return;
    isSendingRef.current = true;

    const nextMessages = [...messagesRef.current, { role: "user" as const, content }];

    setMessages(nextMessages);
    messagesRef.current = nextMessages;
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages,
          previous_response_id: previousResponseId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      if (data?.response_id) {
        setPreviousResponseId(data.response_id as string);
      }

      appendAssistantMessage(data.output_text ?? data.content ?? "");
    } catch (error) {
      console.error("Error fetching response:", error);
      appendErrorMessage();
    } finally {
      isSendingRef.current = false;
      setLoading(false);
    }
  }, [appendAssistantMessage, appendErrorMessage, previousResponseId]);

  const handleSendMessage = async () => {
    if (loading) return;
    if (userInput.trim() === "") return;

    const input = userInput;
    setUserInput("");
    await sendMessage(input);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (isComposingRef.current) return;
      e.preventDefault();
      if (!loading) {
        handleSendMessage();
      }
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (!searchParams) return;

    const query = searchParams.get("query");
    const queryId = searchParams.get("query_id");
    const promptFromId = queryId
      ? (queryPrompts as Record<string, string>)[queryId] ?? null
      : null;
    const messageToSend = query ?? promptFromId;

    if (!messageToSend) {
      lastAutoPromptKeyRef.current = null;
      return;
    }

    const key = queryId ? `id:${queryId}` : `query:${messageToSend}`;

    if (lastAutoPromptKeyRef.current === key) return;
    lastAutoPromptKeyRef.current = key;

    if (loading || isSendingRef.current) return;

    setIsOpen(true);
    void sendMessage(messageToSend);
  }, [loading, searchParams, sendMessage]);

  return (
    <>
      {/* Chat Widget */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[480px] rounded-2xl shadow-2xl flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            ImmanuelAI
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer"
            aria-label="Close chat"
          >
            <FaTimes size={14} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                  msg.role === "user"
                    ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                }`}
              >
                {msg.role === "assistant" ? (
                  <>
                    {msg.reasoning && (
                      <details className="mb-1">
                        <summary className="cursor-pointer select-none text-xs text-gray-500 dark:text-gray-400">
                          Show reasoning
                        </summary>
                        <div className="mt-1 prose prose-sm dark:prose-invert text-xs italic">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {msg.reasoning}
                          </ReactMarkdown>
                        </div>
                      </details>
                    )}
                    <div className="prose prose-sm dark:prose-invert">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </>
                ) : (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 px-3 py-2 rounded-xl text-sm">
                Thinking...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-end gap-2 px-3 py-3 border-t border-gray-200 dark:border-gray-700">
          <textarea
            className="flex-grow p-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500 resize-none"
            rows={1}
            placeholder="Ask me anything..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
            onCompositionStart={() => (isComposingRef.current = true)}
            onCompositionEnd={() => (isComposingRef.current = false)}
            aria-label="Chat input. Press Enter to send, Shift+Enter for a new line."
          />
          <button
            onClick={handleSendMessage}
            disabled={loading}
            className="p-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors disabled:opacity-50"
            aria-label="Send message"
          >
            <FaPaperPlane size={14} />
          </button>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors cursor-pointer"
        aria-label="Open ImmanuelAI chat"
      >
        <FaCommentDots size={22} />
      </button>
    </>
  );
};

export default ImmanuelAI;
