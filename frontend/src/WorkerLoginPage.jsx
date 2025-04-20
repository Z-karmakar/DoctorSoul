import React, { useState } from "react";
import {
  User,
  Lock,
  Mail,
  Eye,
  EyeOff,
  LogIn,
  AlertCircle,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkerLoginPage = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [rememberMe, setRememberMe] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [error, setError] = useState("");
   const navigate = useNavigate();
   const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError("");

      // Simulate form submission
      setTimeout(() => {
         console.log({ email, password, rememberMe });
         setIsSubmitting(false);
         // For demo purposes, show error if email doesn't contain @
         if (!email.includes("@")) {
            setError("Please enter a valid email address");
         }
      }, 1000);
   };

   return (
      <div className="w-full max-w-md mx-auto py-5 bg-white rounded-lg shadow-lg overflow-hidden">
         <div className="bg-amber-600 py-4">
            <h2 className="text-center text-white text-2xl font-bold">
               Delivery Driver Portal
            </h2>
         </div>

         <div className="px-6 py-8">
            <div className="flex justify-center mb-6">
               <div className="bg-amber-100 p-3 rounded-full">
                  <Truck size={32} className="text-amber-600" />
               </div>
            </div>

            <h3 className="text-center text-xl font-semibold text-gray-800 mb-1">
               Welcome Back
            </h3>
            <p className="text-center text-gray-600 mb-6">
               Sign in to access your delivery dashboard
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
                        className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                        placeholder="driver@example.com"
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
                        className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500"
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
                        className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
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
                        className="font-medium text-amber-600 hover:text-amber-500"
                     >
                        Forgot password?
                     </a>
                  </div>
               </div>

               <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-75"
                  onClick={() => navigate('/Driver')}
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

               {/* <div className="mt-6">
                  <div className="relative">
                     <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                     </div>
                     <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">
                           Or continue with
                        </span>
                     </div>
                  
                  <div className="mt-6">
                     <button
                        type="button"
                        className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                     >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                           <path
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              fill="#4285F4"
                           />
                           <path
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              fill="#34A853"
                           />
                           <path
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              fill="#FBBC05"
                           />
                           <path
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              fill="#EA4335"
                           />
                        </svg>
                        <span>Sign in with Google</span>
                     </button>
                  </div>
               </div> */}
            </form>
         </div>

         <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-center text-sm text-gray-600">
               Don't have an account?{' '}
               <button
                  onClick={() => navigate('/WorkerRegister')}
                  className="font-medium text-amber-600 hover:text-amber-500"
                  >
                  Register as a driver
               </button>
            </p>
         </div>
      </div>
   );
};

export default WorkerLoginPage;
