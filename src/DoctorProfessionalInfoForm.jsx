import React, { useRef } from "react";
import { Briefcase, Calendar, GraduationCap, MapPin, Hospital, Heart, Clock, FileText, Award, CheckCircle, ChevronLeft, Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Using forwardRef to access the component with a ref
const DoctorProfessionalInfoForm = React.forwardRef(
   ({ formData, handleChange, handleSubmit, goBack }, ref) => {
      return (
         <div
            ref={ref}
            className="bg-white shadow-lg rounded-lg p-8 mb-10 border border-green-100"
         >
            <h2 className="text-xl font-semibold text-gray-800 mb-8 flex items-center">
               <Briefcase className="mr-2 text-green-600" />
               Professional Information
            </h2>

            <form onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label
                        htmlFor="medicalLicenseNumber"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <FileText className="h-4 w-4 mr-1 text-green-500" />
                        Medical License Number*
                     </label>
                     <input
                        type="text"
                        id="medicalLicenseNumber"
                        name="medicalLicenseNumber"
                        value={formData.medicalLicenseNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="Enter license number"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="specialization"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Briefcase className="h-4 w-4 mr-1 text-green-500" />
                        Specialization*
                     </label>
                     <select
                        id="specialization"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                     >
                        <option value="">Select Specialization</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="dermatology">Dermatology</option>
                        <option value="endocrinology">Endocrinology</option>
                        <option value="gastroenterology">Gastroenterology</option>
                        <option value="general-practice">General Practice</option>
                        <option value="neurology">Neurology</option>
                        <option value="obstetrics-gynecology">
                           Obstetrics & Gynecology
                        </option>
                        <option value="oncology">Oncology</option>
                        <option value="ophthalmology">Ophthalmology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="psychiatry">Psychiatry</option>
                        <option value="radiology">Radiology</option>
                        <option value="urology">Urology</option>
                        <option value="other">Other</option>
                     </select>
                  </div>

                  <div>
                     <label
                        htmlFor="subspecialization"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Briefcase className="h-4 w-4 mr-1 text-green-500" />
                        Sub-specialization (if any)
                     </label>
                     <input
                        type="text"
                        id="subspecialization"
                        name="subspecialization"
                        value={formData.subspecialization}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="Enter sub-specialization"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="yearsOfExperience"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Calendar className="h-4 w-4 mr-1 text-green-500" />
                        Years of Experience*
                     </label>
                     <input
                        type="number"
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        value={formData.yearsOfExperience}
                        onChange={handleChange}
                        required
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="Years of practice"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="medicalSchool"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <GraduationCap className="h-4 w-4 mr-1 text-green-500" />
                        Medical School*
                     </label>
                     <input
                        type="text"
                        id="medicalSchool"
                        name="medicalSchool"
                        value={formData.medicalSchool}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="School name"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="graduationYear"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <GraduationCap className="h-4 w-4 mr-1 text-green-500" />
                        Graduation Year*
                     </label>
                     <input
                        type="number"
                        id="graduationYear"
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleChange}
                        required
                        min="1950"
                        max="2025"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="Year of graduation"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="hospitalAffiliation"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Hospital className="h-4 w-4 mr-1 text-green-500" />
                        Hospital Affiliation*
                     </label>
                     <input
                        type="text"
                        id="hospitalAffiliation"
                        name="hospitalAffiliation"
                        value={formData.hospitalAffiliation}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="Hospital name"
                     />
                  </div>

                  <div className="md:col-span-2">
                     <label
                        htmlFor="clinicAddress"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <MapPin className="h-4 w-4 mr-1 text-green-500" />
                        Clinic/Practice Address*
                     </label>
                     <input
                        type="text"
                        id="clinicAddress"
                        name="clinicAddress"
                        value={formData.clinicAddress}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="Enter clinic address"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="practiceAreas"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Heart className="h-4 w-4 mr-1 text-green-500" />
                        Practice Areas/Conditions Treated
                     </label>
                     <textarea
                        id="practiceAreas"
                        name="practiceAreas"
                        value={formData.practiceAreas}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="E.g., Diabetes, Hypertension, etc."
                     ></textarea>
                  </div>

                  <div>
                     <label
                        htmlFor="availabilityHours"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Clock className="h-4 w-4 mr-1 text-green-500" />
                        Availability Hours
                     </label>
                     <input
                        type="text"
                        id="availabilityHours"
                        name="availabilityHours"
                        value={formData.availabilityHours}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="E.g., Mon-Fri: 9AM-5PM"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="insuranceAccepted"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <FileText className="h-4 w-4 mr-1 text-green-500" />
                        Insurance Plans Accepted
                     </label>
                     <input
                        type="text"
                        id="insuranceAccepted"
                        name="insuranceAccepted"
                        value={formData.insuranceAccepted}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="List insurance plans"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="languages"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Languages className="h-4 w-4 mr-1 text-green-500" />
                        Languages Spoken
                     </label>
                     <input
                        type="text"
                        id="languages"
                        name="languages"
                        value={formData.languages}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="E.g., English, Spanish, etc."
                     />
                  </div>

                  <div className="md:col-span-2">
                     <label
                        htmlFor="certificationsAndAwards"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Award className="h-4 w-4 mr-1 text-green-500" />
                        Certifications and Awards
                     </label>
                     <textarea
                        id="certificationsAndAwards"
                        name="certificationsAndAwards"
                        value={formData.certificationsAndAwards}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                        placeholder="List certifications and awards"
                     ></textarea>
                  </div>

                  <div className="md:col-span-2">
                     <div className="flex items-center p-4 bg-green-50 rounded-lg">
                        <input
                           type="checkbox"
                           id="acceptingNewPatients"
                           name="acceptingNewPatients"
                           checked={formData.acceptingNewPatients}
                           onChange={handleChange}
                           className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label
                           htmlFor="acceptingNewPatients"
                           className="ml-3 text-sm text-gray-700 font-medium flex items-center"
                        >
                           <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                           Currently accepting new patients
                        </label>
                     </div>
                  </div>
               </div>

               <div className="mt-8 flex justify-between">
                  <button
                     type="button"
                     onClick={goBack}
                     className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm transition-colors flex items-center"
                  >
                     <ChevronLeft className="mr-2 h-5 w-5" />
                     Back to Personal Information
                  </button>

                  <button
                     type="submit"
                     className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-md transition-colors flex items-center"
                  >
                     Complete Registration
                     <CheckCircle className="ml-2 h-5 w-5" />
                  </button>
               </div>
            </form>
         </div>
      );
   }
);

export default DoctorProfessionalInfoForm;