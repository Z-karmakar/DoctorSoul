"use client"

import { useState,useEffect,useRef} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faStar,
  faBell,
  faChevronDown,
  faThLarge,
  faHospital,
  faCalendarAlt,
  faHeartbeat,
  faFileAlt,
  faPills,
  faCog,
  faHeadset,
  faArrowLeft,
  faCalendarPlus,
  faCommentMedical,
  faFilePrescription,
  faPhone,
  faUserNurse,
  faVial,
  faUserMd,
  faExclamationTriangle,
  faCheckCircle,
  faTimesCircle,
  faComment,
  faVideo,
  faLocationArrow,
  faRoad,
  faClock,
  faCar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

import { supabase } from './supabaseClient';

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

import Logo from './assets/blue-illustrated-doctor-logo.svg';
import { useNavigate } from "react-router-dom";
const api = Number(import.meta.env.VITE_ZEGO_KEY);
const secret = import.meta.env.VITE_ZEGO_SECRET;

const PatientDashboard = () => {
  const navigate = useNavigate();
  // State for section visibility
  const [activeSections, setActiveSections] = useState({
    dashboard: true,
    hospitalList: false,
  })

  // State for location popup
  const [showLocationPopup, setShowLocationPopup] = useState(false)
  const [serviceType, setServiceType] = useState(null)

  // State for location info
  const [locationInfo, setLocationInfo] = useState({
    userLocation: { lat: 28.6139, lng: 77.209 },
    serviceLocation: { lat: 28.6339, lng: 77.229 },
    destinationAddress: "Emergency Services",
    destinationCity: "Service en route",
    destinationInfo: "ETA: 5 minutes",
    travelDistance: "1.5 miles",
    travelTime: "5 minutes",
    transportationInfo: "Emergency Response",
  })

  // Function to show dashboard
  const showDashboard = () => {
    setActiveSections({
      dashboard: true,
      hospitalList: false,
    })
    setShowLocationPopup(false)
  }

  // Function to hide dashboard sections
  const hideDashboard = () => {
    setActiveSections({
      ...activeSections,
      dashboard: false,
    })
  }

  // Function to show location popup with ambulance info
  const showAmbulanceLocation = () => {
    setServiceType("ambulance")
    setLocationInfo({
      userLocation: { lat: 28.6139, lng: 77.209 },
      serviceLocation: { lat: 28.6039, lng: 77.199 },
      destinationAddress: "Emergency Services",
      destinationCity: "Ambulance en route",
      destinationInfo: "ETA: 5 minutes",
      travelDistance: "1.5 miles",
      travelTime: "5 minutes",
      transportationInfo: "Ambulance (Emergency Response)",
    })
    setShowLocationPopup(true)
  }

  // Function to show location popup with nurse info
  const showNurseLocation = () => {
    setServiceType("nurse")
    setLocationInfo({
      userLocation: { lat: 28.6139, lng: 77.209 },
      serviceLocation: { lat: 28.6239, lng: 77.219 },
      destinationAddress: "Nurse Services",
      destinationCity: "Nurse en route",
      destinationInfo: "ETA: 15 minutes",
      travelDistance: "2.8 miles",
      travelTime: "15 minutes",
      transportationInfo: "Medical Staff Vehicle",
    })
    setShowLocationPopup(true)
  }

  // Function to show hospital list
  const showHospitalList = (e) => {
    if (e) e.preventDefault()
    hideDashboard()
    setActiveSections({
      dashboard: false,
      hospitalList: true,
    })
    setShowLocationPopup(false)
  }

  // Function to open Google Maps with hospital location
  const openHospitalLocation = (name, lat, lng) => {
    // Open Google Maps in a new tab with the hospital location
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    window.open(googleMapsUrl, "_blank")
  }

  // Function to close hospital list
  const closeHospitalList = () => {
    showDashboard()
  }

  // Function to close location popup
  const closeLocationPopup = () => {
    setShowLocationPopup(false)
  }
  
  // State for logged-in user's email
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error.message);
      } else if (session) {
        setUserEmail(session.user.email); // Set the logged-in user's email
      }
    };
  
    fetchSession();
  }, []);
  
  useEffect(() => {
    // Push initial state when component mounts
    const initialState = { page: 'Patient' };
    window.history.pushState(initialState, '', window.location.pathname);
  
    const handlePopState = (event) => {
      // If state is null (back button pressed) or different page
      if (!event.state || event.state.page !== 'Patient') {
        // Prevent default navigation
        event.preventDefault();
        // Navigate to login
        navigate('/', { replace: true });
        return;
      }
    };
  
    window.addEventListener('popstate', handlePopState);
  
    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);
    
  
  const joinMeeting = async () => {
    const roomID = "test-room-1234";
    const appID = api;
    const serverSecret = secret;
  
    // Push meeting state before joining
    window.history.pushState({ from: 'meeting' }, '', window.location.pathname);
  
    // Add popstate listener specifically for meeting
    const handleMeetingPopState = () => {
      const container = document.getElementById("videoContainer");
      if (container) {
        container.remove();
      }
      window.location.replace('/Patient');
      // Remove this listener after it's used
      window.removeEventListener('popstate', handleMeetingPopState);
    };
  
    window.addEventListener('popstate', handleMeetingPopState);
  
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userEmail.replace(/[@.]/g, "_"),
      "Patient"
    );
  
    const zp = ZegoUIKitPrebuilt.create(kitToken);
  
    zp.joinRoom({
      container: document.getElementById("videoContainer"),
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showPreJoinView: true,
      showLeavingView: true,
      onLeaveRoom: () => {
        // Cleanup
        const container = document.getElementById("videoContainer");
        if (container) {
          container.remove();
        }
        // Force a reload of the Patient component
        window.location.replace('/Patient');
        // Remove the popstate listener when leaving normally
        window.removeEventListener('popstate', handleMeetingPopState);
      },
    });
  
    console.log(`Patient joined meeting with Room ID: ${roomID}`);
  };
  

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-primary py-3 px-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <div className="text-2xl font-bold flex items-center">
            <div>
              <img src={Logo} alt='Logo' height='40px' width='50px'/>
            </div>
            DoctorSoul+
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
            <img
              src="image\WhatsApp Image 2025-03-25 at 22.47.03_8de31cd7.jpg"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="ml-3 hidden md:block">
              <div className="font-semibold">Jennifer James</div>
              <div className="text-sm text-gray-600">Patient</div>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex dashboard-height">
        <div className="w-20 md:w-64 bg-gray-900 text-white">
          <nav className="p-4">
            <ul className="space-y-6">
              <li
                className={`flex items-center p-2 rounded cursor-pointer hover:bg-gray-800 transition-colors ${
                  activeSections.dashboard ? "bg-gray-800" : ""
                }`}
                onClick={showDashboard}
              >
                <FontAwesomeIcon
                  icon={faThLarge}
                  className={`w-8 text-center ${activeSections.dashboard ? "text-primary" : "text-gray-400"}`}
                />
                <span className={`ml-3 hidden md:inline ${activeSections.dashboard ? "text-primary" : "text-gray-400"}`}>
                  Dashboard
                </span>
              </li>
              <li
                className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={showHospitalList}
              >
                <FontAwesomeIcon icon={faHospital} className="w-8 text-center text-gray-400" />
                <span className="ml-3 hidden md:inline text-gray-400">Nearby Hospitals</span>
              </li>
              <li
                className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={() => navigate('/MedicalAssistant')}
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="w-8 text-center text-gray-400" />
                <span className="ml-3 hidden md:inline text-gray-400">Medical Assistant</span>
              </li>
              <li className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-800 transition-colors">
                <FontAwesomeIcon icon={faCalendarAlt} className="w-8 text-center text-gray-400" />
                <span className="ml-3 hidden md:inline text-gray-400">Appointments</span>
              </li>
              <li className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-800 transition-colors">
                <FontAwesomeIcon icon={faHeartbeat} className="w-8 text-center text-gray-400" />
                <span className="ml-3 hidden md:inline text-gray-400">My Health</span>
              </li>
              <li className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-800 transition-colors">
                <FontAwesomeIcon icon={faFileAlt} className="w-8 text-center text-gray-400" />
                <span className="ml-3 hidden md:inline text-gray-400">Records</span>
              </li>
              
              <li className="mt-auto flex items-center p-2 rounded cursor-pointer hover:bg-gray-800 transition-colors">
                <FontAwesomeIcon icon={faCog} className="w-8 text-center text-gray-400" />
                <span className="ml-3 hidden md:inline text-gray-400">Settings</span>
              </li>
              <li className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-800 transition-colors">
                <FontAwesomeIcon icon={faHeadset} className="w-8 text-center text-gray-400" />
                <span className="ml-3 hidden md:inline text-gray-400">Support</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Back to Dashboard Button - Initially Hidden */}
          <div id="back-button" className={`mb-4 ${activeSections.dashboard ? "hidden" : ""}`}>
            <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium" onClick={showDashboard}>
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Dashboard
            </button>
          </div>

          <h1 className="text-2xl font-bold mb-6">Patient Dashboard</h1>

          {/* Live Location Popup */}
          {showLocationPopup && (
            <div className="bg-white rounded-lg shadow mb-6 relative">
              <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <h2 className="font-bold text-lg">
                  {serviceType === "ambulance" ? "Emergency Services" : "Nurse Services"} - Live Tracking
                </h2>
                <div className="flex space-x-2">
                  <button className="bg-primary text-gray-800 px-4 py-2 rounded-lg text-sm flex items-center font-medium">
                    <FontAwesomeIcon icon={faLocationArrow} className="mr-2" /> Share Location
                  </button>
                  <button className="text-gray-500 hover:text-gray-700" onClick={closeLocationPopup}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Google Maps iframe for tracking */}
                <div className="rounded-lg mb-4 overflow-hidden" style={{ height: "350px" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY_HERE&origin=${locationInfo.serviceLocation.lat},${locationInfo.serviceLocation.lng}&destination=${locationInfo.userLocation.lat},${locationInfo.userLocation.lng}&mode=driving`}
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Service Information</h3>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <FontAwesomeIcon
                          icon={serviceType === "ambulance" ? faPhone : faUserNurse}
                          className="text-blue-500"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{locationInfo.destinationAddress}</div>
                        <div className="text-sm text-gray-500">{locationInfo.destinationCity}</div>
                        <div className="text-sm text-gray-500 mt-1">{locationInfo.destinationInfo}</div>
                        <div className="mt-2 flex space-x-2">
                          <button className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="mr-1" /> Call
                          </button>
                          <button className="bg-red-500 text-white px-3 py-1 rounded text-sm flex items-center">
                            <FontAwesomeIcon icon={faTimes} className="mr-1" /> Cancel
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
                          <FontAwesomeIcon icon={faRoad} className="text-gray-500" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm text-gray-500">Distance</div>
                          <div className="font-medium">{locationInfo.travelDistance}</div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-8 text-center">
                          <FontAwesomeIcon icon={faClock} className="text-gray-500" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm text-gray-500">Estimated Time</div>
                          <div className="font-medium">{locationInfo.travelTime}</div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-8 text-center">
                          <FontAwesomeIcon icon={faCar} className="text-gray-500" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm text-gray-500">Transportation</div>
                          <div className="font-medium">{locationInfo.transportationInfo}</div>
                        </div>
                      </div>

                      {serviceType === "nurse" && (
                        <button className="w-full bg-primary text-gray-800 py-2 rounded-lg mt-2 flex items-center justify-center font-medium">
                          <FontAwesomeIcon icon={faCar} className="mr-2" /> Request Driver
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Dashboard Sections */}
          <div id="dashboard-sections" className={`dashboard-section ${activeSections.dashboard ? "" : "hidden"}`}>
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-500 text-white rounded-lg shadow p-6 flex items-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCalendarPlus} className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Book Appointment</h3>
                  <p className="text-sm mt-1">Schedule a visit with your doctor</p>
                </div>
              </div>

              <div className="bg-green-500 text-white rounded-lg shadow p-6 flex items-center cursor-pointer">
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCommentMedical} className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Message Doctor</h3>
                  <p className="text-sm mt-1">Chat with Dr. Ashley Lars</p>
                </div>
              </div>

              <div className="bg-purple-500 text-white rounded-lg shadow p-6 flex items-center">
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faFilePrescription} className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Request Prescription</h3>
                  <p className="text-sm mt-1">Get your medication refilled</p>
                </div>
              </div>
            </div>

            {/* Emergency Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              <div className="flex flex-col items-center">
                <button
                  id="emergency-btn"
                  className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2 hover:bg-red-200 transition-colors"
                  onClick={showAmbulanceLocation}
                >
                  <FontAwesomeIcon icon={faPhone} className="text-2xl text-red-600" />
                </button>
                <span className="text-sm text-gray-600">Emergency call</span>
              </div>
              <div className="flex flex-col items-center">
                <button
                  id="nurse-btn"
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 hover:bg-blue-200 transition-colors"
                  onClick={showNurseLocation}
                >
                  <FontAwesomeIcon icon={faUserNurse} className="text-2xl text-blue-600" />
                </button>
                <span className="text-sm text-gray-600">Nurse</span>
              </div>
              <div className="flex flex-col items-center">
                <button onClick={() => navigate('/Medicine')} className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2 hover:bg-green-200 transition-colors">
                  <FontAwesomeIcon icon={faPills} className="text-2xl text-green-600" />
                </button>
                <span className="text-sm text-gray-600">Medicine</span>
              </div>
              <div className="flex flex-col items-center">
                <button onClick={() => navigate('/Lab')} className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2 hover:bg-purple-200 transition-colors">
                  <FontAwesomeIcon icon={faVial} className="text-2xl text-purple-600" />
                </button>
                <span className="text-sm text-gray-600">Lab test</span>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-2 hover:bg-yellow-200 transition-colors">
                  <FontAwesomeIcon icon={faUserMd} className="text-2xl text-yellow-600" />
                </button>
                <span className="text-sm text-gray-600">Personal doctor</span>
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <h2 className="font-bold">Upcoming check-up</h2>
                <a href="#" className="text-blue-500 text-sm">
                  View All
                </a>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Doctor
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date & Time
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
                              src="image\WhatsApp Image 2025-03-25 at 22.40.24_8e8437e9.jpg"
                              alt="Doctor"
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="ml-4">
                              <div className="font-medium">Dr. Ankit Mukherjee</div>
                              <div className="text-sm text-gray-500">Cardiologist</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>Today, 10:30 AM</div>
                          <div className="text-sm text-gray-500">In 2 hours</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Check-up</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Confirmed</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button onClick={() => navigate('/Chat')} className="text-blue-500 hover:text-blue-700">
                              <FontAwesomeIcon icon={faComment} />
                            </button>
                            <button
                              onClick={joinMeeting}
                              className="text-green-500 hover:text-green-700"
                            >
                              <FontAwesomeIcon icon={faVideo} />
                            </button>
                            <button className="text-red-500 hover:text-red-700">
                              <FontAwesomeIcon icon={faTimesCircle} />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              src="image\WhatsApp Image 2025-03-25 at 22.40.23_3bc253d6.jpg"
                              alt="Doctor"
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="ml-4">
                              <div className="font-medium">Dr. Somodeep Paul</div>
                              <div className="text-sm text-gray-500">Neurologist</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>Tomorrow, 2:15 PM</div>
                          <div className="text-sm text-gray-500">In 1 day</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                            Consultation
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Confirmed</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button onClick={() => navigate('/Chat')} className="text-blue-500 hover:text-blue-700">
                              <FontAwesomeIcon icon={faComment} />
                            </button>
                            <button className="text-green-500 hover:text-green-700">
                              <FontAwesomeIcon icon={faVideo} />
                            </button>
                            <button className="text-red-500 hover:text-red-700">
                              <FontAwesomeIcon icon={faTimesCircle} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Health Stats and Medications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Health Stats */}
              <div className="bg-white rounded-lg shadow">
                <div className="border-b border-gray-200 px-6 py-4">
                  <h2 className="font-bold">Health Stats</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500">Blood Pressure</span>
                        <span className="text-xs text-gray-400">Last updated: Today</span>
                      </div>
                      <div className="text-2xl font-bold">130/85</div>
                      <div className="text-sm text-yellow-500 mt-2">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" /> Slightly elevated
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500">Heart Rate</span>
                        <span className="text-xs text-gray-400">Last updated: Today</span>
                      </div>
                      <div className="text-2xl font-bold">78 bpm</div>
                      <div className="text-sm text-green-500 mt-2">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-1" /> Normal
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500">Blood Sugar</span>
                        <span className="text-xs text-gray-400">Last updated: Yesterday</span>
                      </div>
                      <div className="text-2xl font-bold">110 mg/dL</div>
                      <div className="text-sm text-green-500 mt-2">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-1" /> Normal
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500">Weight</span>
                        <span className="text-xs text-gray-400">Last updated: 3 days ago</span>
                      </div>
                      <div className="text-2xl font-bold">65 kg</div>
                      <div className="text-sm text-green-500 mt-2">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-1" /> Normal BMI
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button className="text-blue-500 text-sm">View Full Health Report</button>
                  </div>
                </div>
              </div>

              {/* Medications */}
              <div className="bg-white rounded-lg shadow">
                <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                  <h2 className="font-bold">Current Medications</h2>
                  <a href="#" className="text-blue-500 text-sm">
                    Request Refill
                  </a>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">Lisinopril</div>
                          <div className="text-sm text-gray-500">10mg, Once daily</div>
                          <div className="text-xs text-gray-400 mt-1">Prescribed by Dr. Ashley Lars</div>
                        </div>
                        <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">7 days left</div>
                      </div>
                      <div className="mt-3 text-sm">
                        <span className="text-gray-500">Next dose:</span> Today, 8:00 PM
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">Aspirin</div>
                          <div className="text-sm text-gray-500">81mg, Once daily</div>
                          <div className="text-xs text-gray-400 mt-1">Prescribed by Dr. Ashley Lars</div>
                        </div>
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">30 days left</div>
                      </div>
                      <div className="mt-3 text-sm">
                        <span className="text-gray-500">Next dose:</span> Today, 8:00 PM
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">Vitamin D</div>
                          <div className="text-sm text-gray-500">1000 IU, Once daily</div>
                          <div className="text-xs text-gray-400 mt-1">Prescribed by Dr. Ashley Lars</div>
                        </div>
                        <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">2 days left</div>
                      </div>
                      <div className="mt-3 text-sm">
                        <span className="text-gray-500">Next dose:</span> Today, 8:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital List Section */}
          <div
            id="hospital-list"
            className={`bg-white rounded-lg shadow mb-6 ${activeSections.hospitalList ? "block" : "hidden"}`}
          >
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="font-bold">Nearby Hospitals</h2>
              <button
                id="close-hospital-list"
                className="text-gray-500 hover:text-gray-700"
                onClick={closeHospitalList}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hospital-item">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FontAwesomeIcon icon={faHospital} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Apollo Clinic Newtown</h3>
                      <p className="text-sm text-gray-500">1.2 miles away</p>
                      <p className="text-sm text-gray-500">Emergency services available 24/7</p>
                      <div className="mt-2 flex space-x-2">
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                          onClick={() => openHospitalLocation("Apollo Clinic Newtown", "22.581755802415984", "88.46078261892923")}
                        >
                          View Location
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Call</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hospital-item">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FontAwesomeIcon icon={faHospital} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Neotia Bhagirathi Woman and Child Care Centre, New Town</h3>
                      <p className="text-sm text-gray-500">2.5 miles away</p>
                      <p className="text-sm text-gray-500">Specialized in cardiac care</p>
                      <div className="mt-2 flex space-x-2">
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                          onClick={() => openHospitalLocation("Neotia Bhagirathi Woman and Child Care Centre, New Town", '22.58040603015204', '88.47569861467557')}
                        >
                          View Location
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Call</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hospital-item">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FontAwesomeIcon icon={faHospital} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">PKG MULTISPECIALITY HOSPITAL </h3>
                      <p className="text-sm text-gray-500">3.7 miles away</p>
                      <p className="text-sm text-gray-500">Pediatric specialty center</p>
                      <div className="mt-2 flex space-x-2">
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                          onClick={() => openHospitalLocation("PKG MULTISPECIALITY HOSPITAL", "22.5793757627498", "88.48213591608592")}
                        >
                          View Location
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Call</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hospital-item">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FontAwesomeIcon icon={faHospital} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Disha Eye Hospital New Town</h3>
                      <p className="text-sm text-gray-500">3.7 miles away</p>
                      <p className="text-sm text-gray-500">Pediatric specialty center</p>
                      <div className="mt-2 flex space-x-2">
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                          onClick={() => openHospitalLocation("Disha Eye Hospital New Town", "22.579256885246107", "88.4743682390507")}
                        >
                          View Location
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Call</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hospital-item">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FontAwesomeIcon icon={faHospital} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Tata Medical Center Kolkata, PHASE 2</h3>
                      <p className="text-sm text-gray-500">3.7 miles away</p>
                      <p className="text-sm text-gray-500">Pediatric specialty center</p>
                      <div className="mt-2 flex space-x-2">
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                          onClick={() => openHospitalLocation("Tata Medical Center Kolkata, PHASE 2", "22.576641554216828", "88.48050513306197"
                          )}
                        >
                          View Location
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Call</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard;