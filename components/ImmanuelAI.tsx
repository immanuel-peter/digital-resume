"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import ReactMarkdown from "react-markdown";
import { useSearchParams } from "next/navigation";
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
          previous_response_id: previousResponseId
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      
      // Persist response id for follow-up turns
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

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

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

  // Scroll to the latest message
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
      <button
        onClick={openDialog}
        className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-lg cursor-pointer hover:from-blue-600 hover:to-purple-600 transition duration-300"
      >
        ImmanuelAI 🤖
      </button>

      <Dialog open={isOpen} onClose={closeDialog} className="relative z-10">
        <div className="fixed inset-0 bg-black/75" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* Increase the max width and padding of the dialog */}
          <DialogPanel className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <DialogTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
              ImmanuelAI 🤖
            </DialogTitle>
            <Description className="mt-1 text-gray-500 dark:text-gray-400">
              Ask me anything, and I'll try my best to help!
            </Description>

            {/* Chat Messages */}
            <div className="mt-4 h-80 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-md p-2">
              {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded-md ${
                      msg.role === "user"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-white"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <>
                        {msg.reasoning && (
                          <details className="mt-2">
                            <summary className="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-300">
                              Show reasoning
                            </summary>
                            <div className="mt-1 px-2 prose dark:prose-invert text-sm italic text-gray-700 dark:text-gray-300">
                              <ReactMarkdown>{msg.reasoning}</ReactMarkdown>
                            </div>
                          </details>
                        )}
                      
                        <div className="mt-2 prose prose-md dark:prose-invert">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>                        
                      </>
                    ) : (
                      msg.content
                    )}
                  </div>
                ))}

              {/* Loading state message */}
              {loading && (
                <div className="mb-2 p-2 rounded-md bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  Thinking...
                </div>
              )}

              {/* Reference element for scrolling */}
              <div ref={messagesEndRef} />
            </div>

            {/* User Input */}
            <div className="mt-4 flex items-center">
            <textarea
                className="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-600"
                rows={1}
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleInputKeyDown}
                onCompositionStart={() => (isComposingRef.current = true)}
                onCompositionEnd={() => (isComposingRef.current = false)}
                aria-label="Chat input. Press Enter to send, Shift+Enter for a new line."
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition duration-300"
                disabled={loading} // Disable button while loading
              >
                Send
              </button>
            </div>

            {/* Message for user feedback */}
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              If you have any concerns or questions about ImmanuelAI, please use
              the repo's{" "}
              <a
                href="https://github.com/immanuel-peter/digital-resume/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Issues tab
              </a>.
            </p>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default ImmanuelAI;
