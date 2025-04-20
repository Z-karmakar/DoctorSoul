import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const SecondaryHeader = ({ categoryHandler, brandHandler }) => {

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
      { title: "10% Off on Medicines", href: "#medicines-10" },
      { title: "15% Off on Health Devices", href: "#devices-15" },
      { title: "Buy 1 Get 1 Free on Vitamins", href: "#vitamins-b1g1" },
      { title: "Seasonal Offers", href: "#medicines-seasonal" },
   ]);

   const [showCategories, setShowCategories] = useState(false);
   const [showBrands, setShowBrands] = useState(false);
   const [showDiscounts, setShowDiscounts] = useState(false);

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
      <header className="border-b bg-gray-200">
         <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center justify-around gap-10">
               {/* Categories Dropdown */}
               <div className="dropdown-container relative">
                  <button
                     className="text-md font-bold flex items-center gap-1 hover:cursor-pointer hover:text-green-700"
                     onMouseOver={(e) => {
                        e.stopPropagation();
                        setShowCategories(!showCategories);
                        setShowBrands(false);
                     }}
                  >
                     Categories <ChevronDown className={` transition-all duration-200 ease-linear transform ${showCategories ? "rotate-180" : ""} w-6 h-6`} />
                  </button>
                  <div
                     className={`absolute top-full left-0 mt-1 bg-green-50 shadow-md py-2 w-48 z-10 rounded-md origin-top transition-all duration-300 ease-linear transform overflow-hidden ${showCategories
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0"
                        }`}
                     onMouseLeave={() => setShowCategories(false)}
                  >
                     {categoryItems.map((item, index) => {
                        item.numId = index;
                        return (
                           <a
                              key={index}
                              href={item.href}
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-blue-200"
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
                     Brands <ChevronDown className={` transition-all duration-200 ease-linear transform ${showBrands ? "rotate-180" : ""} w-6 h-6`} />
                  </button>
                  <div
                     className={`absolute top-full left-0 mt-1 bg-green-50 shadow-md py-2 w-48 z-10 rounded-md origin-top transition-all duration-300 ease-linear transform overflow-hidden ${showBrands
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0"
                        }`}
                     onMouseLeave={() => setShowBrands(false)}
                  >
                     {brandItems.map((item, index) => {
                        item.numId = index;
                        return (
                           <a
                              key={index}
                              href={item.href}
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-blue-200"
                              onClick={() => {
                                 brandHandler(item);
                                 setShowBrands(false);
                                 setShowCategories(false);
                                 setShowDiscounts(false);
                                 handleSmoothScroll();
                              }}
                           >
                              {item.title}
                           </a>
                        );
                     })}
                  </div>
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
                     Discount Section <ChevronDown className={` transition-all duration-200 ease-linear transform ${showDiscounts ? "rotate-180" : ""} w-6 h-6`} />
                  </button>
                  <div
                     className={`absolute top-full left-0 mt-1 bg-green-50 shadow-md py-2 w-48 z-10 rounded-md origin-top transition-all duration-300 ease-linear transform overflow-hidden ${showDiscounts
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0"
                        }`}
                     onMouseLeave={() => setShowDiscounts(false)}
                  >
                     {discountItems.map((item, index) => (
                        <a
                           key={index}
                           href={item.href}
                           className="block px-4 py-2 text-md text-gray-700 hover:bg-blue-200"
                           onClick={() => {
                              handleSmoothScroll();
                              setShowCategories(false);
                              setShowBrands(false);
                              setShowDiscounts(false);
                           }}
                        >
                           {item.title}
                        </a>
                     ))}
                  </div>
               </div>

               {/* Upload Prescription Section */}
               <div className="dropdown-container relative">
                  <a href="#upload-prescription" className="text-md font-bold flex items-center gap-1 hover:cursor-pointer hover:text-green-700" onClick={() => handleSmoothScroll()}>
                     Upload Prescription
                  </a>
               </div>

               {/* Features Section */}
               <div className="dropdown-container relative">
                  <a href="#features-section" className="text-md font-bold flex items-center gap-1 hover:cursor-pointer hover:text-green-700" onClick={() => handleSmoothScroll()}>
                     Features
                  </a>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default SecondaryHeader;
