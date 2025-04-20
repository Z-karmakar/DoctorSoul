import React, { useState } from "react";


const WorkerRegistrationPage = () => {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      phoneNumber: "",
      address: "",
      driverLicenseNumber: "",
      driverLicenseExpiry: "",
      vehicleType: "",
      vehicleModel: "",
      vehicleLicensePlate: "",
      deliveryExperience: "",
      availabilityHours: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      backgroundCheckConsent: false,
      agreeToTerms: false,
      receiveUpdates: false,
   });

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
         ...formData,
         [name]: type === "checkbox" ? checked : value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Handle registration logic here
      console.log(formData);
   };

   return (
      <div className="min-h-screen bg-amber-50 py-5 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md mx-auto">
            <div className="text-center">
               <svg
                  className="h-12 w-auto mx-auto text-amber-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
               >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
               </svg>
               <h2 className="mt-6 text-3xl font-bold tracking-tight text-amber-900">
                  Delivery Driver Registration
               </h2>
               <p className="mt-2 text-sm text-amber-600">
                  Join our team to deliver medications to patients
               </p>
            </div>

            <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
               <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Personal Information Section */}
                  <h3 className="text-lg font-medium text-amber-900">
                     Personal Information
                  </h3>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                     <div>
                        <label
                           htmlFor="firstName"
                           className="block text-sm font-medium text-amber-700"
                        >
                           First Name*
                        </label>
                        <input
                           type="text"
                           name="firstName"
                           id="firstName"
                           required
                           value={formData.firstName}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        />
                     </div>

                     <div>
                        <label
                           htmlFor="lastName"
                           className="block text-sm font-medium text-amber-700"
                        >
                           Last Name*
                        </label>
                        <input
                           type="text"
                           name="lastName"
                           id="lastName"
                           required
                           value={formData.lastName}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        />
                     </div>
                  </div>

                  <div>
                     <label
                        htmlFor="email"
                        className="block text-sm font-medium text-amber-700"
                     >
                        Email Address*
                     </label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                     />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                     <div>
                        <label
                           htmlFor="password"
                           className="block text-sm font-medium text-amber-700"
                        >
                           Password*
                        </label>
                        <input
                           type="password"
                           name="password"
                           id="password"
                           required
                           value={formData.password}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        />
                        <p className="mt-1 text-xs text-amber-500">
                           Must be at least 8 characters with letters and numbers
                        </p>
                     </div>

                     <div>
                        <label
                           htmlFor="confirmPassword"
                           className="block text-sm font-medium text-amber-700"
                        >
                           Confirm Password*
                        </label>
                        <input
                           type="password"
                           name="confirmPassword"
                           id="confirmPassword"
                           required
                           value={formData.confirmPassword}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                     <div>
                        <label
                           htmlFor="dateOfBirth"
                           className="block text-sm font-medium text-amber-700"
                        >
                           Date of Birth*
                        </label>
                        <input
                           type="date"
                           name="dateOfBirth"
                           id="dateOfBirth"
                           required
                           value={formData.dateOfBirth}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        />
                     </div>

                     <div>
                        <label
                           htmlFor="phoneNumber"
                           className="block text-sm font-medium text-amber-700"
                        >
                           Phone Number*
                        </label>
                        <input
                           type="tel"
                           name="phoneNumber"
                           id="phoneNumber"
                           required
                           value={formData.phoneNumber}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        />
                     </div>
                  </div>

                  <div>
                     <label
                        htmlFor="address"
                        className="block text-sm font-medium text-amber-700"
                     >
                        Residential Address*
                     </label>
                     <input
                        type="text"
                        name="address"
                        id="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        placeholder="Street Address, City, State, ZIP"
                     />
                  </div>

                  {/* Driver Information Section */}
                  <h3 className="text-lg font-medium text-amber-900 pt-4">
                     Driver Information
                  </h3>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                     <div>
                        <label
                           htmlFor="driverLicenseNumber"
                           className="block text-sm font-medium text-amber-700"
                        >
                           Driver's License Number*
                        </label>
                        <input
                           type="text"
                           name="driverLicenseNumber"
                           id="driverLicenseNumber"
                           required
                           value={formData.driverLicenseNumber}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        />
                     </div>

                     <div>
                        <label
                           htmlFor="driverLicenseExpiry"
                           className="block text-sm font-medium text-amber-700"
                        >
                           License Expiry Date*
                        </label>
                        <input
                           type="date"
                           name="driverLicenseExpiry"
                           id="driverLicenseExpiry"
                           required
                           value={formData.driverLicenseExpiry}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        />
                     </div>
                  </div>

                  {/* Vehicle Information Section */}
                  <h3 className="text-lg font-medium text-amber-900 pt-4">
                     Vehicle Information
                  </h3>

                  <div>
                     <label
                        htmlFor="vehicleType"
                        className="block text-sm font-medium text-amber-700"
                     >
                        Vehicle Type*
                     </label>
                     <select
                        name="vehicleType"
                        id="vehicleType"
                        required
                        value={formData.vehicleType}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                     >
                        <option value="">Select vehicle type</option>
                        <option value="car">Car</option>
                        <option value="motorcycle">Motorcycle</option>
                        <option value="bicycle">Bicycle</option>
                        <option value="scooter">Scooter</option>
                        <option value="van">Van</option>
                     </select>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                     <div>
                        <label
                           htmlFor="vehicleModel"
                           className="block text-sm font-medium text-amber-700"
                        >
                           Vehicle Make/Model*
                        </label>
                        <input
                           type="text"
                           name="vehicleModel"
                           id="vehicleModel"
                           required
                           value={formData.vehicleModel}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                           placeholder="Toyota Corolla, Honda CBR, etc."
                        />
                     </div>

                     <div>
                        <label
                           htmlFor="vehicleLicensePlate"
                           className="block text-sm font-medium text-amber-700"
                        >
                           License Plate Number*
                        </label>
                        <input
                           type="text"
                           name="vehicleLicensePlate"
                           id="vehicleLicensePlate"
                           required
                           value={formData.vehicleLicensePlate}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        />
                     </div>
                  </div>

                  {/* Work Information Section */}
                  <h3 className="text-lg font-medium text-amber-900 pt-4">
                     Work Information
                  </h3>

                  <div>
                     <label
                        htmlFor="deliveryExperience"
                        className="block text-sm font-medium text-amber-700"
                     >
                        Delivery Experience
                     </label>
                     <textarea
                        name="deliveryExperience"
                        id="deliveryExperience"
                        rows="2"
                        value={formData.deliveryExperience}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        placeholder="Describe any previous delivery or driving experience"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="availabilityHours"
                        className="block text-sm font-medium text-amber-700"
                     >
                        Availability Hours*
                     </label>
                     <textarea
                        name="availabilityHours"
                        id="availabilityHours"
                        rows="2"
                        required
                        value={formData.availabilityHours}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        placeholder="Specify days and hours you're available to work (e.g., Mon-Fri 9AM-5PM, Weekends 10AM-3PM)"
                     />
                  </div>

                  {/* Emergency Contact */}
                  <h3 className="text-lg font-medium text-amber-900 pt-4">
                     Emergency Contact
                  </h3>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                     <div>
                        <label
                           htmlFor="emergencyContactName"
                           className="block text-sm font-medium text-amber-700"
                        >
                           Emergency Contact Name*
                        </label>
                        <input
                           type="text"
                           name="emergencyContactName"
                           id="emergencyContactName"
                           required
                           value={formData.emergencyContactName}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        />
                     </div>

                     <div>
                        <label
                           htmlFor="emergencyContactPhone"
                           className="block text-sm font-medium text-amber-700"
                        >
                           Emergency Contact Phone*
                        </label>
                        <input
                           type="tel"
                           name="emergencyContactPhone"
                           id="emergencyContactPhone"
                           required
                           value={formData.emergencyContactPhone}
                           onChange={handleChange}
                           className="mt-1 block w-full rounded-md border border-amber-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        />
                     </div>
                  </div>

                  {/* Terms and Consent */}
                  <div className="space-y-4 pt-4">
                     <div className="flex items-start">
                        <div className="flex items-center h-5">
                           <input
                              id="backgroundCheckConsent"
                              name="backgroundCheckConsent"
                              type="checkbox"
                              required
                              checked={formData.backgroundCheckConsent}
                              onChange={handleChange}
                              className="h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                           />
                        </div>
                        <div className="ml-3 text-sm">
                           <label
                              htmlFor="backgroundCheckConsent"
                              className="font-medium text-amber-700"
                           >
                              I consent to a background check and driving record
                              verification*
                           </label>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="flex items-center h-5">
                           <input
                              id="agreeToTerms"
                              name="agreeToTerms"
                              type="checkbox"
                              required
                              checked={formData.agreeToTerms}
                              onChange={handleChange}
                              className="h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                           />
                        </div>
                        <div className="ml-3 text-sm">
                           <label
                              htmlFor="agreeToTerms"
                              className="font-medium text-amber-700"
                           >
                              I agree to the{" "}
                              <a href="#" className="text-amber-600 hover:text-amber-500">
                                 Terms of Service
                              </a>{" "}
                              and{" "}
                              <a href="#" className="text-amber-600 hover:text-amber-500">
                                 Privacy Policy
                              </a>
                              *
                           </label>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="flex items-center h-5">
                           <input
                              id="receiveUpdates"
                              name="receiveUpdates"
                              type="checkbox"
                              checked={formData.receiveUpdates}
                              onChange={handleChange}
                              className="h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                           />
                        </div>
                        <div className="ml-3 text-sm">
                           <label
                              htmlFor="receiveUpdates"
                              className="font-medium text-amber-700"
                           >
                              I would like to receive delivery notifications, schedule
                              updates, and opportunities
                           </label>
                        </div>
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                     >
                        Register as Delivery Driver
                     </button>
                  </div>
               </form>

               <div className="mt-6 text-center">
                  <div className="text-sm">
                     <p className="text-amber-600">
                        Already registered?{" "}
                        <a
                           href="#"
                           className="font-medium text-amber-600 hover:text-amber-500"
                        >
                           Sign in here
                        </a>
                     </p>
                  </div>
               </div>
            </div>

            <div className="mt-6 text-center text-xs text-amber-500">
               <p>Fields marked with * are required</p>
               <p className="mt-2">
                  Need help? Contact driver support at 1-800-MEDICINE-DELIVERY
               </p>
            </div>
         </div>
      </div>
   );
};

export default WorkerRegistrationPage;
