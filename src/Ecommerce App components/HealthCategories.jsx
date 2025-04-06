import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faHeartbeat,
   faLungs,
   faTooth,
   faBrain,
   faUtensils,
   faCapsules,
   faHandHoldingHeart,
   faStethoscope,
   faUserMd,
   faShieldAlt,
   faSmile,
   faPrescriptionBottle,
} from "@fortawesome/free-solid-svg-icons";

const HealthCategories = ({ onCategorySelect }) => {
   // Reference to the bottom of the component for scrolling
   const endRef = useRef(null);

   // Define your categories in an array for easier mapping
   const categories = [
      { numId: 0, id: "diabetes", title: "Diabetes Care", icon: faCapsules },
      { numId: 1, id: "cardiac", title: "Cardiac Care", icon: faHeartbeat },
      { numId: 2, id: "stomach", title: "Stomach Care", icon: faUtensils },
      { numId: 3, id: "pain", title: "Pain Relief", icon: faPrescriptionBottle },
      { numId: 4, id: "liver", title: "Liver Care", icon: faStethoscope },
      { numId: 5, id: "oral", title: "Oral Care", icon: faTooth },
      { numId: 6, id: "respiratory", title: "Respiratory", icon: faLungs },
      { numId: 7, id: "sexual", title: "Sexual Health", icon: faHandHoldingHeart },
      { numId: 8, id: "elderly", title: "Elderly Care", icon: faUserMd },
      { numId: 9, id: "immunity", title: "Cold & Immunity", icon: faShieldAlt },
      { numId: 10, id: "mental", title: "Mental Health", icon: faBrain },
      { numId: 11, id: "nutrition", title: "Nutrition", icon: faSmile },
   ];

   // Handler for when a category is clicked
   const handleCategoryClick = (category) => {
      // Scroll to the bottom of the component smoothly
      if (endRef.current) {
         endRef.current.scrollIntoView({ behavior: "smooth" });
      }
      // Return the clicked category details to the parent
      if (onCategorySelect) {
         onCategorySelect(category);
      }
   };

   return (
      <div id="categories" className="bg-white font-sans pt-20">
         <div className="container mx-auto py-10">
            <h1 className="text-2xl capitalize font-bold text-black mb-10">
               browse by health conditions
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">

               {categories.map((category) => (
                  <div
                     key={category.id}
                     id={category.id}
                     className="bg-gray-200 shadow-lg rounded-lg p-6 text-center hover:ring-2 hover:ring-gray-600 hover:cursor-pointer"
                     onClick={() => handleCategoryClick(category)}
                  >
                     <FontAwesomeIcon
                        icon={category.icon}
                        className="text-sky-600 text-xl mb-4"
                     />
                     <h2 className="text-lg font-bold text-black">
                        {category.title}
                     </h2>
                  </div>
               ))}
            </div>
         </div>
         <div ref={endRef}></div>
      </div>
   );
};

export default HealthCategories;
