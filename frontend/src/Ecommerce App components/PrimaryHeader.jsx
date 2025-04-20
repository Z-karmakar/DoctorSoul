import React, { useState } from 'react'
import { Search } from "lucide-react";
import Logo from '../Ecommerce App assets/Logo.svg';


export default function PrimaryHeader() {
   const [navLinks] = useState([
      { title: "Home", href: "#hero-section" },
      { title: "About Us", href: "#footer" },
      { title: "Shop", href: "#discount-store" },
      { title: "Categories", href: "#categories" },
      { title: "Brands", href: "#brands" },
   ]);

   // Handle smooth scrolling for navigation links
   const handleSmoothScroll = () => {
      // Don't prevent default - let the browser handle the scroll
      // Just add smooth scrolling behavior
      document.documentElement.style.scrollBehavior = "smooth";

      // After scrolling is done, reset the behavior
      setTimeout(() => {
         document.documentElement.style.scrollBehavior = "auto";
      }, 1000);
   };

   return (
      <header className="border-b bg-gray-800 w-full">
         <div className="container w-6/7 px-1 py-4 flex items-center justify-around">
            {/* Brand and Logo */}
            <a href="/" className="flex items-center gap-2">
               <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                     <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className=" text-gray-200 text-2xl font-bold">DoctorSoul+</div>
               </div>
            </a>

            {/* Search Bar - Center */}
            <div className="hidden md:flex bg-gray-100 items-center border-2 rounded-full px-4 py-2 w-1/3">
               <Search className="w-5 h-5 text-gray-400 mr-2" />
               <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full outline-none text-sm font-bold text-black"
               />
            </div>

            {/* Navigation - Right */}
            <div className="flex items-center gap-4 w-fit">
               <nav className="hidden md:flex items-center gap-6">
                  {navLinks.map((link, index) => (
                     <a
                        key={index}
                        href={link.href}
                        className="text-gray-200 size-fit text-md font-bold flex justify-center items-center relative transition-all duration-100 ease-linear hover:tracking-wider hover:text-green-500 before:content-[''] before:absolute before:bg-green-500 before:h-0.5 before:rounded-4xl before:w-0 before:left-0 before:bottom-0 before:transition-all before:duration-200 hover:before:w-full"
                        onClick={() => {
                           handleSmoothScroll();
                        }}
                     >
                        {link.title}
                     </a>
                  ))}
               </nav>
            </div>
         </div>
      </header>
   );
}
