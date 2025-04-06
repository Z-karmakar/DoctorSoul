import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faArrowLeft,
   faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Brands = ({ onBrandSelect }) => {
   // Reference to the scrollable container
   const scrollRef = useRef(null);
   // Reference to the bottom of the component for scrolling
   const endRef = useRef(null);

   // Define your categories in an array for easier mapping
   const brands = [
      {
         numId: 0,
         id: "apollo",
         title: "Apollo Hospitals",
         image:
            "https://th.bing.com/th/id/R.4c510dcf88d6a82cb24aceb1942ab55c?rik=EjFKJWu6YneMzQ&riu=http%3a%2f%2ftrichy.com%2fwp-content%2fuploads%2f2019%2f05%2fappollo-hospital.png&ehk=4j7W%2bhC%2bllukm13aTSpMs0YMJNCTZKEqWFIRDDhTZBQ%3d&risl=&pid=ImgRaw&r=0",
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
         image:
            "https://companieslogo.com/img/orig/MAXHEALTH.NS_BIG-bf20d59a.png?t=1685089747",
      },
      {
         numId: 3,
         id: "cipla",
         title: "Cipla",
         image:
            "https://companieslogo.com/img/orig/CIPLA.NS_BIG-3b7d65fe.png?t=1601652636",
      },
      {
         numId: 4,
         id: "reddy",
         title: "Dr. Reddy's",
         image:
            "https://biosimilarscouncil.org/wp-content/uploads/2017/03/Reddys.png",
      },
      {
         numId: 5,
         id: "medanta",
         title: "Medanta",
         image:
            "https://th.bing.com/th/id/OIP.UMvIW3ewwizSkDD5krR6lQAAAA?w=474&h=316&rs=1&pid=ImgDetMain",
      },
      {
         numId: 6,
         id: "sunpharma",
         title: "Sun Pharma",
         image:
            "https://www.pinclipart.com/picdir/big/331-3318355_pharma-clip-art.png",
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
         image:
            "https://medicinespatentpool.org/uploads/2020/04/Zydus-Cadila.png",
      },
      {
         numId: 10,
         id: "hcg",
         title: "HCG Oncology",
         image:
            "https://www.freshersnow.com/wp-content/uploads/2018/08/HealthCare-Global.png",
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
         image:
            "https://th.bing.com/th/id/OIP.-Qd8MnDagTAAtF8swPWA6wAAAA?w=474&h=320&rs=1&pid=ImgDetMain",
      },
      {
         numId: 13,
         id: "aster",
         title: "Aster Healthcare",
         image:
            "https://www.pngkit.com/png/full/336-3365629_recent-posts-aster-dm-healthcare-logo.png",
      },
      {
         numId: 14,
         id: "wockhardt",
         title: "Wockhardt",
         image:
            "https://www.wockhardt.com/wp-content/uploads/2023/03/Wockhardt-55-years-png-logo.png",
      },
   ];

   // Handler for when a brand is clicked
   const handleBrandClick = (brand) => {
      // Scroll to the bottom of the component smoothly
      if (endRef.current) {
         endRef.current.scrollIntoView({ behavior: "smooth" });
      }
      // Return the clicked brand details to the parent
      if (onBrandSelect) {
         onBrandSelect(brand);
      }
   };

   // Scroll left function
   const scrollLeft = () => {
      const brandElement = scrollRef.current.children[0];
      const brandWidthIncludingGap =
         brandElement.offsetWidth +
         parseInt(getComputedStyle(brandElement).marginRight);
      scrollRef.current.scrollBy({
         left: -brandWidthIncludingGap * 3, // Scroll 3 items at once
         behavior: "smooth",
      });
   };

   // Scroll right function
   const scrollRight = () => {
      const brandElement = scrollRef.current.children[0];
      const brandWidthIncludingGap =
         brandElement.offsetWidth +
         parseInt(getComputedStyle(brandElement).marginRight);
      scrollRef.current.scrollBy({
         left: brandWidthIncludingGap * 3, // Scroll 3 items at once
         behavior: "smooth",
      });
   };

   // Automatic Scroll Logic
   useEffect(() => {
      const container = scrollRef.current;

      if (!container) return;

      const brandElement = container.children[0];
      if (!brandElement) return;

      const brandWidthIncludingGap =
         brandElement.offsetWidth +
         parseInt(getComputedStyle(brandElement).marginRight);

      const autoScroll = () => {
         container.scrollBy({
            left: brandWidthIncludingGap,
            behavior: "smooth",
         });

         if (
            container.scrollLeft + container.offsetWidth >=
            container.scrollWidth - 10 // Small threshold to detect end
         ) {
            container.scrollTo({ left: 0, behavior: "smooth" }); // Loop back to start
         }
      };

      const interval = setInterval(autoScroll, 5000); // Scrolls one brand every 5 seconds

      return () => clearInterval(interval); // Cleanup on component unmount
   }, []);

   return (
      <div id="brands" className="bg-white font-sans pt-20">
         <div className="container mx-auto py-10 relative">
            <h1 className="text-2xl capitalize text-center font-bold text-gray-600 mb-10">
               shop by brands
            </h1>

            {/* Left scroll button */}
            <button
               className="absolute left-0 top-1/5 transform -translate-y-1/2 bg-gray-300 text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-500 z-10"
               onClick={scrollLeft}
            >
               <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            </button>

            {/* Scrollable container */}
            <div
               className="flex overflow-x-scroll no-scrollbar space-x-4"
               ref={scrollRef}
               style={{ scrollBehavior: "smooth" }}
            >
               {brands.map((brand) => (
                  <div
                     key={brand.id}
                     id={brand.id}
                     className="flex-none w-64 bg-gray-100 shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:bg-gray-300 hover:cursor-pointer"
                     onClick={() => handleBrandClick(brand)}
                  >
                     <img
                        src={brand.image}
                        alt={`${brand.title} logo`}
                        className="h-16 mx-auto mb-4 object-contain"
                     />
                     <h2 className="text-lg font-bold text-gray-700">
                        {brand.title}
                     </h2>
                  </div>
               ))}
            </div>

            {/* Right scroll button */}
            <button
               className="absolute right-0 top-1/5 transform -translate-y-1/2 bg-gray-300 text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-500 z-10"
               onClick={scrollRight}
            >
               <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </button>
         </div>
         {/* Reference point for scrolling to bottom */}
         <div ref={endRef}></div>
      </div>
   );
};

export default Brands;
