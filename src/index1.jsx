import { useState } from 'react';
import Medicine from './medicine';

const Index1 = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  if (selectedRole === 'medicine') {
        return <Medicine/>;
  }
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-[#1C1C1C] border-r border-gray-200">
        <div className="flex items-center h-16 flex-shrink-0 px-4 border-b border-gray-200">
          <span className="text-xl font-bold text-white">DoctorSoul+</span>
          <span className="text-yellow-400 text-xl ml-1">●</span>
        </div>
        <nav className="mt-5 flex-1 px-2 space-y-1">
          <a href="#" className="group flex items-center px-2 py-2 text-sm font-bold rounded-md text-gray-500 hover:bg-gray-50 hover:text-blue-600">
            <i className="ri-home-line mr-3 h-5 w-5"></i>
            Overview
          </a>
          <a href="#" className="group flex items-center px-2 py-2 text-sm font-bold rounded-md text-gray-500 hover:bg-gray-50 hover:text-blue-600">
            <i className="ri-home-line mr-3 h-5 w-5"></i>
            Message
          </a>
          <a href="#" className="group flex items-center px-2 py-2 text-sm font-bold rounded-md text-gray-500 hover:bg-gray-50 hover:text-blue-600">
            <i className="ri-home-line mr-3 h-5 w-5"></i>
            Payment
          </a>
          <a href="#" className="group flex items-center px-2 py-2 text-sm font-bold rounded-md text-gray-500 hover:bg-gray-50 hover:text-blue-600">
            <i className="ri-home-line mr-3 h-5 w-5"></i>
            Hospital
          </a>
          {/* Add other menu items here */}
        </nav>
        {/* Settings Button at the Bottom */}
        <div className="px-2 py-2">
          <a href="#" className="group flex items-center px-2 py-2 text-sm font-bold rounded-md text-gray-500 hover:bg-gray-50 hover:text-blue-600">
            <i className="ri-settings-3-line mr-3 h-5 w-5"></i>
            Settings
          </a>
          <a href="#" className="group flex items-center px-2 py-2 text-sm text-gray-500 font-bold rounded-md hover:bg-gray-50 hover:text-blue-600">
            <span className="w-5 h-5">🛟</span>
            <span>Support</span>
          </a>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-amber-100 border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button type="button" className="md:hidden text-gray-500 hover:text-gray-600">
                <i className="ri-menu-line text-2xl"></i>
              </button>
              <div className="relative ml-4">
                <input type="text" placeholder="Search Doctors..." className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <i className="ri-search-line absolute left-3 top-2.5 text-gray-400"></i>
              </div>
            </div>
            <div className="flex items-center">
              <button type="button" className="p-1 text-gray-400 hover:text-gray-500">
                <i className="ri-notification-3-line text-xl"></i>
              </button>
              <div className="ml-3 relative">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
                  AL
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Patients Corner</h1>
            <p className="text-sm text-gray-500 mb-6">Manage your activities and lab reports here</p>

            {/* Quick access buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              <div className="flex flex-col items-center">
                <button className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 hover:bg-blue-200 transition-colors">
                  <i className="ri-phone-line text-2xl text-blue-600"></i>
                </button>
                <span className="text-2xs text-gray-600">Emergency call</span>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 hover:bg-blue-200 transition-colors">
                  <i className="ri-nurse-line text-2xl text-blue-600"></i>
                </button>
                <span className="text-2xs text-gray-600">Nurse</span>
              </div>
              <div className="flex flex-col items-center">
                <button onClick={() => setSelectedRole('medicine')} className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 hover:bg-blue-200 transition-colors">
                  <i className="ri-medicine-bottle-line text-2xl text-blue-600"></i>
                </button >
                <span className="text-2xs text-gray-600">Medicine</span>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 hover:bg-blue-200 transition-colors">
                  <i className="ri-test-tube-line text-2xl text-blue-600"></i>
                </button>
                <span className="text-2xs text-gray-600">Lab test</span>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 hover:bg-blue-200 transition-colors">
                  <i className="ri-user-heart-line text-2xl text-blue-600"></i>
                </button>
                <span className="text-2xs text-gray-600">Personal doctor</span>
              </div>
            </div>

            {/* Patient Visits Chart */}
            <div className="bg-white rounded-lg shadow mb-8">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Patients Visits</h3>
                  <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-yellow-300 hover:bg-gray-50">
                    Monthly
                    <i className="ri-arrow-down-s-line ml-2"></i>
                  </button>
                </div>
                <div className="h-64 bg-gray-100 rounded-lg"></div>
              </div>
            </div>

            {/* Patient Details and Ambulance Location */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Patient Details */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Doctor Details</h3>
                  <div className="flex items-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Jonah Makarov</h4>
                      <p className="text-sm text-gray-500">Heart Department</p>
                      <p className="text-sm text-gray-500">27 y/o</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-md">
                    <p className="text-sm font-medium text-gray-900">Latest Diagnose: Arrhythmias</p>
                    <p className="text-sm text-gray-500 mt-1">8 Visits</p>
                    <button className="mt-3 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Patient&apos;s Detail
                    </button>
                  </div>
                </div>
              </div>

              {/* Ambulance Location */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Ambulance Location</h3>
                  <div className="relative h-64 bg-gray-100 rounded-lg">
                    <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full text-sm font-medium shadow">
                      60 m
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index1;