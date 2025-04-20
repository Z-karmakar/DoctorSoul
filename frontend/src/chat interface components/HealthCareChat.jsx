import React, { useState } from "react";
import {
   MessageSquare,
   User,
   UserCheck,
   Send,
   Phone,
   Video,
   Paperclip,
   MoreVertical,
   Search,
   ArrowLeft,
   Calendar,
   Clock,
   Bell,
   Settings,
   Clipboard,
   Shield,
   Heart,
   Activity,
   FileText,
   Info,
} from "lucide-react";

const HealthcareChat = () => {
   const [activeUserType, setActiveUserType] = useState("patients");
   const [activeChat, setActiveChat] = useState(null);
   const [message, setMessage] = useState("");

   // Color schemes for each user type
   const colorSchemes = {
      patients: {
         primary: "bg-blue-500",
         light: "bg-blue-100",
         hover: "bg-blue-50",
         active: "bg-blue-100",
         text: "text-blue-600",
         border: "border-blue-600",
      },
      nurses: {
         primary: "bg-purple-500",
         light: "bg-purple-100",
         hover: "bg-purple-50",
         active: "bg-purple-100",
         text: "text-purple-600",
         border: "border-purple-600",
      },
      doctors: {
         primary: "bg-green-500",
         light: "bg-green-100",
         hover: "bg-green-50",
         active: "bg-green-100",
         text: "text-green-600",
         border: "border-green-600",
      },
   };

   // Get current color scheme
   const currentScheme = colorSchemes[activeUserType];

   // Sample data for each user type
   const userData = {
      patients: [
         {
            id: 1,
            name: "John Smith",
            avatar: "👨",
            lastMessage: "When should I take my medication?",
            time: "10:30 AM",
            unread: 2,
            status: "online",
         },
         {
            id: 2,
            name: "Sarah Johnson",
            avatar: "👩",
            lastMessage: "I need to reschedule my appointment",
            time: "9:15 AM",
            unread: 0,
            status: "offline",
         },
         {
            id: 3,
            name: "Michael Brown",
            avatar: "👨",
            lastMessage: "Are there any side effects?",
            time: "Yesterday",
            unread: 1,
            status: "away",
         },
         {
            id: 4,
            name: "Emma Davis",
            avatar: "👩",
            lastMessage: "Thank you for your help",
            time: "Yesterday",
            unread: 0,
            status: "online",
         },
      ],
      nurses: [
         {
            id: 1,
            name: "Nurse Wilson",
            avatar: "👩‍⚕️",
            lastMessage: "Patient in Room 302 needs assistance",
            time: "11:45 AM",
            unread: 3,
            status: "online",
         },
         {
            id: 2,
            name: "Nurse Garcia",
            avatar: "👨‍⚕️",
            lastMessage: "Medication administered to Mr. Johnson",
            time: "8:20 AM",
            unread: 0,
            status: "online",
         },
         {
            id: 3,
            name: "Nurse Chen",
            avatar: "👩‍⚕️",
            lastMessage: "Lab results are ready",
            time: "Yesterday",
            unread: 0,
            status: "away",
         },
         {
            id: 4,
            name: "Nurse Thompson",
            avatar: "👨‍⚕️",
            lastMessage: "Shift change update",
            time: "Yesterday",
            unread: 2,
            status: "offline",
         },
      ],
      doctors: [
         {
            id: 1,
            name: "Dr. Williams",
            avatar: "👨‍⚕️",
            lastMessage: "Updated treatment plan attached",
            time: "12:05 PM",
            unread: 1,
            status: "online",
         },
         {
            id: 2,
            name: "Dr. Rodriguez",
            avatar: "👩‍⚕️",
            lastMessage: "Please review the latest lab work",
            time: "9:30 AM",
            unread: 4,
            status: "online",
         },
         {
            id: 3,
            name: "Dr. Patel",
            avatar: "👨‍⚕️",
            lastMessage: "Conference call at 3 PM today",
            time: "Yesterday",
            unread: 0,
            status: "away",
         },
         {
            id: 4,
            name: "Dr. Kim",
            avatar: "👩‍⚕️",
            lastMessage: "Patient discharge instructions",
            time: "Yesterday",
            unread: 0,
            status: "offline",
         },
      ],
   };

   // Sample chat messages for demonstration
   const [chats, setChats] = useState({
      patients: {
         1: [
            {
               id: 1,
               sender: "user",
               text: "Hello doctor, I have a question about my prescription",
               time: "10:15 AM",
            },
            {
               id: 2,
               sender: "me",
               text: "Of course, how can I help you today?",
               time: "10:20 AM",
            },
            {
               id: 3,
               sender: "user",
               text: "When should I take my medication?",
               time: "10:30 AM",
            },
         ],
      },
      nurses: {
         1: [
            {
               id: 1,
               sender: "user",
               text: "I need to reschedule my appointment",
               time: "9:15 AM",
            },
            {
               id: 2,
               sender: "me",
               text: "Of course, how can I help you today?",
               time: "9:20 AM",
            },
            {
               id: 3,
               sender: "user",
               text: "Are there any side effects?",
               time: "9:30 AM",
            },
         ],
      },
      doctors: {
         1: [
            {
               id: 1,
               sender: "user",
               text: "I need to reschedule my appointment",
               time: "9:15 AM",
            },
            {
               id: 2,
               sender: "me",
               text: "Of course, how can I help you today?",
               time: "9:20 AM",
            },
            {
               id: 3,
               sender: "user",
               text: "Are there any side effects?",
               time: "9:30 AM",
            },
         ],
      },
   });

   const handleSendMessage = () => {
      if (!message.trim() || !activeChat) return;

      const newMessage = {
         id: chats[activeUserType][activeChat]?.length + 1 || 1,
         sender: "me",
         text: message,
         time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
         }),
      };

      setChats((prevChats) => ({
         ...prevChats,
         [activeUserType]: {
            ...prevChats[activeUserType],
            [activeChat]: [
               ...(prevChats[activeUserType][activeChat] || []),
               newMessage,
            ],
         },
      }));

      setMessage("");
   };

   const handleKeyPress = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
         e.preventDefault();
         handleSendMessage();
      }
   };

   // Icons for each user type
   const userTypeIcons = {
      patients: <User className="h-6 w-6" />,
      nurses: <Activity className="h-6 w-6" />,
      doctors: <Clipboard className="h-6 w-6" />,
   };

   // Status indicators
   const statusIndicator = (status) => {
      switch (status) {
         case "online":
            return "bg-green-400";
         case "away":
            return "bg-yellow-400";
         case "offline":
            return "bg-gray-400";
         default:
            return "bg-gray-400";
      }
   };

   return (
      <div className="flex h-screen bg-gray-100">
         {/* Sidebar */}
         <div className="w-80 bg-white border-r flex flex-col overflow-hidden">
            {/* Header with logo */}
            <div
               className={`${currentScheme.primary} text-white p-4 flex items-center justify-between`}
            >
               <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6" />
                  <h1 className="text-lg font-bold">HealthChat</h1>
               </div>
               <div className="flex space-x-2">
                  <button className="p-1 rounded-full hover:bg-white hover:bg-opacity-20">
                     <Bell className="h-5 w-5" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-white hover:bg-opacity-20">
                     <Settings className="h-5 w-5" />
                  </button>
               </div>
            </div>

            {/* User type tabs */}
            <div className="flex border-b">
               {["patients", "nurses", "doctors"].map((userType) => (
                  <button
                     key={userType}
                     className={`flex-1 py-4 text-center capitalize ${activeUserType === userType
                           ? `${colorSchemes[userType].text} border-b-2 ${colorSchemes[userType].border}`
                           : "text-gray-600"
                        }`}
                     onClick={() => {
                        setActiveUserType(userType);
                        setActiveChat(null);
                     }}
                  >
                     <div className="flex flex-col items-center gap-1">
                        {userTypeIcons[userType]}
                        <span>{userType}</span>
                     </div>
                  </button>
               ))}
            </div>

            {/* Search bar */}
            <div className="p-3 border-b">
               <div className="relative">
                  <input
                     type="text"
                     placeholder="Search conversations"
                     className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
               </div>
            </div>

            {/* Chat list */}
            <div className="flex-1 overflow-y-auto">
               {userData[activeUserType].map((user) => (
                  <div
                     key={user.id}
                     className={`flex items-center p-3 border-b cursor-pointer hover:${currentScheme.hover
                        } ${activeChat === user.id ? currentScheme.active : ""}`}
                     onClick={() => setActiveChat(user.id)}
                  >
                     <div className="relative flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center text-2xl overflow-hidden">
                        <div
                           className={`absolute inset-0 ${currentScheme.light} opacity-50`}
                        ></div>
                        <span className="relative">{user.avatar}</span>
                        <div
                           className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${statusIndicator(
                              user.status
                           )}`}
                        ></div>
                     </div>
                     <div className="ml-3 flex-1">
                        <div className="flex justify-between items-baseline">
                           <h3 className="font-medium">{user.name}</h3>
                           <div className="flex items-center text-xs text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{user.time}</span>
                           </div>
                        </div>
                        <p className="text-sm text-gray-600 truncate">
                           {user.lastMessage}
                        </p>
                     </div>
                     {user.unread > 0 && (
                        <div
                           className={`ml-2 ${currentScheme.primary} text-white rounded-full h-5 w-5 flex items-center justify-center text-xs`}
                        >
                           {user.unread}
                        </div>
                     )}
                  </div>
               ))}
            </div>

            {/* Quick actions */}
            <div className="border-t p-3 bg-gray-50">
               <div className="flex justify-around">
                  <button className="p-2 rounded-full hover:bg-gray-200">
                     <Calendar className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-200">
                     <FileText className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-200">
                     <Info className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-200">
                     <Shield className="h-5 w-5 text-gray-600" />
                  </button>
               </div>
            </div>
         </div>

         {/* Chat area */}
         {activeChat ? (
            <div className="flex-1 flex flex-col">
               {/* Chat header */}
               <div
                  className={`${currentScheme.light} p-4 border-b flex items-center justify-between`}
               >
                  <div className="flex items-center">
                     <button
                        className="md:hidden mr-2"
                        onClick={() => setActiveChat(null)}
                     >
                        <ArrowLeft className="h-5 w-5" />
                     </button>
                     <div
                        className={`h-10 w-10 ${currentScheme.primary} text-white rounded-full flex items-center justify-center text-xl mr-3`}
                     >
                        {
                           userData[activeUserType].find(
                              (user) => user.id === activeChat
                           )?.avatar
                        }
                     </div>
                     <div>
                        <h2 className="font-medium">
                           {
                              userData[activeUserType].find(
                                 (user) => user.id === activeChat
                              )?.name
                           }
                        </h2>
                        <div className="flex items-center text-xs">
                           <div
                              className={`h-2 w-2 rounded-full ${statusIndicator(
                                 userData[activeUserType].find(
                                    (user) => user.id === activeChat
                                 )?.status
                              )} mr-1`}
                           ></div>
                           <p className="text-gray-500 capitalize">
                              {
                                 userData[activeUserType].find(
                                    (user) => user.id === activeChat
                                 )?.status
                              }
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center space-x-3">
                     <button
                        className={`text-gray-600 p-2 rounded-full hover:${currentScheme.hover}`}
                     >
                        <Phone className="h-5 w-5" />
                     </button>
                     <button
                        className={`text-gray-600 p-2 rounded-full hover:${currentScheme.hover}`}
                     >
                        <Video className="h-5 w-5" />
                     </button>
                     <button
                        className={`text-gray-600 p-2 rounded-full hover:${currentScheme.hover}`}
                     >
                        <Info className="h-5 w-5" />
                     </button>
                     <button
                        className={`text-gray-600 p-2 rounded-full hover:${currentScheme.hover}`}
                     >
                        <MoreVertical className="h-5 w-5" />
                     </button>
                  </div>
               </div>

               {/* Messages */}
               <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
                  <div className="space-y-4">
                     {(chats[activeUserType][activeChat] || []).map((msg) => (
                        <div
                           key={msg.id}
                           className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"
                              }`}
                        >
                           <div
                              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow-sm ${msg.sender === "me"
                                    ? `${currentScheme.primary} text-white rounded-br-none`
                                    : "bg-white text-gray-800 rounded-bl-none"
                                 }`}
                           >
                              <p>{msg.text}</p>
                              <div
                                 className={`flex items-center text-xs mt-1 ${msg.sender === "me"
                                       ? "text-white text-opacity-70"
                                       : "text-gray-500"
                                    }`}
                              >
                                 <Clock className="h-3 w-3 mr-1" />
                                 <p>{msg.time}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Message input */}
               <div className="bg-white p-4 border-t">
                  <div className="flex items-center">
                     <div className="flex space-x-2">
                        <button
                           className={`text-gray-500 p-2 rounded-full hover:${currentScheme.hover}`}
                        >
                           <Paperclip className="h-5 w-5" />
                        </button>
                        <button
                           className={`text-gray-500 p-2 rounded-full hover:${currentScheme.hover}`}
                        >
                           <FileText className="h-5 w-5" />
                        </button>
                     </div>
                     <div className="flex-1 mx-3">
                        <textarea
                           value={message}
                           onChange={(e) => setMessage(e.target.value)}
                           onKeyDown={handleKeyPress}
                           placeholder="Type a message"
                           className={`w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:${currentScheme.text} resize-none h-10`}
                        />
                     </div>
                     <button
                        className={`${currentScheme.primary} text-white rounded-full p-3 flex items-center justify-center disabled:opacity-50 shadow-md hover:shadow-lg transition-shadow`}
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                     >
                        <Send className="h-5 w-5" />
                     </button>
                  </div>
               </div>
            </div>
         ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
               <div className="text-center p-8 rounded-lg bg-white shadow-md max-w-md">
                  <div
                     className={`h-20 w-20 ${currentScheme.light} rounded-full flex items-center justify-center ${currentScheme.text} mx-auto mb-4`}
                  >
                     <MessageSquare className="h-10 w-10" />
                  </div>
                  <h2 className="text-xl font-medium text-gray-800">
                     Healthcare Communications
                  </h2>
                  <p className="text-gray-500 mt-2 mb-6">
                     Select a conversation to start messaging
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                     <div
                        className={`p-3 ${colorSchemes.patients.light} ${colorSchemes.patients.text} rounded-lg`}
                     >
                        <User className="h-6 w-6 mx-auto mb-1" />
                        <span className="text-sm">Patients</span>
                     </div>
                     <div
                        className={`p-3 ${colorSchemes.nurses.light} ${colorSchemes.nurses.text} rounded-lg`}
                     >
                        <Activity className="h-6 w-6 mx-auto mb-1" />
                        <span className="text-sm">Nurses</span>
                     </div>
                     <div
                        className={`p-3 ${colorSchemes.doctors.light} ${colorSchemes.doctors.text} rounded-lg`}
                     >
                        <Clipboard className="h-6 w-6 mx-auto mb-1" />
                        <span className="text-sm">Doctors</span>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default HealthcareChat;
