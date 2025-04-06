import React, { useState, useEffect } from "react";
import UploadPrescription from "./UploadPrescription";
import C0 from "../Ecommerce App assets/C1.jpg";
import C1 from "../Ecommerce App assets/C2.png";
import C3 from "../Ecommerce App assets/C3.avif";
import C2 from "../Ecommerce App assets/C4.png";
import C4 from "../Ecommerce App assets/C5.jpg";

const HeroSection = () => {
   const [activeSlide, setActiveSlide] = useState(0);
   const totalSlides = 5; // Increased from 3 to 5 slides

   // Auto-rotate carousel
   useEffect(() => {
      const interval = setInterval(() => {
         setActiveSlide((prev) => (prev + 1) % totalSlides);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
   }, [totalSlides]);

   // Slide data
   const slides = [
      {
         id: 0,
         gradient: "from-green-800/90 to-green-600/50",
         title: "Your Health,",
         highlight: "Our Priority",
         highlightColor: "text-green-200",
         description:
            "Get medicines delivered to your doorstep with just a few clicks. Prescriptions made easy.",
         buttonText: "Shop Now",
         buttonColor: "text-green-700 hover:bg-green-50",
         link: "#discount-store",
      },
      {
         id: 1,
         gradient: "from-blue-800/90 to-blue-600/50",
         title: "Fast Delivery",
         highlight: "In Your Area",
         highlightColor: "text-blue-200",
         description:
            "Same-day delivery for urgent medications. Track your order in real-time.",
         buttonText: "Explore Categories",
         buttonColor: "text-blue-700 hover:bg-blue-50",
         link: "#categories",
      },
      {
         id: 2,
         gradient: "from-purple-800/90 to-purple-600/50",
         title: "Online",
         highlight: "Consultation",
         highlightColor: "text-purple-200",
         description:
            "Connect with certified pharmacists and doctors. Get expert advice for your medications.",
         buttonText: "Consult Now",
         buttonColor: "text-purple-700 hover:bg-purple-50",
         link: "#consultation",
      },
      // New slide 4
      {
         id: 3,
         gradient: "from-amber-800/90 to-amber-600/50",
         title: "Monthly",
         highlight: "Subscriptions",
         highlightColor: "text-amber-200",
         description:
            "Never miss a dose with our automatic refill program. Save up to 20% with regular deliveries.",
         buttonText: "Subscribe & Save",
         buttonColor: "text-amber-700 hover:bg-amber-50",
         link: "#subscriptions",
      },
      // New slide 5
      {
         id: 4,
         gradient: "from-rose-800/90 to-rose-600/50",
         title: "Health",
         highlight: "Screening Tests",
         highlightColor: "text-rose-200",
         description:
            "Home testing kits for diabetes, cholesterol, and more. Early detection for better health outcomes.",
         buttonText: "View Test Kits",
         buttonColor: "text-rose-700 hover:bg-rose-50",
         link: "#health-tests",
      },
   ];

   // Features data
   const features = [
      {
         icon: "🚚",
         title: "Free shipping",
         description: "Enjoy fast and free delivery on orders over $50.",
      },
      {
         icon: "↩️",
         title: "Easy refund",
         description: "Hassle-free returns with a simple refund process.",
      },
      {
         icon: "💬",
         title: "Online support",
         description: "Get prompt assistance through our online chat service.",
      },
      {
         icon: "💳",
         title: "Flexible payment",
         description:
            "Choose from a variety of payment methods for seamless checkout.",
      },
      {
         icon: "⏱️",
         title: "Same-day delivery",
         description:
            "Receive your order quickly with our same-day delivery service.",
      },
      {
         icon: "🔒",
         title: "Secure transactions",
         description:
            "Shop confidently with our secure payment processing system.",
      },
      {
         icon: "📦",
         title: "Product tracking",
         description: "Stay updated with real-time tracking of your orders.",
      },
      {
         icon: "🏆",
         title: "Quality guarantee",
         description: "We ensure top-quality products in every purchase.",
      },
      {
         icon: "💊",
         title: "Genuine medicines",
         description:
            "Access certified, authentic medicines meeting strict standards.",
      },
      {
         icon: "⚡",
         title: "Express Processing",
         description:
            "Experience rapid order processing for a seamless experience.",
      },
      {
         icon: "🎉",
         title: "Seasonal Discounts",
         description: "Unlock special offers and discounts throughout the year.",
      },
      {
         icon: "⭐",
         title: "Loyalty Rewards",
         description:
            "Earn points and enjoy exclusive benefits on every purchase.",
      },
   ];

   const handleFileUpload = (e) => {
      // Handle file upload functionality
      if (e.target.files && e.target.files[0]) {
         // In a real application, you would handle the file upload to server here
         alert(`File "${e.target.files[0].name}" selected. Ready to upload!`);
      }
   };

   return (
      <div
         id="hero-section"
         className="pt-40 pb-10 bg-white"
      >
         {/* Hero Section with Carousel */}
         <section className="container mx-auto px-4 pb-12">
            <div className="relative h-[420px] md:h-[650px] rounded-2xl overflow-hidden shadow-xl mb-2">
               {/* Carousel Slides */}
               {slides.map((slide) => (
                  <div
                     key={slide.id}
                     className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ${activeSlide === slide.id
                           ? "opacity-100"
                           : "opacity-0 pointer-events-none"
                        }`}
                  >
                     <div
                        className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} z-10`}
                     ></div>
                     <img
                        src={slide.id === 0 ? C0 : slide.id === 1 ? C1 : slide.id === 2 ? C2 : slide.id === 3 ? C3 : C4}
                        alt="Slide background"
                        className="size-full object-cover"
                     />
                     <div className="absolute inset-0 flex flex-col justify-center z-20 p-8 md:p-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                           {slide.title} <br />
                           <span className={slide.highlightColor}>
                              {slide.highlight}
                           </span>
                        </h1>
                        <p className="text-white text-lg md:text-xl max-w-md mb-8">
                           {slide.description}
                        </p>
                        <a
                           href={slide.link}
                           className={`inline-flex items-center gap-2 bg-white ${slide.buttonColor} transition-colors px-6 py-3 rounded-full font-semibold w-fit`}
                        >
                           {slide.buttonText}
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="ml-1"
                           >
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
               ))}

               {/* Slide Navigation Dots */}
               <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
                  {slides.map((slide) => (
                     <button
                        key={slide.id}
                        onClick={() => setActiveSlide(slide.id)}
                        className={`h-3 rounded-full transition-all ${activeSlide === slide.id ? "w-8 bg-white" : "w-3 bg-white/50"
                           }`}
                        aria-label={`Go to slide ${slide.id + 1}`}
                     ></button>
                  ))}
               </div>
            </div>
         </section>

         {/* Features Section */}
         <section id="features-section" className="container mx-auto px-4 pt-36 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className="flex items-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl transition-shadow"
                  >
                     <div className="size-fit p-3 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 mr-4">
                        <span className="text-2xl">{feature.icon}</span>
                     </div>
                     <div>
                        <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Upload Prescription Section */}
         <UploadPrescription/>
      </div>
   );
};

export default HeroSection;
