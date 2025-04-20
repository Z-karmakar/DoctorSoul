import React, { useState } from 'react';

function TestCategories({ onBookTest }) {
  const [activeTab, setActiveTab] = useState('blood');

  const categories = {
    blood: [
      { id: 1, name: 'Complete Blood Count (CBC)', price: 499, preparation: 'Fasting for 8-10 hours recommended' },
      { id: 2, name: 'Lipid Profile', price: 599, preparation: 'Fasting for 12 hours required' },
      { id: 3, name: 'Liver Function Test (LFT)', price: 699, preparation: 'No special preparation required' },
      { id: 4, name: 'Thyroid Profile', price: 899, preparation: 'No special preparation required' },
      { id: 5, name: 'Blood Glucose (Fasting)', price: 199, preparation: 'Fasting for 8 hours required' },
      { id: 6, name: 'HbA1c', price: 599, preparation: 'No special preparation required' },
    ],
    urine: [
      { id: 7, name: 'Routine Urine Examination', price: 299, preparation: 'Early morning sample preferred' },
      { id: 8, name: 'Urine Culture & Sensitivity', price: 699, preparation: 'Mid-stream sample required' },
      { id: 9, name: '24-Hour Urine Protein', price: 899, preparation: 'Special collection instructions will be provided' },
    ],
    imaging: [
      { id: 10, name: 'Chest X-Ray', price: 599, preparation: 'Remove metal objects and jewelry' },
      { id: 11, name: 'Ultrasound Abdomen', price: 1299, preparation: 'Fasting for 6 hours required' },
      { id: 12, name: 'CT Scan (Brain)', price: 4999, preparation: 'Special instructions will be provided' },
      { id: 13, name: 'MRI Knee', price: 6999, preparation: 'Remove all metal objects' },
    ],
    cardiac: [
      { id: 14, name: 'ECG', price: 399, preparation: 'No special preparation required' },
      { id: 15, name: 'Echocardiogram', price: 2499, preparation: 'No eating 4 hours before test' },
      { id: 16, name: 'Treadmill Test (TMT)', price: 1999, preparation: 'Wear comfortable clothing and shoes' },
    ]
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Lab Test Categories
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose from our wide range of diagnostic tests across different categories
          </p>
        </div>

        <div className="mt-10">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`${
                    activeTab === category
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                >
                  {category} Tests
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories[activeTab].map((test) => (
              <div 
                key={test.id} 
                className="bg-white overflow-hidden shadow rounded-lg border border-gray-200"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{test.name}</h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>Preparation: {test.preparation}</span>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">₹{test.price}</span>
                    <button 
                      onClick={() => onBookTest(test)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCategories;