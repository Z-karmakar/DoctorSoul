import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Logo from "./assets/Logo.svg";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 28.6139,
  lng: 77.209,
};

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const OPEN_CAGE_API_KEY = import.meta.env.VITE_OPEN_CAGE_API_KEY;

const App = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [map, setMap] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [pickupMarker, setPickupMarker] = useState(null);
  const [deliveryMarker, setDeliveryMarker] = useState(null);
  const [mapLoading, setMapLoading] = useState(true);
  const [isLocating, setIsLocating] = useState(false);
  const [ordersContainer, setOrdersContainer] = useState(null);
  const [statusPanel, setStatusPanel] = useState(true);
  const [orderDetailsPanel, setOrderDetailsPanel] = useState(false);

  const medicineNames = [
    "Paracetamol",
    "Amoxicillin",
    "Metformin",
    "Atorvastatin",
    "Omeprazole",
    "Losartan",
    "Albuterol",
    "Levothyroxine",
    "Insulin",
    "Aspirin",
    "Cetirizine",
    "Montelukast",
    "Lisinopril",
    "Sertraline",
    "Gabapentin",
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(newLocation);

          // Create a marker for the current location
          if (map) {
            const userMarker = new window.google.maps.Marker({
              position: null,
              map: map,
              title: "Your Current Location",
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#4285F4",
                fillOpacity: 0.8,
                strokeColor: "white",
                strokeWeight: 2,
              },
            });

            // Update markers state
            setMarkers((prev) => [
              ...prev.filter((m) => m.getTitle() !== "Your Current Location"),
              userMarker,
            ]);
          }

          setMapLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setUserLocation(center);
          setMapLoading(false);
        }
      );
    } else {
      setUserLocation(center);
      setMapLoading(false);
    }
  }, [map]); // Note the dependency on map

  // New function to fetch and update current location
  const fetchCurrentLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Update user location
          setUserLocation(newLocation);

          // If map is loaded, center and add marker
          if (map) {
            // Clear all existing markers first
            markers.forEach((marker) => marker.setMap(null));

            map.panTo(newLocation);

            // Create and add marker for current location
            const userMarker = new window.google.maps.Marker({
              position: newLocation,
              map: map,
              title: "Your Current Location",
              animation: window.google.maps.Animation.DROP,
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#4285F4",
                fillOpacity: 0.8,
                strokeColor: "white",
                strokeWeight: 2,
              },
            });

            // Reset markers state with only the new user marker
            setMarkers([userMarker]);
          }

          setIsLocating(false);
          setMapLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          // Fallback to default location
          setUserLocation(center);
          setIsLocating(false);
          setMapLoading(false);
        }
      );
    } else {
      // Geolocation not supported
      setUserLocation(center);
      setIsLocating(false);
      setMapLoading(false);
    }
  };

  const generateMockOrders = (count) => {
    const orders = [];
    for (let i = 0; i < count; i++) {
      const pickupLocation = getRandomLocation(userLocation, 3);
      const deliveryLocation = getRandomLocation(userLocation, 5);
      const totalDistance =
        calculateDistance(userLocation, pickupLocation) +
        calculateDistance(pickupLocation, deliveryLocation);
      const itemCount = Math.floor(Math.random() * 4) + 1;
      const items = Array.from({ length: itemCount }, () => {
        const randomMedicine =
          medicineNames[Math.floor(Math.random() * medicineNames.length)];
        return {
          id: randomMedicine.id, // Use the unique ID
          name: randomMedicine.name,
          quantity: Math.floor(Math.random() * 3) + 1,
        };
      });
      orders.push({
        id: `ORD${Math.floor(1000 + Math.random() * 9000)}`,
        customerName: `Patient ${String.fromCharCode(65 + i)}`,
        pickupAddress: `Pharmacy ${i + 1}, Street ${
          Math.floor(Math.random() * 50) + 1
        }`,
        deliveryAddress: `Apartment ${
          Math.floor(Math.random() * 100) + 1
        }, Building ${Math.floor(Math.random() * 20) + 1}`,
        pickupLocation,
        deliveryLocation,
        price: Math.round((totalDistance * 15 + 50) * 100) / 100,
        distance: totalDistance,
        estimatedTime: Math.round(totalDistance * 5) + 10,
        status: "pending",
        isEmergency: Math.random() < 0.3,
        items,
      });
    }
    return orders;
  };

  const getRandomLocation = (center, radiusInKm) => {
    const radiusInDeg = radiusInKm / 111.32;
    const u = Math.random();
    const v = Math.random();
    const w = radiusInDeg * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const x = w * Math.cos(t);
    const y = w * Math.sin(t);
    return {
      lat: center.lat + y,
      lng: center.lng + x,
    };
  };

  // New function to calculate distance
  const calculateDistance = (point1, point2) => {
    const R = 6371;
    const dLat = ((point2.lat - point1.lat) * Math.PI) / 180;
    const dLon = ((point2.lng - point1.lng) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((point1.lat * Math.PI) / 180) *
        Math.cos((point2.lat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 10) / 10;
  };

  // New function to calculate and display route
  const calculateAndDisplayRoute = (origin, waypoint, destination) => {
    if (directionsService && map) {
      // Clear any existing markers completely
      markers.forEach((marker) => marker.setMap(null));
      setMarkers([]);

      // If there's an existing directions renderer, remove it
      if (directionsRenderer) {
        directionsRenderer.setMap(null);
      }

      // Create a new directions renderer with no markers
      const newDirectionsRenderer = new window.google.maps.DirectionsRenderer({
        suppressMarkers: true, // Completely suppress default markers
        map: map,
      });

      // Update state with the new renderer
      setDirectionsRenderer(newDirectionsRenderer);

      // Calculate the route
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          waypoints: [{ location: waypoint, stopover: true }],
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            newDirectionsRenderer.setDirections(result);
          } else {
            console.error(`Directions request failed due to ${status}`);
          }
        }
      );
    }
  };

  // New function to calculate travel time
  const calculateTravelTime = (origin, destination) => {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps) {
        const distanceService = new window.google.maps.DistanceMatrixService();

        distanceService.getDistanceMatrix(
          {
            origins: [origin],
            destinations: [destination],
            travelMode: "DRIVING",
            unitSystem: window.google.maps.UnitSystem.METRIC,
          },
          (response, status) => {
            if (status === "OK") {
              const duration = response.rows[0].elements[0].duration.text;
              const durationValue = response.rows[0].elements[0].duration.value; // in seconds

              resolve({
                durationText: duration, // e.g., "15 mins"
                durationSeconds: durationValue,
              });
            } else {
              reject(new Error("Error calculating travel time"));
            }
          }
        );
      } else {
        reject(new Error("Google Maps API not loaded"));
      }
    });
  };

  const selectOrder = async (orderId) => {
    // Clear ALL existing markers completely
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);

    // Clear any existing directions renderer
    if (directionsRenderer) {
      directionsRenderer.setMap(null);
      setDirectionsRenderer(null);
    }

    // Clear any existing directions service route
    if (directionsService) {
      directionsService.route = null;
    }

    // Set the selected order
    setSelectedOrderId(orderId);

    // Ensure order details panel is shown when an order is selected
    setStatusPanel(false);
    setOrderDetailsPanel(true);

    // Find the selected order
    const selectedOrder = activeOrders.find((order) => order.id === orderId);

    if (selectedOrder && map && userLocation) {

      // Create new directions service and renderer
      const newDirectionsService = new window.google.maps.DirectionsService();
      const newDirectionsRenderer = new window.google.maps.DirectionsRenderer({
        suppressMarkers: true, // Suppress default markers
        map: map,
      });

      // Update state with new services
      setDirectionsService(newDirectionsService);
      setDirectionsRenderer(newDirectionsRenderer);

      // Create markers for user location, pickup, and delivery
      const pickupMarker = new window.google.maps.Marker({
        position: selectedOrder.pickupLocation,
        map: map,
        title: "Pickup Location",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        },
      });

      const deliveryMarker = new window.google.maps.Marker({
        position: selectedOrder.deliveryLocation,
        map: map,
        title: "Delivery Location",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
        },
      });

      // Update markers state
      setMarkers([pickupMarker, deliveryMarker]);

      // Calculate and display route
      newDirectionsService.route(
        {
          origin: userLocation,
          destination: selectedOrder.deliveryLocation,
          waypoints: [
            { location: selectedOrder.pickupLocation, stopover: true },
          ],
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            newDirectionsRenderer.setDirections(result);
          } else {
            console.error(`Directions request failed due to ${status}`);
          }
        }
      );

      try {
        // Calculate travel time
        const travelTime = await calculateTravelTime(
          new window.google.maps.LatLng(userLocation.lat, userLocation.lng),
          new window.google.maps.LatLng(
            selectedOrder.deliveryLocation.lat,
            selectedOrder.deliveryLocation.lng
          )
        );

        // Update the order with precise travel time
        selectedOrder.exactTravelTime = travelTime.durationText;
        selectedOrder.exactTravelTimeSeconds = travelTime.durationSeconds;

        // You can now use travelTime.durationText in your UI
        console.log(`Estimated travel time: ${travelTime.durationText}`);
      } catch (error) {
        console.error("Failed to calculate travel time", error);
      }
    }
  };

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);

    if (!isOnline) {
      // Going online
      const orders = generateMockOrders(10);
      setActiveOrders(orders);

      // Reset selected order and panels
      setSelectedOrderId(null);
      setStatusPanel(false);
      setOrderDetailsPanel(false);

      // If orders exist, select the first order
      // if (orders.length > 0) {
      //   setSelectedOrderId(orders[0].id);
      //   setOrderDetailsPanel(true);

      //   // Automatically calculate route for the first order
      //   const firstOrder = orders[0];
      //   setTimeout(() => {
      //     calculateAndDisplayRoute(
      //       userLocation,
      //       firstOrder.pickupLocation,
      //       firstOrder.deliveryLocation
      //     );
      //   }, 1000);
      // }

      // Clear any existing markers
      if (markers.length > 0) {
        markers.forEach((marker) => marker.setMap(null));
        setMarkers([]);
      }

      // Clear any existing directions
      if (directionsRenderer) {
        directionsRenderer.setMap(null);
        setDirectionsRenderer(null);
      }

      fetchCurrentLocation();
    } else {
      // Going offline
      setActiveOrders([]);
      setSelectedOrderId(null);

      // Clear any existing markers
      if (markers.length > 0) {
        markers.forEach((marker) => marker.setMap(null));
        setMarkers([]);
      }

      // Clear any existing directions
      if (directionsRenderer) {
        directionsRenderer.setMap(null);
        setDirectionsRenderer(null);
      }

      // Show status panel when going offline
      setStatusPanel(true);
      setOrderDetailsPanel(false);
    }
  };

  const acceptOrder = (orderId) => {
    setActiveOrders(
      activeOrders.map((order) =>
        order.id === orderId ? { ...order, status: "active" } : order
      )
    );
  };

  const declineOrder = (orderId) => {
    setActiveOrders(activeOrders.filter((order) => order.id !== orderId));
    if (activeOrders.length > 0) {
      setSelectedOrderId(activeOrders[0].id);
    } else {
      setSelectedOrderId(null);
    }
  };

  const completeOrder = (orderId) => {
    const completedOrder = activeOrders.find((order) => order.id === orderId);
    if (completedOrder) {
      setCompletedOrders([
        ...completedOrders,
        { ...completedOrder, status: "completed" },
      ]);
      setActiveOrders(activeOrders.filter((order) => order.id !== orderId));
      if (activeOrders.length > 0) {
        setSelectedOrderId(activeOrders[0].id);
      } else {
        setSelectedOrderId(null);
      }
    }
  };

  const updateMap = () => {
    if (map && selectedOrderId) {
      // Clear all existing markers
      markers.forEach((marker) => marker.setMap(null));
      setMarkers([]);

      // Clear any existing directions
      if (directionsRenderer) {
        directionsRenderer.setMap(null);
      }

      const order = [...activeOrders, ...completedOrders].find(
        (o) => o.id === selectedOrderId
      );

      if (order) {
        const pickupMarker = new window.google.maps.Marker({
          position: order.pickupLocation,
          map: map,
          title: "Pickup Location",
          animation: window.google.maps.Animation.DROP,
          icon: {
            url: `http://maps.google.com/mapfiles/ms/icons/blue-dot.png`,
          },
        });

        const deliveryMarker = new window.google.maps.Marker({
          position: order.deliveryLocation,
          map: map,
          title: "Delivery Location",
          animation: window.google.maps.Animation.DROP,
          icon: {
            url: `http://maps.google.com/mapfiles/ms/icons/green-dot.png`,
          },
        });

        // Add new markers to the state
        setMarkers([pickupMarker, deliveryMarker]);

        const directionsService = new window.google.maps.DirectionsService();
        const newDirectionsRenderer = new window.google.maps.DirectionsRenderer(
          {
            suppressMarkers: true,
            map: map,
          }
        );

        // Update state with new directions renderer
        setDirectionsRenderer(newDirectionsRenderer);

        directionsService.route(
          {
            origin: userLocation,
            destination: order.deliveryLocation,
            waypoints: [{ location: order.pickupLocation, stopover: true }],
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              newDirectionsRenderer.setDirections(result);
            }
          }
        );
      }
    }
  };

  useEffect(() => {
    updateMap();
  }, [userLocation, selectedOrderId]);

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <header className="bg-yellow-100 shadow-md z-10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <img src={Logo} alt="Logo" className="w-full h-full" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  DoctorSoul+
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleOnlineStatus}
                className={`mr-4 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isOnline
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {isOnline ? "Online " : "Offline"}
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="flex text-sm rounded-full focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-80 bg-white border-r border-gray-200 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Orders</h2>
          </div>
          <div className="flex-1 overflow-y-auto" id="orders-container">
            {activeOrders.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  No orders yet
                </h3>
                <p className="text-sm text-gray-500">
                  Go online to start receiving orders
                </p>
              </div>
            ) : (
              activeOrders.map((order) => (
                <button
                  key={order.id}
                  onClick={() => selectOrder(order.id)}
                  className={`order-item w-full text-left p-3 rounded-lg border ${
                    order.id === selectedOrderId
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:bg-gray-50"
                  } ${order.isEmergency ? "border-red-200 bg-red-50" : ""}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-gray-900">
                        Order #{order.id}
                      </div>
                      <div className="text-sm text-gray-600">
                        {order.customerName}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">
                        ₹{order.price.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {order.distance.toFixed(1)} km
                      </div>
                      <div className="text-xs text-gray-500">
                        {order.exactTravelTime || order.estimatedTime} mins
                      </div>
                    </div>
                  </div>
                  {order.isEmergency && (
                    <div className="mt-2 text-xs font-medium text-red-600 emergency-badge">
                      Emergency Delivery
                    </div>
                  )}
                </button>
              ))
            )}
          </div>
        </aside>

        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 relative">
            {mapLoading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-4 text-gray-700">Loading map...</p>
                </div>
              </div>
            ) : (
              <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  id="map"
                  mapContainerStyle={containerStyle}
                  center={userLocation || center}
                  zoom={13}
                  onLoad={(map) => setMap(map)}
                >
                  {/* User's current location marker */}
                  {userLocation && (
                    <Marker
                      position={userLocation}
                      title="Your Current Location"
                    />
                  )}

                  {/* Pickup location marker */}
                  {pickupMarker && (
                    <Marker
                      position={pickupMarker.position}
                      icon={pickupMarker.icon}
                      title="Pickup Location"
                    />
                  )}

                  {/* Delivery location marker */}
                  {deliveryMarker && (
                    <Marker
                      position={deliveryMarker.position}
                      icon={deliveryMarker.icon}
                      title="Delivery Location"
                    />
                  )}
                </GoogleMap>
              </LoadScript>
            )}
          </div>

          {/* Order Details Panel */}
          {orderDetailsPanel && (
            <div
              className={`p-4 bg-white shadow-lg border-t ${
                selectedOrderId ? "" : "hidden"
              }`}
              id="order-details-panel"
            >
              <div className="max-w-4xl mx-auto">
                {/* Order details will be populated here */}
                <div
                  className={`p-4 bg-white shadow-lg border-t ${
                    selectedOrderId ? "" : "hidden"
                  }`}
                  id="order-details-panel"
                >
                  <div className="max-w-4xl mx-auto">
                    {selectedOrderId && (
                      <div className="border-gray-200 bg-white h-72 rounded-lg overflow-y-auto border">
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-lg font-semibold text-gray-900">
                                  Order #{selectedOrderId}
                                </h3>
                                {activeOrders.find(
                                  (order) => order.id === selectedOrderId
                                )?.isEmergency && (
                                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    Emergency
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-600">
                                Customer:{" "}
                                {
                                  activeOrders.find(
                                    (order) => order.id === selectedOrderId
                                  )?.customerName
                                }
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-gray-900">
                                ₹
                                {activeOrders
                                  .find((order) => order.id === selectedOrderId)
                                  ?.price.toFixed(2)}
                              </div>
                              <div className="text-sm text-gray-500">
                                {
                                  activeOrders.find(
                                    (order) => order.id === selectedOrderId
                                  )?.distance.toFixed(1)
                                }{" "}
                                km
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                Estimated delivery time:{" "}
                                {activeOrders.find(
                                  (order) => order.id === selectedOrderId
                                )?.exactTravelTime ||
                                  activeOrders.find(
                                    (order) => order.id === selectedOrderId
                                  )?.estimatedTime + " min"}
                              </div>
                              {/* New details time added here */}
                              <div className="text-xs text-gray-400 mt-1">
                                Order Placed: {new Date().toLocaleTimeString()}
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3 mb-4">
                            <div className="flex items-start">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-blue-700 mt-0.5 mr-2 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  Pickup
                                </div>
                                <div className="text-sm text-gray-600">
                                  {
                                    activeOrders.find(
                                      (order) => order.id === selectedOrderId
                                    )?.pickupAddress
                                  }
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-green-700 mt-0.5 mr-2 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  Delivery
                                </div>
                                <div className="text-sm text-gray-600">
                                  {
                                    activeOrders.find(
                                      (order) => order.id === selectedOrderId
                                    )?.deliveryAddress
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 pt-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">
                              Order Items
                            </h4>
                            <ul className="space-y-2">
                              {activeOrders
                                .find((order) => order.id === selectedOrderId)
                                ?.items.map((item) => {
                                  item.name =
                                    medicineNames[
                                      Math.floor(
                                        Math.random() * medicineNames.length
                                      )
                                    ];
                                  return (
                                    <li
                                      key={item.name}
                                      className="flex justify-between items-center"
                                    >
                                      <div>
                                        <span className="text-sm text-gray-600 block">
                                          {item.name}
                                        </span>
                                        {/* Add item name explicitly below quantity */}
                                        <span className="text-xs text-gray-500">
                                          Item Name: {item.name}
                                        </span>
                                      </div>
                                      <span className="text-sm text-gray-900">
                                        {item.quantity}x
                                      </span>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                          <div className="flex items-center mt-4 text-sm text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1 text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>
                              Estimated delivery time:{" "}
                              {
                                activeOrders.find(
                                  (order) => order.id === selectedOrderId
                                )?.estimatedTime
                              }{" "}
                              min
                            </span>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 flex justify-between">
                          {activeOrders.find(
                            (order) => order.id === selectedOrderId
                          )?.status === "pending" ? (
                            <>
                              <button
                                onClick={() => acceptOrder(selectedOrderId)}
                                className="px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
                              >
                                Accept Order
                              </button>
                              <button
                                onClick={() => declineOrder(selectedOrderId)}
                                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors"
                              >
                                Decline
                              </button>
                            </>
                          ) : activeOrders.find(
                              (order) => order.id === selectedOrderId
                            )?.status === "active" ? (
                            <button
                              onClick={() => completeOrder(selectedOrderId)}
                              className="px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
                            >
                              Complete Delivery
                            </button>
                          ) : (
                            <div className="text-green-600 font-medium">
                              Completed
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Status Panel */}
          {statusPanel && (
            <div
              className={`p-8 bg-white shadow-lg border-t ${
                isOnline ? "hidden" : ""
              }`}
              id="status-panel"
            >
              <div className="max-w-md mx-auto text-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  You're offline
                </h3>
                <p className="text-gray-500 mt-2">
                  Go online to start receiving delivery requests
                </p>
                <button
                  onClick={toggleOnlineStatus}
                  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  Go Online
                </button>
              </div>
            </div>
          )}
        </main>

        <div className="w-64 bg-white border-l border-gray-200 hidden lg:block overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Today's Summary
            </h2>
          </div>

          <div className="p-4">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-500">Status</div>
                <div className="text-sm font-medium text-gray-500">
                  {isOnline ? "Online" : "Offline"}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    isOnline ? "bg-green-600" : "bg-gray-400"
                  }`}
                  style={{ width: isOnline ? "100%" : "0%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Active Orders</div>
                  <div className="text-lg font-semibold text-gray-900">
                    {activeOrders.length}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Completed Today</div>
                  <div className="text-lg font-semibold text-gray-900">
                    {completedOrders.length}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Today's Earnings</div>
                  <div className="text-lg font-semibold text-gray-900">
                    ₹
                    {completedOrders
                      .reduce((sum, order) => sum + order.price, 0)
                      .toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                View Earnings
              </button>
              <button className="w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
