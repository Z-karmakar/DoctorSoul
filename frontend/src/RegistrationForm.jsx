"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import  useRegistration  from "./RegistrationContext"
import InputField from "./InputField"
import SocialLogin from "./SocialLogin"

const RegistrationForm = () => {
  const navigate = useNavigate()
  const { registrationData, updateRegistrationData } = useRegistration()
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    updateRegistrationData({ [name]: value })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!registrationData.address) newErrors.address = "Address is required"
    if (!registrationData.state) newErrors.state = "State is required"
    if (!registrationData.pin) newErrors.pin = "PIN is required"
    if (!registrationData.drivingLicenseNumber) newErrors.drivingLicenseNumber = "License number is required"
    if (!registrationData.drivingLicenseExpiry) newErrors.drivingLicenseExpiry = "Expiry date is required"
    if (!registrationData.age) newErrors.age = "Age is required"
    if (!registrationData.city) newErrors.city = "City is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      navigate("/upload-documents")
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-navy-900 mb-5 text-center">Driver Registration</h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        <InputField
          name="address"
          placeholder="Address"
          value={registrationData.address}
          onChange={handleChange}
          error={errors.address}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            name="state"
            placeholder="State"
            value={registrationData.state}
            onChange={handleChange}
            error={errors.state}
          />
          <InputField
            name="pin"
            placeholder="PIN"
            value={registrationData.pin}
            onChange={handleChange}
            error={errors.pin}
          />
        </div>

        <InputField
          name="drivingLicenseNumber"
          placeholder="Driving License Number"
          value={registrationData.drivingLicenseNumber}
          onChange={handleChange}
          error={errors.drivingLicenseNumber}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            name="drivingLicenseExpiry"
            placeholder="License Expiry Date"
            type="date"
            value={registrationData.drivingLicenseExpiry}
            onChange={handleChange}
            error={errors.drivingLicenseExpiry}
          />
          <InputField
            name="age"
            placeholder="Age"
            type="number"
            value={registrationData.age}
            onChange={handleChange}
            error={errors.age}
          />
        </div>

        <InputField
          name="city"
          placeholder="Which city you want to ride"
          value={registrationData.city}
          onChange={handleChange}
          error={errors.city}
        />

        <div className="flex justify-between items-center mt-6">
          <button type="button" className="text-blue-700 hover:underline">
            Forgot Password?
          </button>
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Remember Me</label>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="button"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Login
          </button>
          <button
            type="submit"
            className="flex-1 bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-4 rounded border border-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </div>
      </form>

      <SocialLogin />
    </div>
  )
}

export default RegistrationForm

