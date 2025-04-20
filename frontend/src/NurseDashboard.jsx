// src/NurseDashboard.js
import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserInjured, faCalendarAlt, faHome, faFileMedicalAlt, faPills, faCog, faHeadset, faPlus, faSyncAlt, faEye, faMapMarkerAlt, faPhone, faAmbulance, faCar, faPhoneAlt, faCheck, faExclamationTriangle, faChevronDown, faThLarge, faArrowUp, faArrowDown, faTasks, faClock, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import p1 from './assets/patient1.avif';
import p0 from "./assets/patient2.avif";
import p2 from "./assets/patient3.avif"
import p3 from "./assets/patient4.avif"
import p4 from "./assets/patient5.avif"
import nurse from "./assets/nurse.avif"
import Logo from "./assets/Logo.svg";
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const OPEN_CAGE_API_KEY = import.meta.env.VITE_OPEN_CAGE_API_KEY;

// Function to generate random latitude and longitude within a certain radius
const generateRandomLocation = (baseLat, baseLng, radiusInKm = 10) => {
  // Conversion factor
  
  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const toDegrees = (radians) => radians * (180 / Math.PI);

  // Earth's radius in kilometers
  const earthRadius = 6371;

  // Generate random bearing (direction)
  const randomBearing = Math.random() * 2 * Math.PI;

  // Generate random distance within the specified radius
  // Using square root to ensure uniform distribution across the circle
  const randomDistance = Math.sqrt(Math.random()) * radiusInKm;

  // Convert base latitude and longitude to radians
  const baseLatRad = toRadians(baseLat);
  const baseLngRad = toRadians(baseLng);

  // Calculate destination point using haversine formula
  const destinationLatRad = Math.asin(
    Math.sin(baseLatRad) * Math.cos(randomDistance / earthRadius) +
      Math.cos(baseLatRad) *
        Math.sin(randomDistance / earthRadius) *
        Math.cos(randomBearing)
  );

  const destinationLngRad =
    baseLngRad +
    Math.atan2(
      Math.sin(randomBearing) *
        Math.sin(randomDistance / earthRadius) *
        Math.cos(baseLatRad),
      Math.cos(randomDistance / earthRadius) -
        Math.sin(baseLatRad) * Math.sin(destinationLatRad)
    );

  // Convert back to degrees
  const destinationLat = toDegrees(destinationLatRad);
  const destinationLng = toDegrees(destinationLngRad);

  return {
    lat: destinationLat,
    lng: destinationLng,
  };
};

