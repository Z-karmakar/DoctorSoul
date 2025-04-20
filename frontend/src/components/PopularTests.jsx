import React from 'react';

function PopularTests({ onBookTest }) {
  const popularTests = [
    {
      id: 101,
      name: 'Complete Health Check',
      description: 'Comprehensive assessment with 75+ parameters including CBC, Lipid Profile, Liver & Kidney Function',
      price: 2499,
      discount: 20,
      originalPrice: 2999
    },
    {
      id: 102,
      name: 'Diabetes Screening',
      description: 'Blood Glucose (Fasting & PP), HbA1c, Lipid Profile, Kidney Function',
      price: 1499,
      discount: 15,
      originalPrice: 1799
    },
    {
      id: 103,
      name: 'Women\'s Health',
      description: 'CBC, Thyroid Profile, Vitamin D, B12, Calcium, Iron Studies',
      price: 2299,
      discount: 10,
      originalPrice: 2599
    },
    {
      id: 104,
      name: 'Cardiac Risk Assessment',
      description: 'ECG, Lipid Profile, Blood Pressure, Body Composition Analysis',
      price: 1999,
      discount: 12,
      originalPrice: 2299
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-poopins">
            Popular Tests
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-poopins">
            Our most frequently booked diagnostic tests
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {popularTests.map((test) => (
            <div
              key={test.id}
              className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 flex flex-col"
            >
              <div className="bg-indigo-50 px-4 py-2">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                  {test.discount}% OFF
                </span>
              </div>
              <div className="px-4 py-5 flex-grow">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{test.name}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {test.description}
                </p>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold text-gray-900">₹{test.price}</span>
                    <span className="ml-2 text-sm line-through text-gray-500">₹{test.originalPrice}</span>
                  </div>
                  <button
                    onClick={() => onBookTest(test)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularTests;