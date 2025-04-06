import React from "react";
import Logo from '../Ecommerce App assets/Logo.svg';

export default function Footer({ brandHandler , categoryHandler}) {

   const Categories = [{ "id": "diabetes", "title": "Diabetes Care" }, { "id": "cardiac", "title": "Cardiac Care" }, { "id": "stomach", "title": "Stomach Care" }, { "id": "pain", "title": "Pain Relief" }, { "id": "liver", "title": "Liver Care" }, { "id": "oral", "title": "Oral Care" }, { "id": "respiratory", "title": "Respiratory" }, { "id": "sexual", "title": "Sexual Health" }, { "id": "elderly", "title": "Elderly Care" }, { "id": "immunity", "title": "Cold & Immunity" }, { "id": "mental", "title": "Mental Health" }, { "id": "nutrition", "title": "Nutrition" }];


   const brands = [
      {
         numId: 0,
         id: "apollo",
         title: "Apollo Hospitals",
      },
      {
         numId: 1,
         id: "fortis",
         title: "Fortis Healthcare",
         image: "https://grantave.com/s/fortis-health-logo.png",
      },
      {
         numId: 2,
         id: "max",
         title: "Max Healthcare",
      },
      {
         numId: 3,
         id: "cipla",
         title: "Cipla",
      },
      {
         numId: 4,
         id: "reddy",
         title: "Dr. Reddy's",
      },
      {
         numId: 5,
         id: "medanta",
         title: "Medanta",
      },
      {
         numId: 6,
         id: "sunpharma",
         title: "Sun Pharma",
      },
      {
         numId: 7,
         id: "biocon",
         title: "Biocon",
         image: "https://download.logo.wine/logo/Biocon/Biocon-Logo.wine.png",
      },
      {
         numId: 8,
         id: "narayana",
         title: "Narayana Health",
         image: "https://noorahealth.org/wp-content/uploads/2022/03/NH-Logo.png",
      },
      {
         numId: 9,
         id: "zydus",
         title: "Zydus Cadila",
      },
      {
         numId: 10,
         id: "hcg",
         title: "HCG Oncology",
      },
      {
         numId: 11,
         id: "glenmark",
         title: "Glenmark",
         image: "https://seekvectors.com/files/download/Glenmark-01.png",
      },
      {
         numId: 12,
         id: "ranbaxy",
         title: "Ranbaxy",
      },
      {
         numId: 13,
         id: "aster",
         title: "Aster Healthcare",
      },
      {
         numId: 14,
         id: "wockhardt",
         title: "Wockhardt",
      },
   ];

   return (
      <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
         <div className="container mx-auto w-full">
            {/* Newsletter Section */}
            <div className="bg-green-600 rounded-2xl p-8 mb-16 -mt-24 relative shadow-xl">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                     <h3 className="text-2xl font-bold mb-2">
                        Subscribe to our Newsletter
                     </h3>
                     <p className="text-green-100">
                        Get the latest updates, offers and health tips straight to your
                        inbox.
                     </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                     <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                     />
                     <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors">
                        Subscribe
                     </button>
                  </div>
               </div>
            </div>

            {/* Main Footer Content */}
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
               {/* Column 1: About */}
               <div>
                  <div className="flex items-center gap-2 mb-6">
                     <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                        <img src={Logo} alt="Logo" className="w-full h-full" />
                     </div>
                     <span className="text-xl font-bold">DoctorSoul+</span>
                  </div>
                  <p className="text-gray-400 mb-6">
                     Your trusted partner for all healthcare needs. We provide quality
                     medicines and healthcare products delivered to your doorstep with
                     care and precision.
                  </p>
                  <div className="flex gap-4">
                     <a
                        href="#"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                     >
                        <span className="sr-only">Facebook</span>
                        <span className="text-white">F</span>
                     </a>
                     <a
                        href="#"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                     >
                        <span className="sr-only">Twitter</span>
                        <span className="text-white">T</span>
                     </a>
                     <a
                        href="#"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                     >
                        <span className="sr-only">Instagram</span>
                        <span className="text-white">I</span>
                     </a>
                     <a
                        href="#"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                     >
                        <span className="sr-only">LinkedIn</span>
                        <span className="text-white">L</span>
                     </a>
                  </div>
               </div>

               {/* Column 2: Quick Links */}
               <div>
                  <h3 className="text-lg font-bold mb-6 relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-green-500">
                     Quick Links
                  </h3>
                  <ul className="space-y-3">
                     <li>
                        <a
                           href="/"
                           className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        >
                           <span className="text-xs">→</span> Home
                        </a>
                     </li>
                     <li>
                        <a
                           href="/shop"
                           className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        >
                           <span className="text-xs">→</span> Shop
                        </a>
                     </li>
                     <li>
                        <a
                           href="/about"
                           className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        >
                           <span className="text-xs">→</span> About
                        </a>
                     </li>
                     <li>
                        <a
                           href="/contact"
                           className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        >
                           <span className="text-xs">→</span> Contact
                        </a>
                     </li>
                     <li>
                        <a
                           href="/blog"
                           className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        >
                           <span className="text-xs">→</span> Blog
                        </a>
                     </li>
                     <li>
                        <a
                           href="/faqs"
                           className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        >
                           <span className="text-xs">→</span> FAQs
                        </a>
                     </li>
                  </ul>
               </div>

               {/* Column 3: Categories */}
               <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold mb-6 relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-green-500">
                     Categories
                  </h3>
               <div className="grid grid-cols-2 gap-5">
                     {Categories.map((category, index) => {
                        category.numId = index;
                        return (<div key={category.id}>
                           <ul className=" w-fit grid grid-cols-2 gap-2">
                              <li>
                                 <a
                                    href={`/#${category.id}`}
                                    className=" w-fit text-gray-400 text-sm hover:text-white transition-colors"
                                    onClick={() => categoryHandler(category)}
                                 >
                                    {category.title}
                                 </a>
                              </li>
                           </ul>
                        </div>);
                     })}
                  </div>
               </div>

               {/* Column 4: Brands */}
               <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold mb-6 relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-green-500">
                     Brands
                  </h3>
               <div className="grid grid-cols-2 gap-5">
               {brands.map((brand, index) => {
                  brand.numId = index;
                  return (
                  <div key={brand.id}>
                     <ul className=" w-fit grid grid-cols-2 gap-2">
                        <li>
                           <a
                              href={`/#${brand.id}`}
                              className=" w-fit text-gray-400 text-sm hover:text-white transition-colors"
                              onClick={() => brandHandler(brand)}
                           >
                              {brand.title}
                           </a>
                        </li>
                     </ul>
                  </div>
               )})}
                  </div>
               </div>

               {/* Column 5: Contact */}
               <div className="flex gap-4 flex-col">
                  <h3 className="text-lg font-bold mb-6 relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-green-500">
                     Contact Us
                  </h3>
                  <ul className="space-y-4">
                     <li className="flex gap-3">
                        <span className="text-green-500 flex-shrink-0 mt-1">📍</span>
                        <span className="text-gray-400">
                           1640 Parker Rd, Allentown, New Mexico 31134
                        </span>
                     </li>
                     <li className="flex gap-3">
                        <span className="text-green-500 flex-shrink-0">📞</span>
                        <span className="text-gray-400">(204) 555-0104</span>
                     </li>
                     <li className="flex gap-3">
                        <span className="text-green-500 flex-shrink-0">✉️</span>
                        <span className="text-gray-400">hello@doctorplus.com</span>
                     </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                           24/7
                        </div>
                        <div>
                           <h4 className="font-semibold text-white">Customer Support</h4>
                           <p className="text-sm text-gray-400">
                              Available round the clock
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 pt-8">
               <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-500 text-sm mb-4 md:mb-0">
                     © 2025 DoctorSoul+. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="h-8 w-12 bg-gray-400 rounded"><img src="https://img.icons8.com/color/48/000000/visa.png" alt="VISA" className="size-full object-fill" /></div>
                     <div className="h-8 w-12 bg-gray-800 rounded"><img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="size-full object-fill" /></div>
                     <div className="h-8 w-12 bg-gray-800 rounded"><img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="size-full object-fill" /></div>
                     <div className="h-8 w-12 bg-gray-800 rounded"><img src="https://img.icons8.com/color/48/000000/stripe.png" alt="Stripe" className="size-full object-fill" /></div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
