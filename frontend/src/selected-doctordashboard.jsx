import { React, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faBell, faChevronDown, faThLarge, faComment, faCreditCard, faUserInjured, faFileMedical, faCog, faHeadset, faArrowUp, faArrowDown, faUser, faCalendarCheck, faCommentMedical, faStar, faVideo, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Logo from './assets/blue-illustrated-doctor-logo.svg';
import { supabase } from './supabaseClient';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useNavigate } from 'react-router-dom'; 
const api = Number(import.meta.env.VITE_ZEGO_KEY);
const secret = import.meta.env.VITE_ZEGO_SECRET;
const DoctorDashboard = () => {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error.message);
      } else if (session) {
        console.log(session.user.email);
        setUserEmail(session.user.email); // Set the logged-in user's email
      }
    };

    fetchSession();
  }, []);
  window.onpopstate = () => {
    navigate("/");
  }
  const startMeeting = async () => {
    const roomID = "test-room-1234"; // Shared room ID for testing
    const appID = api; // Replace with your ZegoCloud App ID
    const serverSecret = secret; // Replace with your ZegoCloud Server Secret

    // Generate Kit Token
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userEmail.replace(/[@.]/g, "_"), // Use logged-in doctor's email as userID
      "Doctor" // Replace with the doctor's name if available
    );

    // Create instance object from Kit Token
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // Start the call
    zp.joinRoom({
      container: document.getElementById("videoContainer"), // Add a container for the video call
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // For 1-on-1 calls
      },
      
    });

    console.log(`Doctor joined meeting with Room ID: ${roomID}`);
  };

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-primary py-3 px-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <div className="text-2xl font-bold flex items-center">
            <img src={Logo} alt="Logo" height="40px" width="50px" />
            DoctorSoul+
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative mr-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faBell} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="image\WhatsApp Image 2025-03-25 at 22.40.24_8e8437e9.jpg"
              alt="Doctor"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3 hidden md:block">
              <div className="font-semibold">Dr. Ankit Mukherjee</div>
              <div className="text-sm text-gray-600">Cardiologist</div>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
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
                <FontAwesomeIcon icon={faThLarge} className="w-8 text-center text-primary" />
                <span className="ml-3 hidden md:inline text-primary">Dashboard</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faComment} className="w-8 text-center" />
                <span className="ml-3 hidden md:inline">Messages</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCreditCard} className="w-8 text-center" />
                <span className="ml-3 hidden md:inline">Payment</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faUserInjured} className="w-8 text-center" />
                <span className="ml-3 hidden md:inline">Patients</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faFileMedical} className="w-8 text-center" />
                <span className="ml-3 hidden md:inline">Records</span>
              </li>
              <li className="mt-auto flex items-center">
                <FontAwesomeIcon icon={faCog} className="w-8 text-center" />
                <span className="ml-3 hidden md:inline">Settings</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faHeadset} className="w-8 text-center" />
                <span className="ml-3 hidden md:inline">Support</span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">Doctor Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                  <FontAwesomeIcon icon={faUserInjured} className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-gray-500 text-sm">Total Patients</h3>
                  <p className="text-2xl font-bold">248</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-500">
                <FontAwesomeIcon icon={faArrowUp} /> 12% from last month
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                  <FontAwesomeIcon icon={faCalendarCheck} className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-gray-500 text-sm">Appointments Today</h3>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-500">
                <FontAwesomeIcon icon={faArrowUp} /> 5% from yesterday
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
                  <FontAwesomeIcon icon={faCommentMedical} className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-gray-500 text-sm">New Messages</h3>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-red-500">
                <FontAwesomeIcon icon={faArrowDown} /> 3% from yesterday
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500">
                  <FontAwesomeIcon icon={faStar} className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-gray-500 text-sm">Rating</h3>
                  <p className="text-2xl font-bold">4.8/5</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-500">
                <FontAwesomeIcon icon={faArrowUp} /> 0.2 from last month
              </div>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="font-bold">Upcoming Appointments</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
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
                            <div className="font-medium">Jennifer James</div>
                            <div className="text-sm text-gray-500">ID: P-1234</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>10:30 AM</div>
                        <div className="text-sm text-gray-500">Today</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          Check-up
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          Confirmed
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            className="text-blue-500 hover:text-blue-700"
                            onClick={() => navigate('/Chat')} 
                          >
                            <FontAwesomeIcon icon={faComment} />
                          </button>
                          <button onClick={startMeeting} className="text-green-500 hover:text-green-700">
                            <FontAwesomeIcon icon={faVideo} />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            <FontAwesomeIcon icon={faEllipsisV} />
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
                            <div className="font-medium">Robert Smith</div>
                            <div className="text-sm text-gray-500">ID: P-2345</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>11:45 AM</div>
                        <div className="text-sm text-gray-500">Today</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                          Consultation
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:text-blue-700"
                          onClick={() => navigate('/Chat')} >
                            <FontAwesomeIcon icon={faComment} />
                          </button>
                          <button className="text-green-500 hover:text-green-700">
                            <FontAwesomeIcon icon={faVideo} />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            <FontAwesomeIcon icon={faEllipsisV} />
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
                            <div className="font-medium">Sarah Johnson</div>
                            <div className="text-sm text-gray-500">ID: P-3456</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>2:15 PM</div>
                        <div className="text-sm text-gray-500">Today</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                          Emergency
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          Confirmed
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:text-blue-700"
                          onClick={() => navigate('/Chat')}>
                            <FontAwesomeIcon icon={faComment} />
                          </button>
                          <button className="text-green-500 hover:text-green-700">
                            <FontAwesomeIcon icon={faVideo} />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            <FontAwesomeIcon icon={faEllipsisV} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Patients */}
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="font-bold">Recent Patients</h2>
              <a href="#" className="text-blue-500 text-sm">
                View All
              </a>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <img
                      src="image\WhatsApp Image 2025-03-25 at 22.47.03_8de31cd7.jpg"
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div className="ml-4">
                      <div className="font-medium">Jennifer James</div>
                      <div className="text-sm text-gray-500">32 years, Female</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Last Visit</span>
                    <span>Today</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Diagnosis</span>
                    <span>Hypertension</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Blood Pressure</span>
                    <span>130/85</span>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button className="text-blue-500 text-sm">View Details</button>
                    <button
                      className="text-blue-500 text-sm"
                      onClick={() => (window.location.href = 'index.html')}
                    >
                      Message
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <img
                      src="image\WhatsApp Image 2025-03-25 at 22.47.03_8de31cd7.jpg"
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div className="ml-4">
                      <div className="font-medium">Robert Smith</div>
                      <div className="text-sm text-gray-500">45 years, Male</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Last Visit</span>
                    <span>Yesterday</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Diagnosis</span>
                    <span>Diabetes Type 2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Blood Sugar</span>
                    <span>145 mg/dL</span>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button className="text-blue-500 text-sm">View Details</button>
                    <button className="text-blue-500 text-sm">Message</button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <img
                      src="image\WhatsApp Image 2025-03-25 at 22.47.03_8de31cd7.jpg"
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div className="ml-4">
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">28 years, Female</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Last Visit</span>
                    <span>3 days ago</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Diagnosis</span>
                    <span>Migraine</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Medication</span>
                    <span>Sumatriptan</span>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button className="text-blue-500 text-sm">View Details</button>
                    <button className="text-blue-500 text-sm">Message</button>
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

export default DoctorDashboard;
