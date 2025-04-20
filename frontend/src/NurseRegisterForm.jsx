import React, { useState, useRef } from "react";
// Importing icons from lucide-react
import { User, Briefcase, Heart } from "lucide-react";
import NursePersonalInfoForm from "./NursePersonalInfoForm";
import NurseProfessionalInfoForm from "./NurseProfessionalInfoForm";

const NurseRegisterForm = () => {
   const [step, setStep] = useState(1);
   const [formData, setFormData] = useState({
      // Personal Information
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      profilePhoto: null,
      profilePhotoPreview: null,

      // Professional Information
      nursingLicenseNumber: "",
      specialization: "",
      subspecialization: "",
      yearsOfExperience: "",
      nursingSchool: "",
      graduationYear: "",
      hospitalAffiliation: "",
      workAddress: "",
      clinicalSkills: "",
      availabilityHours: "",
      acceptingNewAssignments: false,
      nursingType: "",
      languages: "",
      certificationsAndAwards: "",
   });

   const professionalSectionRef = useRef(null);

   const handleChange = (e) => {
      const { name, value, type, checked, files } = e.target;

      if (type === "file" && files && files[0]) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setFormData({
               ...formData,
               profilePhoto: files[0],
               profilePhotoPreview: reader.result,
            });
         };
         reader.readAsDataURL(files[0]);
      } else {
         setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
         });
      }
   };

   const handleSubmitPersonalInfo = (e) => {
      e.preventDefault();
      setStep(2);
      window.scrollTo(0, 0);
      if (professionalSectionRef.current) {
         professionalSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
   };

   const handleSubmitProfessionalInfo = (e) => {
      e.preventDefault();
      // Here you would normally submit the data to your backend
      alert("Registration submitted successfully!");
      console.log("Form data submitted:", formData);
   };

   return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <div className="flex items-center justify-center">
                  <Heart className="h-10 w-10 text-purple-600 mr-2" />
                  <h1 className="text-3xl font-bold text-purple-800">
                     Nurse Registration
                  </h1>
               </div>
               <p className="mt-2 text-gray-600">
                  Join our network of healthcare professionals. Provide exceptional
                  nursing care and make a difference in patients' lives.
               </p>
            </div>

            {/* Progress indicator */}
            <div className="mb-10">
               <div className="flex items-center justify-center">
                  <div
                     className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${step === 1
                           ? "bg-purple-600 text-white"
                           : "bg-white text-purple-800 border-2 border-purple-600"
                        }`}
                  >
                     <User className="h-6 w-6" />
                  </div>
                  <div
                     className={`h-1 w-24 transition-all duration-300 ${step === 1 ? "bg-gray-300" : "bg-purple-600"
                        }`}
                  ></div>
                  <div
                     className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${step === 2
                           ? "bg-purple-600 text-white"
                           : "bg-white text-purple-800 border-2 border-purple-600"
                        }`}
                  >
                     <Briefcase className="h-6 w-6" />
                  </div>
               </div>
               <div className="flex justify-center mt-2">
                  <div className="w-32 text-center text-sm font-medium text-purple-800">
                     Personal Information
                  </div>
                  <div className="w-32 text-center text-sm font-medium text-purple-800">
                     Professional Details
                  </div>
               </div>
            </div>

            {step === 1 ? (
               <NursePersonalInfoForm
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmitPersonalInfo}
               />
            ) : (
               <NurseProfessionalInfoForm
                  ref={professionalSectionRef}
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmitProfessionalInfo}
                  goBack={() => setStep(1)}
               />
            )}
         </div>
      </div>
   );
};

export default NurseRegisterForm;
