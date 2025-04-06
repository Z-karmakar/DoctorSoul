import React from 'react'
import { Stethoscope } from 'lucide-react'
import Logo from '../Chatbot Assets/Logo.svg';

export default function Header() {
   return (
      <header className="flex flex-col items-center justify-center w-full max-h-1/5">
         <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center fixed top-0 w-full py-3 bg-blue-900">
               <div className="flex items-center gap-2 ml-20">
                  <div className="size-10 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                     <img src={Logo} alt="Logo" className="w-full h-full" />
                  </div>
                  <div className=" text-gray-200 text-2xl font-bold">
                     DoctorSoul+
                  </div>
               </div>
               <div className="flex items-center gap-2 ml-56">
               <Stethoscope className="mr-4 text-white" size={50} />
               <h1 className="text-3xl font-bold text-white tracking-tight leading-tight">
                  Advanced Medical Assistant
               </h1>
               </div>
            </div>
            <p className="text-xl capitalize mt-24 text-gray-700 text-center w-9/10 leading-relaxed">
               Empowering your health journey with AI-driven insights and
               personalized assistance. Secure, reliable, and designed to support
               you every step of the way.
            </p>
            <div className="mt-2 flex space-x-4">
               <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                  AI-Powered
               </span>
               <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                  HIPAA Compliant
               </span>
               <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-800">
                  Secure & Private
               </span>
            </div>
         </div>
      </header>
   );
}
