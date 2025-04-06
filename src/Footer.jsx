import React from 'react'

export default function Footer() {
   return (
      <footer id='footer' className="border-t bg-gray-50 mb-20">
         <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div>
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        D+
                     </div>
                     <span className="text-xl font-bold">DoctorSoul+</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                     Your trusted partner for all healthcare needs. We provide quality
                     medicines and healthcare products delivered to your doorstep.
                  </p>
                  <div className="flex space-x-4">
                     <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                     >
                        <span className="text-green-600">F</span>
                     </a>
                     <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                     >
                        <span className="text-green-600">T</span>
                     </a>
                     <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                     >
                        <span className="text-green-600">I</span>
                     </a>
                  </div>
               </div>

               <div>
                  <h3 className="font-bold mb-4">Quick Links</h3>
                  <div className="space-y-2">
                     <a
                        href="/"
                        className="block text-sm text-gray-600 hover:text-green-500"
                     >
                        Home
                     </a>
                     <a
                        href="/shop"
                        className="block text-sm text-gray-600 hover:text-green-500"
                     >
                        Shop
                     </a>
                     <a
                        href="/about"
                        className="block text-sm text-gray-600 hover:text-green-500"
                     >
                        About
                     </a>
                     <a
                        href="/contact"
                        className="block text-sm text-gray-600 hover:text-green-500"
                     >
                        Contact
                     </a>
                     <a
                        href="/blog"
                        className="block text-sm text-gray-600 hover:text-green-500"
                     >
                        Blog
                     </a>
                  </div>
               </div>

               <div>
                  <h3 className="font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                     <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-green-500"
                     >
                        Medicines
                     </a>
                     <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-green-500"
                     >
                        Health Devices
                     </a>
                     <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-green-500"
                     >
                        Baby Care
                     </a>
                     <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-green-500"
                     >
                        Women Care
                     </a>
                     <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-green-500"
                     >
                        Ayurvedic Products
                     </a>
                  </div>
               </div>

               <div>
                  <h3 className="font-bold mb-4">Contact</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                     <p>1640 Parker Rd, Allentown,</p>
                     <p>New Mexico 31134</p>
                     <p>hello@doctorplus.com</p>
                     <p>(204) 555-0104</p>
                  </div>
                  <div className="mt-4">
                     <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                           <span className="text-green-600 text-xs">24/7</span>
                        </div>
                        <p className="text-sm font-medium text-green-800">
                           Customer Support Available
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="border-t mt-8 pt-8">
               <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-gray-600 mb-4 md:mb-0">
                     © 2025 DoctorSoul+. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4">
                     <img src="/api/placeholder/40/24" alt="Visa" className="h-6" />
                     <img
                        src="/api/placeholder/40/24"
                        alt="Mastercard"
                        className="h-6"
                     />
                     <img src="/api/placeholder/40/24" alt="PayPal" className="h-6" />
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
