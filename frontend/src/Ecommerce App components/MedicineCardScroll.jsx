import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faShoppingCart,
   faStar,
   faTag,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

const MedicineCardScroll = (props) => {
   const { id, imageUrl, name, price, availability, onAddToCart, hook = "50% OFF", onOrder } =
      props;

   const discountPercentage = 50; // Example discount percentage
   const originalPrice = price * 2; // Calculate original price

   return (
      <div
         id={`medicine-${id}`}
         className="w-60 h-full bg-gray-100 border-2 border-gray-300 border-solid px-3 py-1 rounded overflow-hidden shadow-lg m-4 flex flex-col gap-2"
      >
         <div className="relative w-full flex flex-col gap-1">
            {discountPercentage > 0 && (
               <div className="absolute size-fit p-1 top-2 left-2 z-10 bg-red-600 text-white text-xs font-bold  rounded-full flex items-center">
                  <FontAwesomeIcon icon={faTag} className="mr-1" />
                  {hook}
               </div>
            )}
            <img
               className="w-full h-32 object-contain object-center"
               src={imageUrl}
               alt={name}
            />
         </div>
         <div className="h-full flex flex-col gap-1">
            <div className="font-bold text-xl text-indigo-600 capitalize">
               {name}
            </div>
            {/* Star Rating Section */}
            <div className="flex items-center gap-1 mb-2">
               <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
               <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
               <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
               {Math.random() > 0.5 ? (
                  <FontAwesomeIcon icon={faRegularStar} className="text-gray-300" />
               ) : (
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
               )}
               <FontAwesomeIcon icon={faRegularStar} className="text-gray-300" />
               <span className="text-xs text-gray-500 ml-1">({Math.floor(Math.random() * 50 +2) + "k"})</span>
            </div>

            <div className="flex items-baseline mb-2">
               <p className="font-bold text-lg text-gray-800">${price}</p>
               {discountPercentage > 0 && (
                  <p className="ml-2 text-sm text-gray-500 line-through">
                     ${originalPrice.toFixed(2)}
                  </p>
               )}
            </div>
            <p
               className={`text-sm ${availability ? "text-green-600" : "text-red-600"
                  } mt-1`}
            >
               {availability ? "In Stock" : "Out of Stock"}
            </p>
         </div>
         <div className="w-9/10 h-full pb-2 flex flex-col self-center gap-2 items-center">
            <button
               onClick={onOrder}
               className={`${availability ? "bg-green-600" : "bg-gray-900"
                  } text-md w-full py-1 hover:${availability ? "bg-green-700" : "bg-gray-900"
                  } hover:cursor-pointer ${availability ? "text-gray-50" : "text-gray-500"
                  } font-bold  rounded flex justify-center items-center`}
            >
               Buy Now
            </button>
            <button
               onClick={(event) => onAddToCart(event)}
               className={`${availability ? "bg-sky-500" : "bg-gray-900"
                  } text-md w-full py-2 hover:${availability ? "bg-blue-800" : "bg-gray-900"
                  } hover:cursor-pointer ${availability ? "text-gray-50" : "text-gray-500"
                  } font-bold rounded flex justify-center items-center gap-2`}
            >
               <FontAwesomeIcon icon={faShoppingCart} />
               Add to Cart
            </button>
         </div>
      </div>
   );
};

export default MedicineCardScroll;
