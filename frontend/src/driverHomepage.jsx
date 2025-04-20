

import { Helmet } from 'react-helmet';

export default function DoctorSoulDelivery() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DoctorSoul+ Delivery | Deliver Medicines & Earn</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: {
                        DEFAULT: '#16a34a', // green-600
                        dark: '#15803d',    // green-700
                        light: '#22c55e',   // green-500
                      },
                      secondary: {
                        DEFAULT: '#0f766e', // teal-700
                        dark: '#0f766e',    // teal-800
                        light: '#14b8a6',   // teal-500
                      }
                    }
                  }
                }
              }
            `
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
              
              body {
                font-family: 'Inter', sans-serif;
              }
              
              .hero-gradient {
                background: linear-gradient(90deg, rgba(22,163,74,0.05) 0%, rgba(22,163,74,0.1) 100%);
              }
            `
          }}
        />
      </Helmet>

      {/* Since a React component cannot have a <body> tag, we wrap everything in a div */}
      <div className="bg-white">
        {/* Navigation Bar */}
        <header className="bg-black text-white">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center gap-2 mr-10">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-sm">
                    D+
                  </div>
                  <span className="text-xl font-bold">DoctorSoul+</span>
                </a>

                {/* Main Navigation */}
                <nav className="hidden md:flex space-x-8">
                  <a href="#" className="py-2 hover:text-primary-light transition-colors">Order</a>
                  <a href="#" className="py-2 font-medium hover:text-primary-light transition-colors">Deliver</a>
                  <a href="#" className="py-2 hover:text-primary-light transition-colors">Business</a>
                  <div className="relative group">
                    <a href="#" className="py-2 flex items-center hover:text-primary-light transition-colors">
                      About <i className="fas fa-chevron-down ml-2 text-xs"></i>
                    </a>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Story</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">How It Works</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Newsroom</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Careers</a>
                    </div>
                  </div>
                </nav>
              </div>

              {/* Right Navigation */}
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center">
                  <button className="flex items-center text-sm">
                    <span className="mr-2">EN</span>
                    <i className="fas fa-globe text-sm"></i>
                  </button>
                </div>
                <a href="#" className="hidden md:block text-sm hover:text-primary-light transition-colors">Help</a>
                <a href="#" className="hidden md:block text-sm hover:text-primary-light transition-colors">Log in</a>
                <a href="#" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">Sign up</a>
                <button className="md:hidden text-white">
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Secondary Navigation */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="mr-8 py-4">
                <span className="text-xl font-bold">Deliver</span>
              </div>
              <nav className="hidden md:flex overflow-x-auto whitespace-nowrap">
                <a href="#" className="px-4 py-4 text-sm text-gray-700 hover:text-primary border-b-2 border-primary">Overview</a>
                <a href="#" className="px-4 py-4 text-sm text-gray-700 hover:text-primary">Requirements</a>
                <a href="#" className="px-4 py-4 text-sm text-gray-700 hover:text-primary">Delivery partner</a>
                <a href="#" className="px-4 py-4 text-sm text-gray-700 hover:text-primary">Delivery basics</a>
                <a href="#" className="px-4 py-4 text-sm text-gray-700 hover:text-primary">Earnings</a>
                <a href="#" className="px-4 py-4 text-sm text-gray-700 hover:text-primary">Safety</a>
                <a href="#" className="px-4 py-4 text-sm text-gray-700 hover:text-primary">DoctorSoul+ Pro</a>
                <a href="#" className="px-4 py-4 text-sm text-gray-700 hover:text-primary">Contact us</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  The DoctorSoul+ delivery app, your resource on the road
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  The DoctorSoul+ delivery app is easy to use and provides you with information to help you make decisions and get ahead. We collaborated with delivery partners and healthcare professionals around the world to build it. See for yourself.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                    Get started
                  </a>
                  <a href="#" className="text-black hover:text-primary transition-colors flex items-center">
                    Already have an account? Sign in
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img src="image\Revolutionize-Healthcare.png" alt="Doctor+ Delivery App" className="rounded-lg shadow-xl w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
                <div className="relative">
                  <img src="image\Untitled design (8).png" alt="Delivery Map" className="rounded-lg shadow-xl w-full" />
                  <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg w-64">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-map-marker-alt text-white"></i>
                      </div>
                      <span className="text-sm font-medium">You're online</span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-md flex items-start">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-2 mt-1">
                        <i className="fas fa-bell text-white text-xs"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Opportunity nearby</p>
                        <p className="text-xs text-gray-600">More requests than usual</p>
                      </div>
                      <button className="ml-auto text-gray-400 hover:text-gray-600">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                <div className="mb-6">
                  <span className="text-sm font-medium text-primary uppercase">For delivery partners</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Get alerts on where to deliver when it's busy
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Tap opportunities on your map to find more deliveries nearby, and ask the app to guide you there. Deliver medicines to those who need them most, when they need them most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits of delivering with DoctorSoul+
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Join our network of delivery partners and enjoy flexibility, competitive earnings, and the satisfaction of helping people access essential healthcare.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-clock text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible schedule</h3>
                <p className="text-gray-700">
                  Deliver whenever it works for you. There's no minimum hours and no boss. You can deliver in the mornings, evenings, or weekends—it's up to you.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-wallet text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive earnings</h3>
                <p className="text-gray-700">
                  You'll earn for every pickup, delivery, and kilometer you drive. Plus, keep 100% of the tips you receive from customers.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-heart text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Make a difference</h3>
                <p className="text-gray-700">
                  By delivering medicines, you're helping people get the healthcare they need. Your work directly impacts people's wellbeing and recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Designed with delivery partners in mind
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our app is built to make medicine delivery simple, safe, and rewarding.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-route text-primary"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Optimized routes</h3>
                  <p className="text-gray-700">
                    Get turn-by-turn directions and the most efficient routes to maximize your deliveries and earnings.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-shield-alt text-primary"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Safety features</h3>
                  <p className="text-gray-700">
                    Share your trip details with trusted contacts and access emergency assistance directly from the app.
                  </p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-hand-holding-medical text-primary"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery instructions</h3>
                  <p className="text-gray-700">
                    Clear guidance on handling different types of medications, including those requiring special care.
                  </p>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-chart-line text-primary"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Earnings tracker</h3>
                  <p className="text-gray-700">
                    See your earnings in real-time and get detailed breakdowns of your delivery history and payments.
                  </p>
                </div>
              </div>
              
              {/* Feature 5 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-headset text-primary"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 support</h3>
                  <p className="text-gray-700">
                    Get help whenever you need it with our dedicated support team available around the clock.
                  </p>
                </div>
              </div>
              
              {/* Feature 6 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-primary"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Training resources</h3>
                  <p className="text-gray-700">
                    Access tutorials and guidelines on proper medicine handling, customer service, and delivery protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How medicine delivery works
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                A simple process designed to get medicines to patients quickly and safely
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm relative">
                <div className="absolute -top-5 left-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Receive delivery requests</h3>
                <p className="text-gray-700 mb-4">
                  When you're online, you'll receive delivery requests from nearby pharmacies. Accept the ones that work for you.
                </p>
                <img src="image\DoctorSoul+.png" alt="Receive delivery requests" className="rounded-lg w-full" />
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm relative">
                <div className="absolute -top-5 left-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Pick up medications</h3>
                <p className="text-gray-700 mb-4">
                  Follow the app directions to the pharmacy, verify the order details, and safely secure the medications.
                </p>
                <img src="image\DoctorSoul+ (1).png" alt="Pick up medications" className="rounded-lg w-full" />
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm relative">
                <div className="absolute -top-5 left-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Deliver to patients</h3>
                <p className="text-gray-700 mb-4">
                  Deliver medications to the customer's doorstep, following any special instructions for handling or verification.
                </p>
                <img src="image\DoctorSoul+ (2).png" alt="Deliver to patients" className="rounded-lg w-full" />
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="bg-primary text-white px-8 py-4 rounded-md font-medium hover:bg-primary-dark transition-colors inline-block">
                Start delivering today
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hear from our delivery partners
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Join thousands of delivery partners who are making a difference in their communities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src="https://placehold.co/100x100/16a34a/FFFFFF?text=R" alt="Rahul" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">Rahul S.</h4>
                    <p className="text-sm text-gray-600">Delivering since 2022</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "I love the flexibility DoctorSoul+ gives me. I can work around my college schedule and still earn enough to cover my expenses. Plus, it feels good knowing I'm helping people get their medications."
                </p>
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src="https://placehold.co/100x100/16a34a/FFFFFF?text=P" alt="Priya" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">Priya M.</h4>
                    <p className="text-sm text-gray-600">Delivering since 2021</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "As a mother of two, I needed work that fits around my family's schedule. DoctorSoul+ delivery is perfect—I can be there for my kids and still contribute to our household income. The app is so easy to use!"
                </p>
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src="https://placehold.co/100x100/16a34a/FFFFFF?text=V" alt="Vikram" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">Vikram T.</h4>
                    <p className="text-sm text-gray-600">Delivering since 2023</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "After retiring early, I wanted something to keep me active and engaged with my community. Delivering medicines with DoctorSoul+ gives me purpose and extra income. The customers are always so grateful."
                </p>
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Everything you need to know about delivering with DoctorSoul+
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {/* FAQ Item 1 */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What are the requirements to become a delivery partner?</h3>
                <p className="text-gray-700">
                  To deliver with DoctorSoul+, you need to be at least 18 years old, have a valid ID proof, a smartphone with our app installed, and a vehicle (bicycle, motorcycle, or car). You'll also need to complete a background verification process.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How do I get paid for deliveries?</h3>
                <p className="text-gray-700">
                  Earnings are deposited directly to your linked bank account on a weekly basis. You can track your earnings in real-time through the app, including base pay, distance bonuses, and tips.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do I need special training to deliver medications?</h3>
                <p className="text-gray-700">
                  Yes, we provide comprehensive training on handling medications, maintaining privacy, and following delivery protocols. This training is available in the app and must be completed before your first delivery.
                </p>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How does insurance work for medicine deliveries?</h3>
                <p className="text-gray-700">
                  DoctorSoul+ provides delivery partners with liability coverage for medications while they're in your possession. This insurance protects you in case of accidents or unforeseen circumstances during delivery.
                </p>
              </div>
              
              {/* FAQ Item 5 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Can I choose when and where to deliver?</h3>
                <p className="text-gray-700">
                  You have complete flexibility to choose your working hours and areas. You can go online whenever you want to start receiving delivery requests and go offline when you're done for the day.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="text-primary font-medium hover:text-primary-dark transition-colors">
                View all FAQs <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to start delivering medicines?
              </h2>
              <p className="text-xl mb-8">
                Join our team of delivery partners today and make a difference in your community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#" className="bg-white text-primary px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Sign up to deliver
                </a>
                <a href="#" className="border border-white text-white px-8 py-4 rounded-md font-medium hover:bg-primary-dark transition-colors">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Column 1 */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-sm">
                    D+
                  </div>
                  <span className="text-xl font-bold">DoctorSoul+</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Connecting patients with the medications they need through our network of dedicated delivery partners.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              
              {/* Column 2 */}
              <div>
                <h4 className="font-bold text-lg mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our services</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                </ul>
              </div>
              
              {/* Column 3 */}
              <div>
                <h4 className="font-bold text-lg mb-4">For Delivery Partners</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sign up</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Requirements</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Earnings</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
              
              {/* Column 4 */}
              <div>
                <h4 className="font-bold text-lg mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-2 text-primary"></i>
                    <span className="text-gray-400">123 Healthcare Avenue, Mumbai, India 400001</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-phone mr-2 text-primary"></i>
                    <span className="text-gray-400">+91 1234 567890</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-envelope mr-2 text-primary"></i>
                    <span className="text-gray-400">partners@doctorplus.com</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm mb-4 md:mb-0">
                  © 2025 DoctorSoul+ Delivery. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Cookie Settings</a>
                  <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Accessibility</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Cookie Consent */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 border-t border-gray-200 z-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-8">
                <p className="text-gray-700 text-sm">
                  This website uses third party advertising cookies to serve you relevant ads. You may opt-out from these third party ad cookies by clicking the "Opt-out" button below. If you have an DoctorSoul+ account, you may opt-out of the "sale" or "sharing" of your data here.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors text-sm">
                  Opt out
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors text-sm">
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Simple JavaScript for demonstration purposes
              document.addEventListener('DOMContentLoaded', function() {
                // Mobile menu toggle
                const mobileMenuButton = document.querySelector('.md\\:hidden.text-white');
                
                if (mobileMenuButton) {
                  mobileMenuButton.addEventListener('click', function() {
                    alert('Mobile menu would toggle here');
                  });
                }
                
                // Cookie consent
                const cookieConsent = document.querySelector('.fixed.bottom-0');
                const gotItButton = cookieConsent.querySelector('.bg-primary');
                
                if (gotItButton) {
                  gotItButton.addEventListener('click', function() {
                    cookieConsent.style.display = 'none';
                  });
                }
              });
            `
          }}
        />
      </div>
    </>
  );
}
