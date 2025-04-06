import React from 'react';
import myimages from '../assets/microscopic-magnificatio_1.jpg__800x500_q80_crop_subject_location-570,252_subsampling-2.jpg';

function Hero({ onBookNow }) {
  return (
    <div className="bg-indigo-700 font-poppins">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl font-poppins">
            Your health, our priority
          </h2>
          <p className="mt-5 text-xl text-indigo-100">
            Book your diagnostic tests online with our network of NABL accredited labs. Get accurate results, faster.
          </p>
          <div className="mt-10">
            <button
              onClick={onBookNow}
              className="bg-white text-indigo-700 px-8 py-3 border border-transparent rounded-md shadow text-base font-medium hover:bg-indigo-50"
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-8">
          <img className="rounded-lg shadow-xl" src={myimages} alt="Lab technician" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
