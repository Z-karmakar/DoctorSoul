import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserCard from "./UserCard";

export default function UserIcon({ user, onSignOut, userIconRef, onEdit, onLogin }) {
   // State to control animation and visibility
   const [isAnimating, setIsAnimating] = useState(false);
   const [userCardVisible, setUserCardVisible] = useState(false);

   // Handle opening the user card with animation
   const openUserCard = () => {
      setIsAnimating(true);
      setUserCardVisible(true);
   };

   // Handle closing the user card
   const closeUserCard = () => {
      setIsAnimating(false);
      // Delay the actual hiding to allow the animation to complete
      setTimeout(() => {
         setUserCardVisible(false);
      }, 300); // Match this with your transition duration
   };

   // Set up animation class based on user card visibility
   const userCardAnimationClass = isAnimating
      ? "translate-x-0 opacity-100"
      : "translate-x-100 opacity-0";

   // Handle sign out action
   const handleSignOut = () => {
      onSignOut();
   };

   // Handle login action
   const handleLogin = (loginDetails) => {
      onLogin(loginDetails);
   };

   return (
      <div className="container mx-auto px-4 py-8">
         {/* User icon in header */}
         <div className="fixed top-4 right-30 z-50 hover:scale-110 transition-all duration-100 ease-in-out">
            <button
               ref={userIconRef}
               className="bg-sky-400 flex justify-center items-center text-black text-2xl size-12 p-1 hover:cursor-pointer rounded-full shadow-lg relative"
               onClick={openUserCard}
            >
               <FontAwesomeIcon icon={faUser} />
               {user && user.notifications > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                     {user.notifications}
                  </span>
               )}
            </button>
         </div>

         {/* Always render the user card but control its visibility with CSS */}
         <div
            className={`fixed top-0 right-0 h-full z-100 transform transition-all duration-300 ease-in-out ${userCardAnimationClass}`}
            style={{
               width: "520px",
               visibility: userCardVisible ? "visible" : "hidden",
            }}
         >
            {userCardVisible && (
               <UserCard
                  user={user}
                  onEdit={onEdit}
                  onSignOut={handleSignOut}
                  onClose={closeUserCard}
                  onLogin={handleLogin}
               />
            )}
         </div>

         {/* Overlay background that fades in/out */}
         {userCardVisible && (
            <div
               className={`fixed inset-0 z-45 bg-black transition-opacity duration-300 ease-in-out ${isAnimating ? "opacity-50" : "opacity-0"
                  }`}
               onClick={closeUserCard}
            ></div>
         )}
      </div>
   );
}


