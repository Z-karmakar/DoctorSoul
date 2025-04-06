import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  MessageCircle,
  RefreshCw,
  HistoryIcon,
  User,
  Bot,
  ShieldCheck,
  Stethoscope,
  BookOpen,
  Clock,
  AlertTriangle,
  Check,
  X,
  Info,
  HelpCircle,
  Sparkles,
  Mic
} from "lucide-react";
import axios from "axios";
import { marked } from "marked";
import Header from "./Chatbot components/Header";
import SideNavbar from "./Chatbot components/SideNavbar";

// Default medical questions
const defaultQuestions = [
  "What are the symptoms of diabetes?",
  "How can I lower my blood pressure naturally?",
  "What vaccinations do adults need?",
  "How do I recognize signs of a heart attack?",
  "What are the best ways to manage stress?",
  "How can I improve my diet for better health?",
  "What exercises are safe for seniors?",
  "How do I know if I need to see a doctor?",
  "What are common signs of depression?",
  "How can I boost my immune system?",
  "What screenings should I get at my age?",
  "How do I manage chronic pain?",
  "What are the risks of sleep deprivation?",
  "How can I improve my mental health?",
  "What are the early signs of alzheimer's?",
  "How to manage type 2 diabetes?",
  "What are the best foods for heart health?",
  "How can I improve my sleep quality?",
  "What are the signs of a stroke?",
  "How to manage anxiety naturally?",
  "What vitamins are essential for immunity?",
  "How to prevent osteoporosis?",
  "What are the best exercises for arthritis?",
  "How to recognize early signs of cancer?",
  "What are the risks of chronic inflammation?",
  "How to maintain healthy cholesterol levels?",
  "What are the best ways to manage menopause?",
  "How to support mental health during pandemic?",
  "What are the signs of vitamin deficiencies?",
  "How to improve gut health naturally?",
  "What are the best strategies for weight management?",
  "How to prevent age-related cognitive decline?",
  "What are the most important health screenings?",
  "How to manage seasonal allergies?",
  "What are the benefits of meditation?",
  "How to support healthy aging?",
  "What are the signs of hormonal imbalance?",
  "How to improve respiratory health?",
  "What are the best practices for skin health?",
  "How to manage chronic fatigue?",
  "What is the importance of regular check-ups?",
  "How to manage autoimmune disorders?",
  "What are the signs of kidney problems?",
  "How to improve liver health?",
  "What are the best nutritional supplements?",
  "How to manage migraine headaches?",
  "What are the symptoms of thyroid disorders?",
  "How to maintain joint health?",
  "What are the risks of prolonged sitting?",
  "How to improve cardiovascular fitness?",
];

function MedicalChatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome! I'm your comprehensive medical assistant. I'm here to provide informative health guidance. Remember, while I offer insights, always consult with a healthcare professional for personalized medical advice.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [defaultSuggestions, setDefaultSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allChats, setAllChats] = useState([]);
  const [isRotating, setIsRotating] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showDefaultQuestions, setShowDefaultQuestions] = useState(true);
  const { isListening, startListening } = useVoiceRecognition();
  const chatHistoryRef = useRef(null);
  const inputRef = useRef(null);
  const [rotatingButton, setRotatingButton] = useState(null);

  // Shuffle and select default questions

  const shuffleQuestions = () => {
    setRotatingButton("commonQuestions");
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const randomQuestions = shuffleArray(defaultQuestions).slice(0, 12);
    setDefaultSuggestions(randomQuestions);
  };

  useEffect(() => {
    shuffleQuestions();
  }, []);

  // Function to handle voice input

  function useVoiceRecognition() {
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState(null);

    useEffect(() => {
      // Check for browser support
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = false;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = "en-US";

        recognitionInstance.onstart = () => {
          setIsListening(true);
        };

        recognitionInstance.onresult = (event) => {
          const transcript = event.results[0][0].transcript.trim();
          return transcript;
        };

        recognitionInstance.onerror = (event) => {
          console.error("Speech recognition error", event.error);
          setIsListening(false);
        };

        recognitionInstance.onend = () => {
          setIsListening(false);
        };

        setRecognition(recognitionInstance);
      }

      // Cleanup function
      return () => {
        if (recognition) {
          recognition.stop();
        }
      };
    }, []);

    const startListening = (onResult) => {
      if (recognition) {
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript.trim();
          onResult(transcript);
          setIsListening(false);
        };

        recognition.start();
      } else {
        alert("Voice recognition is not supported in this browser.");
      }
    };

    return { isListening, startListening };
  };

  // Modify your voice input handler
  const handleVoiceInput = () => {
    startListening((transcript) => {
      setInputMessage(transcript);
      // Optionally, automatically send the message
      // handleSendMessage();
    });
  };


  // Scroll to bottom of chat
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTo({
        top: chatHistoryRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, showDefaultQuestions, isLoading]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    // Hide default questions when a new message is sent
    setShowDefaultQuestions(false);

    // User message logic
    const userMessage = { role: "user", content: inputMessage };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setAllChats((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "google/gemini-2.0-flash-001",
          messages: [
            {
              role: "system",
              content:
                "You are a comprehensive medical AI assistant. Provide detailed, accurate health information. Always recommend consulting with a healthcare professional for personalized medical advice. Be compassionate, informative, and provide context for your responses.",
            },
            ...updatedMessages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
          ],
        },
        {
          headers: {
            Authorization:
              "Bearer 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",
            "Content-Type": "application/json",
          },
        }
      );

      const assistantResponse = {
        role: "assistant",
        content: marked(response.data.choices[0].message.content),
      };

      setMessages((prev) => [...prev, assistantResponse]);
      setAllChats((prev) => [...prev, assistantResponse]);
    } catch (error) {
      console.error(error);
      const errorMessage = {
        role: "assistant",
        content:
          "Apologies, I'm experiencing high demand. Please try again shortly.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      setAllChats((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    // Rotate animation
    setIsRotating(true);
    setRotatingButton("newChat");
    setTimeout(() => setIsRotating(false), 500);

    // Reset to initial state
    setMessages([
      {
        role: "assistant",
        content:
          "Welcome! I'm your comprehensive medical assistant. I'm here to provide informative health guidance. Remember, while I offer insights, always consult with a healthcare professional for personalized medical advice.",
      },
    ]);
    setShowDefaultQuestions(true);
  };

  const handlePreviousChats = () => {
    // Rotate animation
    setIsRotating(true);
    setRotatingButton("previousChats");
    setTimeout(() => setIsRotating(false), 500);

    // If no previous chats, show message
    if (allChats.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: "No previous medical consultations available.",
        },
      ]);
      return;
    }

    // Restore previous chats
    setMessages(allChats);
    setShowDefaultQuestions(true);
  };

  const insertSuggestedQuestion = async (question) => {
    setInputMessage(question);

    // Focus on input field
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Automatically send the question if input becomes active
    setTimeout(() => {
      handleSendMessage();
    }, 100);

    // Hide default questions after selection
    setShowDefaultQuestions(false);
  };

  return (
    <div style={{fontFamily: "'Roboto', sans-serif"}} className="container relative h-[90vh] px-4 mx-auto w-full">
      <Header />
      <SideNavbar
        handlePreviousChats={handlePreviousChats}
        handleNewChat={handleNewChat}
        setShowDefaultQuestions={setShowDefaultQuestions}
        shuffleQuestions={shuffleQuestions}
        previousChats={messages}
      />

      <section className="bg-white rounded-2xl mx-auto w-11/12 max-h-4/5 shadow-sm shadow-gray-300 overflow-hidden border-2 mt-10 p-2 border-gray-200 flex">
        {/* Sidebar with Additional Information */}
        <div
          className={`w-1/4 bg-gray-50 border-r border-gray-200 p-4 transition-all duration-300 ${showAdditionalInfo ? "block" : "hidden"
            }`}
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
              <Info className="mr-2 text-blue-700" size={24} />
              Medical Insights
            </h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-start">
                <Check
                  className="mr-2 text-green-600 flex-shrink-0"
                  size={20}
                />
                <p>
                  Always consult healthcare professionals for personalized
                  advice
                </p>
              </div>
              <div className="flex items-start">
                <Clock className="mr-2 text-blue-500 flex-shrink-0" size={20} />
                <p>Response times may vary based on query complexity</p>
              </div>
              <div className="flex items-start">
                <AlertTriangle
                  className="mr-2 text-yellow-500 flex-shrink-0"
                  size={20}
                />
                <p>
                  AI insights are informational, not a substitute for medical
                  diagnosis
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
              <BookOpen className="mr-2 text-blue-700" size={24} />
              Quick References
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Emergency Contacts</li>
              <li>• Common Medication Information</li>
              <li>• Health Risk Assessment</li>
              <li>• Wellness Tracking Tips</li>
            </ul>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex flex-col w-full">
          {/* Chat History */}
          <div
            ref={chatHistoryRef}
            className="p-4 overflow-y-auto bg-gray-50 flex-grow"
            style={{
              maxHeight: "calc(100vh * 0.6)",
              overflowY: "auto",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start mb-4 ${msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                {msg.role === "user" ? (
                  <>
                    <div className="mr-3 bg-blue-600 text-white p-3 rounded-lg shadow-sm max-w-3xl">
                      <p dangerouslySetInnerHTML={{ __html: msg.content }}></p>
                    </div>
                    <div className="flex-shrink-0 bg-gray-200 text-gray-700 p-2 rounded-full">
                      <User className="w-5 h-5" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-shrink-0 bg-blue-600 text-white p-2 rounded-full">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="ml-3 bg-white p-3 rounded-lg shadow-sm max-w-3xl">
                      <p
                        className="text-gray-800"
                        dangerouslySetInnerHTML={{ __html: msg.content }}
                      ></p>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Default Questions Section with Toggle */}
            {showDefaultQuestions && (
              <div className="mt-4 bg-gray-100 rounded-lg p-4 animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg text-gray-700 font-semibold flex items-center">
                    <HelpCircle className="mr-2 text-blue-700" size={24} />
                    Suggested Health Questions
                  </p>
                  <button
                    onClick={() => setShowDefaultQuestions(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3 w-full">
                  {defaultSuggestions.map((question, index) => (
                    <div
                      key={index}
                      className="cursor-pointer w-full p-3 text-sm text-blue-800 hover:bg-gray-200 rounded-lg border border-gray-300 transition-all duration-200 hover:shadow-md"
                      onClick={() => insertSuggestedQuestion(question)}
                    >
                      {question}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Status Indicator */}
          {isLoading && (
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative h-5 w-5 flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
                  <MessageCircle className="z-10 text-blue-500 w-5 h-5 animate-pulse" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-700">
                    Analyzing health information
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Processing medical query with secure AI models...
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t w-full border-gray-200">
            <div className="flex rounded-lg border w-full border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
                className="flex-grow px-4 py-3 w-full focus:outline-none text-gray-700"
                placeholder="Ask about symptoms, medications, or health concerns..."
              />
              <button
                onClick={handleVoiceInput}
                className={`bg-blue-100 hover:bg-blue-200 text-blue-600 px-6 py-2 transition-colors duration-200 hover:cursor-pointer flex items-center justify-center ${isListening ? "bg-red-100 text-red-600" : ""
                  }`}
              >
                <Mic className="w-5 h-5" />
              </button>
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="my-2 text-xs text-gray-500 flex items-center justify-between">
              <div className="flex items-center">
                <ShieldCheck className="text-blue-600 mr-1 w-4 h-4" />
                <span>
                  Your medical information is private and HIPAA compliant
                </span>
              </div>
              <button
                onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
                className="text-blue-800 hover:bg-blue-50 px-2 py-1 rounded-md transition-colors"
              >
                {showAdditionalInfo ? "Hide" : "Show"} Additional Info
              </button>
            </div>

            {/* Chat Management Buttons */}
            <div className="flex justify-between items-center mt-4 h-5">
              <button
                onClick={handlePreviousChats}
                className={`flex gap-2 items-center bg-transparent font-bold text-blue-600 border-blue-600 border-2 border-solid hover:bg-blue-600 hover:text-white p-2 rounded-lg transition-all duration-100 ease-in-out shadow-md hover:cursor-pointer ${isRotating ? "animate-rotate" : ""
                  }`}
              >
                History
                <HistoryIcon
                  className={`w-5 h-5 ${isRotating && rotatingButton === "previousChats" ? "animate-spin" : ""}`}
                />
              </button>
              <button
                onClick={() => {
                  setShowDefaultQuestions(true);
                  shuffleQuestions();
                }}
                className={`flex gap-2 items-center ml-2 font-bold bg-transparent border-2 border-solid border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-all duration-100 ease-in-out shadow-md transform hover:cursor-pointer ${isRotating && rotatingButton === "commonQuestions" ? "animate-rotate" : ""
                  }`}
              >
                Common Questions
                <Sparkles
                  className={`w-5 h-5 ${isRotating && rotatingButton === "commonQuestions" ? "animate-spin" : ""}`}
                />
              </button>
              <button
                onClick={handleNewChat}
                className={`flex gap-2 items-center ml-2 font-bold bg-transparent border-2 border-solid border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white p-2 rounded-lg transition-all duration-100 ease-in-out shadow-md transform hover:cursor-pointer ${isRotating ? "animate-rotate" : ""
                  }`}
              >
                New Conversation
                <RefreshCw
                  className={`w-5 h-5 ${isRotating && rotatingButton === "newChat" ? "animate-spin" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MedicalChatbot;
