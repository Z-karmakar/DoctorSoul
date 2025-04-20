import React, { useState, useRef } from "react";
import { marked } from "marked";

const api_key = import.meta.env.REACT_APP_API_KEY;
const MediChatAssistant = () => {
  const [messageInput, setMessageInput] = useState("");
  const [chatHistoryArray, setChatHistoryArray] = useState([]);
  const [statusVisible, setStatusVisible] = useState(false);
  const chatHistoryRef = useRef(null);
  const statusText = useRef("Processing your request...");

  const addMessage = (content, isUser = false) => {
    const messageDiv = (
      <div className={`flex items-start mb-4 ${isUser ? "justify-end" : ""}`}>
        {isUser ? (
          <>
            <div className="mr-3 bg-medical-primary text-white p-3 rounded-lg shadow-sm max-w-3xl">
              <p>{content}</p>
            </div>
            <div className="flex-shrink-0 bg-gray-200 text-gray-700 p-2 rounded-full">
              <i className="fas fa-user"></i>
            </div>
          </>
        ) : (
          <>
            <div className="flex-shrink-0 bg-medical-primary text-white p-2 rounded-full">
              <i className="fas fa-robot"></i>
            </div>
            <div className="ml-3 bg-white p-3 rounded-lg shadow-sm max-w-3xl">
              <p className="text-gray-800">{content}</p>
            </div>
          </>
        )}
      </div>
    );

    setChatHistoryArray((prev) => [...prev, messageDiv]);
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  };

  const handleSend = () => {
    if (messageInput.trim() === "") {
      return;
    }

    // Add user message to chat
    addMessage(messageInput, true);
    // Store user message in chat history array
    setChatHistoryArray((prev) => [
      ...prev,
      { role: "user", content: messageInput },
    ]);

    // Clear input and show status
    setMessageInput("");
    setStatusVisible(true);

    // Send the message to the API
    fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
      Authorization: `Bearer ${api_key}`,
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
      model: "google/gemini-2.0-flash-001",
      messages: [
        {
        role: "system",
        content:
          "You are a helpful medical assistant AI. Provide accurate health information but always remind users to consult healthcare professionals for medical advice. Do not diagnose conditions.",
        },
        {
        role: "user",
        content: messageInput,
        },
      ],
      }),
    })
      .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
      })
      .then((data) => {
      // Hide status
      setStatusVisible(false);

      // Convert the Markdown response to HTML
      const markdownContent = data.choices[0].message.content;
      const htmlContent = marked(markdownContent);

      // Add bot response to chat
      addMessage(htmlContent);
      // Store bot response in chat history array
      setChatHistoryArray((prev) => [
        ...prev,
        { role: "bot", content: htmlContent },
      ]);
      })
      .catch((error) => {
      console.error(error);
      setStatusVisible(false);
      addMessage(
        "I'm sorry, I encountered an error processing your request. Please try again later."
      );
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const startNewChat = () => {
    // Clear chat history
    setChatHistoryArray([]);
    // Add initial bot message
    addMessage("Hello! I'm your medical assistant. How can I help you today?");
    // Clear input and hide status
    setMessageInput("");
    setStatusVisible(false);
  };

  const showPreviousChats = () => {
    // Clear current chat history
    setChatHistoryArray((prev) => {
      const previousChats = prev.filter(
        (chat) => chat.role === "user" || chat.role === "bot"
      );
      return previousChats;
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-heartbeat text-medical-primary text-4xl mr-3"></i>
            <h1 className="text-3xl md:text-4xl font-bold text-medical-dark">
              MediChat Assistant
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your personal AI medical assistant. Ask questions about symptoms,
            treatments, or general health information.
          </p>
          <div className="text-xs text-gray-500 mt-2">
            <p>
              Not for emergency use. Always consult with a healthcare
              professional for medical advice.
            </p>
          </div>
        </header>

        {/* Chat Interface */}
        <div className="bg-white rounded-xl shadow-lg shadow-gray-300 overflow-hidden border border-gray-200">
          {/* Chat Output Area */}
          <div
            ref={chatHistoryRef}
            className="p-4 h-96 overflow-y-auto bg-medical-light"
          >
            {chatHistoryArray}
          </div>

          {/* Status Bar */}
          {statusVisible && (
            <div
              id="status-container"
              className="px-4 py-2 bg-gray-100 border-t border-b border-gray-200"
            >
              <div className="flex items-center">
                <div
                  id="status-indicator"
                  className="w-3 h-3 bg-medical-accent rounded-full mr-2 animate-pulse"
                ></div>
                <span id="status-text" className="text-sm text-gray-600">
                  {statusText.current}
                </span>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t w-full border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex rounded-lg border w-full border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-medical-primary focus-within:border-medical-primary">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-grow px-4 py-3 w-full focus:outline-none text-gray-700"
                  placeholder="Type your health question here..."
                />
                <button
                  id="send-btn"
                  onClick={handleSend}
                  className="bg-medical-primary hover:bg-medical-dark text-white px-4 py-2 transition-colors duration-200 flex items-center justify-center"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
            <div className="my-2 text-xs text-gray-500 flex items-center">
              <i className="fas fa-shield-alt text-medical-primary mr-1"></i>
              <span>Your conversations are private and secure</span>
            </div>

            {/* Buttons to show previous chats and start new chat */}
            <div className="flex justify-between items-center mt-4">
              <button
                id="prev-chats-btn"
                onClick={showPreviousChats}
                className="flex items-center bg-medical-primary hover:bg-medical-dark text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-md transform hover:scale-105"
              >
                <i className="fas fa-clock-rotate-left mr-2"></i>
                <span>Previous Chats</span>
              </button>
              <button
                id="new-chat-btn"
                onClick={startNewChat}
                className="flex items-center ml-2 bg-medical-secondary hover:bg-medical-dark text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-md transform hover:scale-105"
              >
                <span className="mr-2">Start New Chat</span>
                <i className="fas fa-redo"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="text-medical-primary mb-2">
              <i className="fas fa-notes-medical text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Health Information</h3>
            <p className="text-sm text-gray-600">
              Get reliable information about medical conditions and treatments.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="text-medical-primary mb-2">
              <i className="fas fa-pills text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Medication Guidance</h3>
            <p className="text-sm text-gray-600">
              Learn about medications, potential side effects, and interactions.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="text-medical-primary mb-2">
              <i className="fas fa-heartbeat text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Symptom Checker</h3>
            <p className="text-sm text-gray-600">
              Describe your symptoms to get information about possible
              conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediChatAssistant;
