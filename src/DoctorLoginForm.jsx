import React, { useState } from "react";
import {
   User,
   Lock,
   Mail,
   Eye,
   EyeOff,
   LogIn,
   AlertCircle,
   Stethoscope,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {supabase} from "./supabaseClient";

const DoctorLoginForm = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [medicalLicenseId, setMedicalLicenseId] = useState("");
   const [rememberMe, setRememberMe] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError("");

      try {
         // Attempt to sign in the user with Supabase
         const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
         });

         if (error) {
            console.error("Login error:", error.message);
            setError("Invalid email or password. Please try again.");
            setIsSubmitting(false);
            return;
         }
         navigate("/DoctorDashboard"); // Redirect to the dashboard after successful login
      } catch (err) {
         console.error("Unexpected error:", err);
         setError("An unexpected error occurred. Please try again.");
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div className="w-full max-w-md mx-auto py-5 bg-white rounded-lg shadow-lg overflow-hidden">
         <div className="bg-green-600 py-4">
            <h2 className="text-center text-white text-2xl font-bold">
               Doctor Portal
            </h2>
         </div>

         <div className="px-6 py-8">
            <div className="flex justify-center mb-6">
               <div className="bg-green-100 p-3 rounded-full">
                  <Stethoscope size={32} className="text-green-600" />
               </div>
            </div>

            <h3 className="text-center text-xl font-semibold text-gray-800 mb-1">
               Welcome, Doctor
            </h3>
            <p className="text-center text-gray-600 mb-6">
               Sign in to access your clinical dashboard
            </p>

            {error && (
               <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded flex items-center text-red-600">
                  <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
               </div>
            )}

            <form onSubmit={handleSubmit}>
               <div className="mb-4">
                  <label
                     htmlFor="email"
                     className="block text-sm font-medium text-gray-700 mb-1"
                  >
                     Email Address
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                     </div>
                     <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                        placeholder="doctor@hospital.com"
                        required
                     />
                  </div>
               </div>

               <div className="mb-4">
                  <label
                     htmlFor="medicalLicenseId"
                     className="block text-sm font-medium text-gray-700 mb-1"
                  >
                     Medical License ID
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                     </div>
                     <input
                        id="medicalLicenseId"
                        type="text"
                        value={medicalLicenseId}
                        onChange={(e) => setMedicalLicenseId(e.target.value)}
                        className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                        placeholder="ML123456789"
                        required
                     />
                  </div>
               </div>

               <div className="mb-6">
                  <label
                     htmlFor="password"
                     className="block text-sm font-medium text-gray-700 mb-1"
                  >
                     Password
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={18} className="text-gray-400" />
                     </div>
                     <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

               <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                     <input
                        id="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                     />
                     <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-700"
                     >
                        Remember me
                     </label>
                  </div>

                  <div className="text-sm">
                     <a
                        href="#"
                        className="font-medium text-green-600 hover:text-green-500"
                     >
                        Forgot password?
                     </a>
                  </div>
               </div>

               <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-75"
               >
                  {isSubmitting ? (
                     <span>Signing in...</span>
                  ) : (
                     <>
                        <LogIn size={18} />
                        <span>Sign in</span>
                     </>
                  )}
               </button>
            </form>
         </div>

         <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-center text-sm text-gray-600">
               Don't have an account?{" "}
               <button
                  onClick={() => navigate("/CreateDoctor")}
                  className="font-medium text-green-600 hover:text-green-500"
               >
                  Register Now
               </button>
            </p>
         </div>
      </div>
   );
};

export default DoctorLoginForm;
