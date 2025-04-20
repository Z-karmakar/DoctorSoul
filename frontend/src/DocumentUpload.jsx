"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRegistration } from "./context/RegistrationContext"
import InputField from "./InputField"
import FileUpload from "./FileUpload"
import SocialLogin from "./SocialLogin"

const DocumentUpload = () => {
  const navigate = useNavigate()
  const { registrationData, updateRegistrationData } = useRegistration()
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    updateRegistrationData({ [name]: value })
  }

  const handleFileChange = (name, file) => {
    updateRegistrationData({ [name]: file })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!registrationData.photo) newErrors.photo = "Photo is required"
    if (!registrationData.drivingLicense) newErrors.drivingLicense = "Driving license is required"
    if (!registrationData.firstName) newErrors.firstName = "First name is required"
    if (!registrationData.lastName) newErrors.lastName = "Last name is required"
    if (!registrationData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    if (!registrationData.vehicleOwnership) newErrors.vehicleOwnership = "Vehicle ownership is required"
    if (!registrationData.vehicleNumber) newErrors.vehicleNumber = "Vehicle number is required"
    if (!registrationData.rcImages) newErrors.rcImages = "RC images are required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Submit the complete registration data
      console.log("Registration complete:", registrationData)
      alert("Registration successful!")
      // In a real app, you would send this data to your backend
    }
  }

  const handleBack = () => {
    navigate("/register")
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-navy-900 mb-8 text-center">Upload documents</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FileUpload
          name="photo"
          label="Upload your photo"
          onChange={(file) => handleFileChange("photo", file)}
          error={errors.photo}
        />

        <FileUpload
          name="drivingLicense"
          label="Upload driving license"
          onChange={(file) => handleFileChange("drivingLicense", file)}
          error={errors.drivingLicense}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            name="firstName"
            placeholder="First name"
            value={registrationData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <InputField
            name="lastName"
            placeholder="Last name"
            value={registrationData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        <InputField
          name="dateOfBirth"
          placeholder="Date of birth"
          type="date"
          value={registrationData.dateOfBirth}
          onChange={handleChange}
          error={errors.dateOfBirth}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            name="vehicleOwnership"
            placeholder="Vehicle ownership"
            value={registrationData.vehicleOwnership}
            onChange={handleChange}
            error={errors.vehicleOwnership}
          />
          <InputField
            name="vehicleNumber"
            placeholder="Vehicle number"
            value={registrationData.vehicleNumber}
            onChange={handleChange}
            error={errors.vehicleNumber}
          />
        </div>

        <FileUpload
          name="rcImages"
          label="Upload RC images"
          onChange={(file) => handleFileChange("rcImages", file)}
          error={errors.rcImages}
        />

        <div className="flex gap-4 mt-8">
          <button
            type="button"
            onClick={handleBack}
            className="flex-1 bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-4 rounded border border-blue-600 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Submit
          </button>
        </div>
      </form>

      <SocialLogin />
    </div>
  )
}

export default DocumentUpload

