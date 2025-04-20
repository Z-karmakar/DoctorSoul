import React, { useState, useEffect } from "react";
import defaultAvatar from "../Ecommerce App assets/imageU.png";
const OPEN_CAGE_API_KEY = import.meta.env.VITE_OPEN_CAGE_API_KEY;

const MedicineEcommerceLogin = ({
   trigger,
   loginDetails,
   onClose,
   defaultUser,
}) => {
   const [showLoginModal, setShowLoginModal] = useState(trigger);
   const [firstName, setFirstName] = useState(defaultUser.firstName);
   const [lastName, setLastName] = useState(defaultUser.lastName);
   const [email, setEmail] = useState(defaultUser.email);
   const [streetAddress, setStreetAddress] = useState("");
   const [location, setLocation] = useState({
      city: "",
      district: "",
      state: "",
      postalCode: "",
      country: "",
   });
   const [isLoading, setIsLoading] = useState(false);

   const resetForm = () => {
      // Reset all state values to their initial state
      setFirstName("");
      setLastName("");
      setEmail("");
      setStreetAddress("");
      setLocation({
         city: "",
         district: "",
         state: "",
         postalCode: "",
         country: "",
      });
   };

   useEffect(() => {
      setShowLoginModal(trigger);
      // if (trigger) resetForm();
   }, [trigger]);

   const toggleLoginModal = () => {
      setShowLoginModal(!showLoginModal);
      onClose();
      resetForm();
   };

   const handleLocationDetection = () => {
      setIsLoading(true);
      if ("geolocation" in navigator) {
         navigator.geolocation.getCurrentPosition(
            async (position) => {
               const { latitude, longitude } = position.coords;
               try {
                  // Using OpenCage Geocoding API (Note: In a real app, you'd use a backend service)
                  const response = await fetch(
                     `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPEN_CAGE_API_KEY}`
                  );
                  const data = await response.json();

                  if (data.results && data.results.length > 0) {
                     const locationComponents = data.results[0].components;
                     setLocation({
                        city:
                           locationComponents.city ||
                           locationComponents.town ||
                           locationComponents.village ||
                           locationComponents.county ||
                           "",
                        district: locationComponents.state_district || "",
                        state: locationComponents.state || "",
                        postalCode: locationComponents.postcode || "",
                        country: locationComponents.country || "",
                     });
                  }
               } catch (error) {
                  console.error("Error fetching location details:", error);
                  alert("Could not retrieve location details.");
               } finally {
                  setIsLoading(false);
               }
            },
            (error) => {
               console.error("Geolocation error:", error);
               alert("Could not retrieve location. Please enter manually.");
               setIsLoading(false);
            }
         );
      } else {
         alert("Geolocation is not supported by your browser.");
         setIsLoading(false);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // Reset form fields
      const fields = [
         "firstName",
         "lastName",
         "email",
         "streetAddress",
         "city",
         "district",
         "state",
         "postalCode",
         "country",
      ];
      fields.forEach((field) => {
         const element = document.getElementById(field);
         if (element) element.value = "";
      });

      // Prepare login details with a consistent structure
      const userDetails = {
         firstName: firstName,
         lastName: lastName,
         email: email,
         streetAddress: streetAddress, // Change this to match the Order component's expectation
         location: {
            city: location.city,
            district: location.district,
            state: location.state,
            postalCode: location.postalCode,
            country: location.country,
         },
         avatarUrl: defaultAvatar,
         notifications: 2,
      };

      loginDetails(userDetails);

      setShowLoginModal(false);
      onClose();
      resetForm();
   };

   return (
      <>
         {showLoginModal && (
            <div className="fixed w-full h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-100">
               <div className="bg-gray-900 rounded-lg shadow-xl w-1/2 p-6 m-4">
                  <div className="flex justify-between items-center mb-4">
                     <h2 className="text-2xl font-bold text-gray-50">
                        Your Account
                     </h2>
                     <button
                        onClick={toggleLoginModal}
                        className="text-gray-500 hover:text-gray-700"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-6 w-6"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                           />
                        </svg>
                     </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                     <div className="flex space-x-4">
                        <div className="w-1/2">
                           <label
                              htmlFor="firstName"
                              className="block text-md font-medium text-gray-300 mb-1"
                           >
                              First Name
                           </label>
                           <input
                              id="firstName"
                              type="text"
                              placeholder="Enter first name"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              className="w-full px-3 py-2 text-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                              required
                           />
                        </div>
                        <div className="w-1/2">
                           <label
                              htmlFor="lastName"
                              className="block text-md font-medium text-gray-300 mb-1"
                           >
                              Last Name
                           </label>
                           <input
                              id="lastName"
                              type="text"
                              placeholder="Enter last name"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              className="w-full px-3 py-2 text-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                              required
                           />
                        </div>
                     </div>

                     <div>
                        <label
                           htmlFor="email"
                           className="block text-md font-medium text-gray-300 mb-1"
                        >
                           Email
                        </label>
                        <input
                           id="email"
                           type="email"
                           placeholder="Enter your email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-full px-3 py-2 text-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                           required
                        />
                     </div>

                     <div>
                        <label
                           htmlFor="streetAddress"
                           className="block text-md font-medium text-gray-300 mb-1"
                        >
                           Street Address
                        </label>
                        <input
                           id="streetAddress"
                           type="text"
                           placeholder="Enter your street address"
                           value={streetAddress}
                           onChange={(e) => setStreetAddress(e.target.value)}
                           className="w-full px-3 py-2 text-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                           required
                        />
                     </div>

                     <div className="flex space-x-4">
                        <div className="w-1/2">
                           <label
                              htmlFor="city"
                              className="block text-md font-medium text-gray-300 mb-1"
                           >
                              City
                           </label>
                           <input
                              id="city"
                              type="text"
                              placeholder="Enter city"
                              value={location.city}
                              onChange={(e) =>
                                 setLocation((prev) => ({ ...prev, city: e.target.value }))
                              }
                              className="w-full px-3 py-2 text-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                           />
                        </div>
                        <div className="w-1/2">
                           <label
                              htmlFor="district"
                              className="block text-md font-medium text-gray-300 mb-1"
                           >
                              District
                           </label>
                           <input
                              id="district"
                              type="text"
                              placeholder="Enter district"
                              value={location.district}
                              onChange={(e) =>
                                 setLocation((prev) => ({
                                    ...prev,
                                    district: e.target.value,
                                 }))
                              }
                              className="w-full px-3 py-2 text-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                           />
                        </div>
                     </div>

                     <div className="flex space-x-4">
                        <div className="w-1/2">
                           <label
                              htmlFor="state"
                              className="block text-md font-medium text-gray-300 mb-1"
                           >
                              State
                           </label>
                           <input
                              id="state"
                              type="text"
                              placeholder="Enter state"
                              value={location.state}
                              onChange={(e) =>
                                 setLocation((prev) => ({
                                    ...prev,
                                    state: e.target.value,
                                 }))
                              }
                              className="w-full px-3 py-2 text-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                           />
                        </div>
                        <div className="w-1/2">
                           <label
                              htmlFor="postalCode"
                              className="block text-md font-medium text-gray-300 mb-1"
                           >
                              Postal Code
                           </label>
                           <input
                              id="postalCode"
                              type="text"
                              placeholder="Enter postal code"
                              value={location.postalCode}
                              onChange={(e) =>
                                 setLocation((prev) => ({
                                    ...prev,
                                    postalCode: e.target.value,
                                 }))
                              }
                              className="w-full px-3 py-2 text-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                           />
                        </div>
                     </div>

                     <div>
                        <label
                           htmlFor="country"
                           className="block text-md font-medium text-gray-300 mb-1"
                        >
                           Country
                        </label>
                        <input
                           id="country"
                           type="text"
                           placeholder="Enter country"
                           value={location.country}
                           onChange={(e) =>
                              setLocation((prev) => ({
                                 ...prev,
                                 country: e.target.value,
                              }))
                           }
                           className="w-full px-3 py-2 text-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                     </div>

                     <div className="pt-2">
                        <button
                           type="button"
                           onClick={handleLocationDetection}
                           disabled={isLoading}
                           className="w-full bg-blue-600 hover:bg-blue-800 tracking-widest text-white py-2 rounded-md transition-colors font-medium hover:cursor-pointer mb-2"
                        >
                           {isLoading
                              ? "Detecting Location..."
                              : "Use My Current Location"}
                        </button>
                        <button
                           type="submit"
                           className="w-full bg-green-600 hover:bg-green-800 tracking-widest text-white py-2 rounded-md transition-colors font-medium hover:cursor-pointer"
                        >
                           Update Account
                        </button>
                     </div>

                     {/* <div className="text-center text-sm text-white">
                        <p>
                           Already have an account?{" "}
                           <a href="#" className="text-green-600 hover:underline">
                              Log in
                           </a>
                        </p>
                     </div> */}
                  </form>
               </div>
            </div>
         )}
      </>
   );
};

export default MedicineEcommerceLogin;
