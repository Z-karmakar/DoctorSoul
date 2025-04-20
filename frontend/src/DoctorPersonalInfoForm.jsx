import { useRef, useState, useEffect } from "react";
import {
   User,
   Camera,
   Mail,
   Phone,
   Calendar,
   MapPin,
   Building,
   ChevronRight,
   Navigation,
   Search,
   Lock,
   Eye,
   EyeOff,
} from "lucide-react";
const OPEN_CAGE_API_KEY = import.meta.env.VITE_OPEN_CAGE_API_KEY;

const DoctorPersonalInfoForm = ({ formData, handleChange, handleSubmit }) => {
   const fileInputRef = useRef(null);
   const addressInputRef = useRef(null);
   const [isLocating, setIsLocating] = useState(false);
   const [locationError, setLocationError] = useState(null);
   const [showPassword, setShowPassword] = useState(false);
   const [location, setLocation] = useState({
      address: formData.address || "",
      city: formData.city || "",
      district: formData.district || "",
      password: formData.password||"",
      dateOfBirth:formData.dateOfBirth||"",
      state: formData.state || "",
      postalCode: formData.postalCode || "",
      country: formData.country || "",
   });
   const [autocompleteLoaded, setAutocompleteLoaded] = useState(false);

   const handleLocationDetection = () => {
      setIsLocating(true);
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

                     // Update your location state to match your form structure
                     // This assumes your forms have a similar location state structure
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
                  setIsLocating(false);
               }
            },
            (error) => {
               console.error("Geolocation error:", error);
               alert("Could not retrieve location. Please enter manually.");
               setIsLocating(false);
            }
         );
      } else {
         alert("Geolocation is not supported by your browser.");
         setIsLocating(false);
      }
   };


   return (
      <div className="bg-white shadow-lg rounded-lg p-8 mb-10 border border-green-100">
         <h2 className="text-xl font-semibold text-gray-800 mb-8 flex items-center">
            <User className="mr-2 text-green-600" />
            Personal Information
         </h2>

         <form onSubmit={handleSubmit}>
            {/* Profile Photo Upload Section */}
            <div className="flex flex-col items-center justify-center mb-8">
               <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center border-2 border-green-200 overflow-hidden relative mb-3">
                  {formData.profilePhotoPreview ? (
                     <img
                        src={formData.profilePhotoPreview}
                        alt="Profile preview"
                        className="w-full h-full object-cover"
                     />
                  ) : (
                     <Camera className="h-12 w-12 text-green-300" />
                  )}
               </div>

               <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="px-4 py-2 bg-green-50 text-green-600 rounded-md flex items-center hover:bg-green-100 transition-colors"
               >
                  <Camera className="h-4 w-4 mr-2" />
                  {formData.profilePhoto ? "Change Photo" : "Upload Photo"}
               </button>

               <input
                  ref={fileInputRef}
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  onChange={handleChange}
                  accept="image/*"
                  className="hidden"
               />

               {formData.profilePhoto && (
                  <span className="text-sm text-gray-500 mt-2">
                     {formData.profilePhoto.name}
                  </span>
               )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label
                     htmlFor="firstName"
                     className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                     <User className="h-4 w-4 mr-1 text-green-500" />
                     First Name*
                  </label>
                  <input
                     type="text"
                     id="firstName"
                     name="firstName"
                     value={formData.firstName || ""}
                     onChange={handleChange}
                     required
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                     placeholder="Enter your first name"
                  />
               </div>

               <div>
                  <label
                     htmlFor="lastName"
                     className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                     <User className="h-4 w-4 mr-1 text-green-500" />
                     Last Name*
                  </label>
                  <input
                     type="text"
                     id="lastName"
                     name="lastName"
                     value={formData.lastName || ""}
                     onChange={handleChange}
                     required
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                     placeholder="Enter your last name"
                  />
               </div>

               <div>
                  <label
                     htmlFor="email"
                     className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                     <Mail className="h-4 w-4 mr-1 text-green-500" />
                     Email Address*
                  </label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email || ""}
                     onChange={handleChange}
                     required
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                     placeholder="doctor@example.com"
                  />
               </div>
               <div className="mb-6">
                  <label
                     htmlFor="password"
                     className="block text-sm font-medium text-gray-700 mb-1"
                  >
                     Password*
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={18} className="text-gray-400" />
                     </div>
                     <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password || ""}
                        onChange={handleChange}
                        className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                        required
                     />
                     <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                     >
                        {showPassword ? (
                           <EyeOff size={18} className="text-gray-400" />
                        ) : (
                           <Eye size={18} className="text-gray-400" />
                        )}
                     </button>
                  </div>
               </div>
               <div>
                  <label
                     htmlFor="phone"
                     className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                     <Phone className="h-4 w-4 mr-1 text-green-500" />
                     Phone Number*
                  </label>
                  <input
                     type="tel"
                     id="phone"
                     name="phone"
                     value={formData.phone || ""}
                     onChange={handleChange}
                     required
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                     placeholder="(555) 123-4567"
                  />
               </div>

               <div>
                  <label
                     htmlFor="dateOfBirth"
                     className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                     <Calendar className="h-4 w-4 mr-1 text-green-500" />
                     Date of Birth*
                  </label>
                  <input
                     type="date"
                     id="dateOfBirth"
                     name="dateOfBirth"
                     value={formData.dateOfBirth || ""}
                     onChange={handleChange}
                     required
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                  />
               </div>
               <div>
                  <label
                     htmlFor="gender"
                     className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                     <User className="h-4 w-4 mr-1 text-green-500" />
                     Gender*
                  </label>
                  <select
                     id="gender"
                     name="gender"
                     value={formData.gender || ""}
                     onChange={handleChange}
                     required
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                  >
                     <option value="">Select Gender</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="other">Other</option>
                     <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
               </div>

               <div className="md:col-span-2">
                  <label
                     htmlFor="address"
                     className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                     <MapPin className="h-4 w-4 mr-1 text-green-500" />
                     Address*
                  </label>
                  <div className="flex relative">
                     <div className="relative flex-grow">
                        <input
                           ref={addressInputRef}
                           type="text"
                           id="address"
                           name="address"
                           value={formData.address}
                           onChange={handleChange}
                           required
                           className="w-full px-3 py-2 pl-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                           placeholder="Start typing your address..."
                        />
                        <Search className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                     </div>
                     <button
                        type="button"
                        onClick={handleLocationDetection}
                        disabled={isLocating}
                        className="ml-2 px-3 py-2 bg-green-50 text-green-600 rounded-md flex items-center hover:bg-green-100 transition-colors whitespace-nowrap"
                     >
                        <Navigation className="h-4 w-4 mr-2" />
                        {isLocating ? "Locating..." : "Use Current Location"}
                     </button>
                  </div>
                  {!autocompleteLoaded && (
                     <p className="text-sm text-gray-500 mt-1">
                        Loading address autocomplete...
                     </p>
                  )}
                  {locationError && (
                     <p className="text-red-500 text-sm mt-1">{locationError}</p>
                  )}
               </div>

               <div>
                  <label
                     htmlFor="city"
                     className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                     <Building className="h-4 w-4 mr-1 text-green-500" />
                     City*
                  </label>
                  <input
                     type="text"
                     id="city"
                     name="city"
                     value={location.city || ""}
                     onChange={handleChange}
                     required
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                     placeholder="City"
                  />
               </div>

               <div>
                  <label
                     htmlFor="state"
                     className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                     <MapPin className="h-4 w-4 mr-1 text-green-500" />
                     State/Province*
                  </label>
                  <input
                     type="text"
                     id="state"
                     name="state"
                     value={location.state || ""}
                     onChange={handleChange}
                     required
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                     placeholder="State/Province"
                  />
               </div>

               <div>
                  <label
                     htmlFor="zipCode"
                     className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                     <MapPin className="h-4 w-4 mr-1 text-green-500" />
                     ZIP/Postal Code*
                  </label>
                  <input
                     type="text"
                     id="zipCode"
                     name="zipCode"
                     value={location.postalCode || ""}
                     onChange={handleChange}
                     required
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                     placeholder="ZIP/Postal code"
                  />
               </div>

               <div>
                  <label
                     htmlFor="district"
                     className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                     <MapPin className="h-4 w-4 mr-1 text-green-500" />
                     District*
                  </label>
                  <input
                     type="text"
                     id="district"
                     name="district"
                     value={location.district || ""}
                     onChange={handleChange}
                     required
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                     placeholder="District"
                  />
               </div>
            </div>

            <div className="mt-8 flex justify-end">
               <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-md transition-colors flex items-center"
               >
                  Continue to Professional Information
                  <ChevronRight className="ml-2 h-5 w-5" />
               </button>
            </div>
         </form>
      </div>
   );

};

export default DoctorPersonalInfoForm;
