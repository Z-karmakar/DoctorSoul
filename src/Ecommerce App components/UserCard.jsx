import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

function UserCard({ user, onEdit, onSignOut, onClose, onLogin }) {
  // Check if location is empty
  const isLocationEmpty =
    !user?.location || Object.values(user.location).every((val) => val === "");

   return (
      <div className="h-full bg-white shadow-lg flex flex-col">
         {/* Header with close button */}
         <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="text-xl font-bold">User Profile</h2>
            <button
               onClick={onClose}
               className="font-extrabold text-gray-500 text-2xl hover:text-gray-900"
            >
               ✕
            </button>
         </div>

         {/* User info */}
         <div className="p-6 flex flex-col items-center border-b">
            <div className="h-24 w-24 rounded-full bg-blue-200 flex items-center justify-center mb-4">
               {user?.avatarUrl ? (
                  <img
                     src={user.avatarUrl}
                     alt="User avatar"
                     className="h-full w-full rounded-full object-cover"
                  />
               ) : (
                  <FontAwesomeIcon
                     icon={faUser}
                     size="3x"
                     className="text-blue-500"
                  />
               )}
            </div>
            <h3 className="text-xl font-semibold">
               {(user?.firstName || "Guest") + " " + (user?.lastName || "User")}
            </h3>
            <p className="text-gray-600">{user?.email || ""}</p>
         </div>

         {/* Location Section */}
         <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-3">
               <h4 className="text-lg font-semibold flex items-center">
                  <FontAwesomeIcon
                     icon={faMapMarkerAlt}
                     className="mr-2 text-blue-500"
                  />
                  Location
               </h4>
               {!isLocationEmpty && (
                  <button
                     onClick={onEdit}
                     className="text-blue-500 hover:text-blue-700 flex items-center"
                  >
                     <FontAwesomeIcon icon={faEdit} className="mr-1" />
                     Edit
                  </button>
               )}
            </div>

            {isLocationEmpty ? (
               <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md text-center">
                  <p className="text-yellow-700 mb-2">
                     <strong>Location Information Missing</strong>
                  </p>
                  <p className="text-yellow-600 text-sm mb-3">
                     Complete your profile by adding your location details for a
                     personalized experience.
                  </p>
                  <button
                     onClick={onEdit}
                     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                  >
                     Add Location
                  </button>
               </div>
            ) : (
               <div className="space-y-1">
                  <p className="text-gray-700">
                     <span className="font-medium">Address:</span>{" "}
                     {user.streetAddress || "N/A"}
                  </p>
                  <p className="text-gray-700">
                     <span className="font-medium">City:</span>{" "}
                     {user.location.city || "N/A"}
                  </p>
                  <p className="text-gray-700">
                     <span className="font-medium">State:</span>{" "}
                     {user.location.state || "N/A"}
                  </p>
                  <p className="text-gray-700">
                     <span className="font-medium">Country:</span>{" "}
                     {user.location.country || "N/A"}
                  </p>
                  <p className="text-gray-700">
                     <span className="font-medium">District:</span>{" "}
                     {user.location.district || "N/A"}
                  </p>
                  <p className="text-gray-700">
                     <span className="font-medium">Postal Code:</span>{" "}
                     {user.location.postalCode || "N/A"}
                  </p>
               </div>
            )}
         </div>

         {/* Action buttons */}
         <div className="p-6 flex flex-col gap-5">
            <button
               onClick={user?.avatarUrl ? onSignOut : onLogin}
               className={`w-full ${user?.avatarUrl
                     ? "bg-red-100 text-red-800 hover:bg-red-300"
                     : "bg-green-500 text-white hover:bg-green-600"
                  } py-2 px-4 rounded hover:cursor-pointer transition-colors`}
            >
               {user?.avatarUrl ? "Sign Out" : "Log In"}
            </button>
         </div>

         {/* Footer with additional links */}
         <div className="mt-auto p-6 border-t">
            <div className="flex flex-col gap-2 text-sm">
               <a href="#" className="text-blue-500 hover:underline">
                  Order History
               </a>
               <a href="#" className="text-blue-500 hover:underline">
                  Saved Prescriptions
               </a>
               <a href="#" className="text-blue-500 hover:underline">
                  Help & Support
               </a>
            </div>
         </div>
      </div>
   );
}

export default UserCard;
