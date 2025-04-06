import React from 'react';
import companylogo from './assets/companylogo.svg';
const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={companylogo} alt="Company Logo" className="w-40 h-40 mt-1" />
      <h1 className="text-3xl font-bold text-navy-900 mt-2">Doctor Soul+</h1>
      <p className="text-sm font-semibold tracking-widest text-gray-700">HEALTHCARE</p>
    </div>
  )
}

export default Logo

