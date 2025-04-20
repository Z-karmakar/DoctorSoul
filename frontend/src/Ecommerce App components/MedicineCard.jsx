import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

const MedicineCard = (props) => {
   const { id, imageUrl, name, price, availability = true, description, onAddToCart, onOrder } =
      props;

   return (
      <div
         id={`medicine-${id}`}
         className="w-72 h-full p-2 rounded-2xl overflow-hidden shadow-md shadow-gray-400 m-4 flex flex-col gap-2 items-center"
      >
         <img
            className="w-full h-32 object-contain object-center"
            src={imageUrl}
            alt={name}
         />
         <div className="px-6 py-4 h-full flex flex-col items-center">
            <div className="font-bold text-lg text-orange-400 capitalize mb-2">
               {name}
            </div>

            {/* Star Rating Section */}
            <div className="flex text-md items-center gap-1 self-start">
               <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
               <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
               <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
               {Math.random() > 0.5 ? (
                  <FontAwesomeIcon icon={faRegularStar} className="text-gray-300" />
               ) : (
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
               )}
               <FontAwesomeIcon icon={faRegularStar} className="text-gray-300" />
               <span className="text-xs text-gray-500 ml-1">
                  ({Math.floor(Math.random() * 800 + 100)})
               </span>
            </div>

            <div className="text-sm capitalize mb-1">{description}</div>
            <div className="flex items-center justify-around gap-3">
               <p className="font-bold text-gray-700 text-md">Price: ${price}</p>
               <p
                  className={`text-sm ${availability ? "text-green-500" : "text-red-500"
                     } mt-1`}
               >
                  {availability ? "In Stock" : "Out of Stock"}
               </p>
            </div>
         </div>
         <div className="w-9/10 h-fit pb-2 flex flex-col gap-2 items-center">
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

export default MedicineCard;
