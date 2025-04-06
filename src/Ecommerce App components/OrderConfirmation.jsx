import React, { useState, useEffect } from "react";
import { CheckCircle2, X, CreditCard } from "lucide-react";
import GpayIconImage from "../Ecommerce App assets/GpayIcon.jpg";

const OrderConfirmation = ({
   orderDetails,
   cartItems,
   totalAmount,
   onClose,
}) => {
   const [paymentMethod, setPaymentMethod] = useState("gpay");
   const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
   const [isGooglePayReady, setIsGooglePayReady] = useState(false);
   const [paymentsClient, setPaymentsClient] = useState(null);

   // Check if Google Pay is available and supported
   useEffect(() => {
      const initializeGooglePayAPI = async () => {
         if (window.google && window.google.payments) {
            try {
               const client = new window.google.payments.api.PaymentsClient({
                  environment: "TEST", // Change to 'PRODUCTION' for live transactions
                  merchantInfo: {
                     // Replace with your actual merchant ID
                     merchantId: "YOUR_MERCHANT_ID",
                  },
               });

               // Check if Google Pay is supported
               const isReadyToPayRequest = {
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                     {
                        type: "CARD",
                        parameters: {
                           allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                           allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX"],
                        },
                     },
                  ],
               };

               const response = await client.isReadyToPay(isReadyToPayRequest);

               if (response.result) {
                  setIsGooglePayReady(true);
                  setPaymentsClient(client);
               }
            } catch (error) {
               console.error("Google Pay initialization error:", error);
               setIsGooglePayReady(false);
            }
         }
      };

      // Load Google Pay script dynamically if not already loaded
      if (!window.google || !window.google.payments) {
         const script = document.createElement("script");
         script.src = "https://pay.google.com/gp/p/js/pay.js";
         script.async = true;
         script.onload = initializeGooglePayAPI;
         document.body.appendChild(script);
      } else {
         initializeGooglePayAPI();
      }
   }, []);

   // Prepare payment data request
   const getGooglePaymentDataRequest = () => {
      return {
         apiVersion: 2,
         apiVersionMinor: 0,
         allowedPaymentMethods: [
            {
               type: "CARD",
               parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX"],
               },
               tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                     // Replace with your payment gateway credentials
                     gateway: "example",
                     gatewayMerchantId: "YOUR_GATEWAY_MERCHANT_ID",
                  },
               },
            },
         ],
         transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPrice: totalAmount.toString(), // Ensure this is a string
            currencyCode: "USD",
         },
         merchantInfo: {
            // Replace with your merchant name
            merchantName: "Your Store Name",
         },
      };
   };

   // Handle Google Pay payment process
   const handlePaymentProcess = async () => {
      if (!paymentsClient || !isGooglePayReady) {
         alert("Google Pay is not available.");
         return;
      }

      try {
         setIsPaymentProcessing(true);

         // Request payment data
         const paymentDataRequest = getGooglePaymentDataRequest();
         const paymentData = await paymentsClient.loadPaymentData(
            paymentDataRequest
         );

         // Process the payment data
         if (paymentData) {
            // Here you would typically send the paymentData to your backend for processing
            console.log("Payment Data:", paymentData);

            // Example of how you might process the payment
            const processPayment = async () => {
               try {
                  // Replace with your actual payment processing endpoint
                  const response = await fetch("/api/process-payment", {
                     method: "POST",
                     headers: {
                        "Content-Type": "application/json",
                     },
                     body: JSON.stringify({
                        paymentData: paymentData,
                        orderDetails: orderDetails,
                        cartItems: cartItems,
                        totalAmount: totalAmount,
                     }),
                  });

                  if (!response.ok) {
                     throw new Error("Payment processing failed");
                  }

                  const result = await response.json();
                  return result;
               } catch (error) {
                  console.error("Payment processing error:", error);
                  throw error;
               }
            };

            // Process payment and handle response
            await processPayment();

            // Show success message
            alert("Payment Processed Successfully!");
         }
      } catch (error) {
         console.error("Google Pay error:", error);

         // Handle different types of errors
         if (error.statusCode === "CANCELED") {
            alert("Payment was canceled.");
         } else {
            alert("Payment Failed. Please try again.");
         }
      } finally {
         setIsPaymentProcessing(false);
      }
   };

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
         <div className="bg-gray-900 rounded-xl shadow-2xl w-11/12 max-w-6xl h-[90vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-6 bg-gray-800 border-b border-gray-700 flex-shrink-0">
               <h2 className="text-2xl font-bold text-white flex items-center">
                  <CheckCircle2 className="mr-3 text-green-500" size={28} />
                  Order Confirmation
               </h2>
               <button
                  onClick={onClose}
                  className="text-gray-100 border border-gray-400 flex justify-center items-center font-extrabold hover:bg-gray-400 hover:cursor-pointer transition-colors"
               >
                  <X size={40} />
               </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-grow overflow-hidden">
               {/* Order Summary - Column 1 */}
               <div className="w-1/2 bg-gray-800 border-r border-gray-700 overflow-y-auto p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                     Order Summary
                  </h3>
                  <div className="space-y-4 pr-2">
                     {" "}
                     {/* Added space between items and right padding */}
                     {cartItems.map((item) => (
                        <div
                           key={item.id}
                           className="flex items-center border-b border-gray-700 pb-4 last:border-b-0 hover:bg-gray-700 transition-colors"
                        >
                           <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="w-20 h-20 object-contain mr-6 rounded-md"
                           />

                           <div className="flex-grow">
                              <h3 className="font-semibold text-white">{item.name}</h3>
                              <p className="text-gray-400">
                                 ${(item.price || 0).toFixed(2)} x {item.quantity || 1}
                              </p>
                           </div>

                           <div className="font-semibold text-white">
                              ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Payment Details - Column 2 */}
               <div className="w-1/2 bg-gray-900 p-6 overflow-y-auto">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                     Payment Details
                  </h3>

                  <div className="space-y-4 pr-2">
                     {" "}
                     {/* Added right padding for scrollbar */}
                     <div>
                        <h4 className="text-lg font-medium text-gray-300 mb-2">
                           Shipping Information
                        </h4>
                        <div className="bg-gray-800 p-4 rounded-lg">
                           <p className="text-white">
                              {orderDetails.firstName} {orderDetails.lastName}
                           </p>
                           <p className="text-gray-400">{orderDetails.email}</p>
                           <p className="text-gray-400">{orderDetails.address}</p>
                           <p className="text-gray-400">
                              {orderDetails.location.city}, {orderDetails.location.state}{" "}
                              {orderDetails.location.postalCode}
                           </p>
                           <p className="text-gray-400">
                              {orderDetails.location.country}
                           </p>
                        </div>
                     </div>
                     <div>
                        <h4 className="text-lg font-medium text-gray-300 mb-2">
                           Payment Method
                        </h4>
                        <div className="flex space-x-4">
                           <button
                              onClick={() => setPaymentMethod("gpay")}
                              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${paymentMethod === "gpay"
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                 } hover:cursor-pointer hover:${paymentMethod === "gpay" ? "bg-green-800" : "bg-gray-800"}`}
                           >
                              <img
                                 src={GpayIconImage}
                                 alt="Google Pay"
                                 className="w-6 h-6 object-fill"
                              />
                              <span>Google Pay</span>
                           </button>
                        </div>
                     </div>
                     <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                        <div>
                           <span className="text-gray-400">Total Amount</span>
                           <p className="text-2xl font-bold text-green-500">
                              ${totalAmount}
                           </p>
                        </div>
                        <button
                           onClick={handlePaymentProcess}
                           disabled={isPaymentProcessing}
                           className="bg-green-600 text-white py-3 px-6 hover:cursor-pointer rounded-lg hover:bg-green-800 transition-colors 
                           flex items-center space-x-3 disabled:opacity-50"
                        >
                           <CreditCard size={20} />
                           <span>
                              {isPaymentProcessing ? "Processing..." : "Pay Now"}
                           </span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OrderConfirmation;


/*

Key Implementation Notes:

Replace 'YOUR_MERCHANT_ID' with your actual Google Pay merchant ID
Replace 'YOUR_GATEWAY_MERCHANT_ID' with your payment gateway merchant ID
The /api/process-payment endpoint is a placeholder - you'll need to implement your actual backend payment processing logic

Backend Integration Recommendations:

Create a backend endpoint to handle payment verification and processing
Validate payment data received from Google Pay
Process the payment through your payment gateway
Create order in your database
Handle potential errors and edge cases

Additional Steps:

Obtain necessary credentials from Google Pay and your payment gateway
Ensure PCI DSS compliance
Implement proper error handling and logging
Add thorough testing for different payment scenarios

*/