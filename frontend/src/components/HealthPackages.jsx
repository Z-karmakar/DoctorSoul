import React from 'react';

function HealthPackages({ onBookTest }) {
  const packages = [
    {
      id: 201,
      name: 'Basic Health Package',
      tests: ['Complete Blood Count', 'Urine Routine', 'Blood Glucose', 'Lipid Profile'],
      price: 1499,
      originalPrice: 1999,
      suitable: 'For adults above 18 years as a routine check-up'
    },
    {
      id: 202,
      name: 'Advanced Health Package',
      tests: ['Complete Blood Count', 'Lipid Profile', 'Liver Function', 'Kidney Function', 'Thyroid Profile', 'Vitamin B12', 'Vitamin D'],
      price: 3499,
      originalPrice: 4299,
      suitable: 'Recommended for adults above 30 years'
    },
    {
      id: 203,
      name: 'Executive Health Package',
      tests: ['Complete Blood Count', 'Advanced Lipid Profile', 'Liver Function', 'Kidney Function', 'Thyroid Profile', 'HbA1c', 'ECG', 'Chest X-Ray', 'Ultrasound Abdomen'],
      price: 5999,
      originalPrice: 7499,
      suitable: 'Comprehensive check-up for adults above 40 years'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Health Packages
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive health packages curated by our experts
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200"
            >
              <div className="px-6 py-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-gray-900">{pkg.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gray-900">₹{pkg.price}</span>
                    <span className="ml-2 text-lg line-through text-gray-500">₹{pkg.originalPrice}</span>
                  </div>
                </div>
                
                <p className="mt-3 text-gray-500">{pkg.suitable}</p>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-gray-900">Tests Included:</h4>
                  <ul className="mt-2 space-y-2">
                    {pkg.tests.map((test, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-gray-600">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <button
                    onClick={() => onBookTest(pkg)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-lg font-medium"
                  >
                    Book Package
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

export default HealthPackages;