import React, { useState, useEffect } from "react";
import {
   HistoryIcon,
   Sparkles,
   RefreshCw,
   Menu,
   X,
   BookOpen,
   MessageCircle,
   Shield,
} from "lucide-react";

const SideNavbar = ({
   handlePreviousChats,
   handleNewChat,
   setShowDefaultQuestions,
   shuffleQuestions,
   previousChats,
}) => {
   const [isOpen, setIsOpen] = useState(false);
   const [pairedPreviousChats, setPairedPreviousChats] = useState([]);

   const NavButton = ({ icon: Icon, label, onClick, className }) => (
      <button
         onClick={() => {
            onClick();
            setIsOpen(false);
         }}
         className={`
        w-full flex items-center p-3 rounded-lg transition-all duration-100 
        hover:bg-blue-100 text-blue-800 font-medium group
        hover:tracking-widest hover:pl-6
        focus:outline-none focus:ring-2 focus:ring-blue-300
        ${className}
      `}
      >
         <Icon className="mr-3 w-5 h-5 transition-transform group-hover:scale-110 group-hover:rotate-6" />
         <span className="transition-all duration-300 group-hover:ml-2">
            {label}
         </span>
      </button>
   );

   useEffect(() => {
      if (previousChats && previousChats.length > 0) {
         // Ensure we're creating pairs of user and assistant messages
         const pairedChats = [];
         for (let i = 0; i < previousChats.length; i++) {
            // Find the matching assistant message for each user message
            const userMessage = previousChats[i];
            if (userMessage.role === "user") {
               const assistantMessage = previousChats[i + 1];

               if (assistantMessage) {
                  pairedChats.push([userMessage, assistantMessage]);
               }
            }
         }

         // Limit to last 10 conversations and reverse to show most recent first
         setPairedPreviousChats(pairedChats.slice(0, 10).reverse());
      }
   }, [previousChats]);


   return (
      <>
         {/* Navbar Toggle Button */}
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-3 left-4 z-50 text-white p-2 rounded-full shadow-lg 
        hover:bg-blue-700 transition-all duration-300 transform 
        hover:scale-110 hover:rotate-180"
         >
            {isOpen ? <X size={34} /> : <Menu size={34} />}
         </button>

         {/* Main Sidebar */}
         <div
            className={`
          fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-100 
          transition-all duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          overflow-y-auto
        `}
         >
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
               <div className="flex items-center">
                  <Shield
                     className="text-blue-600 mr-2 transition-transform hover:scale-110"
                     size={24}
                  />
                  <h2 className="text-xl font-bold text-blue-800 transition-all hover:tracking-wider">
                     Medical Assistant
                  </h2>
               </div>
               <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 
            hover:rotate-90 transition-all duration-300"
               >
                  <X size={24} />
               </button>
            </div>

            {/* Navigation Buttons */}
            <nav className="p-4 space-y-2">
               <NavButton
                  icon={HistoryIcon}
                  label="Medical History"
                  onClick={handlePreviousChats}
                  className=" hover:bg-blue-50 hover:text-blue-900"
               />
               <NavButton
                  icon={Sparkles}
                  label="Common Questions"
                  onClick={() => {
                     setShowDefaultQuestions(true);
                     shuffleQuestions();
                  }}
                  className=" hover:bg-green-50 hover:text-green-900"
               />
               <NavButton
                  icon={RefreshCw}
                  label="New Consultation"
                  onClick={handleNewChat}
                  className=" hover:bg-indigo-50 hover:text-indigo-900"
               />
            </nav>

            {/* Previous Chats Section */}
            <div className="p-4 border-t border-gray-200">
               <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                  <BookOpen
                     className="mr-2 text-blue-600 transition-transform hover:scale-110"
                     size={20}
                  />
                  Previous Conversations
               </h3>
               {pairedPreviousChats && pairedPreviousChats.length > 0 ? (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                     {pairedPreviousChats.map((chat, index) => (
                        <div
                           key={index}
                           className="
               bg-gray-50 p-3 rounded-lg 
               hover:bg-blue-50 hover:shadow-md
               transition-all duration-300 
               transform hover:-translate-y-1
               cursor-pointer
            "
                        >
                           <div className="flex items-center mb-1">
                              <MessageCircle
                                 className="mr-2 text-blue-500 transition-transform hover:scale-110"
                                 size={16}
                              />
                              <p dangerouslySetInnerHTML={{ __html: chat[0]?.content || "No question available" }} className="font-medium text-sm text-gray-700 truncate">
                              </p>
                           </div>
                           <p dangerouslySetInnerHTML={{ __html: chat[1]?.content || "No summary available" }} className="text-xs text-gray-500 line-clamp-1">
                           </p>
                        </div>
                     ))}
                  </div>
               ) : (
                  <p className="text-sm text-gray-500 text-center">
                     No previous consultations
                  </p>
               )}
            </div>
         </div>
      </>
   );
};

export default SideNavbar;
