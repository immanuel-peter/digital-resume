import React, { useState, useRef, useEffect } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import axios from "axios";
import { biography } from "../biography";
import ReactMarkdown from "react-markdown";

const ImmanuelAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initMessages = [{ role: "system", content: biography }];
  const [messages, setMessages] = useState(initMessages);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const messagesEndRef = useRef(null);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    // Create a new messages array with the user message
    const newMessages = [...messages, { role: "user", content: userInput }];

    // Add user message
    setMessages(newMessages);
    setLoading(true); // Set loading to true when user sends a message
    setUserInput(""); // Clear input

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: newMessages, // Use the updated messages array
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Add bot response
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.data.choices[0].message.content,
        },
      ]);
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't respond." },
      ]);
    }

    setLoading(false); // Set loading to false when response is received
  };

  // Scroll to the latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <button
        onClick={openDialog}
        className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300"
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
              {messages
                .filter((msg) => msg.role !== "system")
                .map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded-md ${
                      msg.role === "user"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-white"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    ) : (
                      msg.content
                    )}
                  </div>
                ))}

              {/* Loading state message */}
              {loading && (
                <div className="mb-2 p-2 rounded-md bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  Typing...
                </div>
              )}

              {/* Reference element for scrolling */}
              <div ref={messagesEndRef} />
            </div>

            {/* User Input */}
            <div className="mt-4 flex items-center">
              <textarea
                className="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-600"
                rows="1"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                disabled={loading} // Disable button while loading
              >
                Send
              </button>
            </div>

            {/* Message for user feedback */}
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              If you have any concerns or questions about ImmanuelAI, please use
              the{" "}
              <a
                href="https://github.com/immanuel-peter/digital-resume/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Issues tab
              </a>{" "}
              in the repo.
            </p>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default ImmanuelAI;
