import React, { useState, useRef } from "react";
import { supabase } from './supabaseClient';
// Importing icons from lucide-react
import {
   User,
   Briefcase,
   Heart,
} from "lucide-react";
import DoctorPersonalInfoForm from "./DoctorPersonalInfoForm";
import DoctorProfessionalInfoForm from "./DoctorProfessionalInfoForm";

const DoctorRegisterForm = () => {
   const [step, setStep] = useState(1);
   const [formData, setFormData] = useState({
      // Personal Information
      firstName: "",
      lastName: "",
      email: "",
      password:"",
      phone: "",
      dateOfBirth: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      profilePhoto: "",
      profilePhotoPreview: "",

      // Professional Information
      medicalLicenseNumber: "",
      specialization: "",
      subspecialization: "",
      yearsOfExperience: "",
      medicalSchool: "",
      graduationYear: "",
      hospitalAffiliation: "",
      clinicAddress: "",
      practiceAreas: "",
      availabilityHours: "",
      acceptingNewPatients: false,
      insuranceAccepted: "",
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

   const handleSubmitProfessionalInfo = async (e) => {
      e.preventDefault();
      const { data: authData, error: authError } = await supabase.auth.signUp({
         email: formData.email,
         password: formData.password,
         options: {
           data: {
             medical_license_number: formData.medicalLicenseNumber,
             title: 'Doctor',
           },
         },
       });

       if (authError) {
         console.error("Error signing up:", authError.message);
         alert("Failed to sign up. Please try again.");
         return;
       }
   
       console.log("User signed up successfully:", authData);
      try {
          const { data, error } = await supabase.from("doctor").insert([
            {
             first_name: formData.firstName,
             last_name: formData.lastName,
             email: formData.email,
             phone: formData.phone,
             date_of_birth: formData.dateOfBirth,
             gender: formData.gender,
             address: formData.address,
             city: formData.city,
             state: formData.state,
             zip_code: formData.zipCode,
             profile_photo: formData.profilePhotoPreview, // Assuming you want to store the base64 preview
             medical_license_number: formData.medicalLicenseNumber,
             specialization: formData.specialization,
             subspecialization: formData.subspecialization,
             years_of_experience: parseInt(formData.yearsOfExperience, 10),
             medical_school: formData.medicalSchool,
             graduation_year: parseInt(formData.graduationYear, 10),
             hospital_affiliation: formData.hospitalAffiliation,
             clinic_address: formData.clinicAddress,
             practice_areas: formData.practiceAreas,
             availability_hours: formData.availabilityHours,
             accepting_new_patients: formData.acceptingNewPatients ? true : false, // Ensure boolean
             insurance_accepted: formData.insuranceAccepted,
             languages: formData.languages,
             certifications_and_awards: formData.certificationsAndAwards,
            },
          ]).select("*");
   
          if (error) {
            console.log(data);
            if (error.code === "23505") { // Assuming 23505 is the unique constraint violation code
             alert("The medical license number already exists. Please use a different one.");
            } else {
             console.error("Error inserting data:", error.message);
             alert("Failed to complete registration. Please try again.");
            }
            return;
          }
   
         const insertedDoctor = data[0];
         console.log("Inserted doctor:", insertedDoctor);
         localStorage.setItem("loggedInDoctor",JSON.stringify(insertedDoctor));
         window.location.href = "/DoctorDashboard";
       } catch (err) {
         console.error("Unexpected error:", err);
         alert("An unexpected error occurred. Please try again.");
       }
   };

   return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <div className="flex items-center justify-center">
                  <Heart className="h-10 w-10 text-green-600 mr-2" />
                  <h1 className="text-3xl font-bold text-green-800">
                     Doctor Registration
                  </h1>
               </div>
               <p className="mt-2 text-gray-600">
                  Join our network of healthcare professionals. Treat patients with the best care from the comfort of your own clinic/home.
               </p>
            </div>

            {/* Progress indicator */}
            <div className="mb-10">
               <div className="flex items-center justify-center">
                  <div
                     className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${step === 1
                           ? "bg-green-600 text-white"
                           : "bg-white text-green-800 border-2 border-green-600"
                        }`}
                  >
                     <User className="h-6 w-6" />
                  </div>
                  <div
                     className={`h-1 w-24 transition-all duration-300 ${step === 1 ? "bg-gray-300" : "bg-green-600"
                        }`}
                  ></div>
                  <div
                     className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${step === 2
                           ? "bg-green-600 text-white"
                           : "bg-white text-green-800 border-2 border-green-600"
                        }`}
                  >
                     <Briefcase className="h-6 w-6" />
                  </div>
               </div>
               <div className="flex justify-center mt-2">
                  <div className="w-32 text-center text-sm font-medium text-green-800">
                     Personal Information
                  </div>
                  <div className="w-32 text-center text-sm font-medium text-green-800">
                     Professional Details
                  </div>
               </div>
            </div>

            {step === 1 ? (
               <DoctorPersonalInfoForm
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmitPersonalInfo}
               />
            ) : (
               <DoctorProfessionalInfoForm   
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

export default DoctorRegisterForm;
