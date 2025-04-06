import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from "./ShoppingCart";

export default function CartIcon({
   cartItems,
   setCartVisible,
   cartVisible,
   handleQuantityChange,
   handleRemoveItem,
   cartItemCount,
   cartIconRef,
}) {
   // State to control animation
   const [isAnimating, setIsAnimating] = useState(false);

   // Handle opening the cart with animation
   const openCart = () => {
      setIsAnimating(true);
      setCartVisible(true);
   };

   // Handle closing the cart
   const closeCart = () => {
      setIsAnimating(false);
      // Delay the actual hiding to allow the animation to complete
      setTimeout(() => {
         setCartVisible(false);
      }, 300); // Match this with your transition duration
   };

   // Set up animation class based on cart visibility
   const cartAnimationClass = isAnimating
      ? "translate-x-0 opacity-100"
      : "translate-x-100 opacity-0";

   return (
      <div className="container mx-auto px-4 py-8">
         {/* Cart icon in header */}
         <div className="fixed top-3 right-10 z-50 hover:scale-110 transition-all duration-100 ease-in-out">
            <button
               ref={cartIconRef}
               className="bg-blue-300 text-black p-3 hover:cursor-pointer rounded-full shadow-lg relative"
               onClick={openCart}
            >
               <FontAwesomeIcon icon={faShoppingCart} />
               {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                     {cartItemCount}
                  </span>
               )}
            </button>
         </div>

         {/* Always render the cart but control its visibility with CSS */}
         <div
            className={`fixed top-0 right-0 h-full z-50 transform transition-all duration-300 ease-in-out ${cartAnimationClass}`}
            style={{
               width: "320px",
               visibility: cartVisible ? "visible" : "hidden",
            }}
         >
            {cartVisible && (
               <ShoppingCart
                  cartItems={cartItems}
                  onQuantityChange={handleQuantityChange}
                  onRemoveItem={handleRemoveItem}
                  onClose={closeCart}
               />
            )}
         </div>

         {/* Overlay background that fades in/out */}
         {cartVisible && (
            <div
               className={`fixed inset-0 z-45 bg-black transition-opacity duration-300 ease-in-out ${isAnimating ? "opacity-50" : "opacity-0"
                  }`}
               onClick={closeCart}
            ></div>
         )}
      </div>
   );
}
