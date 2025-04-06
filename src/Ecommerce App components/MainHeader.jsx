import React from 'react'
import PrimaryHeader from './PrimaryHeader';
import SecondaryHeader from './SecondaryHeader';
import HeroSection from './HeroSection';

export default function MainHeader({categoryHandler, brandHandler}) {
   return (
      <>
      <div className="min-h-screen bg-white">
         <div className="fixed top-0 left-0 right-0 z-50">
            <PrimaryHeader />
            <SecondaryHeader categoryHandler={categoryHandler} brandHandler={brandHandler} />
            </div>
            <HeroSection />
      </div>
      </>
   );
}
