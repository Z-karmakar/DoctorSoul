import React, { useRef, useState, useEffect } from "react";
import MedicineCardScroll from "./MedicineCardScroll";
import myImage1 from "../Ecommerce App assets/image.png";
import myImage2 from "../Ecommerce App assets/image1.png";
import myImage3 from "../Ecommerce App assets/image2.png";
import myImage4 from "../Ecommerce App assets/image3.png";
import myImage5 from "../Ecommerce App assets/image4.png";

export default function ExtendedDiscountedMedicines({ handleAddToCart, myNum, handleOrder }) {

   const Images = [myImage1, myImage2, myImage3, myImage4, myImage5];


   const extendedMedicines = {
      "discounted-medicines": [
         {
            id: "medicines-10",
            title: "10% Off on Medicines",
            hook: "10% Off",
            medicines: [
               {
                  id: "MED001",
                  name: "ApolloFever",
                  description:
                     "Antipyretic medication for reducing fever in adults and children above 12 years.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 62.75,
                  brand: "Apollo Pharmaceuticals",
                  category: "Pain & Fever",
               },
               {
                  id: "MED002",
                  name: "CardioGuard",
                  description:
                     "Medication to manage hypertension and prevent cardiovascular complications.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 172.88,
                  brand: "HeartWell",
                  category: "Cardiovascular",
               },
               {
                  id: "MED003",
                  name: "AllerClear",
                  description:
                     "Fast-acting antihistamine for seasonal allergies and allergic reactions.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 45.99,
                  brand: "ClearLife",
                  category: "Allergy & Immunology",
               },
               {
                  id: "MED004",
                  name: "NeuroCalmPlus",
                  description:
                     "Anxiolytic medication for management of anxiety disorders with minimal side effects.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 118.5,
                  brand: "MindEase",
                  category: "Mental Health",
               },
               {
                  id: "MED005",
                  name: "GastroEase",
                  description:
                     "Proton pump inhibitor for treatment of acid reflux and gastric ulcers.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 89.99,
                  brand: "DigestCare",
                  category: "Gastrointestinal",
               },
               {
                  id: "MED006",
                  name: "DiabeControl",
                  description:
                     "Oral hypoglycemic agent for type 2 diabetes management.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 135.75,
                  brand: "GlucoHealth",
                  category: "Diabetes",
               },
               {
                  id: "MED007",
                  name: "RespiClear",
                  description: "Bronchodilator for asthma and COPD symptom relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 78.25,
                  brand: "BreathWell",
                  category: "Respiratory",
               },
               {
                  id: "MED008",
                  name: "ThyroBalance",
                  description:
                     "Synthetic thyroid hormone for hypothyroidism treatment.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 67.5,
                  brand: "EndoHealth",
                  category: "Endocrine",
               },
               {
                  id: "MED009",
                  name: "BoneStrength",
                  description:
                     "Bisphosphonate medication to prevent bone loss in osteoporosis.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 192.99,
                  brand: "OsteoLife",
                  category: "Musculoskeletal",
               },
               {
                  id: "MED010",
                  name: "InfectGuard",
                  description: "Broad-spectrum antibiotic for bacterial infections.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 83.45,
                  brand: "MicroDefense",
                  category: "Antibiotics",
               },
               {
                  id: "MED011",
                  name: "ImmunoBoost",
                  description:
                     "Immunomodulator for patients with compromised immune systems.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 224.99,
                  brand: "ImmuneShield",
                  category: "Immunology",
               },
               {
                  id: "MED012",
                  name: "DermaRepair",
                  description:
                     "Topical corticosteroid for inflammatory skin conditions.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 58.75,
                  brand: "SkinCare",
                  category: "Dermatology",
               },
               {
                  id: "MED013",
                  name: "OpticClear",
                  description: "Eye drops for dry eyes and minor irritations.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 29.99,
                  brand: "VisionHealth",
                  category: "Ophthalmology",
               },
               {
                  id: "MED014",
                  name: "ArthrEase",
                  description:
                     "Non-steroidal anti-inflammatory for arthritis pain relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 74.5,
                  brand: "JointRelief",
                  category: "Pain & Inflammation",
               },
               {
                  id: "MED015",
                  name: "MigraVanish",
                  description: "Fast-acting triptan for acute migraine treatment.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 128.99,
                  brand: "NeuroCare",
                  category: "Neurology",
               },
               {
                  id: "MED016",
                  name: "RenalCare",
                  description:
                     "Medication to support kidney function in chronic kidney disease.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 187.25,
                  brand: "KidneyHealth",
                  category: "Nephrology",
               },
               {
                  id: "MED017",
                  name: "HepaGuard",
                  description:
                     "Hepatoprotective agent for liver support in hepatic conditions.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 165.5,
                  brand: "LiverLife",
                  category: "Hepatology",
               },
               {
                  id: "MED018",
                  name: "SleepWell",
                  description: "Non-habit forming sleep aid for insomnia.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 54.99,
                  brand: "RestfulNights",
                  category: "Sleep Disorders",
               },
               {
                  id: "MED019",
                  name: "CardioRhythm",
                  description: "Antiarrhythmic medication for irregular heartbeat.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 196.75,
                  brand: "HeartWell",
                  category: "Cardiovascular",
               },
               {
                  id: "MED020",
                  name: "CholesterGuard",
                  description:
                     "Statin medication for management of high cholesterol.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 88.5,
                  brand: "LipidCare",
                  category: "Cardiovascular",
               },
               {
                  id: "MED021",
                  name: "ProstateHealth",
                  description:
                     "5-alpha reductase inhibitor for benign prostatic hyperplasia.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 145.99,
                  brand: "MensHealth",
                  category: "Urology",
               },
               {
                  id: "MED022",
                  name: "HormoneBalance",
                  description:
                     "Hormone replacement therapy for menopausal symptoms.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 118.25,
                  brand: "WomensHealth",
                  category: "Gynecology",
               },
               {
                  id: "MED023",
                  name: "ChildFever",
                  description:
                     "Pediatric antipyretic suspension for children under 12.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 34.99,
                  brand: "KidsWell",
                  category: "Pediatrics",
               },
               {
                  id: "MED024",
                  name: "AntiVert",
                  description:
                     "Antivertigo medication for dizziness and motion sickness.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 47.5,
                  brand: "BalanceCare",
                  category: "Neurology",
               },
               {
                  id: "MED025",
                  name: "FungiClear",
                  description:
                     "Antifungal medication for systemic fungal infections.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 92.75,
                  brand: "MicroDefense",
                  category: "Antifungals",
               },
               {
                  id: "MED026",
                  name: "BloodThinPlus",
                  description:
                     "Anticoagulant to prevent blood clots in at-risk patients.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 168.99,
                  brand: "CirculateCare",
                  category: "Hematology",
               },
               {
                  id: "MED027",
                  name: "OralCare",
                  description:
                     "Oral antiseptic solution for gum disease and mouth ulcers.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 28.5,
                  brand: "DentalHealth",
                  category: "Dental",
               },
               {
                  id: "MED028",
                  name: "AntiNausea",
                  description:
                     "Antiemetic medication for nausea and vomiting control.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 65.99,
                  brand: "DigestCare",
                  category: "Gastrointestinal",
               },
               {
                  id: "MED029",
                  name: "PainRelieveMax",
                  description:
                     "Strong analgesic for moderate to severe pain management.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 108.75,
                  brand: "PainFree",
                  category: "Pain Management",
               },
               {
                  id: "MED030",
                  name: "ConstipationEase",
                  description: "Gentle laxative for occasional constipation relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 32.5,
                  brand: "DigestCare",
                  category: "Gastrointestinal",
               },
               {
                  id: "MED031",
                  name: "DiarrheaStop",
                  description:
                     "Antidiarrheal medication for acute diarrhea episodes.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 38.99,
                  brand: "DigestCare",
                  category: "Gastrointestinal",
               },
               {
                  id: "MED032",
                  name: "CoughRelief",
                  description: "Antitussive syrup for dry cough suppression.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 42.25,
                  brand: "BreathWell",
                  category: "Respiratory",
               },
               {
                  id: "MED033",
                  name: "ExpectorantPlus",
                  description:
                     "Expectorant for productive cough and chest congestion.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 37.5,
                  brand: "BreathWell",
                  category: "Respiratory",
               },
               {
                  id: "MED034",
                  name: "NasalClear",
                  description: "Nasal decongestant spray for sinus congestion.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 23.99,
                  brand: "BreathWell",
                  category: "Respiratory",
               },
               {
                  id: "MED035",
                  name: "SinusRelief",
                  description: "Combination medication for sinus pressure and pain.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 52.75,
                  brand: "BreathWell",
                  category: "Respiratory",
               },
               {
                  id: "MED036",
                  name: "UTICare",
                  description:
                     "Urinary tract infection treatment with analgesic properties.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 68.5,
                  brand: "UroHealth",
                  category: "Urology",
               },
               {
                  id: "MED037",
                  name: "IronSupport",
                  description: "Iron supplement for anemia and iron deficiency.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 35.99,
                  brand: "NutriHealth",
                  category: "Hematology",
               },
               {
                  id: "MED038",
                  name: "ThroatSoothe",
                  description: "Antiseptic throat lozenges for sore throat relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 19.99,
                  brand: "OralCare",
                  category: "ENT",
               },
               {
                  id: "MED039",
                  name: "EarDropPlus",
                  description: "Antibiotic ear drops for outer ear infections.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 45.75,
                  brand: "AudioCare",
                  category: "ENT",
               },
               {
                  id: "MED040",
                  name: "ViralGuard",
                  description:
                     "Antiviral medication for influenza treatment and prevention.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 124.5,
                  brand: "VirusDefense",
                  category: "Antivirals",
               },
               {
                  id: "MED041",
                  name: "ChemoSupport",
                  description:
                     "Antiemetic specifically for chemotherapy-induced nausea.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 215.99,
                  brand: "OncoCare",
                  category: "Oncology",
               },
               {
                  id: "MED042",
                  name: "PainPatchRelief",
                  description:
                     "Transdermal analgesic patch for localized pain relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 85.25,
                  brand: "PainFree",
                  category: "Pain Management",
               },
               {
                  id: "MED043",
                  name: "BloodPressureLow",
                  description: "ACE inhibitor for hypertension management.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 76.5,
                  brand: "HeartWell",
                  category: "Cardiovascular",
               },
               {
                  id: "MED044",
                  name: "SeizureControlMax",
                  description: "Anticonvulsant for epilepsy and seizure disorders.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 159.99,
                  brand: "NeuroCare",
                  category: "Neurology",
               },
               {
                  id: "MED045",
                  name: "ParkinsonEase",
                  description:
                     "Dopamine agonist for Parkinson's disease symptom management.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 187.75,
                  brand: "NeuroCare",
                  category: "Neurology",
               },
               {
                  id: "MED046",
                  name: "MSSupport",
                  description: "Disease-modifying therapy for multiple sclerosis.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 298.5,
                  brand: "NeuroCare",
                  category: "Neurology",
               },
               {
                  id: "MED047",
                  name: "HemorrhoidEase",
                  description: "Topical cream for hemorrhoid relief and treatment.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 42.99,
                  brand: "RectalCare",
                  category: "Gastroenterology",
               },
               {
                  id: "MED048",
                  name: "PsoriaRelief",
                  description:
                     "Topical treatment for psoriasis and related skin conditions.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 72.75,
                  brand: "SkinCare",
                  category: "Dermatology",
               },
               {
                  id: "MED049",
                  name: "EczemaSoothe",
                  description: "Non-steroidal cream for eczema and dermatitis.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 67.5,
                  brand: "SkinCare",
                  category: "Dermatology",
               },
               {
                  id: "MED050",
                  name: "AcneClear",
                  description:
                     "Topical acne treatment with antibacterial properties.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 49.99,
                  brand: "SkinCare",
                  category: "Dermatology",
               },
            ],
         },
         {
            id: "devices-15",
            title: "15% Off on Health Devices",
            hook: "15% Off",
            medicines: [
               {
                  id: "DEV001",
                  name: "SmartBP Monitor",
                  description:
                     "Bluetooth-enabled blood pressure monitor with smartphone app integration.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 129.99,
                  brand: "HealthTech",
                  category: "Cardiovascular Monitoring",
               },
               {
                  id: "DEV002",
                  name: "GlucoSense Pro",
                  description:
                     "Advanced blood glucose monitoring system with cloud data storage.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 89.95,
                  brand: "DiabCare",
                  category: "Diabetes Management",
               },
               {
                  id: "DEV003",
                  name: "PulseOx Finger Monitor",
                  description:
                     "Portable pulse oximeter for oxygen saturation and heart rate monitoring.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 39.99,
                  brand: "MedSense",
                  category: "Respiratory Monitoring",
               },
               {
                  id: "DEV004",
                  name: "Digital Thermometer Ultra",
                  description:
                     "Fast-reading digital thermometer with fever alert function.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 24.5,
                  brand: "TempTech",
                  category: "Temperature Monitoring",
               },
               {
                  id: "DEV005",
                  name: "NebuFlex Portable",
                  description:
                     "Compact nebulizer for respiratory medication delivery at home or on-the-go.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 79.99,
                  brand: "BreathCare",
                  category: "Respiratory Therapy",
               },
               {
                  id: "DEV006",
                  name: "SleepApnea CPAP",
                  description:
                     "Continuous positive airway pressure device for sleep apnea treatment.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 699.95,
                  brand: "SleepWell",
                  category: "Sleep Therapy",
               },
               {
                  id: "DEV007",
                  name: "ECG Monitor Home",
                  description:
                     "Personal electrocardiogram monitor for at-home heart rhythm checks.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 149.99,
                  brand: "HeartTech",
                  category: "Cardiovascular Monitoring",
               },
               {
                  id: "DEV008",
                  name: "Hearing Aid Digital",
                  description:
                     "Rechargeable digital hearing aid with noise reduction technology.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 299.95,
                  brand: "AudioClear",
                  category: "Hearing Assistance",
               },
               {
                  id: "DEV009",
                  name: "CompressionPro Leg Sleeves",
                  description:
                     "Electric compression leg sleeves for improving circulation.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 189.99,
                  brand: "CircuFlow",
                  category: "Circulatory Therapy",
               },
               {
                  id: "DEV010",
                  name: "InhalerAssist Smart",
                  description:
                     "Smart inhaler attachment for tracking medication usage and adherence.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 59.95,
                  brand: "AsthmaTrack",
                  category: "Respiratory Management",
               },
               {
                  id: "DEV011",
                  name: "UV Sterilizer Box",
                  description:
                     "UV-C sterilization box for medical equipment and personal items.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 79.99,
                  brand: "CleanTech",
                  category: "Sterilization",
               },
               {
                  id: "DEV012",
                  name: "TENS Pain Relief",
                  description:
                     "Transcutaneous electrical nerve stimulation device for pain management.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 65.5,
                  brand: "PainAway",
                  category: "Pain Management",
               },
               {
                  id: "DEV013",
                  name: "Smart Pill Dispenser",
                  description:
                     "Automated pill dispenser with reminder alerts and tracking.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 129.99,
                  brand: "MedRemind",
                  category: "Medication Management",
               },
               {
                  id: "DEV014",
                  name: "Light Therapy Lamp",
                  description:
                     "10,000 lux light therapy lamp for SAD and circadian rhythm disorders.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 89.95,
                  brand: "MoodLight",
                  category: "Light Therapy",
               },
               {
                  id: "DEV015",
                  name: "Wheelchair Ultra Light",
                  description:
                     "Lightweight foldable wheelchair with premium ergonomics.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 449.99,
                  brand: "MobilityPlus",
                  category: "Mobility Assistance",
               },
               {
                  id: "DEV016",
                  name: "Walker Premium Fold",
                  description: "Foldable walker with seat and storage compartment.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 129.95,
                  brand: "WalkEase",
                  category: "Mobility Assistance",
               },
               {
                  id: "DEV017",
                  name: "Crutches Adjustable",
                  description:
                     "Lightweight adjustable aluminum crutches with ergonomic grips.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 49.99,
                  brand: "MobilityPlus",
                  category: "Mobility Assistance",
               },
               {
                  id: "DEV018",
                  name: "Sleep Monitor Wearable",
                  description:
                     "Wearable sleep tracking device for sleep quality analysis.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 99.95,
                  brand: "SleepTech",
                  category: "Sleep Monitoring",
               },
               {
                  id: "DEV019",
                  name: "Smart Scale Body Analysis",
                  description:
                     "Wi-Fi connected scale with body composition analysis.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 79.99,
                  brand: "BodyMetrics",
                  category: "Weight Management",
               },
               {
                  id: "DEV020",
                  name: "Peak Flow Meter Digital",
                  description:
                     "Digital peak flow meter for asthma management with smartphone connectivity.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 69.95,
                  brand: "BreathCare",
                  category: "Respiratory Monitoring",
               },
               {
                  id: "DEV021",
                  name: "Insulin Cooler Travel",
                  description:
                     "Portable insulin cooling case for travel and daily use.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 89.99,
                  brand: "DiabCare",
                  category: "Diabetes Management",
               },
               {
                  id: "DEV022",
                  name: "Otoscope Digital",
                  description:
                     "Home digital otoscope with camera for ear examinations.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 59.95,
                  brand: "EarCare",
                  category: "ENT Devices",
               },
               {
                  id: "DEV023",
                  name: "Infrared Thermometer Non-Contact",
                  description:
                     "Non-contact infrared thermometer for forehead temperature measurement.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 45.99,
                  brand: "TempTech",
                  category: "Temperature Monitoring",
               },
               {
                  id: "DEV024",
                  name: "Humidifier Medical Grade",
                  description:
                     "Medical-grade humidifier with antibacterial technology.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 119.95,
                  brand: "AirCare",
                  category: "Respiratory Support",
               },
               {
                  id: "DEV025",
                  name: "Air Purifier HEPA Medical",
                  description:
                     "Hospital-grade HEPA air purifier for allergen and pathogen reduction.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 249.99,
                  brand: "PureAir",
                  category: "Air Quality",
               },
               {
                  id: "DEV026",
                  name: "Back Brace Support",
                  description:
                     "Adjustable back brace for lumbar support and posture correction.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 59.95,
                  brand: "PosturePro",
                  category: "Orthopedic Support",
               },
               {
                  id: "DEV027",
                  name: "Neck Traction Device",
                  description:
                     "Cervical traction device for neck pain relief and spine alignment.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 39.99,
                  brand: "SpineCare",
                  category: "Orthopedic Therapy",
               },
               {
                  id: "DEV028",
                  name: "Knee Brace Stabilizing",
                  description:
                     "Hinged knee brace with stabilizing support for injuries and arthritis.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 69.95,
                  brand: "JointSupport",
                  category: "Orthopedic Support",
               },
               {
                  id: "DEV029",
                  name: "Ankle Support Compression",
                  description:
                     "Compression ankle sleeve with adjustable straps for stability.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 34.99,
                  brand: "JointSupport",
                  category: "Orthopedic Support",
               },
               {
                  id: "DEV030",
                  name: "Wrist Blood Pressure Monitor",
                  description:
                     "Compact wrist blood pressure monitor for on-the-go monitoring.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 59.99,
                  brand: "HealthTech",
                  category: "Cardiovascular Monitoring",
               },
               {
                  id: "DEV031",
                  name: "Oxygen Concentrator Portable",
                  description:
                     "Portable oxygen concentrator for patients with respiratory conditions.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 899.95,
                  brand: "OxyFlow",
                  category: "Respiratory Support",
               },
               {
                  id: "DEV032",
                  name: "Cervical Pillow Therapeutic",
                  description:
                     "Memory foam cervical pillow for neck pain and proper sleep alignment.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 49.99,
                  brand: "ComfortRest",
                  category: "Sleep Support",
               },
               {
                  id: "DEV033",
                  name: "Heating Pad Electric",
                  description:
                     "Electric heating pad with multiple heat settings for pain relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 35.95,
                  brand: "HeatTherapy",
                  category: "Pain Management",
               },
               {
                  id: "DEV034",
                  name: "Ice Pack Therapy",
                  description:
                     "Reusable gel ice pack for cold therapy and injury treatment.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 19.99,
                  brand: "ColdTherapy",
                  category: "Pain Management",
               },
               {
                  id: "DEV035",
                  name: "Stethoscope Digital",
                  description:
                     "Digital stethoscope with amplification and recording capabilities.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 199.95,
                  brand: "MedListen",
                  category: "Diagnostic Tools",
               },
               {
                  id: "DEV036",
                  name: "Shower Chair Medical",
                  description:
                     "Adjustable medical shower chair for elderly and disabled users.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 79.99,
                  brand: "SafeBath",
                  category: "Bathroom Safety",
               },
               {
                  id: "DEV037",
                  name: "Toilet Seat Raised",
                  description:
                     "Raised toilet seat with handles for mobility-impaired individuals.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 59.95,
                  brand: "SafeBath",
                  category: "Bathroom Safety",
               },
               {
                  id: "DEV038",
                  name: "Grab Bar Safety",
                  description:
                     "Suction cup grab bar for temporary bathroom safety assistance.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 29.99,
                  brand: "SafeBath",
                  category: "Bathroom Safety",
               },
               {
                  id: "DEV039",
                  name: "Pill Crusher Electric",
                  description:
                     "Electric pill crusher and grinder for easy medication administration.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 39.95,
                  brand: "MedAid",
                  category: "Medication Management",
               },
               {
                  id: "DEV040",
                  name: "Medication Alarm Watch",
                  description:
                     "Digital watch with multiple medication reminder alarms.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 49.99,
                  brand: "MedRemind",
                  category: "Medication Management",
               },
               {
                  id: "DEV041",
                  name: "Vision Magnifier Digital",
                  description:
                     "Handheld digital magnifier for low vision assistance.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 129.95,
                  brand: "VisionAid",
                  category: "Vision Assistance",
               },
               {
                  id: "DEV042",
                  name: "Cane Foldable LED",
                  description:
                     "Foldable walking cane with built-in LED light and adjustable height.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 44.99,
                  brand: "WalkSafe",
                  category: "Mobility Assistance",
               },
               {
                  id: "DEV043",
                  name: "Phone Amplifier Hearing",
                  description:
                     "Telephone amplifier for hearing-impaired individuals.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 59.95,
                  brand: "AudioClear",
                  category: "Hearing Assistance",
               },
               {
                  id: "DEV044",
                  name: "Pedal Exerciser Portable",
                  description:
                     "Portable pedal exerciser for seated leg and arm therapy.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 69.99,
                  brand: "TherapyMove",
                  category: "Physical Therapy",
               },
               {
                  id: "DEV045",
                  name: "Resistance Bands Therapy",
                  description:
                     "Set of therapy resistance bands with different tension levels.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 24.95,
                  brand: "TherapyMove",
                  category: "Physical Therapy",
               },
               {
                  id: "DEV046",
                  name: "Therapy Putty Hand",
                  description:
                     "Graduated resistance therapy putty for hand strengthening.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 19.99,
                  brand: "HandFlex",
                  category: "Physical Therapy",
               },
               {
                  id: "DEV047",
                  name: "Pulse Massager Electronic",
                  description:
                     "Electronic pulse massager with multiple modes for muscle relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 54.95,
                  brand: "PulseRelief",
                  category: "Pain Management",
               },
               {
                  id: "DEV048",
                  name: "Foot Massager Circulation",
                  description:
                     "Electric foot massager for improved circulation and pain relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 89.99,
                  brand: "FootCare",
                  category: "Circulatory Therapy",
               },
               {
                  id: "DEV049",
                  name: "Shoe Insoles Orthopedic",
                  description:
                     "Medical-grade orthopedic insoles for foot and posture support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 39.95,
                  brand: "FootCare",
                  category: "Orthopedic Support",
               },
               {
                  id: "DEV050",
                  name: "Pill Cutter Splitter",
                  description:
                     "Precise pill cutter and splitter for medication management.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 9.99,
                  brand: "MedAid",
                  category: "Medication Management",
               },
            ],
         },
         {
            id: "vitamins-b1g1",
            title: "Buy 1 Get 1 Free on Vitamins",
            hook: "Buy 1 Get 1 Free",
            medicines: [
               {
                  id: "VIT001",
                  name: "MultiVital Complete",
                  description:
                     "Comprehensive daily multivitamin with minerals and antioxidants.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 28.99,
                  brand: "VitalLife",
                  category: "Multivitamins",
               },
               {
                  id: "VIT002",
                  name: "Vitamin C 1000mg",
                  description:
                     "High-potency vitamin C with rose hips for immune support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 18.5,
                  brand: "ImmuneBoost",
                  category: "Single Vitamins",
               },
               {
                  id: "VIT003",
                  name: "Vitamin D3 5000IU",
                  description:
                     "High-strength vitamin D3 for bone health and immune function.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 15.99,
                  brand: "SunHealth",
                  category: "Single Vitamins",
               },
               {
                  id: "VIT004",
                  name: "B-Complex Supreme",
                  description:
                     "Complete B vitamin complex for energy and nervous system support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 22.75,
                  brand: "EnergyPlus",
                  category: "Vitamin Complexes",
               },
               {
                  id: "VIT005",
                  name: "Omega-3 Fish Oil",
                  description:
                     "Ultra-pure fish oil with omega-3 fatty acids for heart and brain health.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 29.99,
                  brand: "OmegaLife",
                  category: "Essential Fatty Acids",
               },
               {
                  id: "VIT006",
                  name: "Calcium with D3",
                  description:
                     "Calcium carbonate with vitamin D3 for optimal bone health.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 19.95,
                  brand: "BoneStrong",
                  category: "Minerals",
               },
               {
                  id: "VIT007",
                  name: "Magnesium Citrate",
                  description:
                     "Highly absorbable magnesium citrate for muscle and nerve function.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 16.99,
                  brand: "MineralMax",
                  category: "Minerals",
               },
               {
                  id: "VIT008",
                  name: "Iron Plus",
                  description:
                     "Gentle iron supplement with vitamin C for enhanced absorption.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 14.5,
                  brand: "IronHealth",
                  category: "Minerals",
               },
               {
                  id: "VIT009",
                  name: "Zinc Lozenges",
                  description: "Zinc lozenges with vitamin C for immune support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 12.99,
                  brand: "ImmuneBoost",
                  category: "Minerals",
               },
               {
                  id: "VIT010",
                  name: "Probiotic 50 Billion",
                  description:
                     "High-potency probiotic with 50 billion CFU and multiple strains.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 35.99,
                  brand: "GutHealth",
                  category: "Digestive Health",
               },
               {
                  id: "VIT011",
                  name: "CoQ10 200mg",
                  description:
                     "High-strength CoQ10 for heart health and cellular energy.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 29.95,
                  brand: "HeartHealth",
                  category: "Antioxidants",
               },
               {
                  id: "VIT012",
                  name: "Turmeric Curcumin",
                  description:
                     "Turmeric extract with black pepper for enhanced absorption and inflammation support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 24.99,
                  brand: "JointEase",
                  category: "Herbal Supplements",
               },
               {
                  id: "VIT013",
                  name: "Glucosamine Chondroitin",
                  description:
                     "Joint support formula with glucosamine, chondroitin, and MSM.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 32.5,
                  brand: "JointEase",
                  category: "Joint Support",
               },
               {
                  id: "VIT014",
                  name: "Lutein Eye Support",
                  description:
                     "Vision support with lutein, zeaxanthin, and bilberry extract.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 25.99,
                  brand: "VisionCare",
                  category: "Eye Health",
               },
               {
                  id: "VIT015",
                  name: "Folic Acid 800mcg",
                  description:
                     "Folic acid supplement for prenatal and cardiovascular support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 11.99,
                  brand: "WomensHealth",
                  category: "Women's Health",
               },
               {
                  id: "VIT016",
                  name: "Prenatal Complete",
                  description:
                     "Comprehensive prenatal vitamin with folate and iron.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 27.95,
                  brand: "MomCare",
                  category: "Women's Health",
               },
               {
                  id: "VIT017",
                  name: "Hair, Skin & Nails",
                  description:
                     "Beauty supplement with biotin, collagen, and antioxidants.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 23.99,
                  brand: "BeautyNutrition",
                  category: "Beauty Supplements",
               },
               {
                  id: "VIT018",
                  name: "Collagen Peptides",
                  description:
                     "Hydrolyzed collagen peptides for skin, joint, and bone health.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 39.95,
                  brand: "BeautyNutrition",
                  category: "Beauty Supplements",
               },
               {
                  id: "VIT019",
                  name: "Sleep Support Melatonin",
                  description:
                     "Melatonin with L-theanine and herbs for sleep support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 19.99,
                  brand: "SleepWell",
                  category: "Sleep Support",
               },
               {
                  id: "VIT020",
                  name: "Stress B-Complex",
                  description:
                     "High-potency B vitamins with adaptogenic herbs for stress support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 26.5,
                  brand: "StressFree",
                  category: "Stress Management",
               },
               {
                  id: "VIT021",
                  name: "Ashwagandha Extract",
                  description:
                     "Standardized ashwagandha extract for stress and adrenal support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 21.99,
                  brand: "HerbalBalance",
                  category: "Adaptogenic Herbs",
               },
               {
                  id: "VIT022",
                  name: "Rhodiola Rosea",
                  description:
                     "Rhodiola extract for mental energy and stress resilience.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 23.95,
                  brand: "HerbalBalance",
                  category: "Adaptogenic Herbs",
               },
               {
                  id: "VIT023",
                  name: "Men's Multivitamin",
                  description:
                     "Complete multivitamin formulated specifically for men's health needs.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 29.99,
                  brand: "MensVital",
                  category: "Men's Health",
               },
               {
                  id: "VIT024",
                  name: "Women's Multivitamin",
                  description:
                     "Complete multivitamin formulated specifically for women's health needs.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 29.99,
                  brand: "WomensHealth",
                  category: "Women's Health",
               },
               {
                  id: "VIT025",
                  name: "Senior 50+ Multivitamin",
                  description:
                     "Comprehensive multivitamin formulated for adults over 50.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 31.95,
                  brand: "SeniorHealth",
                  category: "Senior Health",
               },
               {
                  id: "VIT026",
                  name: "Children's Chewable",
                  description:
                     "Kid-friendly chewable multivitamin with essential nutrients.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 18.99,
                  brand: "KidsVital",
                  category: "Children's Health",
               },
               {
                  id: "VIT027",
                  name: "Vitamin E 400IU",
                  description:
                     "Natural vitamin E for antioxidant protection and skin health.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 17.5,
                  brand: "NatureVitamin",
                  category: "Single Vitamins",
               },
               {
                  id: "VIT028",
                  name: "Vitamin A 10,000IU",
                  description: "Vitamin A supplement for vision and immune support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 13.99,
                  brand: "NatureVitamin",
                  category: "Single Vitamins",
               },
               {
                  id: "VIT029",
                  name: "Vitamin K2 MK-7",
                  description:
                     "Vitamin K2 as MK-7 for bone and cardiovascular health.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 22.95,
                  brand: "BoneStrong",
                  category: "Single Vitamins",
               },
               {
                  id: "VIT030",
                  name: "Biotin 10,000mcg",
                  description:
                     "High-potency biotin for hair, skin, and nail health.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 15.99,
                  brand: "BeautyNutrition",
                  category: "Beauty Supplements",
               },
               {
                  id: "VIT031",
                  name: "Selenium 200mcg",
                  description: "Selenium with vitamin E for antioxidant protection.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 12.5,
                  brand: "MineralMax",
                  category: "Minerals",
               },
               {
                  id: "VIT032",
                  name: "Chromium Picolinate",
                  description: "Chromium supplement for glucose metabolism support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 14.95,
                  brand: "MineralMax",
                  category: "Minerals",
               },
               {
                  id: "VIT033",
                  name: "Potassium Citrate",
                  description:
                     "Potassium supplement for electrolyte balance and heart health.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 13.99,
                  brand: "MineralMax",
                  category: "Minerals",
               },
               {
                  id: "VIT034",
                  name: "Ginkgo Biloba",
                  description:
                     "Standardized ginkgo extract for cognitive function and circulation.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 19.95,
                  brand: "BrainHealth",
                  category: "Herbal Supplements",
               },
               {
                  id: "VIT035",
                  name: "Milk Thistle Extract",
                  description: "Standardized silymarin extract for liver support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 22.99,
                  brand: "LiverSupport",
                  category: "Herbal Supplements",
               },
               {
                  id: "VIT036",
                  name: "Garlic Extract",
                  description:
                     "Odorless garlic extract for cardiovascular and immune support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 16.5,
                  brand: "HeartHealth",
                  category: "Herbal Supplements",
               },
               {
                  id: "VIT037",
                  name: "Cranberry Extract",
                  description:
                     "Concentrated cranberry extract for urinary tract health.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 18.99,
                  brand: "UroHealth",
                  category: "Herbal Supplements",
               },
               {
                  id: "VIT038",
                  name: "Echinacea Complex",
                  description:
                     "Echinacea with elderberry and zinc for immune support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 21.95,
                  brand: "ImmuneBoost",
                  category: "Herbal Supplements",
               },
               {
                  id: "VIT039",
                  name: "Apple Cider Vinegar",
                  description:
                     "Apple cider vinegar capsules for digestive health and metabolism.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 17.5,
                  brand: "DigestWell",
                  category: "Digestive Health",
               },
               {
                  id: "VIT040",
                  name: "Digestive Enzymes",
                  description:
                     "Comprehensive enzyme blend for optimal digestion and nutrient absorption.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 24.99,
                  brand: "DigestWell",
                  category: "Digestive Health",
               },
               {
                  id: "VIT041",
                  name: "Fiber Complete",
                  description:
                     "Soluble and insoluble fiber blend for digestive health.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 19.95,
                  brand: "DigestWell",
                  category: "Digestive Health",
               },
               {
                  id: "VIT042",
                  name: "Saw Palmetto Complex",
                  description:
                     "Saw palmetto with zinc and pumpkin seed for prostate health.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 26.99,
                  brand: "MensVital",
                  category: "Men's Health",
               },
               {
                  id: "VIT043",
                  name: "Menopause Support",
                  description:
                     "Herbal blend with black cohosh and soy isoflavones for menopause symptoms.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 29.95,
                  brand: "WomensHealth",
                  category: "Women's Health",
               },
               {
                  id: "VIT044",
                  name: "Iron Gummies",
                  description:
                     "Great-tasting iron gummies with vitamin C for children and adults.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 21.99,
                  brand: "IronHealth",
                  category: "Minerals",
               },
               {
                  id: "VIT045",
                  name: "Vitamin D Gummies",
                  description: "Delicious vitamin D3 gummies for the whole family.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 16.95,
                  brand: "SunHealth",
                  category: "Single Vitamins",
               },
               {
                  id: "VIT046",
                  name: "Multivitamin Gummies",
                  description: "Complete multivitamin in a tasty gummy format.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 24.99,
                  brand: "VitalLife",
                  category: "Multivitamins",
               },
               {
                  id: "VIT047",
                  name: "Protein Powder Plant",
                  description:
                     "Plant-based protein powder with added vitamins and minerals.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 39.95,
                  brand: "ProteinPlus",
                  category: "Protein Supplements",
               },
               {
                  id: "VIT048",
                  name: "Greens Powder Super",
                  description:
                     "Superfood greens powder with antioxidants and probiotics.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 42.99,
                  brand: "SuperGreens",
                  category: "Superfoods",
               },
               {
                  id: "VIT049",
                  name: "Mushroom Complex",
                  description:
                     "Blend of medicinal mushrooms for immune and cognitive support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 32.95,
                  brand: "ImmuneBoost",
                  category: "Functional Mushrooms",
               },
               {
                  id: "VIT050",
                  name: "Liquid Multivitamin",
                  description:
                     "Highly absorbable liquid multivitamin and mineral formula.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 28.99,
                  brand: "VitalLife",
                  category: "Multivitamins",
               },
            ],
         },
         {
            id: "medicines-seasonal",
            title: "Seasonal Offers",
            hook: "Seasonal Offers",
            medicines: [
               {
                  id: "SEAS001",
                  name: "Cold & Flu Relief Pack",
                  description:
                     "Complete cold and flu relief with decongestant, pain reliever, and throat lozenges.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 24.99,
                  brand: "WinterWell",
                  category: "Cold & Flu",
               },
               {
                  id: "SEAS002",
                  name: "Immune Support Bundle",
                  description:
                     "Vitamin C, zinc, and elderberry supplements for seasonal immune support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 39.95,
                  brand: "ImmuneBoost",
                  category: "Immune Support",
               },
               {
                  id: "SEAS003",
                  name: "Allergy Relief Complete",
                  description:
                     "Non-drowsy antihistamine with decongestant for seasonal allergies.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 19.99,
                  brand: "AllerClear",
                  category: "Allergy Relief",
               },
               {
                  id: "SEAS004",
                  name: "Sinus Congestion Kit",
                  description:
                     "Combination of medication and saline spray for sinus congestion relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 28.5,
                  brand: "SinusCare",
                  category: "Respiratory",
               },
               {
                  id: "SEAS005",
                  name: "Winter Skin Repair",
                  description:
                     "Intensive moisturizer and lip balm for dry winter skin.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 22.99,
                  brand: "DermaCare",
                  category: "Skin Care",
               },
               {
                  id: "SEAS006",
                  name: "Humidifier Portable",
                  description:
                     "Travel-sized humidifier for respiratory comfort during dry seasons.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 34.95,
                  brand: "AirCare",
                  category: "Respiratory Support",
               },
               {
                  id: "SEAS007",
                  name: "Heat Therapy Wrap",
                  description:
                     "Microwavable heat wrap for winter muscle pain relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 29.99,
                  brand: "WinterWarm",
                  category: "Pain Relief",
               },
               {
                  id: "SEAS008",
                  name: "Spring Allergy Defense",
                  description:
                     "Multi-symptom allergy relief formula designed for springtime pollen.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 21.95,
                  brand: "AllerClear",
                  category: "Allergy Relief",
               },
               {
                  id: "SEAS009",
                  name: "Summer UV Protection Pack",
                  description:
                     "SPF 50 sunscreen, after-sun gel, and UV protective lip balm.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 32.99,
                  brand: "SunGuard",
                  category: "Skin Care",
               },
               {
                  id: "SEAS010",
                  name: "Fall Immune Booster",
                  description:
                     "Seasonal immune support with echinacea and vitamin D.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 27.5,
                  brand: "ImmuneBoost",
                  category: "Immune Support",
               },
               {
                  id: "SEAS011",
                  name: "Winter Joint Comfort",
                  description:
                     "Glucosamine and chondroitin formula for cold-weather joint support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 36.95,
                  brand: "JointEase",
                  category: "Joint Health",
               },
               {
                  id: "SEAS012",
                  name: "Nasal Irrigation System",
                  description:
                     "Complete neti pot kit for natural sinus relief during allergy season.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 18.99,
                  brand: "SinusCare",
                  category: "Respiratory",
               },
               {
                  id: "SEAS013",
                  name: "Children's Cold Relief",
                  description:
                     "Gentle, alcohol-free cold medicine formulated for children.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 16.95,
                  brand: "KidWell",
                  category: "Cold & Flu",
               },
               {
                  id: "SEAS014",
                  name: "Cooling Sleep Aid",
                  description:
                     "Cooling gel pillow insert for comfortable summer sleeping.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 25.99,
                  brand: "SleepCool",
                  category: "Sleep Support",
               },
               {
                  id: "SEAS015",
                  name: "Bug Bite Relief Kit",
                  description:
                     "Natural anti-itch cream and insect repellent for summer protection.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 19.95,
                  brand: "BugGuard",
                  category: "Skin Care",
               },
               {
                  id: "SEAS016",
                  name: "Air Purifier Mini",
                  description:
                     "Portable air purifier for pollen and allergen removal.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 89.99,
                  brand: "AirCare",
                  category: "Respiratory Support",
               },
               {
                  id: "SEAS017",
                  name: "Hydration Multiplier Pack",
                  description:
                     "Electrolyte powder packets for rapid hydration in hot weather.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 24.5,
                  brand: "HydroBoost",
                  category: "Hydration",
               },
               {
                  id: "SEAS018",
                  name: "Nighttime Cold Formula",
                  description:
                     "Cough suppressant and sleep aid for restful recovery.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 17.99,
                  brand: "WinterWell",
                  category: "Cold & Flu",
               },
               {
                  id: "SEAS019",
                  name: "Vitamin D3 Complex",
                  description:
                     "High-potency vitamin D supplement for winter months.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 18.5,
                  brand: "VitaCore",
                  category: "Immune Support",
               },
               {
                  id: "SEAS020",
                  name: "Sore Throat Spray",
                  description:
                     "Fast-acting numbing spray for seasonal sore throat relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 12.99,
                  brand: "ThroatEase",
                  category: "Cold & Flu",
               },
               {
                  id: "SEAS021",
                  name: "Eye Drops Allergy Formula",
                  description:
                     "Relief for itchy, watery eyes during allergy season.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 15.95,
                  brand: "AllerClear",
                  category: "Allergy Relief",
               },
               {
                  id: "SEAS022",
                  name: "Chest Rub Balm",
                  description:
                     "Mentholated chest rub for nighttime congestion relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 11.5,
                  brand: "SinusCare",
                  category: "Respiratory",
               },
               {
                  id: "SEAS023",
                  name: "Seasonal Mood Support",
                  description:
                     "Natural supplement for winter mood and energy balance.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 29.95,
                  brand: "MoodLight",
                  category: "Mental Wellness",
               },
               {
                  id: "SEAS024",
                  name: "Insulated Water Bottle",
                  description:
                     "Double-walled bottle that keeps drinks cold in summer and hot in winter.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 26.99,
                  brand: "HydroBoost",
                  category: "Hydration",
               },
               {
                  id: "SEAS025",
                  name: "Pollen Barrier Balm",
                  description:
                     "Nasal balm that creates a barrier against airborne allergens.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 14.95,
                  brand: "AllerClear",
                  category: "Allergy Relief",
               },
               {
                  id: "SEAS026",
                  name: "Throat Lozenges Variety Pack",
                  description:
                     "Assorted honey, lemon, and menthol lozenges for sore throat relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 9.99,
                  brand: "ThroatEase",
                  category: "Cold & Flu",
               },
               {
                  id: "SEAS027",
                  name: "Fever Reducer Liquid Gels",
                  description: "Fast-acting fever and pain relief liquid capsules.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 13.95,
                  brand: "WinterWell",
                  category: "Cold & Flu",
               },
               {
                  id: "SEAS028",
                  name: "Light Therapy Lamp",
                  description:
                     "10,000 lux light therapy for winter blues and energy support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 59.99,
                  brand: "MoodLight",
                  category: "Mental Wellness",
               },
               {
                  id: "SEAS029",
                  name: "Chapped Lip Treatment",
                  description:
                     "Intensive overnight lip repair mask for winter-damaged lips.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 8.99,
                  brand: "DermaCare",
                  category: "Skin Care",
               },
               {
                  id: "SEAS030",
                  name: "Herbal Cough Syrup",
                  description:
                     "Natural honey and herb formula for dry and productive coughs.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 23.5,
                  brand: "NatureCure",
                  category: "Cold & Flu",
               },
               {
                  id: "SEAS031",
                  name: "Cooling Body Powder",
                  description:
                     "Talc-free powder for heat rash and summer skin comfort.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 14.99,
                  brand: "SummerEase",
                  category: "Skin Care",
               },
               {
                  id: "SEAS032",
                  name: "Dehumidifier Mini",
                  description: "Compact dehumidifier for damp seasonal conditions.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 45.95,
                  brand: "AirCare",
                  category: "Respiratory Support",
               },
               {
                  id: "SEAS033",
                  name: "Hot Water Bottle Classic",
                  description:
                     "Traditional rubber hot water bottle with soft cover.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 15.99,
                  brand: "WinterWarm",
                  category: "Pain Relief",
               },
               {
                  id: "SEAS034",
                  name: "Elderberry Gummies",
                  description:
                     "Tasty elderberry immune support for the whole family.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 19.95,
                  brand: "ImmuneBoost",
                  category: "Immune Support",
               },
               {
                  id: "SEAS035",
                  name: "Air Quality Monitor",
                  description:
                     "Digital device that measures indoor pollen, dust, and humidity.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 79.99,
                  brand: "AirCare",
                  category: "Respiratory Support",
               },
               {
                  id: "SEAS036",
                  name: "Foot Warming Insoles",
                  description:
                     "Battery-heated insoles for winter outdoor activities.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 39.95,
                  brand: "WinterWarm",
                  category: "Pain Relief",
               },
               {
                  id: "SEAS037",
                  name: "Sleep Sound Machine",
                  description:
                     "White noise generator with rain, fan, and ocean sounds.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 32.5,
                  brand: "SleepCool",
                  category: "Sleep Support",
               },
               {
                  id: "SEAS038",
                  name: "Daily Probiotic Seasonal",
                  description:
                     "Specialized probiotic blend for seasonal immune support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 28.99,
                  brand: "ImmuneBoost",
                  category: "Immune Support",
               },
               {
                  id: "SEAS039",
                  name: "Muscle Cooling Gel",
                  description:
                     "Menthol and arnica gel for summer athletic recovery.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 16.95,
                  brand: "SummerEase",
                  category: "Pain Relief",
               },
               {
                  id: "SEAS040",
                  name: "Nasal Spray Saline",
                  description:
                     "Preservative-free saline spray for dry nasal passages.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 10.99,
                  brand: "SinusCare",
                  category: "Respiratory",
               },
               {
                  id: "SEAS041",
                  name: "Hand Warming Packets",
                  description:
                     "Air-activated disposable hand warmers for winter outings.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 11.99,
                  brand: "WinterWarm",
                  category: "Pain Relief",
               },
               {
                  id: "SEAS042",
                  name: "After Sun Aloe Gel",
                  description:
                     "Cooling aloe vera gel with lidocaine for sunburn relief.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 13.5,
                  brand: "SunGuard",
                  category: "Skin Care",
               },
               {
                  id: "SEAS043",
                  name: "Children's Allergy Syrup",
                  description: "Great-tasting, non-drowsy allergy relief for kids.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 18.95,
                  brand: "KidWell",
                  category: "Allergy Relief",
               },
               {
                  id: "SEAS044",
                  name: "Digital Thermometer Ultra",
                  description: "Fast-reading digital thermometer with fever alert.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 22.5,
                  brand: "WinterWell",
                  category: "Cold & Flu",
               },
               {
                  id: "SEAS045",
                  name: "Reusable Ice Pack Flexible",
                  description:
                     "Moldable ice pack for injuries and cooling in hot weather.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 14.95,
                  brand: "SummerEase",
                  category: "Pain Relief",
               },
               {
                  id: "SEAS046",
                  name: "Himalayan Salt Inhaler",
                  description:
                     "Natural ceramic inhaler with pink salt for respiratory comfort.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: false,
                  price: 26.95,
                  brand: "NatureCure",
                  category: "Respiratory Support",
               },
               {
                  id: "SEAS047",
                  name: "Kids Bug Protection Spray",
                  description: "DEET-free insect repellent safe for children.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 15.5,
                  brand: "BugGuard",
                  category: "Skin Care",
               },
               {
                  id: "SEAS048",
                  name: "Green Tea Extract",
                  description: "Antioxidant support for seasonal transitions.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 21.99,
                  brand: "VitaCore",
                  category: "Immune Support",
               },
               {
                  id: "SEAS049",
                  name: "Weighted Blanket Mini",
                  description:
                     "Travel-sized 5lb weighted blanket for winter comfort.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 49.95,
                  brand: "SleepCool",
                  category: "Sleep Support",
               },
               {
                  id: "SEAS050",
                  name: "Seasonal Wellness Tea Set",
                  description:
                     "Collection of herbal teas for immune, respiratory, and digestive support.",
                  imageUrl: Images[Math.floor(Math.random() * Images.length)],
                  availability: true,
                  price: 32.5,
                  brand: "NatureCure",
                  category: "Immune Support",
               },
            ],
         },
      ],
   };


   // This ref is attached to the inner container holding the cards
   const containerRef = useRef(null);
   const outerContainerRef = useRef(null);

   // Clone first few items to create seamless loop effect
   const clonedMedicines = [
      ...extendedMedicines["discounted-medicines"][myNum].medicines,
      ...extendedMedicines["discounted-medicines"][myNum].medicines.slice(0, 5),
   ];

   // State to track position
   const [position, setPosition] = useState(0);

   // Function to scroll left
   const scrollLeft = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const firstCard = container.querySelector(".medicine-card");
      if (!firstCard) return;

      const cardWidth =
         firstCard.offsetWidth +
         parseInt(getComputedStyle(firstCard).marginRight, 10);

      if (position >= 0) {
         // If at start, jump to end (without animation) and then scroll
         const totalCards = extendedMedicines["discounted-medicines"][myNum].medicines.length;
         setPosition(-(totalCards * cardWidth) + cardWidth);
      } else {
         setPosition(position + cardWidth);
      }
   };

   // Function to scroll right
   const scrollRight = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const firstCard = container.querySelector(".medicine-card");
      if (!firstCard) return;

      const cardWidth =
         firstCard.offsetWidth +
         parseInt(getComputedStyle(firstCard).marginRight, 10);
      const totalWidth = extendedMedicines["discounted-medicines"][myNum].medicines.length * cardWidth;

      if (Math.abs(position) >= totalWidth - cardWidth) {
         // If at end, jump to start
         setPosition(0);
      } else {
         setPosition(position - cardWidth);
      }
   };

   // Handle reset position after transition if needed
   useEffect(() => {
      if (!containerRef.current) return;

      const handleTransitionEnd = () => {
         const container = containerRef.current;
         if (!container) return;

         const firstCard = container.querySelector(".medicine-card");
         if (!firstCard) return;

         const cardWidth =
            firstCard.offsetWidth +
            parseInt(getComputedStyle(firstCard).marginRight, 10);
         const totalCards = extendedMedicines["discounted-medicines"][myNum].medicines.length;
         const totalWidth = totalCards * cardWidth;

         // If we've scrolled to cloned section at end
         if (Math.abs(position) >= totalWidth) {
            // Disable transition
            container.style.transition = "none";
            // Reset position
            setPosition(0);
            // Force reflow
            container.offsetHeight;
            // Re-enable transition
            setTimeout(() => {
               container.style.transition = "transform 0.3s ease-out";
            }, 50);
         }
      };

      const container = containerRef.current;
      container.addEventListener("transitionend", handleTransitionEnd);

      return () => {
         if (container) {
            container.removeEventListener("transitionend", handleTransitionEnd);
         }
      };
   }, [position]);

   // Auto scroll effect
   useEffect(() => {
      const autoScrollInterval = setInterval(() => {
         scrollRight();
      }, 3000);

      return () => clearInterval(autoScrollInterval);
   }, [position]);

   return (
      <>
         <div
            id={extendedMedicines["discounted-medicines"][myNum].id}
            className="w-full px-1 pt-20 pb-10"
         >
            <h2 style={{fontFamily:"Roboto"}} className="text-3xl text-center font-bold mb-6 text-black tracking-wider">
               Special Offers
            </h2>
            <div
               ref={outerContainerRef}
               className="relative w-9/10 mx-auto h-fit overflow-hidden"
            >
            <h3 style={{fontFamily:"Roboto"}} className="text-2xl px-10 font-semibold text-red-600 capitalize tracking-wide border-b-4 border-red-400 pb-5 mb-4">
               {extendedMedicines["discounted-medicines"][myNum].title}
            </h3>
               {/* Outer container that hides overflow */}
               <div className="size-fit">
                  {/* Inner container that is translated via CSS */}
                  <div
                     ref={containerRef}
                     style={{
                        transform: `translateX(${position}px)`,
                        transition: "transform 0.3s ease-out",
                     }}
                     className="flex space-x-1 p-4 overflow-x-hidden"
                  >
                     {clonedMedicines.map((medicine, index) => {
                        const { id, name, availability, imageUrl } = medicine;
                        const price = medicine.price - medicine.price * 0.5;
                        return (
                           <div key={`${id}-${index}`} className="medicine-card">
                              <MedicineCardScroll
                                 key={id}
                                 id={id}
                                 description={null}
                                 name={name}
                                 availability={availability}
                                 imageUrl={imageUrl}
                                 price={price}
                                 hook={extendedMedicines["discounted-medicines"][myNum].hook}
                                 onAddToCart={(event) => handleAddToCart(medicine, event)}
                                 onOrder={() => handleOrder("buyNow",medicine)}
                              />
                           </div>
                        );
                     })}
                  </div>
               </div>
               {/* Fixed navigation buttons */}
               <button
                  onClick={scrollLeft}
                  className="absolute right-25 top-0 transform translate-x-1 z-10 bg-gray-400 hover:bg-gray-500 p-2 rounded-full shadow-md"
               >
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
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                     />
                  </svg>
               </button>
               <button
                  onClick={scrollRight}
                  className="absolute right-0 top-0 transform -translate-x-1/2 z-10 bg-gray-400 hover:bg-gray-500 p-2 rounded-full shadow-md"
               >
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
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                     />
                  </svg>
               </button>
            </div>
         </div>
      </>
   );
}