// Function to get location details from latitude and longitude using OpenCage Geocoding API
const getLocationDetails = async (lat, lng) => {
  try {
    // Replace with your actual OpenCage API key
    const API_KEY = OPEN_CAGE_API_KEY;
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error('Location details fetch failed');
    }
    
    const data = await response.json();
    
    // Check if results exist
    if (data.results && data.results.length > 0) {
      const components = data.results[0].components;
      // console.log(components);
      return {
        street: `${components.house_number || ''} ${components.county || components.street || ''}`.trim(),
        city: components.city || components.town || components.village || '',
        state: components.state || components.province || '',
        zipCode: components.postcode || components.postal_code || ''
      };
    } else {
      // Fallback to random location generation if API fails
      return {
        street: `${Math.floor(Math.random() * 1000)} Random Street`,
        city: ['New York', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'][Math.floor(Math.random() * 5)],
        state: 'NY',
        zipCode: `1${Math.floor(Math.random() * 9000) + 1000}`
      };
    }
  } catch (error) {
    console.error('Error fetching location details:', error);
    
    // Fallback to random location generation if API fails
    return {
      street: `${Math.floor(Math.random() * 1000)} Random Street`,
      city: ['New York', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'][Math.floor(Math.random() * 5)],
      state: 'NY',
      zipCode: `1${Math.floor(Math.random() * 9000) + 1000}`
    };
  }
};

// Function to generate mock patient data
const generateMockPatients = async (baseLocation, numPatients = 5) => {
  const patients = [];

  for (let i = 0; i < numPatients; i++) {
    // Generate random location near base location
    const patientLocation = generateRandomLocation(baseLocation.lat, baseLocation.lng);
    
    // Get location details
    const locationDetails = await getLocationDetails(patientLocation.lat, patientLocation.lng);

    // Generate patient statuses
    const statuses = ['Pending', 'Confirmed', 'En Route'];
    const status = statuses[i>2?0:i];

    // Generate time slots
    const hours = [10, 13, 15];
    const minutes = [30, 15, 45];
    const timeIndex = Math.floor(Math.random() * hours.length);

    patients.push({
      id: `P-${Math.floor(Math.random() * 9000) + 1000}`,
      name: [
        'Robert Wilson', 
        'Ruchika Thakur', 
        'Emily Johnson', 
        'David Brown', 
        'Sarah Miller'
      ][i],
      location: {
        ...locationDetails,
        lat: patientLocation.lat,
        lng: patientLocation.lng
      },
      time: {
        hour: hours[timeIndex],
        minute: minutes[timeIndex],
        display: `${hours[timeIndex]}:${minutes[timeIndex].toString().padStart(2, '0')} ${hours[timeIndex] >= 12 ? 'PM' : 'AM'}`,
        inHours: Math.floor(Math.random() * 6) + 1
      },
      status: status,
      image: [
        p0, p1, p2, p3, p4
      ][i]
    });
  }

  return patients;
};

const NurseDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [baseLocation, setBaseLocation] = useState({
    lat: 28.6139,
    lng: 77.209,
  }); // Default to New Delhi
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [directions, setDirections] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const navigate = useNavigate();
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Geolocation function
  const getCurrentLocation = () => {

    // Reset routes and selected patient when refreshing location
    setSelectedPatient(null);
    setDirections(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setBaseLocation({ lat: latitude, lng: longitude });
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (err) => {
          console.error("Error getting location:", err);
          setError("Unable to retrieve your location");
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  };

  // Create a ref for the map container
  const mapContainerRef = useRef(null);

  // Function to handle route navigation
  const handleNavigateToPatient = (patient) => {
    setSelectedPatient(patient);

    // If a different patient is selected, reset previous directions
    if (!selectedPatient || selectedPatient.id !== patient.id) {
      setDirections(null);
    }

    // Smooth scroll to the map container
    if (mapContainerRef.current) {
      mapContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Callback for directions service
  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === "OK") {
        setDirections(response);
      } else {
        console.log("response: ", response);
      }
    }
  };

  useEffect(() => {
    // Fetch current location when component mounts
    getCurrentLocation();
  }, []);

  useEffect(() => {
    const fetchPatients = async () => {
      if (baseLocation) {
        const mockPatients = await generateMockPatients(baseLocation);
        setPatients(mockPatients);
      }
    };

    fetchPatients();
  }, [baseLocation]);

  const mapContainerStyle = {
    height: "750px",
    width: "100%",
  };

  // Update center to use current location if available
  const center = currentLocation || baseLocation;

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-yellow-200 py-3 px-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            {/* Nav Toggle Button */}
            <button className="mr-3" onClick={toggleNav}>
              <FontAwesomeIcon
                icon={!isNavOpen ? faTimes : faBars}
                className="text-2xl text-gray-700"
              />
            </button>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className=" text-gray-700 text-2xl font-bold">DoctorSoul+</div>
          </div>
          {/* <nav className="ml-10 hidden md:block">
            <li><span>medicine</span></li>
            <li><span>medical Assitant</span></li>
          </nav> */}
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
              src={nurse}
              alt="Nurse"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="ml-3 hidden md:block">
              <div className="font-semibold">Anushka Dutta</div>
              <div className="text-sm text-gray-600">Registered Nurse</div>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`
    bg-gray-900 text-white 
    transition-all duration-300 ease-in-out
    fixed left-0 top-0 h-full 
    ${isNavOpen ? "-translate-x-full" : "translate-x-0"}
    w-64 z-50 shadow-lg
  `}
        >
          <nav className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <img src={Logo} alt="Logo" className="w-10 h-10 mr-3" />
                <span className="text-lg font-bold">DoctorSoul+</span>
              </div>
              <button
                onClick={toggleNav}
                className="text-white hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
              </button>
            </div>
            <ul className="space-y-2 flex-grow">
              <li
                className="flex items-center p-2 rounded 
        hover:bg-gray-700 
        transition-colors 
        cursor-pointer hover:text-yellow-300 
        bg-gray-800 text-yellow-300"
              >
                <FontAwesomeIcon icon={faThLarge} className="mr-3" />
                <span>Dashboard</span>
              </li>
              <li
                className="flex items-center p-2 rounded 
        hover:bg-gray-700 
        transition-colors 
        cursor-pointer hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faUserInjured} className="mr-3" />
                <span>Patients</span>
              </li>
              <li
                className="flex items-center p-2 rounded 
        hover:bg-gray-700 
        transition-colors 
        cursor-pointer hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
                <span>Schedule</span>
              </li>
              <button
                className="flex items-center p-2 rounded 
        hover:bg-gray-700 
        transition-colors 
        cursor-pointer hover:text-yellow-300"
              onClick={()=>navigate('/MedicalAssistant')}
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
                <span>Medical Assitant</span>
              </button>
              <button
                className="flex items-center p-2 rounded 
        hover:bg-gray-700 
        transition-colors 
        cursor-pointer hover:text-yellow-300"
              onClick={()=>navigate('/Medicine')}
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
                <span>Medicine</span>
              </button>
              <li
                className="flex items-center p-2 rounded 
        hover:bg-gray-700 
        transition-colors 
        cursor-pointer hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faHome} className="mr-3" />
                <span>Home Visits</span>
              </li>
              <li
                className="flex items-center p-2 rounded 
        hover:bg-gray-700 
        transition-colors 
        cursor-pointer hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faFileMedicalAlt} className="mr-3" />
                <span>Medical Records</span>
              </li>
              <li
                className="flex items-center p-2 rounded 
        hover:bg-gray-700 
        transition-colors 
        cursor-pointer hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faPills} className="mr-3" />
                <span>Medications</span>
              </li>
              <li
                className="flex items-center p-2 rounded 
        hover:bg-gray-700 
        transition-colors 
        cursor-pointer hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faCog} className="mr-3" />
                <span>Settings</span>
              </li>
              <li
                className="flex items-center p-2 rounded 
        hover:bg-gray-700 
        transition-colors 
        cursor-pointer hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faHeadset} className="mr-3" />
                <span>Support</span>
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
              <button className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-lg text-sm flex items-center font-medium">
                <FontAwesomeIcon icon={faPlus} className="mr-2" /> New Task
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
                  <FontAwesomeIcon
                    icon={faUserInjured}
                    className="text-blue-500"
                  />
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <span className="text-green-500">
                  <FontAwesomeIcon icon={faArrowUp} /> 12%
                </span>{" "}
                from yesterday
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Home Visits</p>
                  <h3 className="text-2xl font-bold mt-1">5</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <FontAwesomeIcon icon={faHome} className="text-green- 500" />
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <span className="text-green-500">
                  <FontAwesomeIcon icon={faArrowUp} /> 8%
                </span>{" "}
                from last week
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Pending Tasks</p>
                  <h3 className="text-2xl font-bold mt-1">3</h3>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <FontAwesomeIcon icon={faTasks} className="text-yellow-500" />
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <span className="text-red-500">
                  <FontAwesomeIcon icon={faArrowDown} /> 5%
                </span>{" "}
                from yesterday
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Hours Worked</p>
                  <h3 className="text-2xl font-bold mt-1">6.5</h3>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <FontAwesomeIcon icon={faClock} className="text-purple-500" />
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
                <FontAwesomeIcon icon={faAmbulance} className="text-xl mr-2" />
                <span>Call Ambulance</span>
              </button>

              <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faCar} className="text-xl mr-2" />
                <span>Call Driver</span>
              </button>

              <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-xl mr-2" />
                <span>Emergency Contact</span>
              </button>
            </div>
          </div>

          {/* Home Checkup Section */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="font-bold text-lg">Today's Home Checkups</h2>
              <button className="text-gray-700 text-sm flex items-center">
                <FontAwesomeIcon icon={faSyncAlt} className="mr-1" /> Refresh
              </button>
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
                        Address
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
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
                    {patients.map((patient) => (
                      <tr key={patient.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              src={patient.image}
                              alt="Patient"
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="ml-4">
                              <div className="font-medium">{patient.name}</div>
                              <div className="text-sm text-gray-500">
                                ID: {patient.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>{patient.location.street}</div>
                          <div className="text-sm text-gray-500">
                            {patient.location.city
                              ? `${patient.location.city},`
                              : ""}{" "}
                            {patient.location.state} {patient.location.zipCode}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>{patient.time.display}</div>
                          <div className="text-sm text-gray-500">
                            In {patient.time.inHours} hours
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs rounded-full 
              ${
                patient.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : patient.status === "Confirmed"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-green-100 text-green-800"
              }`}
                          >
                            {patient.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {/* Action buttons remain the same */}
                          <div className="flex space-x-2">
                            <button
                              className="text-blue-500 hover:text-blue-700 bg-blue-100 p-2 rounded-full"
                              title="View Details"
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </button>
                            <button
                              className="text-green-500 hover:text-green-700 bg-green-100 p-2 rounded-full"
                              title="Navigate"
                              onClick={() => handleNavigateToPatient(patient)}
                            >
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </button>
                            <button
                              className="text-indigo-500 hover:text-indigo-700 bg-indigo-100 p-2 rounded-full"
                              title="Call Patient"
                            >
                              <FontAwesomeIcon icon={faPhone} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Live Location Map */}
          <div
            id="map"
            ref={mapContainerRef}
            className="bg-white rounded-lg shadow mb-6"
          >
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="font-bold text-lg">Live Location</h2>
              <div className="flex space-x-2">
                <button
                  onClick={getCurrentLocation}
                  className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-lg text-sm flex items-center font-medium"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  Refresh Location
                </button>
              </div>
            </div>

            <div className="p-6">
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={12}
                >
                  {currentLocation && (
                    <Marker
                      position={currentLocation}
                      icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                        scaledSize: new window.google.maps.Size(50, 50),
                      }}
                      title="Your Current Location"
                    />
                  )}

                  {/* Patient Markers */}
                  {patients.map((patient) => (
                    <Marker
                      key={patient.id}
                      position={{
                        lat: patient.location.lat,
                        lng: patient.location.lng,
                      }}
                      title={patient.name}
                    />
                  ))}

                  {/* Directions Service */}
                  {selectedPatient && currentLocation && (
                    <DirectionsService
                      options={{
                        destination: {
                          lat: selectedPatient.location.lat,
                          lng: selectedPatient.location.lng,
                        },
                        origin: currentLocation,
                        travelMode: "DRIVING",
                      }}
                      callback={directionsCallback}
                    />
                  )}

                  {/* Directions Renderer */}
                  {directions && (
                    <DirectionsRenderer
                      directions={directions}
                      options={{
                        polylineOptions: {
                          strokeColor: "#FF0000",
                          strokeOpacity: 0.8,
                          strokeWeight: 5,
                        },
                      }}
                    />
                  )}
                </GoogleMap>
              </LoadScript>
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
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-yellow-300 rounded border-gray-300 focus:ring-yellow-300"
                    />
                    <span className="ml-3">
                      Check vital signs for Robert Wilson
                    </span>
                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      10:30 AM
                    </span>
                  </li>
                  {/* Additional Tasks can be added here */}
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-green-500"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Completed checkup</div>
                      <div className="text-sm text-gray-500">
                        Patient: Emily Johnson
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Today, 9:15 AM
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faPills}
                          className="text-blue-500"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Administered medication</div>
                      <div className="text-sm text-gray-500">
                        Patient: David Brown
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Today, 8:30 AM
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faFileMedicalAlt}
                          className="text-purple-500"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Updated medical record</div>
                      <div className="text-sm text-gray-500">
                        Patient: Sarah Miller
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Yesterday, 4:45 PM
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faExclamationTriangle}
                          className="text-yellow-500"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">
                        Reported abnormal vital signs
                      </div>
                      <div className="text-sm text-gray-500">
                        Patient: John Davis
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Yesterday, 2:15 PM
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
  );
};

export default NurseDashboard;