import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


// User Card Component
function UserCard({ user, onEdit, onSignOut, onClose }) {
   return (
      <div className="h-full bg-white shadow-lg flex flex-col">
         {/* Header with close button */}
         <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">User Profile</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
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
            <h3 className="text-xl font-semibold">{user?.name || "Guest User"}</h3>
            <p className="text-gray-600">{user?.email || ""}</p>
         </div>

         {/* Action buttons */}
         <div className="p-6 flex flex-col gap-3">
            <button
               onClick={onEdit}
               className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
               Edit Profile
            </button>
            <button
               onClick={onSignOut}
               className="w-full bg-red-100 text-red-700 py-2 px-4 rounded hover:bg-red-200 transition-colors"
            >
               Sign Out
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
