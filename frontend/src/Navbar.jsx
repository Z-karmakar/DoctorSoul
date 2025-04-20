import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import Hero from "./Hero";
import Logo from './assets/blue-illustrated-doctor-logo.svg';
const Navbar = ({ categoryHandler, brandHandler }) => {
   const [navLinks] = useState([
      { title: "Home", href: "#hero-section" },
      { title: "About Us", href: "#footer" },
      { title: "Shop", href: "#discount-store" },
      { title: "Categories", href: "#categories" },
      { title: "Brands", href: "#brands" }
   ]);

   const [categoryItems] = useState([
      { title: "Diabetes Care", href: "#diabetes" },
      { title: "Cardiac Care", href: "#cardiac" },
      { title: "Stomach Care", href: "#stomach" },
      { title: "Pain Relief", href: "#pain" },
      { title: "Liver Care", href: "#liver" },
      { title: "Oral Care", href: "#oral" },
      { title: "Respiratory", href: "#respiratory" },
      { title: "Sexual Health", href: "#sexual" },
      { title: "Elderly Care", href: "#elderly" },
      { title: "Cold & Immunity", href: "#cold" },
      { title: "Mental Health", href: "#mental" },
      { title: "Nutrition", href: "#nutrition" },
   ]);

   const [brandItems] = useState([
      { title: "Apollo Hospitals", href: "#apollo" },
      { title: "Fortis Healthcare", href: "#fortis" },
      { title: "Max Healthcare", href: "#max" },
      { title: "Cipla", href: "#cipla" },
      { title: "Dr. Reddy's", href: "#reddy" },
      { title: "Medanta", href: "#medanta" },
      { title: "Sun Pharma", href: "#sunpharma" },
      { title: "Biocon", href: "#biocon" },
      { title: "Narayana Health", href: "#narayana" },
      { title: "Zidus Cadila", href: "#zydus" },
      { title: "HCG Oncology", href: "#hcg" },
      { title: "Glenmark", href: "#glenmark" },
      { title: "Ranbaxy", href: "#ranbaxy" },
      { title: "Aster Healthcare", href: "#aster" },
      { title: "Wockhardt", href: "#wockhardt" },
   ]);

   const [discountItems] = useState([
      { title: "10% Off on Medicines", href: "#discount-store" },
      { title: "15% Off on Health Devices", href: "#discount-store" },
      { title: "Buy 1 Get 1 Free on Vitamins", href: "#discount-store" },
      { title: "Seasonal Offers", href: "#discount-store" },
   ]);

   const [showCategories, setShowCategories] = useState(false);
   const [showBrands, setShowBrands] = useState(false);
   const [showDiscounts, setShowDiscounts] = useState(false);

   // Handle smooth scrolling for navigation links
   const handleSmoothScroll = (e, href) => {
      // Don't prevent default - let the browser handle the scroll
      // Just add smooth scrolling behavior
      document.documentElement.style.scrollBehavior = "smooth";

      // After scrolling is done, reset the behavior
      setTimeout(() => {
         document.documentElement.style.scrollBehavior = "auto";
      }, 1000);
   };

   // Close dropdowns when clicking outside
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (!event.target.closest(".dropdown-container")) {
            setShowCategories(false);
            setShowBrands(false);
            setShowDiscounts(false);
         }
      };

      document.addEventListener("click", handleClickOutside);
      return () => {
         document.removeEventListener("click", handleClickOutside);
      };
   }, []);

   return (
      <div className="min-h-screen bg-white">
         {/* Fixed Headers */}
         <div className="fixed top-0 left-0 right-0 z-50">
            {/* Main Header */}
            <header className="border-b bg-white w-full">
               <div className="container mx-auto px-4 py-4 flex items-center justify-around">
                  {/* Brand and Logo */}
                  <a href="/" className="flex items-center gap-2">
                     <div>
                        <img src={Logo} alt='Logo' height='40px' width='50px'/>
                     </div>
                     <span className="text-2xl font-bold">DoctorSoul+</span>
                  </a>

                  {/* Search Bar - Center */}
                  <div className="hidden md:flex items-center border rounded-full px-4 py-2 w-1/3">
                     <Search className="w-5 h-5 text-gray-400 mr-2" />
                     <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full outline-none text-sm"
                     />
                  </div>

                  {/* Navigation - Right */}
                  <div className="flex items-center gap-4 w-fit">
                     <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link, index) => (
                           <a
                              key={index}
                              href={link.href}
                              className="text-black size-fit text-md font-bold flex justify-center items-center relative transition-all duration-100 ease-linear hover:tracking-wider hover:text-green-500 before:content-[''] before:absolute before:bg-green-500 before:h-0.5 before:rounded-4xl before:w-0 before:left-0 before:bottom-0 before:transition-all before:duration-200 hover:before:w-full"
                              onClick={(e) => {
                                 handleSmoothScroll(e, link.href);
                              }}
                           >
                              {link.title}
                           </a>
                        ))}
                     </nav>
                  </div>
               </div>
            </header>

            {/* Secondary Header */}
            <header className="border-b" style={{ backgroundColor: "aquamarine" }}>
               <div className="container mx-auto px-4 py-3">
                  <nav className="flex items-center justify-center gap-10">
                     {/* Categories Dropdown */}
                     <div className="dropdown-container relative">
                        <button
                           className="text-md font-bold flex items-center gap-1 hover:cursor-pointer hover:text-green-700"
                           onMouseOver={(e) => {
                              e.stopPropagation();
                              setShowCategories(!showCategories);
                              setShowBrands(false);
                              setShowDiscounts(false);
                           }}
                        >
                           Categories <ChevronDown className="w-4 h-4" />
                        </button>
                        {showCategories && (
                           <div className="absolute top-full left-0 mt-1 bg-white shadow-md py-2 w-48 z-10 rounded-md">
                              {categoryItems.map((item, index) => {
                                 item.numId = index;
                                 return (
                                    <a
                                       key={index}
                                       href={item.href}
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200"
                                       onClick={(e) => {
                                          categoryHandler(item);
                                          setShowCategories(false);
                                          setShowBrands(false);
                                          setShowDiscounts(false);
                                          handleSmoothScroll(e, item.href);
                                       }}
                                    >
                                       {item.title}
                                    </a>
                                 );
                              })}
                           </div>
                        )}
                     </div>

                     {/* Brands Dropdown */}
                     <div className="dropdown-container relative">
                        <button
                           className="text-md font-bold flex items-center gap-1 hover:cursor-pointer hover:text-green-700"
                           onMouseOver={(e) => {
                              e.stopPropagation();
                              setShowBrands(!showBrands);
                              setShowCategories(false);
                              setShowDiscounts(false);
                           }}
                        >
                           Brands <ChevronDown className="w-4 h-4" />
                        </button>
                        {showBrands && (
                           <div className="absolute top-full left-0 mt-1 bg-white shadow-md py-2 w-48 z-10 rounded-md">
                              {brandItems.map((item, index) => {
                                 item.numId = index;
                                 return (
                                    <a
                                       key={index}
                                       href={item.href}
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200"
                                       onClick={(e) => {
                                          brandHandler(item);
                                          setShowBrands(false);
                                          setShowCategories(false);
                                          setShowDiscounts(false);
                                          handleSmoothScroll(e, item.href);
                                       }}
                                    >
                                       {item.title}
                                    </a>
                                 );
                              })}
                           </div>
                        )}
                     </div>

                     {/* Discount Section Dropdown */}
                     <div className="dropdown-container relative">
                        <button
                           className="text-md font-bold flex items-center gap-1 hover:cursor-pointer hover:text-green-700"
                           onMouseOver={(e) => {
                              e.stopPropagation();
                              setShowDiscounts(!showDiscounts);
                              setShowCategories(false);
                              setShowBrands(false);
                           }}
                        >
                           Discount Section <ChevronDown className="w-4 h-4" />
                        </button>
                        {showDiscounts && (
                           <div className="absolute top-full left-0 mt-1 bg-white shadow-md py-2 w-48 z-10 rounded-md">
                              {discountItems.map((item, index) => (
                                 <a
                                    key={index}
                                    href={item.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200"
                                    onClick={(e) => {
                                       handleSmoothScroll(e, item.href);
                                    }}
                                 >
                                    {item.title}
                                 </a>
                              ))}
                           </div>
                        )}
                     </div>
                  </nav>
               </div>
            </header>
         </div>

         <Hero />
      </div>
   );
};

export default Navbar;
