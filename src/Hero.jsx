import React from 'react'

export default function Hero() {

   const features = [
      { emoji: "🚚", title: "Free shipping" },
      { emoji: "↩️", title: "Easy refund" },
      { emoji: "💬", title: "Online support" },
      { emoji: "💳", title: "Flexible payment" },
      { emoji: "⏱️", title: "Same-day delivery" },
      { emoji: "🔒", title: "Secure transactions" },
      { emoji: "📦", title: "Product tracking" },
      { emoji: "🏆", title: "Quality guarantee" },
      { emoji: "💊", title: "Genuine medicines" },
   ];

   
   return (
      < div id='hero-section' className = "pt-32" >
         {/* Hero Section with Videos */ }
         < section className = "container mx-auto px-4 py-8" >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Video 1 */}
               <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <video
                     className="w-full h-full object-cover"
                     autoPlay
                     muted
                     loop
                  >
                     <source src="/api/placeholder/400/320" type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                     <h3 className="text-white font-bold text-xl">
                        Medical Supplies
                     </h3>
                  </div>
               </div>

               {/* Video 2 */}
               <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <video
                     className="w-full h-full object-cover"
                     autoPlay
                     muted
                     loop
                  >
                     <source src="/api/placeholder/400/320" type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                     <h3 className="text-white font-bold text-xl">
                        Health Devices
                     </h3>
                  </div>
               </div>

               {/* Video 3 */}
               <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <video
                     className="w-full h-full object-cover"
                     autoPlay
                     muted
                     loop
                  >
                     <source src="/api/placeholder/400/320" type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                     <h3 className="text-white font-bold text-xl">Supplements</h3>
                  </div>
               </div>
            </div>
            </section >

      {/* Features Section - Expanded to 9 features, 3 columns */ }
      < section className = "container mx-auto px-4 py-12" >
               <h2 className="text-2xl font-bold text-center mb-8">Our Features</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                     <button
                        key={index}
                        className="flex flex-col items-center p-4 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                     >
                        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-green-200">
                           <span className="text-2xl">{feature.emoji}</span>
                        </div>
                        <h3 className="text-sm font-medium">{feature.title}</h3>
                     </button>
                  ))}
               </div>
            </section >
         </div >
      )
}
