import React, { useEffect } from 'react';
import './App.css';
import "font-awesome/css/font-awesome.min.css";
import asideDoc from "./assets/asideDoctor.jpg";
import schedule from "./assets/schedule.jpg";
import mobileApp from "./assets/last.jpg";
import logo from "./assets/Logo.svg";
import accdOne from "./assets/accd1.png";
import accdTwo from "./assets/accd2.png";
import accdThree from "./assets/accd3.png";
import { useNavigate } from 'react-router-dom';


const App = () => {
   const navigate = useNavigate();
   useEffect(() => {
      // Mobile Menu Toggle
      const menuButton = document.querySelector('.fa-bars').parentElement;
      const mobileMenu = document.querySelector('.hidden.bg-white.shadow-lg');

      menuButton.addEventListener('click', function () {
         mobileMenu.classList.toggle('hidden');
      });

      // Scroll Reveal Animation
      const revealElements = document.querySelectorAll('.scroll-reveal');

      function checkScroll() {
         revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
               element.classList.add('active');
            }
         });
      }

      window.addEventListener('scroll', checkScroll);
      checkScroll(); // Check on initial load

      // Testimonial Slider Controls
      const dots = document.querySelectorAll('.rounded-full.bg-purple-300, .rounded-full.bg-purple-800');
      const testimonialSlide = document.querySelector('.testimonial-slide');

      dots.forEach((dot, index) => {
         dot.addEventListener('click', function () {
            // Reset all dots
            dots.forEach(d => d.classList.remove('bg-purple-800'));
            dots.forEach(d => d.classList.add('bg-purple-300'));

            // Set active dot
            this.classList.remove('bg-purple-300');
            this.classList.add('bg-purple-800');

            // Move slide
            testimonialSlide.style.transform = `translateX(-${index * 100}%)`;

            // Stop animation temporarily
            testimonialSlide.style.animation = 'none';
            setTimeout(() => {
               testimonialSlide.style.animation = '';
            }, 5000);
         });
      });
   }, []);

   return (
      <div className="font-poppins scroll-smooth">
         {/* Header */}
         <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-3">
               <div className="flex justify-between items-center">
                  <div className="flex items-center">
                     <img src= {logo} alt="Logo" className="h-12 w-12 rounded-full mr-2 bg-purple-600 text-white" />
                     <span className="text-2xl font-bold text-purple-800">DoctorSoul+</span>
                  </div>
                  <nav className="hidden md:flex space-x-8">
                     <a href="#" className="text-purple-900 font-medium hover:text-purple-600 transition-colors">Home</a>
                     <a href="#services" className="text-gray-600 font-medium hover:text-purple-600 transition-colors">Services</a>
                     <a href="#about" className="text-gray-600 font-medium hover:text-purple-600 transition-colors">About</a>
                     <a href="#tests" className="text-gray-600 font-medium hover:text-purple-600 transition-colors">Clinical Tests</a>
                     <a href="#knowledge" className="text-gray-600 font-medium hover:text-purple-600 transition-colors">Knowledge Center</a>
                     <a href="#contact" className="text-gray-600 font-medium hover:text-purple-600 transition-colors">Contact Us</a>
                  </nav>
                  <div className="flex items-center space-x-3">
                     <a href="tel:+918888885598" className="hidden md:flex items-center text-purple-800 font-semibold">
                        <i className="fas fa-phone-alt mr-2"></i>
                        +91 8388985598
                     </a>
                     <button className="btn-primary text-white px-4 py-2 rounded-full font-medium transition-all hover:shadow-lg" onClick={()=>navigate('/LoginChoice')}>Login</button>
                     <button className="md:hidden text-purple-800 focus:outline-none">
                        <i className="fas fa-bars text-2xl"></i>
                     </button>
                  </div>
               </div>
            </div>
         </header>

         {/* Mobile Menu */}
         <div className="hidden bg-white shadow-lg absolute z-40 w-full py-4 px-6 space-y-4">
            <a href="#" className="block text-purple-900 font-medium">Home</a>
            <a href="#services" className="block text-gray-600 font-medium">Services</a>
            <a href="#about" className="block text-gray-600 font-medium ">About</a>
            <a href="#tests" className="block text-gray-600 font-medium">Clinical Tests</a>
            <a href="#knowledge" className="block text-gray-600 font-medium">Knowledge Center</a>
            <a href="#contact" className="block text-gray-600 font-medium">Contact Us</a>
            <a href="tel:+919999999999" className="block text-purple-800 font-semibold">
               <i className="fas fa-phone-alt mr-2"></i>
               +91 9945689820
            </a>
            <button className="btn-primary text-white px-4 py-2 rounded-full font-medium w-full" >Login</button>
         </div>

         {/* Hero Section */}
         <section className="gradient-bg">
            <div className="container mx-auto px-4 py-16 md:py-24">
               <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-10 md:mb-0 animate_animated animate_fadeInLeft">
                     <h1 className="text-4xl md:text-5xl font-bold text-purple-900 leading-tight">
                        Call your Doctor now<br />
                        <span className="text-purple-700">Simplified For Everyone</span>
                     </h1>
                     <p className="mt-4 text-gray-700 text-lg">
                        HealthCare is committed to your wellness with our comprehensive healthcare solutions. Get expert
                        medical advice from the comfort of your home.
                     </p>
                     <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="btn-primary text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg animate-pulse">
                           Get a Free Consultation
                        </button>
                        <button className="bg-white text-purple-800 px-6 py-3 rounded-full font-medium border border-purple-300 hover:bg-gray-100 transition-all">
                           <i className="fas fa-play-circle mr-2"></i> Watch How It Works
                        </button>
                     </div>
                  </div>
                  <div className="md:w-1/2 relative animate_animated animate_fadeInRight">
                     <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-300 rounded-full opacity-50 animate-float"></div>
                     <img src={asideDoc} alt="Doctor" className="relative z-10 rounded-2xl shadow-2xl animate-float" />
                  </div>
               </div>
            </div>
         </section>

         {/* Services Section */}
         <section id="services" className="py-16 bg-white">
            <div className="container mx-auto px-4">
               <div className="text-center mb-16 scroll-reveal">
                  <h2 className="text-3xl font-bold text-purple-900">Your health, comprehensively cared for with our<br />online medication services</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Service Cards */}
                  {[
                     { title: "Online Consultation", description: "Connect with doctors instantly from anywhere at any time", icon: "fas fa-stethoscope" },
                     { title: "Emergency Assistance", description: "24/7 emergency support with quick response time", icon: "fas fa-ambulance" },
                     { title: "Rapid Medicine Delivery", description: "Doorstep delivery of medicines within 60 minutes", icon: "fas fa-pills" },
                     { title: "Home Nurse", description: "Skilled nursing care in the comfort of your home", icon: "fas fa-user-nurse" },
                     { title: "Home Lab Test", description: "Sample collection and testing from your doorstep", icon: "fas fa-vial" },
                     { title: "Hospital-free Consultancy", description: "Comprehensive care without hospital visits", icon: "fas fa-hospital" },
                     { title: "Health Monitoring", description: "Regular check-ups and continuous health tracking", icon: "fas fa-heartbeat" },
                     { title: "Advanced Diagnostics", description: "Cutting-edge diagnostic tools and technologies", icon: "fas fa-dna" },
                  ].map((service, index) => (
                     <div key={index} className="bg-white rounded-xl shadow-lg p- 6 transition-all duration-300 card-hover service-card scroll-reveal">
                        <div className="icon-container w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto transition-all duration-300">
                           <i className={`${service.icon} text-purple-800 text-2xl transition-all duration-300`}></i>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-purple-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 text-center">{service.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Clinical Tests Section */}
         <section id="tests" className="gradient-bg py-16">
            <div className="container mx-auto px-4">
               <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-10 md:mb-0 scroll-reveal">
                     <h2 className="text-3xl font-bold text-purple-900 mb-6">With more than 80+ tests covered and reliable results, you can be sure that your health is in the best hands.</h2>
                     <p className="text-gray-700 mb-6">
                        With medical professionals in more than 100+ countries you'll like customer satisfaction rate. HealthCare offers reliable health information. With an extensive network of doctors, we are able to offer a wide range of high-quality medical tests.
                     </p>
                     <ul className="space-y-4">
                        <li className="flex items-center">
                           <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                              <i className="fas fa-check text-white text-sm"></i>
                           </div>
                           <span className="text-gray-700">100% free app designed to help you find the right test for you</span>
                        </li>
                        <li className="flex items-center">
                           <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                              <i className="fas fa-check text-white text-sm"></i>
                           </div>
                           <span className="text-gray-700">Available 500+ Labs with specialists</span>
                        </li>
                     </ul>
                     <button className="btn-primary text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg mt-8">
                        See All Tests
                     </button>
                  </div>
                  <div className="md:w-1/2 md:pl-12 scroll-reveal">
                     <div className="bg-white p-6 rounded-xl shadow-lg relative animate-float">
                        <h3 className="text-xl font-semibold text-purple-900 mb-4">Available Tests</h3>
                        <div className="space-y-4">
                           {[
                              { title: "Full Blood Test", description: "Complete blood count analysis", price: "$45", icon: "fas fa-microscope" },
                              { title: "Cardiac Profile", description: "Heart health assessment", price: "$75", icon: "fas fa-heartbeat" },
                              { title: "Respiratory Function", description: "Lung capacity and function test", price: "$60", icon: "fas fa-lungs" },
                           ].map((test, index) => (
                              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                 <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                                    <i className={test.icon + " text-purple-800"}></i>
                                 </div>
                                 <div>
                                    <h4 className="font-medium text-purple-900">{test.title}</h4>
                                    <p className="text-sm text-gray-600">{test.description}</p>
                                 </div>
                                 <div className="ml-auto">
                                    <span className="text-purple-800 font-semibold">{test.price}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Appointment Section */}
         <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
               <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-10 md:mb-0 scroll-reveal">
                     <img src={schedule} alt="Doctor Appointment" className="rounded -xl shadow-xl" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 scroll-reveal">
                     <div className="inline-block px-4 py-1 bg-purple-100 rounded-full text-purple-800 font-medium text-sm mb-4">
                        Make a Schedule
                     </div>
                     <h2 className="text-3xl font-bold text-purple-900 mb-6">Make a schedule in advance with the available doctor</h2>
                     <p className="text-gray-700 mb-8">
                        Organizing is a very positive process, especially if you're not feeling one of your health and having regular check-ups. HealthCare makes it simple for everyone to schedule doctor's appointment.
                     </p>
                     <div className="space-y-4 mb-8">
                        <div className="flex items-center">
                           <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                              <i className="fas fa-check text-white text-sm"></i>
                           </div>
                           <span className="text-gray-700">Make a schedule online is easy</span>
                        </div>
                        <div className="flex items-center">
                           <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                              <i className="fas fa-check text-white text-sm"></i>
                           </div>
                           <span className="text-gray-700">Easy to reschedule with minimal fee</span>
                        </div>
                     </div>
                     <button className="btn-primary text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg">
                        Make Your Schedule
                     </button>
                  </div>
               </div>
            </div>
         </section>

         {/* Testimonials Section */}
         <section className="gradient-bg py-16">
            <div className="container mx-auto px-4">
               <div className="text-center mb-12 scroll-reveal">
                  <h2 className="text-3xl font-bold text-purple-900 mb-2">Our patients feedback about us</h2>
                  <p className="text-gray-700">Their experience after using our service</p>
               </div>
               <div className="testimonial-slider">
                  <div className="testimonial-slide flex">
                     {/* Testimonial 1 */}
                     {[
                        { name: "David Mitchell", source: "Google", feedback: "DoctorSoul+ gives me best service - home collection and with in time reports my doctor is also told reports are very accurate. Thanks HealthCare.", rating: 5, image: "https://randomuser.me/api/portraits/men/61.jpg" },
                        { name: "Sarah Johnson", source: "Facebook", feedback: "The online consultation feature saved me so much time. The doctor was professional and the prescribed medication was delivered within an hour!", rating: 4.5, image: "https://randomuser.me/api/portraits/women/60.jpg" },
                        { name: "Michael Rodriguez", source: "Twitter", feedback: "The home lab test was so convenient. The technician was professional, and I received my results within 24 hours. Highly recommended!", rating: 5, image: "https://randomuser.me/api/portraits/men/60.jpg" },
                     ].map((testimonial, index) => (
                        <div key={index} className="w-full md:w-1/3 px-4">
                           <div className="bg-white p-6 rounded-xl shadow-lg">
                              <div className="flex items-center mb-4">
                                 <img src={testimonial.image} alt="Patient" className="w-16 h-16 rounded-full object-cover mr-4 bg-purple-200" />
                                 <div>
                                    <h4 className="font-semibold text-purple-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.source}</p>
                                 </div>
                                 <div className="ml-auto">
                                    <div className="flex text-yellow-400">
                                       {[...Array(Math.floor(testimonial.rating))].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                       {testimonial.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                                       {[...Array(5 - Math.ceil(testimonial.rating))].map((_, i) => <i key={i} className="far fa-star"></i>)}
                                    </div>
                                 </div>
                              </div>
                              <p className="text-gray-700">{testimonial.feedback}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="flex justify-center mt-8">
                  <button className="w-3 h-3 rounded-full bg-purple-300 mx-1 focus:outline-none"></button>
                  <button className="w -3 h-3 rounded-full bg-purple-800 mx-1 focus:outline-none"></button>
                  <button className="w-3 h-3 rounded-full bg-purple-300 mx-1 focus:outline-none"></button>
               </div>
            </div>
         </section>

         {/* Accreditations Section */}
         <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
               <div className="text-center mb-12 scroll-reveal">
                  <h2 className="text-3xl font-bold text-purple-900 mb-2">Accreditations</h2>
                  <p className="text-gray-700">We are certified by the following organizations</p>
               </div>
               <div className="flex flex-wrap justify-center items-center">
                  {[
                     { src: accdOne, alt: "Certification 1" },
                     { src: accdTwo, alt: "Certification 2" },
                     { src: accdThree, alt: "Certification 3" },
                  ].map((cert, index) => (
                     <div key={index} className="p-6 m-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 scroll-reveal">
                        <img src={cert.src} alt={cert.alt} className="h-20" />
                     </div>
                  ))}
               </div>
               <div className="mt-12 text-center scroll-reveal">
                  <img src="https://images.unsplash.com/photo-1705727210721-961cc64a6895?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Laboratory" className="rounded-xl shadow-xl inline-block w-48 h-24" />
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="gradient-bg py-16">
            <div className="container mx-auto px-4">
               <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 scroll-reveal">
                  <div className="flex flex-col md:flex-row items-center">
                     <div className="md:w-2/3 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold text-purple-900 mb-4">Ready to take control of your health?</h2>
                        <p className="text-gray-700 mb-6">
                           Join thousands of satisfied users who have transformed their healthcare experience with HealthCare.
                           Download our app today and start your journey to better health.
                        </p>
                        <div className="flex space-x-4 mt-6">
                           <button className="flex items-center bg-black text-white px-6 py-3 rounded-full">
                              <i className="fab fa-apple text-2xl mr-3"></i>
                              <div className="text-left">
                                 <div className="text-xs">Download on the</div>
                                 <div className="text-sm font-semibold">App Store</div>
                              </div>
                           </button>
                           <button className="flex items-center bg-black text-white px-6 py-3 rounded-full">
                              <i className="fab fa-google-play text-2xl mr-3"></i>
                              <div className="text-left">
                                 <div className="text-xs">Get it on</div>
                                 <div className="text-sm font-semibold">Google Play</div>
                              </div>
                           </button>
                        </div>
                     </div>
                     <div className="md:w-1/3 flex justify-center">
                        <img src= {mobileApp} alt="Mobile App" className="h-64 animate-float" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Footer */}
         <footer className="bg-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                  {/* Company Info */}
                  <div>
                     <h3 className="text-lg font-semibold text-purple-900 mb-4">Company Info</h3>
                     <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">About Us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">Careers</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">We are hiring</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">Blog</a></li>
                     </ul>
                  </div>

                  {/* Features */}
                  <div>
                     <h3 className="text-lg font-semibold text-purple-900 mb-4">Features</h3>
                     <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">Business Marketing</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">User  Analytics</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">Live Chat</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">Unlimited Support</a></li>
                     </ul>
                  </div>

                  {/* Legal */}
                  <div>
                     <h3 className="text-lg font-semibold text-purple-900 mb-4">Legal</h3>
                     <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">Terms & Conditions</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">We are hiring</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">Blog</a></li>
                     </ul>
                  </div>

                  {/* Resources */}
                  <div>
                     <h3 className="text-lg font-semibold text-purple-900 mb-4">Resources</h3>
                     <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">IOS & Android</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">Watch a Demo</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">Customers</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-800 transition-colors">API</a></li>
                     </ul>
                  </div>

                  {/* Get In Touch */}
                  <div>
                     <h3 className="text-lg font-semibold text-purple-900 mb-4">Get In Touch</h3>
                     <ul className="space-y-2">
                        <li className="flex items-center">
                           <i className="fas fa-phone-alt text-purple-800 mr-3"></i>
                           <a href="tel:+919999999999" className="text-gray-600 hover:text-purple-800 transition-colors">(+91) 994568523453</a>
                        </li>
                        <li className="flex items-center">
                           <i className="fas fa-envelope text-purple-800 mr-3"></i>
                           <a href="mailto:info@healthcare.com" className="text-gray-600 hover:text-purple-800 transition-colors">info@DoctorSoul+.com</a>
                        </li>
                        <li className="flex items-center">
                           <i className="fas fa-map-marker-alt text-purple-800 mr-3"></i>
                           <span className="text-gray-600">123 barabajar Street, Medical City</span>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="border-t border-gray-200 pt-8">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                     <p className="text-gray-600 mb-4 md:mb-0">© 2023 HealthCare. All rights reserved.</p>
                     <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 hover:bg-purple-800 hover:text-white transition-colors">
                           <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 hover:bg-purple-800 hover:text-white transition-colors">
                           <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 hover:bg-purple-800 hover:text-white transition-colors">
                           <i className="fab fa-instagram"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default App;