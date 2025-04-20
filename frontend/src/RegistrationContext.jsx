"use client"

import { createContext, useState, useContext } from "react"

const RegistrationContext = createContext()

export const useRegistration = () => useContext(RegistrationContext)

export const RegistrationProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState({
    address: "",
    state: "",
    pin: "",
    drivingLicenseNumber: "",
    drivingLicenseExpiry: "",
    age: "",
    city: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    vehicleOwnership: "",
    vehicleNumber: "",
    photo: null,
    drivingLicense: null,
    rcImages: null,
  })

  const updateRegistrationData = (newData) => {
    setRegistrationData((prev) => ({ ...prev, ...newData }))
  }

  return (
    <RegistrationContext.Provider value={{ registrationData, updateRegistrationData }}>
      {children}
    </RegistrationContext.Provider>
  )
}

