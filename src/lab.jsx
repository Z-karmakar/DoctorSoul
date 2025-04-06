import React, { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import TestCategories from './components/TestCategories';
import PopularTests from './components/PopularTests';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import HealthPackages from './components/HealthPackages';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);

  const handleBookTest = (test) => {
    setSelectedTest(test);
    setBookingOpen(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero onBookNow={() => window.scrollTo({ top: 800, behavior: 'smooth' })} />
      <TestCategories onBookTest={handleBookTest} />
      <PopularTests onBookTest={handleBookTest} />
      <HealthPackages onBookTest={handleBookTest} />
      {bookingOpen && <BookingForm test={selectedTest} />}
      <Footer />
    </div>
  );
}

export default App;
