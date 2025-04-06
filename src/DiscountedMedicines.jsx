import React, { useRef, useState, useEffect } from "react";
import MedicineCard from "./MedicineCard";
import myImage1 from "./assets/image.png";
import myImage2 from "./assets/image1.png";
import myImage3 from "./assets/image2.png";
import myImage4 from "./assets/image3.png";
import myImage5 from "./assets/image4.png";

const DiscountedMedicines = ({handleAddToCart}) => {
   const Images = [myImage1, myImage2, myImage3, myImage4, myImage5];

   const allMedicines = {
      medicines: [
         {
            id: "DISC01",
            name: "ApolloFever",
            description:
               "Antipyretic medication for reducing fever in adults and children above 12 years.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 62.75,
         },
         {
            id: "DISC02",
            name: "CardioGuard",
            description:
               "Medication to manage hypertension and prevent cardiovascular complications.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 172.88,
         },
         {
            id: "DISC03",
            name: "NeuroChill",
            description:
               "Anxiolytic medicine to reduce anxiety and promote relaxation.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 89.5,
         },
         {
            id: "DISC04",
            name: "DigestEase",
            description:
               "Medication for relief from acidity, heartburn and indigestion.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 45.25,
         },
         {
            id: "DISC05",
            name: "JointRegen",
            description:
               "Anti-inflammatory medicine for arthritis and joint pain relief.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 198.5,
         },
         {
            id: "DISC06",
            name: "ImmunoBoost",
            description: "Immunity enhancer with essential vitamins and minerals.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 74.99,
         },
         {
            id: "DISC07",
            name: "SleepWell",
            description: "Medication to treat insomnia and improve sleep quality.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 56.25,
         },
         {
            id: "DISC08",
            name: "AllerShield",
            description:
               "Antihistamine for allergic reactions and seasonal allergies.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 37.5,
         },
         {
            id: "DISC09",
            name: "BronchoClear",
            description: "Expectorant for chest congestion and productive cough.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 43.75,
         },
         {
            id: "DISC10",
            name: "GlucoBalance",
            description:
               "Oral anti-diabetic medication to control blood sugar levels.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 187.25,
         },
         {
            id: "DISC11",
            name: "ThyroStable",
            description: "Hormone replacement therapy for hypothyroidism.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 92.35,
         },
         {
            id: "DISC12",
            name: "BoneStrength",
            description: "Calcium and vitamin D supplement for bone health.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 67.5,
         },
         {
            id: "DISC13",
            name: "MigraSoothe",
            description:
               "Fast-acting medication for migraine and severe headaches.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 110.25,
         },
         {
            id: "DISC14",
            name: "DermaHeal",
            description: "Topical ointment for dermatitis and skin irritations.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 59.99,
         },
         {
            id: "DISC15",
            name: "CholeCare",
            description:
               "Medication to lower cholesterol and improve lipid profile.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 162.5,
         },
         {
            id: "DISC16",
            name: "GastroShield",
            description:
               "Proton pump inhibitor for gastric ulcers and acid reflux.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 145.25,
         },
         {
            id: "DISC17",
            name: "RenalGuard",
            description:
               "Medication to support kidney function and prevent stone formation.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 195.5,
         },
         {
            id: "DISC18",
            name: "UroClean",
            description:
               "Antibiotic for urinary tract infections and bladder health.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 78.75,
         },
         {
            id: "DISC19",
            name: "VisioSharp",
            description: "Eye drops for dry eyes and minor irritations.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 42.49,
         },
         {
            id: "DISC20",
            name: "HemoBoost",
            description: "Iron supplement for anemia and blood health.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 49.99,
         },
         {
            id: "DISC21",
            name: "OsteoCare",
            description:
               "Medication for osteoporosis and bone density improvement.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 168.75,
         },
         {
            id: "DISC22",
            name: "NasoClear",
            description: "Nasal spray for congestion and sinus relief.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 29.99,
         },
         {
            id: "DISC23",
            name: "PulmoStrong",
            description: "Bronchodilator for asthma and COPD management.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 124.5,
         },
         {
            id: "DISC24",
            name: "CardioRhythm",
            description:
               "Medication to regulate heart rhythm and prevent arrhythmias.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 215.25,
         },
         {
            id: "DISC25",
            name: "CerebroFlow",
            description:
               "Medication to improve cerebral blood flow and cognitive function.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 178.5,
         },
         {
            id: "DISC26",
            name: "PainRelief",
            description: "Non-narcotic analgesic for moderate to severe pain.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 85.25,
         },
         {
            id: "DISC27",
            name: "LiverClenz",
            description:
               "Hepatoprotective medication for liver health and detoxification.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 134.99,
         },
         {
            id: "DISC28",
            name: "MuscleRelax",
            description: "Muscle relaxant for spasms and tension relief.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 76.5,
         },
         {
            id: "DISC29",
            name: "DiabeGuard",
            description:
               "Long-acting insulin for type 1 and type 2 diabetes management.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 224.99,
         },
         {
            id: "DISC30",
            name: "ProstateCare",
            description:
               "Medication for benign prostatic hyperplasia and urinary symptoms.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 145.75,
         },
         {
            id: "DISC31",
            name: "FemBalance",
            description:
               "Hormone regulator for menopause symptoms and women's health.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 156.25,
         },
         {
            id: "DISC32",
            name: "HairVital",
            description: "Medication to prevent hair loss and promote growth.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 89.99,
         },
         {
            id: "DISC33",
            name: "FertiPlus",
            description: "Supplement to enhance fertility and reproductive health.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 197.5,
         },
         {
            id: "DISC34",
            name: "VeinGuard",
            description: "Medication for varicose veins and venous insufficiency.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 112.25,
         },
         {
            id: "DISC35",
            name: "CogniSharp",
            description:
               "Nootropic for memory enhancement and cognitive performance.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 94.5,
         },
         {
            id: "DISC36",
            name: "VitaEssence",
            description:
               "Multivitamin supplement for overall health and wellbeing.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 37.99,
         },
         {
            id: "DISC37",
            name: "OralClean",
            description: "Medication for oral infections and gum health.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 45.25,
         },
         {
            id: "DISC38",
            name: "TravelGuard",
            description:
               "Anti-nausea and motion sickness medication for travelers.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 32.5,
         },
         {
            id: "DISC39",
            name: "WeightBalance",
            description:
               "FDA-approved medication for weight management and obesity.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 189.99,
         },
         {
            id: "DISC40",
            name: "SkinClear",
            description: "Acne treatment medication for clear and healthy skin.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 67.5,
         },
         {
            id: "DISC41",
            name: "EarCare",
            description: "Ear drops for infections and wax removal.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 28.75,
         },
         {
            id: "DISC42",
            name: "StressLess",
            description:
               "Natural supplement for stress reduction and mental wellbeing.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 54.99,
         },
         {
            id: "DISC43",
            name: "ClotGuard",
            description: "Anticoagulant to prevent blood clots and thrombosis.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 167.25,
         },
         {
            id: "DISC44",
            name: "LungShield",
            description: "Corticosteroid inhaler for asthma and lung inflammation.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 132.5,
         },
         {
            id: "DISC45",
            name: "MemoryPlus",
            description:
               "Medication for early stages of Alzheimer's and memory loss.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 245.25,
         },
         {
            id: "DISC46",
            name: "PsoriClear",
            description:
               "Topical medication for psoriasis and chronic skin conditions.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 118.75,
         },
         {
            id: "DISC47",
            name: "GoutRelief",
            description: "Medication to treat gout and reduce uric acid levels.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 94.5,
         },
         {
            id: "DISC48",
            name: "BioticPro",
            description:
               "Probiotic supplement for gut health and digestive balance.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 42.99,
         },
         {
            id: "DISC49",
            name: "HyperGuard",
            description:
               "Medication for attention deficit hyperactivity disorder (ADHD).",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 178.5,
         },
         {
            id: "DISC50",
            name: "OsteoFlex",
            description:
               "Glucosamine and chondroitin supplement for joint flexibility.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 56.25,
         },
         {
            id: "DISC51",
            name: "HeartResync",
            description: "Beta-blocker for heart failure and cardiac conditions.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 194.99,
         },
         {
            id: "DISC52",
            name: "TinnitusSoothe",
            description:
               "Medication to reduce symptoms of tinnitus and ear ringing.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 89.75,
         },
         {
            id: "DISC53",
            name: "OvaryCare",
            description:
               "Medication for polycystic ovary syndrome and hormone balance.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 142.5,
         },
         {
            id: "DISC54",
            name: "EndoShield",
            description: "Medication for endometriosis and pelvic pain management.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 168.75,
         },
         {
            id: "DISC55",
            name: "LipidClear",
            description: "Advanced statin medication for cholesterol management.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 157.25,
         },
         {
            id: "DISC56",
            name: "RespiClear",
            description:
               "Antihistamine for allergic rhinitis and respiratory allergies.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 47.99,
         },
         {
            id: "DISC57",
            name: "NeuroCalm",
            description:
               "Anticonvulsant medication for epilepsy and seizure control.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 189.5,
         },
         {
            id: "DISC58",
            name: "PregnaCare",
            description: "Prenatal vitamin supplement for expecting mothers.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 52.25,
         },
         {
            id: "DISC59",
            name: "AgeFactor",
            description:
               "Anti-aging supplement with antioxidants and collagen boosters.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 78.99,
         },
         {
            id: "DISC60",
            name: "ClimaCool",
            description: "Medication for hot flashes and menopausal symptoms.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 95.25,
         },
         {
            id: "DISC61",
            name: "MetaBoost",
            description: "Metabolism enhancer for healthy weight management.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 69.5,
         },
         {
            id: "DISC62",
            name: "ImmunoPro",
            description:
               "Immunosuppressant for autoimmune conditions and transplant patients.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 287.5,
         },
         {
            id: "DISC63",
            name: "PancreAid",
            description:
               "Enzyme supplement for pancreatic insufficiency and digestion.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 123.75,
         },
         {
            id: "DISC64",
            name: "AdrenoPower",
            description:
               "Medication for adrenal insufficiency and cortisol regulation.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 145.99,
         },
         {
            id: "DISC65",
            name: "FeverGuard",
            description: "Children's antipyretic medication for fever reduction.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 34.5,
         },
         {
            id: "DISC66",
            name: "ColoGuard",
            description: "Medication for inflammatory bowel disease and colitis.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 186.25,
         },
         {
            id: "DISC67",
            name: "RetinoCare",
            description: "Medication for macular degeneration and retinal health.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 212.5,
         },
         {
            id: "DISC68",
            name: "ParkinShield",
            description:
               "Medication for Parkinson's disease and movement disorders.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 249.99,
         },
         {
            id: "DISC69",
            name: "BPNormal",
            description:
               "Combination therapy for resistant hypertension management.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 164.75,
         },
         {
            id: "DISC70",
            name: "DiureFlow",
            description: "Diuretic medication for fluid retention and edema.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 87.5,
         },
         {
            id: "DISC71",
            name: "ThromboCare",
            description:
               "Antiplatelet medication for stroke and heart attack prevention.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 175.25,
         },
         {
            id: "DISC72",
            name: "HungerLess",
            description:
               "Appetite suppressant for obesity management and weight loss.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: false,
            price: 129.99,
         },
         {
            id: "DISC73",
            name: "PsychoCalm",
            description:
               "Antipsychotic medication for schizophrenia and bipolar disorder.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 235.5,
         },
         {
            id: "DISC74",
            name: "BiotiBalance",
            description:
               "Broad-spectrum antibiotic for serious bacterial infections.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 192.75,
         },
         {
            id: "DISC75",
            name: "FungoClear",
            description:
               "Antifungal medication for systemic and topical fungal infections.",
            imageUrl: Images[Math.floor(Math.random() * Images.length)],
            availability: true,
            price: 108.5,
         },
      ],
   };

   // This ref is attached to the inner container holding the cards.
   const containerRef = useRef(null);
   // State to track the current translateX value.
   const [currentTranslate, setCurrentTranslate] = useState(0);

   // Scroll left by increasing translateX (moves the container right)
   const scrollLeft = () => {
      const firstChild = containerRef.current.children[0];
      if (!firstChild) return;
      const gap = parseInt(getComputedStyle(firstChild).marginRight, 10);
      const cardWidth = firstChild.offsetWidth + gap;
      setCurrentTranslate((prev) => prev + cardWidth);
   };

   // Scroll right by decreasing translateX (moves the container left)
   const scrollRight = () => {
      const firstChild = containerRef.current.children[0];
      if (!firstChild) return;
      const gap = parseInt(getComputedStyle(firstChild).marginRight, 10);
      const cardWidth = firstChild.offsetWidth + gap;
      setCurrentTranslate((prev) => prev - cardWidth);
   };

   // Auto scroll effect: call scrollRight every 3 seconds
   useEffect(() => {
      const autoScrollInterval = setInterval(() => {
         scrollRight();
      }, 3000);

      return () => clearInterval(autoScrollInterval);
   }, []);

   return (
      <div id="discount-store" className="w-full px-1 py-8">
         <h2 className="text-4xl font-bold text-center mb-6">
            Discounted Medicines
         </h2>
         <h3 className="text-3xl px-10 font-semibold text-red-600 uppercase tracking-wide">
            flat 50% off
         </h3>
         <div className="relative w-9/10 mx-auto h-fit overflow-hidden">
            {/* Outer container that hides overflow */}
            <div className="size-fit">
               {/* Inner container that is translated via CSS */}
               <div
                  ref={containerRef}
                  style={{
                     transform: `translateX(${currentTranslate}px)`,
                     transition: "transform 0.3s ease-out",
                  }}
                  className="flex space-x-4 p-4"
               >
                  {allMedicines.medicines.map((medicine) => {
                     const { id, name, availability, imageUrl } = medicine;
                     const price = medicine.price - medicine.price * 0.5;
                     return (
                        <MedicineCard
                           key={id}
                           id={id}
                           description={null}
                           name={name}
                           availability={availability}
                           imageUrl={imageUrl}
                           price={price}
                           onAddToCart={(event) => handleAddToCart(medicine, event)}
                        />
                     );
                  })}
               </div>
            </div>
            {/* Fixed navigation buttons */}
            <button
               onClick={scrollLeft}
               className="absolute left-0 top-1/2 transform translate-x-1 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md"
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
               className="absolute right-0 top-1/2 transform -translate-x-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md"
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
   );
};



export default DiscountedMedicines;
