import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = ({
   cartItems,
   onQuantityChange,
   onRemoveItem,
   onClose,
}) => {
   const calculateTotal = () => {
      return cartItems
         .reduce((total, item) => total + item.price * item.quantity, 0)
         .toFixed(2);
   };

   return (
      <div className="fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-2xl p-6 z-100 overflow-y-auto">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Your Cart</h2>
            <button
               onClick={onClose}
               className="text-gray-600 font-bold hover:text-gray-800 hover:cursor-pointer"
            >
               Close
            </button>
         </div>

         {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
         ) : (
            <div>
               {cartItems.map((item) => (
                  <div
                     key={item.id}
                     className="flex items-center justify-between border-b py-4"
                  >
                     <div className="flex items-center">
                        <img
                           src={item.imageUrl}
                           alt={item.name}
                           className="w-16 h-16 object-contain mr-4 rounded"
                        />
                        <div>
                           <h3 className="font-semibold">{item.name}</h3>
                           <p className="text-gray-600">${item.price}</p>
                        </div>
                     </div>

                     <div className="flex items-center">
                        <button
                           onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                           className="text-gray-500 p-2 hover:text-black"
                        >
                           <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                           onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                           className="text-gray-500 p-2 hover:text-black"
                        >
                           <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <button
                           onClick={() => onRemoveItem(item.id)}
                           className="text-red-400 ml-4 p-2 hover:text-red-600"
                        >
                           <FontAwesomeIcon icon={faTrash} />
                        </button>
                     </div>
                  </div>
               ))}

               <div className="mt-6">
                  <div className="flex justify-between items-center">
                     <span className="font-semibold">Total:</span>
                     <span className="text-xl">${calculateTotal()}</span>
                  </div>
                  <button className="w-full bg-blue-500 hover:bg-blue-800 hover:cursor-pointer text-white py-3 rounded mt-4">
                     Proceed to Checkout
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default ShoppingCart;
