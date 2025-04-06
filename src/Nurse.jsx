import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Logo from './assets/blue-illustrated-doctor-logo.svg';

const NurseDashboard = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-primary py-3 px-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex items-center">
              <div>
                <img src={Logo} alt='Logo' height='40px' width='50px'/>
            </div>
              DoctorSoul+
            </div>
          </div>
          <nav className="ml-10 hidden md:block">
          </nav>
        </div>
        <div className="flex items-center">
          <div className="relative mr-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faBell} />
                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        2
                    </span>
            </div>
          </div>
          <div className="flex items-center">
            <img src="image\WhatsApp Image 2025-03-27 at 13.36.28_54c316e2.jpg" alt="Nurse" className="w-10 h-10 rounded-full border-2 border-white" />
            <div className="ml-3 hidden md:block">
              <div className="font-semibold">Anushka Dutta</div>
              <div className="text-sm text-gray-600">Registered Nurse</div>
            </div>
            <i className="fas fa-chevron-down ml-2"></i>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex dashboard-height">
        {/* Sidebar */}
        <div className="w-20 md:w-64 bg-gray-900 text-white">
          <nav className="p-4">
            <ul className="space-y-6">
              <li className="flex items-center bg-gray-800 p-2 rounded">
                <i className="fas fa-th-large w-8 text-center text-primary"></i>
                <span className="ml-3 hidden md:inline text-primary">Dashboard</span>
              </li>
              <li className="flex items-center hover:bg-gray-700 p-2 rounded">
                <i className="fas fa-user-injured w-8 text-center"></i>
                <span className="ml-3 hidden md:inline">Patients</span>
              </li>
              <li className="flex items-center hover:bg-gray-700 p-2 rounded">
                <i className="fas fa-calendar-alt w-8 text-center"></i>
                <span className="ml-3 hidden md:inline">Schedule</span>
              </li>
              <li className="flex items-center hover:bg-gray-700 p-2 rounded">
                <i className="fas fa-home w-8 text-center"></i>
                <span className="ml-3 hidden md:inline">Home Visits</span>
              </li>
              <li className="flex items-center hover:bg-gray-700 p-2 rounded">
                <i className="fas fa-file-medical-alt w-8 text-center"></i>
                <span className="ml-3 hidden md:inline">Medical Records</span>
              </li>
              <li className="flex items-center hover:bg-gray-700 p-2 rounded">
                <i className="fas fa-pills w-8 text-center"></i>
                <span className="ml-3 hidden md:inline">Medications</span>
              </li>
              <li className="mt-auto flex items-center hover:bg-gray-700 p-2 rounded">
                <i className="fas fa-cog w-8 text-center"></i>
                <span className="ml-3 hidden md:inline">Settings</span>
              </li>
              <li className="flex items-center hover:bg-gray-700 p-2 rounded">
                <i className="fas fa-headset w-8 text-center"></i>
                <span className="ml-3 hidden md:inline">Support</span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Nurse Dashboard</h1>
            <div className="flex space-x-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Online
              </span>
              <button className="bg-primary text-gray-800 px-4 py-2 rounded-lg text-sm flex items-center font-medium">
                <i className="fas fa-plus mr-2"></i> New Task
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Today's Patients</p>
                  <h3 className="text-2xl font-bold mt-1">8</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <i className="fas fa-user-injured text-blue-500"></i>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <span className="text-green-500"><i className="fas fa-arrow-up"></i> 12%</span> from yesterday
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Home Visits</p>
                  <h3 className="text-2xl font-bold mt-1">5</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <i className="fas fa-home text-green-500"></i>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <span className="text-green-500"><i className="fas fa-arrow-up"></i> 8%</span> from last week
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Pending Tasks</p>
                  <h3 className="text-2xl font-bold mt-1">3</h3>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <i className="fas fa-tasks text-yellow-500"></i>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <span className="text-red-500"><i className="fas fa-arrow-down"></i> 5%</span> from yesterday
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Hours Worked</p>
                  <h3 className="text-2xl font-bold mt-1">6.5</h3>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <i className="fas fa-clock text-purple-500"></i>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <span className="text-gray-500">8 hours target</span>
              </div>
            </div>
          </div>

          {/* Emergency Actions */}
          <div className="bg-white rounded-lg shadow mb-6 p-4">
            <h2 className="font-bold text-lg mb-4">Emergency Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg flex items-center justify-center">
                <i className="fas fa-ambulance text-xl mr-2"></i>
                <span>Call Ambulance</span>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center">
                <i className="fas fa-car text-xl mr-2"></i>
                <span>Call Driver</span>
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center">
                <i className="fas fa-phone text-xl mr-2"></i>
                <span>Emergency Contact</span>
              </button>
            </div>
          </div>

          {/* Home Checkup Section */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="font-bold text-lg">Today's Home Checkups</h2>
              <button className="text-gray-700 text-sm flex items-center">
                <i className="fas fa-sync-alt mr-1"></i> Refresh
              </button>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        <img
                                src="image\WhatsApp Image 2025-03-25 at 22.47.03_8de31cd7.jpg"
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-white"
                              />
                          <div className="ml-4">
                            <div className="font-medium">Robert Wilson</div>
                            <div className="text-sm text-gray-500">ID: P-1234</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>123 Maple Street, Apt 4B</div>
                        <div className="text-sm text-gray-500">New York, NY 10001</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>10:30 AM</div>
                        <div className="text-sm text-gray-500">In 1 hour</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:text-blue-700 bg-blue-100 p-2 rounded-full" title="View Details">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="text-green-500 hover:text-green-700 bg-green-100 p-2 rounded-full" title="Navigate">
                            <i className="fas fa-map-marker-alt"></i>
                          </button>
                          <button className="text-indigo-500 hover:text-indigo-700 bg-indigo-100 p-2 rounded-full" title="Call Patient">
                            <i className="fas fa-phone"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        <img
                                src="image\WhatsApp Image 2025-03-25 at 22.47.03_8de31cd7.jpg"
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-white"
                              />
                          <div className="ml-4">
                            <div className="font-medium">Maria Garcia</div>
                            <div className="text-sm text-gray-500">ID: P-2345</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>456 Oak Avenue</div>
                        <div className="text-sm text-gray-500">Brooklyn, NY 11201</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>1:15 PM</div>
                        <div className="text-sm text-gray-500">In 3 hours</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Confirmed</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:text-blue-700 bg-blue-100 p-2 rounded-full" title="View Details">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="text-green-500 hover:text-green-700 bg-green-100 p-2 rounded-full" title="Navigate">
                            <i className="fas fa-map-marker-alt"></i>
                          </button>
                          <button className="text-indigo-500 hover:text-indigo-700 bg-indigo-100 p-2 rounded-full" title="Call Patient">
                            <i className="fas fa-phone"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        <img
                                src="image\WhatsApp Image 2025-03-25 at 22.47.03_8de31cd7.jpg"
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-white"
                              />
                          <div className="ml-4">
                            <div className="font-medium">Ruchika Thakur</div>
                            <div className="text-sm text-gray-500">ID: P-3456</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>789 Pine Road</div>
                        <div className="text-sm text-gray-500">Queens, NY 11354</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>3:45 PM</div>
                        <div className="text-sm text-gray-500">In 6 hours</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">En Route</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:text-blue-700 bg-blue-100 p-2 rounded-full" title="View Details">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="text-green-500 hover:text-green-700 bg-green-100 p-2 rounded-full" title="Navigate">
                            <i className="fas fa-map-marker-alt"></i>
                          </button>
                          <button className="text-indigo-500 hover:text-indigo-700 bg-indigo-100 p-2 rounded-full" title="Call Patient">
                            <i className="fas fa-phone"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Live Location Map */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="font-bold text-lg">Live Location</h2>
              <div className="flex space-x-2">
                <button className="bg-primary text-gray-800 px-4 py-2 rounded-lg text-sm flex items-center font-medium">
                  <i className="fas fa-location-arrow mr-2"></i> Share Location
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm flex items-center">
                  <i className="fas fa-sync-alt mr-2"></i> Update
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="map-container rounded-lg mb-4 relative">
                {/* Map placeholder */}
                <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                  <button className="bg-white p-2 rounded-full shadow">
                    <i className="fas fa-plus text-gray-700"></i>
                  </button>
                  <button className="bg-white p-2 rounded-full shadow">
                    <i className="fas fa-minus text-gray-700"></i>
                  </button>
                  <button className="bg-primary p-2 rounded-full shadow text-gray-800">
                    <i className="fas fa-crosshairs"></i>
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow text-sm flex items-center">
                  <i className="fas fa-map-marker-alt text-red-500 mr-2"></i>
                  <span>Current Location: Manhattan, NY</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Next Destination</h3>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <i className="fas fa-map-marker-alt text-blue-500"></i>
                    </div>
                    <div>
                      <div className="font-medium">123 Maple Street, Apt 4B</div>
                      <div className="text-sm text-gray-500">New York, NY 10001</div>
                      <div className="text-sm text-gray-500 mt-1">Patient: Robert Wilson</div>
                      <div className="mt-2 flex space-x-2">
                        <button className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center">
                          <i className="fas fa-directions mr-1"></i> Navigate
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm flex items-center">
                          <i className="fas fa-phone mr-1"></i> Call
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Travel Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 text-center">
                        <i className="fas fa-road text-gray-500"></i>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm text-gray-500">Distance</div>
                        <div className="font-medium">3.2 miles</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 text-center">
                        <i className="fas fa-clock text-gray-500"></i>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm text-gray-500">Estimated Time</div>
                        <div className="font-medium">15 minutes</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 text-center">
                        <i className="fas fa-car text-gray-500"></i>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm text-gray-500">Transportation</div>
                        <div className="font-medium">Company Car (Toyota Prius)</div>
                      </div>
                    </div>
                    <button className="w-full bg-primary text-gray-800 py-2 rounded-lg mt-2 flex items-center justify-center font-medium">
                      <i className="fas fa-car mr-2"></i> Request Driver
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Care Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Today's Tasks */}
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="font-bold">Today's Tasks</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary" />
                    <span className="ml-3">Check vital signs for Robert Wilson</span>
                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">10:30 AM</span>
                  </li>
                  <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary" />
                    <span className="ml-3">Administer medication to Maria Garcia</span>
                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">1:15 PM</span>
                  </li>
                  <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary" />
                    <span className="ml-3">Change dressing for James Thompson</span>
                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">3:45 PM</span>
                  </li>
                  <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary" />
                    <span className="ml-3">Submit daily report</span>
                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">5:00 PM</span>
                  </li>
                  <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary" />
                    <span className="ml-3">Team meeting</span>
                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">5:30 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="font-bold">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <i className="fas fa-check text-green-500"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Completed checkup</div>
                      <div className="text-sm text-gray-500">Patient: Emily Johnson</div>
                      <div className="text-xs text-gray-400 mt-1">Today, 9:15 AM</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <i className="fas fa-pills text-blue-500"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Administered medication</div>
                      <div className="text-sm text-gray-500">Patient: David Brown</div>
                      <div className="text-xs text-gray-400 mt-1">Today, 8:30 AM</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <i className="fas fa-file-medical-alt text-purple-500"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Updated medical record</div>
                      <div className="text-sm text-gray-500">Patient: Sarah Miller</div>
                      <div className="text-xs text-gray-400 mt-1">Yesterday, 4:45 PM</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                        <i className="fas fa-exclamation-triangle text-yellow-500"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Reported abnormal vital signs</div>
                      <div className="text-sm text-gray-500">Patient: John Davis</div>
                      <div className="text-xs text-gray-400 mt-1">Yesterday, 2:15 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurseDashboard;