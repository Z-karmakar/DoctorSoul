import React, { useRef } from "react";
import {
   Briefcase,
   Calendar,
   GraduationCap,
   MapPin,
   Hospital,
   Heart,
   Clock,
   FileText,
   Award,
   CheckCircle,
   ChevronLeft,
   Languages,
} from "lucide-react";

// Using forwardRef to access the component with a ref
const NurseProfessionalInfoForm = React.forwardRef(
   ({ formData, handleChange, handleSubmit, goBack }, ref) => {
      return (
         <div
            ref={ref}
            className="bg-white shadow-lg rounded-lg p-8 mb-10 border border-purple-100"
         >
            <h2 className="text-xl font-semibold text-gray-800 mb-8 flex items-center">
               <Briefcase className="mr-2 text-purple-600" />
               Professional Information
            </h2>

            <form onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label
                        htmlFor="nursingLicenseNumber"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <FileText className="h-4 w-4 mr-1 text-purple-500" />
                        Nursing License Number*
                     </label>
                     <input
                        type="text"
                        id="nursingLicenseNumber"
                        name="nursingLicenseNumber"
                        value={formData.nursingLicenseNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                        placeholder="Enter license number"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="specialization"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Briefcase className="h-4 w-4 mr-1 text-purple-500" />
                        Nursing Specialty*
                     </label>
                     <select
                        id="specialization"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                     >
                        <option value="">Select Specialty</option>
                        <option value="critical-care">Critical Care</option>
                        <option value="emergency">Emergency</option>
                        <option value="medical-surgical">Medical-Surgical</option>
                        <option value="oncology">Oncology</option>
                        <option value="pediatric">Pediatric</option>
                        <option value="psychiatric">Psychiatric</option>
                        <option value="obstetric">Obstetric</option>
                        <option value="geriatric">Geriatric</option>
                        <option value="neonatal">Neonatal</option>
                        <option value="perioperative">Perioperative</option>
                        <option value="home-health">Home Health</option>
                        <option value="palliative">Palliative Care</option>
                        <option value="public-health">Public Health</option>
                        <option value="nurse-practitioner">Nurse Practitioner</option>
                        <option value="other">Other</option>
                     </select>
                  </div>

                  <div>
                     <label
                        htmlFor="subspecialization"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Briefcase className="h-4 w-4 mr-1 text-purple-500" />
                        Sub-specialty (if any)
                     </label>
                     <input
                        type="text"
                        id="subspecialization"
                        name="subspecialization"
                        value={formData.subspecialization}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                        placeholder="Enter sub-specialty"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="yearsOfExperience"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Calendar className="h-4 w-4 mr-1 text-purple-500" />
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                        placeholder="Years of practice"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="nursingSchool"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <GraduationCap className="h-4 w-4 mr-1 text-purple-500" />
                        Nursing School*
                     </label>
                     <input
                        type="text"
                        id="nursingSchool"
                        name="nursingSchool"
                        value={formData.nursingSchool}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                        placeholder="School name"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="graduationYear"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <GraduationCap className="h-4 w-4 mr-1 text-purple-500" />
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                        placeholder="Year of graduation"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="hospitalAffiliation"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Hospital className="h-4 w-4 mr-1 text-purple-500" />
                        Healthcare Facility Affiliation*
                     </label>
                     <input
                        type="text"
                        id="hospitalAffiliation"
                        name="hospitalAffiliation"
                        value={formData.hospitalAffiliation}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                        placeholder="Facility name"
                     />
                  </div>

                  <div className="md:col-span-2">
                     <label
                        htmlFor="workAddress"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <MapPin className="h-4 w-4 mr-1 text-purple-500" />
                        Work Address*
                     </label>
                     <input
                        type="text"
                        id="workAddress"
                        name="workAddress"
                        value={formData.workAddress}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                        placeholder="Enter work address"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="clinicalSkills"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Heart className="h-4 w-4 mr-1 text-purple-500" />
                        Clinical Skills/Competencies
                     </label>
                     <textarea
                        id="clinicalSkills"
                        name="clinicalSkills"
                        value={formData.clinicalSkills}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                        placeholder="E.g., Wound Care, IV Therapy, etc."
                     ></textarea>
                  </div>

                  <div>
                     <label
                        htmlFor="availabilityHours"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Clock className="h-4 w-4 mr-1 text-purple-500" />
                        Availability Hours
                     </label>
                     <input
                        type="text"
                        id="availabilityHours"
                        name="availabilityHours"
                        value={formData.availabilityHours}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                        placeholder="E.g., Mon-Fri: 7AM-7PM"
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="nursingType"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <FileText className="h-4 w-4 mr-1 text-purple-500" />
                        Nursing Type
                     </label>
                     <select
                        id="nursingType"
                        name="nursingType"
                        value={formData.nursingType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                     >
                        <option value="">Select Type</option>
                        <option value="registered-nurse">Registered Nurse (RN)</option>
                        <option value="licensed-practical">
                           Licensed Practical Nurse (LPN)
                        </option>
                        <option value="nurse-practitioner">
                           Nurse Practitioner (NP)
                        </option>
                        <option value="clinical-nurse-specialist">
                           Clinical Nurse Specialist (CNS)
                        </option>
                        <option value="certified-nurse-midwife">
                           Certified Nurse Midwife (CNM)
                        </option>
                        <option value="certified-registered-nurse-anesthetist">
                           Certified Registered Nurse Anesthetist (CRNA)
                        </option>
                        <option value="other">Other</option>
                     </select>
                  </div>

                  <div>
                     <label
                        htmlFor="languages"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Languages className="h-4 w-4 mr-1 text-purple-500" />
                        Languages Spoken
                     </label>
                     <input
                        type="text"
                        id="languages"
                        name="languages"
                        value={formData.languages}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                        placeholder="E.g., English, Spanish, etc."
                     />
                  </div>

                  <div className="md:col-span-2">
                     <label
                        htmlFor="certificationsAndAwards"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                     >
                        <Award className="h-4 w-4 mr-1 text-purple-500" />
                        Certifications and Awards
                     </label>
                     <textarea
                        id="certificationsAndAwards"
                        name="certificationsAndAwards"
                        value={formData.certificationsAndAwards}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                        placeholder="E.g., BLS, ACLS, PALS, CCRN, etc."
                     ></textarea>
                  </div>

                  <div className="md:col-span-2">
                     <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                        <input
                           type="checkbox"
                           id="acceptingNewAssignments"
                           name="acceptingNewAssignments"
                           checked={formData.acceptingNewAssignments}
                           onChange={handleChange}
                           className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label
                           htmlFor="acceptingNewAssignments"
                           className="ml-3 text-sm text-gray-700 font-medium flex items-center"
                        >
                           <CheckCircle className="h-4 w-4 mr-1 text-purple-500" />
                           Currently accepting new assignments
                        </label>
                     </div>
                  </div>
               </div>

               <div className="mt-8 flex justify-between">
                  <button
                     type="button"
                     onClick={goBack}
                     className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-sm transition-colors flex items-center"
                  >
                     <ChevronLeft className="mr-2 h-5 w-5" />
                     Back to Personal Information
                  </button>

                  <button
                     type="submit"
                     className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-md transition-colors flex items-center"
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

export default NurseProfessionalInfoForm;
