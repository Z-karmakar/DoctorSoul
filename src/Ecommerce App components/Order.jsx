import React, { useState, useEffect } from "react";
import { X, Plus, Minus, Trash2, ShoppingCart, CreditCard } from "lucide-react";
import OrderConfirmation from "./OrderConfirmation";

const Order = ({
   trigger,
   cartItems = [], // Default to empty array to prevent undefined errors
   isOpen = false, // Default to false
   orderType = "cart", // Default to 'cart'
   onClose,
   onQuantityChange,
   onRemoveItem,
   handleOrder,
   userDetails,
}) => {
   //   console.log(userDetails);

   // Add a new useEffect to update checkoutDetails when userDetails changes
   useEffect(() => {
      setCheckoutDetails({
         firstName: userDetails.firstName || "",
         lastName: userDetails.lastName || "",
         email: userDetails.email || "",
         address: userDetails.streetAddress || "",
         location: {
            city: userDetails.location?.city || "",
            district: userDetails.location?.district || "",
            state: userDetails.location?.state || "",
            postalCode: userDetails.location?.postalCode || "",
            country: userDetails.location?.country || "",
         },
         paymentMethod: "creditCard",
      });
   }, [userDetails]); // Dependency array ensures this runs when userDetails changes

   // State for checkout details with improved default values
   const [checkoutDetails, setCheckoutDetails] = useState({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      address: userDetails.streetAddress,
      location: userDetails.location,
      paymentMethod: "creditCard",
   });

   // Validation state
   const [validationErrors, setValidationErrors] = useState({});
   const [showOrderModal, setShowOrderModal] = useState(trigger);
   const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

   useEffect(() => {
      setShowOrderModal(trigger);
   }, [trigger]); // Update showOrderModal when trigger changes

   const toggleOrderModal = () => {
      setShowOrderModal(!showOrderModal);
      onClose();
   };

   // Recalculate total when cartItems change
   useEffect(() => {
      // You can add any side effects or additional logic here if needed
   }, [cartItems]);

   // Calculate total
   const calculateTotal = () => {
      return cartItems
         .reduce((total, item) => {
            // Add a safety check to ensure item and its properties exist
            const itemPrice = item?.price || 0;
            const itemQuantity = item?.quantity || 1;
            return total + itemPrice * itemQuantity;
         }, 0)
         .toFixed(2);
   };

   // Calculate total items
   const totalItems = cartItems.reduce(
      (total, item) => total + (item.quantity || 1),
      0
   );

   // Validate checkout details
   const validateCheckoutDetails = () => {
      const errors = {};

      if (!checkoutDetails.firstName.trim())
         errors.firstName = "First Name is required";
      if (!checkoutDetails.lastName.trim())
         errors.lastName = "Last Name is required";

      if (!checkoutDetails.email.trim()) errors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(checkoutDetails.email))
         errors.email = "Email is invalid";

      if (!checkoutDetails.address.trim()) errors.address = "Address is required";

      if (!checkoutDetails.location.city.trim()) errors.city = "City is required";
      if (!checkoutDetails.location.district.trim())
         errors.district = "District is required";
      if (!checkoutDetails.location.state.trim())
         errors.state = "State is required";
      if (!checkoutDetails.location.postalCode.trim())
         errors.postalCode = "Postal Code is required";
      if (!checkoutDetails.location.country.trim())
         errors.country = "Country is required";

      setValidationErrors(errors);
      return Object.keys(errors).length === 0;
   };

   // Handle input changes for checkout details
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCheckoutDetails((prev) => ({
         ...prev,
         [name]: value,
      }));

      // Clear validation error when user starts typing
      if (validationErrors[name]) {
         setValidationErrors((prev) => ({
            ...prev,
            [name]: "",
         }));
      }
   };

   // Handle order submission
   const handleOrderSubmission = () => {
      // Validate checkout details for buy now
      if (orderType === "buyNow" && !validateCheckoutDetails()) {
         return;
      }

      // Process the order
      handleOrder(
         orderType,
         orderType === "buyNow" ? cartItems : null,
         checkoutDetails
      );

      // set is order confirmed as true
      setIsOrderConfirmed(true);
   };

   // If order is confirmed, render OrderConfirmation
   if (isOrderConfirmed) {
      return (
         <OrderConfirmation
            orderDetails={checkoutDetails}
            cartItems={cartItems}
            totalAmount={calculateTotal()}
            onClose={() => {
               setIsOrderConfirmed(false);
               onClose();
            }}
         />
      );
   }

   //   console.log(checkoutDetails);
   // If not open, return null
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
         <div className="bg-gray-900 rounded-xl shadow-2xl w-11/12 max-w-6xl max-h-[100vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-6 bg-gray-800 border-b border-gray-700">
               <h2 className="text-2xl font-bold text-white flex items-center">
                  <ShoppingCart className="mr-3 text-green-500" size={28} />
                  {orderType === "buyNow" ? "Buy Now" : "Your Cart"}
               </h2>
               <button
                  onClick={toggleOrderModal}
                  className="text-gray-100 border border-gray-400 flex justify-center items-center font-extrabold hover:bg-gray-400 hover:cursor-pointer transition-colors"
               >
                  <X size={40} />
               </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-grow overflow-hidden">
               {/* Items List - Column 1 */}
               <div className="w-1/2 bg-gray-800 border-r border-gray-700 overflow-y-auto">
                  <div className="py-1 px-4">
                     {cartItems.length === 0 ? (
                        <div className="text-center text-gray-500 py-10">
                           {orderType === "buyNow"
                              ? "No items to purchase"
                              : "Your cart is empty"}
                        </div>
                     ) : (
                        cartItems.map((item) => (
                           <div
                              key={item.id}
                              className="flex items-center border-b border-gray-700 px-4 py-4 hover:bg-gray-700 transition-colors"
                           >
                              <img
                                 src={item.imageUrl}
                                 alt={item.name}
                                 className="w-20 h-20 object-contain mr-6 rounded-md"
                              />

                              <div className="flex-grow">
                                 <h3 className="font-semibold text-white">{item.name}</h3>
                                 <p className="text-gray-400">
                                    ${(item.price || 0).toFixed(2)} each
                                 </p>
                              </div>

                              <div className="flex items-center space-x-3 mr-6">
                                 <button
                                    onClick={() =>
                                       onQuantityChange(item.id, (item.quantity || 1) - 1)
                                    }
                                    className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
                                 >
                                    <Minus size={16} />
                                 </button>
                                 <span className="font-semibold text-white">
                                    {item.quantity || 1}
                                 </span>
                                 <button
                                    onClick={() =>
                                       onQuantityChange(item.id, (item.quantity || 1) + 1)
                                    }
                                    className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
                                 >
                                    <Plus size={16} />
                                 </button>
                              </div>

                              <div className="font-semibold text-white mr-6">
                                 ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                              </div>

                              <button
                                 onClick={() => onRemoveItem(item.id)}
                                 className="text-red-500 hover:text-red-400 transition-colors"
                              >
                                 <Trash2 size={20} />
                              </button>
                           </div>
                        ))
                     )}
                  </div>
               </div>

               {/* Shipping Details - Column 2 */}
               <div className="w-1/2 bg-gray-900 p-6 overflow-y-auto">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                     Shipping Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="col-span-2 md:col-span-1">
                        <label className="text-gray-400 text-sm mb-1 block">
                           First Name
                        </label>
                        <input
                           type="text"
                           name="firstName"
                           value={checkoutDetails.firstName}
                           onChange={handleInputChange}
                           placeholder="First Name"
                           className={`w-full border-2 bg-gray-800 text-white p-2 rounded ${validationErrors.firstName
                                 ? "border-red-500"
                                 : "border-gray-700"
                              }`}
                        />
                        {validationErrors.firstName && (
                           <p className="text-red-500 text-sm mt-1">
                              {validationErrors.firstName}
                           </p>
                        )}
                     </div>
                     <div className="col-span-2 md:col-span-1">
                        <label className="text-gray-400 text-sm mb-1 block">
                           Last Name
                        </label>
                        <input
                           type="text"
                           name="lastName"
                           value={checkoutDetails.lastName}
                           onChange={handleInputChange}
                           placeholder="Last Name"
                           className={`w-full border-2 bg-gray-800 text-white p-2 rounded ${validationErrors.lastName
                                 ? "border-red-500"
                                 : "border-gray-700"
                              }`}
                        />
                        {validationErrors.lastName && (
                           <p className="text-red-500 text-sm mt-1">
                              {validationErrors.lastName}
                           </p>
                        )}
                     </div>
                     <div className="col-span-2">
                        <label className="text-gray-400 text-sm mb-1 block">
                           Email Address
                        </label>
                        <input
                           type="email"
                           name="email"
                           value={checkoutDetails.email}
                           onChange={handleInputChange}
                           placeholder="Email Address"
                           className={`w-full border-2 bg-gray-800 text-white p-2 rounded ${validationErrors.email
                                 ? "border-red-500"
                                 : "border-gray-700"
                              }`}
                        />
                        {validationErrors.email && (
                           <p className="text-red-500 text-sm mt-1">
                              {validationErrors.email}
                           </p>
                        )}
                     </div>
                     <div className="col-span-2">
                        <label className="text-gray-400 text-sm mb-1 block">
                           Street Address
                        </label>
                        <input
                           type="text"
                           name="address"
                           value={checkoutDetails.address}
                           onChange={handleInputChange}
                           placeholder="Street Address"
                           className={`w-full border-2 bg-gray-800 text-white p-2 rounded ${validationErrors.address
                                 ? "border-red-500"
                                 : "border-gray-700"
                              }`}
                        />
                        {validationErrors.address && (
                           <p className="text-red-500 text-sm mt-1">
                              {validationErrors.address}
                           </p>
                        )}
                     </div>
                     <div className="col-span-2 md:col-span-1">
                        <label className="text-gray-400 text-sm mb-1 block">City</label>
                        <input
                           type="text"
                           name="city"
                           value={checkoutDetails.location.city}
                           onChange={handleInputChange}
                           placeholder="City"
                           className={`w-full border-2 bg-gray-800 text-white p-2 rounded ${validationErrors.city ? "border-red-500" : "border-gray-700"
                              }`}
                        />
                        {validationErrors.city && (
                           <p className="text-red-500 text-sm mt-1">
                              {validationErrors.city}
                           </p>
                        )}
                     </div>
                     <div className="col-span-2 md:col-span-1">
                        <label className="text-gray-400 text-sm mb-1 block">
                           State/Province
                        </label>
                        <input
                           type="text"
                           name="state"
                           value={checkoutDetails.location.state}
                           onChange={handleInputChange}
                           placeholder="State/Province"
                           className={`w-full border-2 bg-gray-800 text-white p-2 rounded ${validationErrors.state
                                 ? "border-red-500"
                                 : "border-gray-700"
                              }`}
                        />
                        {validationErrors.state && (
                           <p className="text-red-500 text-sm mt-1">
                              {validationErrors.state}
                           </p>
                        )}
                     </div>
                     <div className="col-span-2 md:col-span-1">
                        <label className="text-gray-400 text-sm mb-1 block">
                           Postal Code
                        </label>
                        <input
                           type="text"
                           name="district"
                           value={checkoutDetails.location.district}
                           onChange={handleInputChange}
                           placeholder="District"
                           className={`w-full border-2 bg-gray-800 text-white p-2 rounded ${validationErrors.district
                                 ? "border-red-500"
                                 : "border-gray-700"
                              }`}
                        />
                        {validationErrors.district && (
                           <p className="text-red-500 text-sm mt-1">
                              {validationErrors.district}
                           </p>
                        )}
                     </div>
                     <div className="col-span-2 md:col-span-1">
                        <label className="text-gray-400 text-sm mb-1 block">
                           Postal Code
                        </label>
                        <input
                           type="text"
                           name="postalCode"
                           value={checkoutDetails.location.postalCode}
                           onChange={handleInputChange}
                           placeholder="Postal Code"
                           className={`w-full border-2 bg-gray-800 text-white p-2 rounded ${validationErrors.postalCode
                                 ? "border-red-500"
                                 : "border-gray-700"
                              }`}
                        />
                        {validationErrors.postalCode && (
                           <p className="text-red-500 text-sm mt-1">
                              {validationErrors.postalCode}
                           </p>
                        )}
                     </div>
                     <div className="col-span-2 md:col-span-1">
                        <label className="text-gray-400 text-sm mb-1 block">
                           Country
                        </label>
                        <select
                           name="country"
                           value={checkoutDetails.location.country}
                           onChange={handleInputChange}
                           className="w-full border-2 bg-gray-800 text-white p-2 rounded border-gray-700"
                        >
                           <option value="">Select Country</option>
                           <option value={checkoutDetails.location.country}>
                              Default: {checkoutDetails.location.country}
                           </option>
                           <option value="US">United States</option>
                           <option value="CA">Canada</option>
                           {/* Add more countries as needed */}
                        </select>
                     </div>
                  </div>
               </div>
            </div>

            {/* Footer - Summary and Checkout */}
            <div className="bg-gray-800 p-6 border-t border-gray-700">
               <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-6">
                     <div>
                        <span className="text-gray-400 mr-2">Total Items:</span>
                        <span className="font-semibold text-white">{totalItems}</span>
                     </div>
                     <div>
                        <span className="text-xl font-bold text-white mr-2">
                           Total Price:
                        </span>
                        <span className="text-2xl font-bold text-green-500">
                           ${calculateTotal()}
                        </span>
                     </div>
                  </div>

                  <button
                     onClick={handleOrderSubmission}
                     disabled={cartItems.length === 0}
                     className="bg-green-600 text-white py-3 px-6 rounded-lg hover:cursor-pointer hover:bg-green-800 transition-colors 
                  flex items-center space-x-3 disabled:bg-gray-600"
                  >
                     <CreditCard size={20} />
                     <span>
                        {orderType === "buyNow"
                           ? "Confirm Purchase"
                           : "Proceed to Checkout"}
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Order;
