import React from 'react'
import Medicine from './Medicine'
import myImage1 from "../Ecommerce App assets/image.png";
import myImage2 from "../Ecommerce App assets/image1.png";
import myImage3 from "../Ecommerce App assets/image2.png";
import myImage4 from "../Ecommerce App assets/image3.png";
import myImage5 from "../Ecommerce App assets/image4.png";

function BrandMedicine({ brandNum, handleAddToCart, handleOrder }) {

   const Images = [myImage1, myImage2, myImage3, myImage4, myImage5];
   

   const allMedicines={
   "brandsWithMedicines": [
      {
         "name": "Apollo Hospitals",
         "logo": "https://th.bing.com/th/id/R.4c510dcf88d6a82cb24aceb1942ab55c?rik=EjFKJWu6YneMzQ&riu=http%3a%2f%2ftrichy.com%2fwp-content%2fuploads%2f2019%2f05%2fappollo-hospital.png&ehk=4j7W%2bhC%2bllukm13aTSpMs0YMJNCTZKEqWFIRDDhTZBQ%3d&risl=&pid=ImgRaw&r=0",
         "medicines": [
            {
               "id": "APL001",
               "name": "ApolloFever",
               "description": "Antipyretic medication for reducing fever in adults and children above 12 years.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 125.50
            },
            {
               "id": "APL002",
               "name": "CardioGuard",
               "description": "Medication to manage hypertension and prevent cardiovascular complications.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.75
            },
            {
               "id": "APL003",
               "name": "DiabeCare Plus",
               "description": "Oral hypoglycemic agent for type 2 diabetes management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 298.50
            },
            {
               "id": "APL004",
               "name": "RespiEase",
               "description": "Bronchodilator for asthma and COPD symptom relief.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 215.25
            },
            {
               "id": "APL005",
               "name": "GastroShield",
               "description": "Proton pump inhibitor for treating acid reflux and ulcers.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 189.90
            },
            {
               "id": "APL006",
               "name": "NeuroCalm",
               "description": "Anti-anxiety medication with minimal sedative effects.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 312.40
            },
            {
               "id": "APL007",
               "name": "JointRelief",
               "description": "Non-steroidal anti-inflammatory drug for joint pain and arthritis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 258.75
            },
            {
               "id": "APL008",
               "name": "BoneMax",
               "description": "Calcium and vitamin D supplement for bone health maintenance.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 145.60
            },
            {
               "id": "APL009",
               "name": "ImmunoBoost",
               "description": "Multivitamin complex designed to enhance immune system function.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 178.90
            },
            {
               "id": "APL010",
               "name": "SleepWell",
               "description": "Mild sedative to improve sleep quality and treat insomnia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 225.30
            },
            {
               "id": "APL011",
               "name": "AllerStop",
               "description": "Antihistamine for relief from seasonal allergies and allergic rhinitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 164.50
            },
            {
               "id": "APL012",
               "name": "ThyroBalance",
               "description": "Medication for hypothyroidism management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 289.75
            },
            {
               "id": "APL013",
               "name": "DermaClear",
               "description": "Topical cream for treating various skin conditions including eczema.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 198.25
            },
            {
               "id": "APL014",
               "name": "FerroPlus",
               "description": "Iron supplement for anemia treatment and prevention.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 135.80
            },
            {
               "id": "APL015",
               "name": "CholesterolGuard",
               "description": "Statin medication to lower cholesterol levels.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 356.90
            },
            {
               "id": "APL016",
               "name": "MigraRelief",
               "description": "Fast-acting medication for migraine headache treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 247.50
            },
            {
               "id": "APL017",
               "name": "UroHealth",
               "description": "Medication for treating urinary tract infections.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 205.75
            },
            {
               "id": "APL018",
               "name": "VitalHeart",
               "description": "Cardiac glycoside for congestive heart failure management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 378.60
            },
            {
               "id": "APL019",
               "name": "StressGuard",
               "description": "Adaptogenic formula to help the body manage stress response.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 189.90
            },
            {
               "id": "APL020",
               "name": "ColiComfort",
               "description": "Medication for relief from irritable bowel syndrome symptoms.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 256.30
            },
            {
               "id": "APL021",
               "name": "PregnaCare",
               "description": "Prenatal vitamin supplement for expectant mothers.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 175.40
            },
            {
               "id": "APL022",
               "name": "BloodSugar Norm",
               "description": "Advanced formula for blood glucose regulation.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 285.20
            },
            {
               "id": "APL023",
               "name": "VisionCare",
               "description": "Eye drops for dry eye syndrome and minor eye irritations.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 154.90
            },
            {
               "id": "APL024",
               "name": "LiverDetox",
               "description": "Herbal supplement to support liver function and detoxification.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 218.75
            },
            {
               "id": "APL025",
               "name": "MuscleRelax",
               "description": "Muscle relaxant for relief from muscle spasms and pain.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 234.50
            }
         ]
      },
      {
         "name": "Fortis Healthcare",
         "logo": "https://grantave.com/s/fortis-health-logo.png",
         "medicines": [
            {
               "id": "FRT001",
               "name": "FortiFever",
               "description": "Fast-acting fever reducer for adults and children.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 118.90
            },
            {
               "id": "FRT002",
               "name": "CardioFort",
               "description": "Beta-blocker for hypertension and cardiovascular disease management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 356.80
            },
            {
               "id": "FRT003",
               "name": "GlucoStable",
               "description": "Combination therapy for comprehensive diabetes management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 325.40
            },
            {
               "id": "FRT004",
               "name": "BroncoRelieve",
               "description": "Inhaler medication for acute asthma attacks and bronchitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 245.60
            },
            {
               "id": "FRT005",
               "name": "GastroFort",
               "description": "Medication to neutralize stomach acid and protect gastric lining.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 178.50
            },
            {
               "id": "FRT006",
               "name": "AnxioCalm",
               "description": "Anxiolytic for generalized anxiety disorder treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 298.70
            },
            {
               "id": "FRT007",
               "name": "ArthroRelief",
               "description": "Anti-inflammatory medication specifically for rheumatoid arthritis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.30
            },
            {
               "id": "FRT008",
               "name": "OsteoStrength",
               "description": "Treatment for osteoporosis and bone density improvement.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 318.90
            },
            {
               "id": "FRT009",
               "name": "ImmunoFort",
               "description": "Comprehensive immune system support supplement.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 185.20
            },
            {
               "id": "FRT010",
               "name": "RestNight",
               "description": "Sleep medication for chronic insomnia with minimal side effects.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 235.40
            },
            {
               "id": "FRT011",
               "name": "AllerShield",
               "description": "24-hour allergy relief medication with decongestant.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 175.60
            },
            {
               "id": "FRT012",
               "name": "ThyroVital",
               "description": "Complete thyroid health management medication.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 295.80
            },
            {
               "id": "FRT013",
               "name": "SkinClear",
               "description": "Topical treatment for acne and other common skin problems.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 189.40
            },
            {
               "id": "FRT014",
               "name": "HemoBoost",
               "description": "Comprehensive iron supplement with added B vitamins.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 145.70
            },
            {
               "id": "FRT015",
               "name": "LipidLower",
               "description": "Medication to reduce triglycerides and LDL cholesterol levels.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 367.50
            },
            {
               "id": "FRT016",
               "name": "HeadEase",
               "description": "Combination therapy for chronic headache and migraine prevention.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 264.90
            },
            {
               "id": "FRT017",
               "name": "UTIGuard",
               "description": "Antibiotic specifically formulated for urinary tract infections.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 215.30
            },
            {
               "id": "FRT018",
               "name": "CardioRhythm",
               "description": "Antiarrhythmic medication for heart rhythm disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 385.70
            },
            {
               "id": "FRT019",
               "name": "StressRelease",
               "description": "Herbal formula to reduce cortisol levels and stress response.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 198.40
            },
            {
               "id": "FRT020",
               "name": "DigestEase",
               "description": "Medication for chronic digestive disorders and IBS management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 246.80
            },
            {
               "id": "FRT021",
               "name": "MaternalCare",
               "description": "Complete vitamin and mineral support for pregnancy and lactation.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 184.50
            },
            {
               "id": "FRT022",
               "name": "DiabetaControl",
               "description": "Long-acting insulin for diabetes management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 425.60
            },
            {
               "id": "FRT023",
               "name": "OcuProtect",
               "description": "Medication for glaucoma management and eye pressure control.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 325.40
            },
            {
               "id": "FRT024",
               "name": "HepatoGuard",
               "description": "Medication for chronic liver disease and hepatitis management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 328.90
            },
            {
               "id": "FRT025",
               "name": "NeuroRelax",
               "description": "Muscle relaxant specifically for neurological conditions.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 276.30
            }
         ]
      },
      {
         "name": "Max Healthcare",
         "logo": "https://companieslogo.com/img/orig/MAXHEALTH.NS_BIG-bf20d59a.png?t=1685089747",
         "medicines": [
            {
               "id": "MAX001",
               "name": "MaxiFever",
               "description": "Extended-release fever reducer for 24-hour symptom control.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 135.75
            },
            {
               "id": "MAX002",
               "name": "CardioMax",
               "description": "ACE inhibitor for hypertension and heart failure treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 367.50
            },
            {
               "id": "MAX003",
               "name": "GlucoMax",
               "description": "Next-generation medication for type 2 diabetes management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.80
            },
            {
               "id": "MAX004",
               "name": "LungClear",
               "description": "Combination therapy for COPD and severe asthma.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 398.40
            },
            {
               "id": "MAX005",
               "name": "AcidControl",
               "description": "Advanced formula for GERD and chronic acid reflux management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 245.60
            },
            {
               "id": "MAX006",
               "name": "MindEase",
               "description": "Medication for treatment-resistant depression and anxiety disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 378.90
            },
            {
               "id": "MAX007",
               "name": "JointMax",
               "description": "Advanced therapy for moderate to severe osteoarthritis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 287.50
            },
            {
               "id": "MAX008",
               "name": "BoneDefender",
               "description": "Comprehensive treatment for osteoporosis with high fracture risk.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 365.40
            },
            {
               "id": "MAX009",
               "name": "ImmunoMax",
               "description": "Specialized immune support for immunocompromised patients.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 425.30
            },
            {
               "id": "MAX010",
               "name": "DeepSleep",
               "description": "Advanced sleep medication for chronic sleep disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 256.80
            },
            {
               "id": "MAX011",
               "name": "AllerMax",
               "description": "Potent antihistamine for severe allergic reactions.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 198.40
            },
            {
               "id": "MAX012",
               "name": "ThyroMax",
               "description": "Complete thyroid replacement therapy for severe hypothyroidism.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.60
            },
            {
               "id": "MAX013",
               "name": "DermaHealer",
               "description": "Advanced treatment for psoriasis and severe dermatitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.30
            },
            {
               "id": "MAX014",
               "name": "BloodBuilder",
               "description": "Complete hematologic supplement for severe anemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 198.50
            },
            {
               "id": "MAX015",
               "name": "LipidMaxControl",
               "description": "Combination therapy for complex dyslipidemia management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 425.90
            },
            {
               "id": "MAX016",
               "name": "CephalCure",
               "description": "Specialized medication for cluster headaches and severe migraines.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 356.40
            },
            {
               "id": "MAX017",
               "name": "UroGuard Max",
               "description": "Broad-spectrum antibiotic for complicated urinary tract infections.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 278.90
            },
            {
               "id": "MAX018",
               "name": "HeartRegulate",
               "description": "Advanced treatment for complex cardiac arrhythmias.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 458.70
            },
            {
               "id": "MAX019",
               "name": "AnxietyShield",
               "description": "Next-generation anxiolytic with minimal side effects.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "MAX020",
               "name": "GastroMax",
               "description": "Comprehensive medication for inflammatory bowel disease.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 398.50
            },
            {
               "id": "MAX021",
               "name": "MaxiFolic",
               "description": "Advanced prenatal supplement with enhanced bioavailability.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 215.40
            },
            {
               "id": "MAX022",
               "name": "GlucoRegulate",
               "description": "Insulin sensitizer for complex diabetes cases.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 467.30
            },
            {
               "id": "MAX023",
               "name": "VisionMax",
               "description": "Advanced treatment for age-related macular degeneration.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 398.40
            },
            {
               "id": "MAX024",
               "name": "LiverRescue",
               "description": "Specialized medication for advanced liver cirrhosis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 478.90
            },
            {
               "id": "MAX025",
               "name": "NeuroMax",
               "description": "Treatment for neuropathic pain and peripheral neuropathy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 387.60
            }
         ]
      },
      {
         "name": "Cipla",
         "logo": "https://companieslogo.com/img/orig/CIPLA.NS_BIG-3b7d65fe.png?t=1601652636",
         "medicines": [
            {
               "id": "CPL001",
               "name": "Ciprafen",
               "description": "Broad-spectrum antipyretic and analgesic medication.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 120.50
            },
            {
               "id": "CPL002",
               "name": "Ciplar",
               "description": "Beta-blocker for hypertension and angina treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 245.80
            },
            {
               "id": "CPL003",
               "name": "Glynase",
               "description": "Sulfonylurea medication for type 2 diabetes.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 198.40
            },
            {
               "id": "CPL004",
               "name": "Duolin",
               "description": "Combination bronchodilator for asthma and COPD.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.90
            },
            {
               "id": "CPL005",
               "name": "Pantocid",
               "description": "Proton pump inhibitor for gastric ulcers and GERD.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 156.30
            },
            {
               "id": "CPL006",
               "name": "Trika",
               "description": "Anxiolytic for generalized anxiety disorder and panic attacks.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 178.50
            },
            {
               "id": "CPL007",
               "name": "Omnacortil",
               "description": "Corticosteroid for severe inflammation and autoimmune conditions.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 245.60
            },
            {
               "id": "CPL008",
               "name": "Calcimax",
               "description": "Calcium supplement with vitamin D3 for bone health.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 145.80
            },
            {
               "id": "CPL009",
               "name": "ImmunoCip",
               "description": "Immunomodulator for enhancing immune response.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 298.40
            },
            {
               "id": "CPL010",
               "name": "Zoprex",
               "description": "Hypnotic medication for insomnia treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 189.70
            },
            {
               "id": "CPL011",
               "name": "Montair",
               "description": "Leukotriene receptor antagonist for asthma and allergies.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 234.50
            },
            {
               "id": "CPL012",
               "name": "Thyronorm",
               "description": "Levothyroxine for hypothyroidism treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 167.80
            },
            {
               "id": "CPL013",
               "name": "Excela",
               "description": "Topical cream for atopic dermatitis and eczema.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 187.40
            },
            {
               "id": "CPL014",
               "name": "Ferronem",
               "description": "Iron supplement for iron deficiency anemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 125.60
            },
            {
               "id": "CPL015",
               "name": "Atorlip",
               "description": "Statin medication for hypercholesterolemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.90
            },
            {
               "id": "CPL016",
               "name": "Migrahalt",
               "description": "Medication for acute migraine attacks.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 234.50
            },
            {
               "id": "CPL017",
               "name": "Urobiotic",
               "description": "Antibiotic specifically for urinary tract infections.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 178.90
            },
            {
               "id": "CPL018",
               "name": "Cardivas",
               "description": "Calcium channel blocker for hypertension management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 289.40
            },
            {
               "id": "CPL019",
               "name": "Anxipar",
               "description": "Mild sedative for anxiety and stress management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 165.30
            },
            {
               "id": "CPL020",
               "name": "Irricon",
               "description": "Medication for irritable bowel syndrome and spastic colon.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 198.70
            },
            {
               "id": "CPL021",
               "name": "Pregnacip",
               "description": "Prenatal multivitamin for pregnant and nursing women.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 165.40
            },
            {
               "id": "CPL022",
               "name": "Glyciphage",
               "description": "Biguanide medication for type 2 diabetes.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 178.90
            },
            {
               "id": "CPL023",
               "name": "Ocucip",
               "description": "Ophthalmic solution for dry eyes and minor irritations.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 145.60
            },
            {
               "id": "CPL024",
               "name": "Hepcinat",
               "description": "Antiviral medication for hepatitis C treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1245.80
            },
            {
               "id": "CPL025",
               "name": "Relaxyl",
               "description": "Muscle relaxant for acute musculoskeletal pain.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 178.40
            }
         ]
      },
      {
         "name": "Dr. Reddy's",
         "logo": "https://biosimilarscouncil.org/wp-content/uploads/2017/03/Reddys.png",
         "medicines": [
            {
               "id": "DRR001",
               "name": "Reddyfever",
               "description": "Non-steroidal anti-inflammatory drug for fever and pain.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 125.40
            },
            {
               "id": "DRR002",
               "name": "Stamlo",
               "description": "Calcium channel blocker for hypertension and angina.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 236.70
            },
            {
               "id": "DRR003",
               "name": "Metsmall",
               "description": "Metformin preparation for type 2 diabetes management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 156.90
            },
            {
               "id": "DRR004",
               "name": "Omez",
               "description": "Proton pump inhibitor for acid reflux and ulcers.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 189.40
            },
            {
               "id": "DRR005",
               "name": "Nise",
               "description": "Analgesic and anti-inflammatory for joint pain relief.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 145.60
            },
            {
               "id": "DRR006",
               "name": "Razo",
               "description": "Proton pump inhibitor for gastroesophageal reflux disease.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 167.30
            },
            {
               "id": "DRR007",
               "name": "Atocor",
               "description": "Statin medication for cholesterol management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 278.90
            },
            {
               "id": "DRR008",
               "name": "Mintop",
               "description": "Topical solution for androgenetic alopecia treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "DRR009",
               "name": "Ocuflur",
               "description": "Ophthalmic solution for bacterial eye infections.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 178.40
            },
            {
               "id": "DRR010",
               "name": "Ketorol",
               "description": "Potent analgesic for moderate to severe pain.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 134.50
            },
            {
               "id": "DRR011",
               "name": "Cisplat",
               "description": "Chemotherapeutic agent for various cancer treatments.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 1890.70
            },
            {
               "id": "DRR012",
               "name": "Redoxin",
               "description": "Antioxidant supplement for overall wellness.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 156.30
            },
            {
               "id": "DRR013",
               "name": "Cutizone",
               "description": "Topical steroid for inflammatory skin conditions.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 198.40
            },
            {
               "id": "DRR014",
               "name": "HemoRed",
               "description": "Iron supplement with folic acid for anemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 145.60
            },
            {
               "id": "DRR015",
               "name": "Zunair",
               "description": "Antihistamine for allergic rhinitis and urticaria.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 167.80
            },
            {
               "id": "DRR016",
               "name": "Reclimet",
               "description": "Combination therapy for diabetes management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.90
            },
            {
               "id": "DRR017",
               "name": "Olmetrack",
               "description": "Angiotensin II receptor blocker for hypertension.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 289.60
            },
            {
               "id": "DRR018",
               "name": "Pantodac",
               "description": "Proton pump inhibitor for gastric acid reduction.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 156.30
            },
            {
               "id": "DRR019",
               "name": "Renerve",
               "description": "Supplement for nerve health and neuropathy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 198.40
            },
            {
               "id": "DRR020",
               "name": "Recoliv",
               "description": "Medication for liver protection and hepatic disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 245.70
            },
            {
               "id": "DRR021",
               "name": "Cresp",
               "description": "Erythropoiesis-stimulating agent for anemia in chronic kidney disease.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1245.60
            },
            {
               "id": "DRR022",
               "name": "Telmiday",
               "description": "Angiotensin receptor blocker for blood pressure control.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 267.90
            },
            {
               "id": "DRR023",
               "name": "Novaclop",
               "description": "Antiplatelet medication for preventing blood clots.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 378.50
            },
            {
               "id": "DRR024",
               "name": "Zedott",
               "description": "Antidepressant for major depressive disorder.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "DRR025",
               "name": "Pleofen",
               "description": "Anti-inflammatory medication for arthritis and joint pain.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 178.40
            }
         ]
      },
      {
         "name": "Medanta",
         "logo": "https://th.bing.com/th/id/OIP.UMvIW3ewwizSkDD5krR6lQAAAA?w=474&h=316&rs=1&pid=ImgDetMain",
         "medicines": [
            {
               "id": "MDT001",
               "name": "MedantaPyrin",
               "description": "Fast-acting antipyretic for fever management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 118.40
            },
            {
               "id": "MDT002",
               "name": "PressureTrol",
               "description": "Combination therapy for resistant hypertension.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.60
            },
            {
               "id": "MDT003",
               "name": "GlycoEase",
               "description": "DPP-4 inhibitor for type 2 diabetes management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 278.90
            },
            {
               "id": "MDT004",
               "name": "PulmoRelief",
               "description": "Anti-inflammatory inhaler for asthma control.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "MDT005",
               "name": "GastroBalance",
               "description": "Prokinetic agent for gastric motility disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 198.40
            },
            {
               "id": "MDT006",
               "name": "NeuroPeace",
               "description": "SNRI for depression and anxiety disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 289.60
            },
            {
               "id": "MDT007",
               "name": "ArthroSoothe",
               "description": "Topical analgesic for arthritis and joint pain.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 178.40
            },
            {
               "id": "MDT008",
               "name": "OsteoGuard",
               "description": "Medication to prevent bone loss in osteoporosis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.50
            },
            {
               "id": "MDT009",
               "name": "ImmunoForce",
               "description": "Immunomodulator for autoimmune conditions.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.80
            },
            {
               "id": "MDT010",
               "name": "SleepRite",
               "description": "Non-benzodiazepine hypnotic for insomnia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 234.50
            },
            {
               "id": "MDT011",
               "name": "RhinoClear",
               "description": "Combination therapy for allergic rhinitis and sinusitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 156.30
            },
            {
               "id": "MDT012",
               "name": "ThyroBalance",
               "description": "Thyroid medication for subclinical hypothyroidism.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 198.40
            },
            {
               "id": "MDT013",
               "name": "DermaCalm",
               "description": "Non-steroidal topical treatment for psoriasis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 234.50
            },
            {
               "id": "MDT014",
               "name": "HemoVital",
               "description": "Comprehensive iron supplement with vitamin C.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 145.60
            },
            {
               "id": "MDT015",
               "name": "CardioLipid",
               "description": "PCSK9 inhibitor for familial hypercholesterolemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1245.80
            },
            {
               "id": "MDT016",
               "name": "CephalRelief",
               "description": "Triptan medication for acute migraine treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 298.70
            },
            {
               "id": "MDT017",
               "name": "UrinoSan",
               "description": "Urinary antiseptic for recurrent UTIs.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 178.40
            },
            {
               "id": "MDT018",
               "name": "CardioRhythm",
               "description": "Anti-arrhythmic for atrial fibrillation.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.80
            },
            {
               "id": "MDT019",
               "name": "RelaxoMed",
               "description": "Herbal anxiolytic for generalized anxiety.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 156.30
            },
            {
               "id": "MDT020",
               "name": "IBSRelief",
               "description": "5-HT3 antagonist for irritable bowel syndrome.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 234.50
            },
            {
               "id": "MDT021",
               "name": "NataFolic",
               "description": "Methylfolate-based prenatal supplement.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 198.40
            },
            {
               "id": "MDT022",
               "name": "GlucoUniform",
               "description": "GLP-1 receptor agonist for diabetes management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1245.80
            },
            {
               "id": "MDT023",
               "name": "RetinoCare",
               "description": "Ophthalmic solution for diabetic retinopathy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "MDT024",
               "name": "HepatoShield",
               "description": "Medication for non-alcoholic fatty liver disease.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 456.80
            },
            {
               "id": "MDT025",
               "name": "NeuroEase",
               "description": "Gabapentinoid for neuropathic pain management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            }
         ]
      },
      {
         "name": "Sun Pharma",
         "logo": "https://www.pinclipart.com/picdir/big/331-3318355_pharma-clip-art.png",
         "medicines": [
            {
               "id": "SUN001",
               "name": "Fevarin",
               "description": "Antipyretic and analgesic for fever and pain relief.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 125.40
            },
            {
               "id": "SUN002",
               "name": "Cardiopril",
               "description": "ACE inhibitor for hypertension management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 234.50
            },
            {
               "id": "SUN003",
               "name": "Glimy",
               "description": "Sulfonylurea for type 2 diabetes treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 198.40
            },
            {
               "id": "SUN004",
               "name": "Asthalin",
               "description": "Bronchodilator for acute asthma attacks.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 145.60
            },
            {
               "id": "SUN005",
               "name": "Pantocid",
               "description": "PPI for treatment of peptic ulcer and GERD.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 167.30
            },
            {
               "id": "SUN006",
               "name": "Anxipax",
               "description": "Benzodiazepine for anxiety disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 189.70
            },
            {
               "id": "SUN007",
               "name": "Suniflam",
               "description": "NSAID for acute inflammatory conditions.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 145.60
            },
            {
               "id": "SUN008",
               "name": "Osteoshine",
               "description": "Vitamin D and calcium supplement for bone health.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 134.50
            },
            {
               "id": "SUN009",
               "name": "ImmunoSun",
               "description": "Immunostimulant for recurrent infections.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.90
            },
            {
               "id": "SUN010",
               "name": "Sleepwell",
               "description": "Melatonin receptor agonist for insomnia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 178.40
            },
            {
               "id": "SUN011",
               "name": "AllergySun",
               "description": "Second-generation antihistamine for allergies.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 156.30
            },
            {
               "id": "SUN012",
               "name": "ThyroSun",
               "description": "Synthetic thyroid hormone for hypothyroidism.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 167.80
            },
            {
               "id": "SUN013",
               "name": "DermaClear",
               "description": "Antifungal cream for fungal skin infections.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 189.40
            },
            {
               "id": "SUN014",
               "name": "Hemorich",
               "description": "Iron and B12 supplement for pernicious anemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 145.60
            },
            {
               "id": "SUN015",
               "name": "Suncol",
               "description": "Statin medication for cholesterol management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 256.80
            },
            {
               "id": "SUN016",
               "name": "Migrastat",
               "description": "CGRP receptor antagonist for migraine prevention.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 578.90
            },
            {
               "id": "SUN017",
               "name": "UroSun",
               "description": "Quinolone antibiotic for urinary tract infections.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 198.40
            },
            {
               "id": "SUN018",
               "name": "HeartBeat",
               "description": "Beta-blocker for cardiac arrhythmias.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 234.50
            },
            {
               "id": "SUN019",
               "name": "AnxioSoft",
               "description": "Serotonin modulator for anxiety and depression.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 298.70
            },
            {
               "id": "SUN020",
               "name": "GastroComfort",
               "description": "Medication for functional dyspepsia and bloating.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 156.30
            },
            {
               "id": "SUN021",
               "name": "MaternaSun",
               "description": "Comprehensive prenatal supplement with DHA.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 198.40
            },
            {
               "id": "SUN022",
               "name": "DiabeSun",
               "description": "SGLT2 inhibitor for type 2 diabetes.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 467.90
            },
            {
               "id": "SUN023",
               "name": "OptiCare",
               "description": "Artificial tears for dry eye syndrome.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 145.60
            },
            {
               "id": "SUN024",
               "name": "LiverGuard",
               "description": "Silymarin formulation for hepatoprotection.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 234.50
            },
            {
               "id": "SUN025",
               "name": "NeuroSun",
               "description": "Medication for diabetic peripheral neuropathy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 389.70
            }
         ]
      },
      {
         "name": "Biocon",
         "logo": "https://download.logo.wine/logo/Biocon/Biocon-Logo.wine.png",
         "medicines": [
            {
               "id": "BIO001",
               "name": "Febicon",
               "description": "Dual-action antipyretic and analgesic.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 134.50
            },
            {
               "id": "BIO002",
               "name": "Telmisat",
               "description": "Angiotensin II receptor blocker for hypertension.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 267.90
            },
            {
               "id": "BIO003",
               "name": "Insugen",
               "description": "Recombinant human insulin for diabetes.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 589.40
            },
            {
               "id": "BIO004",
               "name": "Asmonex",
               "description": "Inhaled corticosteroid for asthma prevention.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "BIO005",
               "name": "Pepzol",
               "description": "Proton pump inhibitor for gastric ulcers.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 178.40
            },
            {
               "id": "BIO006",
               "name": "NervoCalm",
               "description": "Novel anxiolytic for GAD treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 289.60
            },
            {
               "id": "BIO007",
               "name": "BioFlex",
               "description": "Biologic agent for rheumatoid arthritis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 2450.80
            },
            {
               "id": "BIO008",
               "name": "OsteoBios",
               "description": "Monoclonal antibody for osteoporosis treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 3670.50
            },
            {
               "id": "BIO009",
               "name": "ImmuGlobulin",
               "description": "Immunoglobulin therapy for immunodeficiency disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 5890.30
            },
            {
               "id": "BIO010",
               "name": "SleepBio",
               "description": "Orexin receptor antagonist for insomnia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 456.80
            },
            {
               "id": "BIO011",
               "name": "AllerFree",
               "description": "Monoclonal antibody for severe allergic conditions.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 4560.70
            },
            {
               "id": "BIO012",
               "name": "ThyroSense",
               "description": "Biosimilar thyroid hormone replacement.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "BIO013",
               "name": "PsoriaClear",
               "description": "Biologic therapy for moderate to severe psoriasis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 7890.50
            },
            {
               "id": "BIO014",
               "name": "Erythropoietin",
               "description": "Recombinant EPO for anemia in chronic kidney disease.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 2345.80
            },
            {
               "id": "BIO015",
               "name": "LipoStat",
               "description": "PCSK9 inhibitor for refractory hypercholesterolemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 4560.30
            },
            {
               "id": "BIO016",
               "name": "MigraStop",
               "description": "Monoclonal antibody for chronic migraine prevention.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 3890.40
            },
            {
               "id": "BIO017",
               "name": "BioAspar",
               "description": "Recombinant asparaginase for ALL treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 12450.70
            },
            {
               "id": "BIO018",
               "name": "CardioGen",
               "description": "Biologic therapy for heart failure management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 5670.80
            },
            {
               "id": "BIO019",
               "name": "AnxioNex",
               "description": "Novel biologic for treatment-resistant anxiety disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 4560.30
            },
            {
               "id": "BIO020",
               "name": "ColitiSense",
               "description": "Monoclonal antibody for ulcerative colitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 8790.60
            },
            {
               "id": "BIO021",
               "name": "FetoGen",
               "description": "Advanced prenatal formulation with bioavailable nutrients.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "BIO022",
               "name": "Basalog",
               "description": "Long-acting insulin analog for diabetes.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 896.40
            },
            {
               "id": "BIO023",
               "name": "RetinoBio",
               "description": "Anti-VEGF therapy for age-related macular degeneration.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 5670.80
            },
            {
               "id": "BIO024",
               "name": "HepatoGuard",
               "description": "Novel therapy for autoimmune hepatitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 4560.30
            },
            {
               "id": "BIO025",
               "name": "NeuroRepair",
               "description": "Neurotrophic factor for neurodegenerative disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 9870.50
            }
         ]
      },
      {
         "name": "Narayana Health",
         "logo": "https://noorahealth.org/wp-content/uploads/2022/03/NH-Logo.png",
         "medicines": [
            {
               "id": "NRH001",
               "name": "CardioSure",
               "description": "Beta-blocker for hypertension and heart failure.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 165.40
            },
            {
               "id": "NRH002",
               "name": "VascoGuard",
               "description": "Calcium channel blocker for coronary artery disease.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 245.70
            },
            {
               "id": "NRH003",
               "name": "GlucoTrol",
               "description": "Biguanide for type 2 diabetes management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 189.90
            },
            {
               "id": "NRH004",
               "name": "BroncoRelief",
               "description": "Leukotriene modifier for asthma prevention.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 298.60
            },
            {
               "id": "NRH005",
               "name": "GastroHeal",
               "description": "H2 receptor antagonist for peptic ulcers.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 178.30
            },
            {
               "id": "NRH006",
               "name": "CalmMinds",
               "description": "Selective serotonin reuptake inhibitor for depression.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 256.40
            },
            {
               "id": "NRH007",
               "name": "JointEase",
               "description": "COX-2 inhibitor for osteoarthritis management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.80
            },
            {
               "id": "NRH008",
               "name": "BoneStrong",
               "description": "Bisphosphonate for osteoporosis treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 467.50
            },
            {
               "id": "NRH009",
               "name": "ImmuneBoost",
               "description": "Immunomodulator for autoimmune disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 569.80
            },
            {
               "id": "NRH010",
               "name": "RestWell",
               "description": "Dual-action sleep aid for chronic insomnia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 234.60
            },
            {
               "id": "NRH011",
               "name": "AllerStop",
               "description": "Intranasal corticosteroid for allergic rhinitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 187.40
            },
            {
               "id": "NRH012",
               "name": "ThyroNorm",
               "description": "T4/T3 combination for hypothyroidism treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.30
            },
            {
               "id": "NRH013",
               "name": "DermaCalm",
               "description": "Calcineurin inhibitor for atopic dermatitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.70
            },
            {
               "id": "NRH014",
               "name": "HemoPure",
               "description": "Iron complex with B vitamins for iron deficiency anemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 198.40
            },
            {
               "id": "NRH015",
               "name": "LipidClear",
               "description": "Fibrate for mixed dyslipidemia management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 376.80
            },
            {
               "id": "NRH016",
               "name": "HeadRelief",
               "description": "Ergot alkaloid for cluster headache treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 287.50
            },
            {
               "id": "NRH017",
               "name": "UrinoSan",
               "description": "Fluoroquinolone for complicated UTIs.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 245.60
            },
            {
               "id": "NRH018",
               "name": "HeartShield",
               "description": "Antiarrhythmic for ventricular arrhythmias.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 578.90
            },
            {
               "id": "NRH019",
               "name": "MoodBalance",
               "description": "Mood stabilizer for bipolar disorder management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.30
            },
            {
               "id": "NRH020",
               "name": "DigestEase",
               "description": "Prokinetic agent for gastroparesis treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 198.70
            },
            {
               "id": "NRH021",
               "name": "PreNatal",
               "description": "Complete prenatal vitamin with choline and DHA.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 234.50
            },
            {
               "id": "NRH022",
               "name": "GlycMed",
               "description": "Alpha-glucosidase inhibitor for postprandial hyperglycemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.80
            },
            {
               "id": "NRH023",
               "name": "VisionClear",
               "description": "Prostaglandin analog for glaucoma treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.90
            },
            {
               "id": "NRH024",
               "name": "LiverDetox",
               "description": "Phospholipid complex for alcoholic liver disease.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 367.40
            },
            {
               "id": "NRH025",
               "name": "NeuroCare",
               "description": "Alpha-lipoic acid for diabetic neuropathy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 289.60
            }
         ]
      },
      {
         "name": "Zydus Cadila",
         "logo": "https://medicinespatentpool.org/uploads/2020/04/Zydus-Cadila.png",
         "medicines": [
            {
               "id": "ZYD001",
               "name": "ZyFever",
               "description": "Powerful antipyretic with extended-release formulation.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 145.30
            },
            {
               "id": "ZYD002",
               "name": "CardiZyd",
               "description": "ARB with thiazide diuretic for resistant hypertension.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 287.60
            },
            {
               "id": "ZYD003",
               "name": "GlucoZyd",
               "description": "Novel SGLT2 inhibitor for type 2 diabetes.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 376.90
            },
            {
               "id": "ZYD004",
               "name": "RespiZyd",
               "description": "Long-acting muscarinic antagonist for COPD.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.80
            },
            {
               "id": "ZYD005",
               "name": "GastroZyd",
               "description": "P-CAB for acid-related disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 245.70
            },
            {
               "id": "ZYD006",
               "name": "NeuroZyd",
               "description": "Multimodal antidepressant for MDD.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.60
            },
            {
               "id": "ZYD007",
               "name": "ArthroZyd",
               "description": "NSAID with gastroprotective coating.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 198.40
            },
            {
               "id": "ZYD008",
               "name": "OsteoZyd",
               "description": "Parathyroid hormone analog for severe osteoporosis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 678.90
            },
            {
               "id": "ZYD009",
               "name": "ImmuZyd",
               "description": "TNF alpha inhibitor for rheumatoid arthritis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1345.60
            },
            {
               "id": "ZYD010",
               "name": "SleepZyd",
               "description": "Dual orexin receptor antagonist for insomnia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.70
            },
            {
               "id": "ZYD011",
               "name": "AllerZyd",
               "description": "Non-sedating antihistamine with nasal decongestant.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 178.90
            },
            {
               "id": "ZYD012",
               "name": "ThyroZyd",
               "description": "Sustained-release T4 formulation for hypothyroidism.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 256.80
            },
            {
               "id": "ZYD013",
               "name": "DermaZyd",
               "description": "JAK inhibitor for severe eczema.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 678.90
            },
            {
               "id": "ZYD014",
               "name": "HemoZyd",
               "description": "Heme iron polypeptide for iron deficiency.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 245.60
            },
            {
               "id": "ZYD015",
               "name": "LipidZyd",
               "description": "Combination therapy for mixed dyslipidemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.70
            },
            {
               "id": "ZYD016",
               "name": "MigraZyd",
               "description": "5-HT1F receptor agonist for acute migraine.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.80
            },
            {
               "id": "ZYD017",
               "name": "UroZyd",
               "description": "Beta-3 adrenergic agonist for overactive bladder.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.60
            },
            {
               "id": "ZYD018",
               "name": "CardioRhythm",
               "description": "Novel anticoagulant for atrial fibrillation.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 567.80
            },
            {
               "id": "ZYD019",
               "name": "PsychZyd",
               "description": "Atypical antipsychotic for schizophrenia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.70
            },
            {
               "id": "ZYD020",
               "name": "GastroMotil",
               "description": "5-HT4 receptor agonist for IBS-C.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 387.60
            },
            {
               "id": "ZYD021",
               "name": "NatalZyd",
               "description": "Prescription prenatal with enhanced folate.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.50
            },
            {
               "id": "ZYD022",
               "name": "DiabetZyd",
               "description": "GLP-1/GIP dual agonist for type 2 diabetes.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1456.80
            },
            {
               "id": "ZYD023",
               "name": "OptiZyd",
               "description": "Preservative-free glaucoma medication.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 367.50
            },
            {
               "id": "ZYD024",
               "name": "HepatoZyd",
               "description": "Antifibrotic for NASH treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 789.60
            },
            {
               "id": "ZYD025",
               "name": "NeuroZydex",
               "description": "Sodium channel blocker for neuropathic pain.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.80
            }
         ]
      },
      {
         "name": "HCG Oncology",
         "logo": "https://www.freshersnow.com/wp-content/uploads/2018/08/HealthCare-Global.png",
         "medicines": [
            {
               "id": "HCG001",
               "name": "OncoRelief",
               "description": "Supportive care analgesic for cancer-related pain.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 356.40
            },
            {
               "id": "HCG002",
               "name": "CardioProtect",
               "description": "Cardioprotective agent for anthracycline chemotherapy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1567.80
            },
            {
               "id": "HCG003",
               "name": "GlucoBalance",
               "description": "Glucose management for steroid-induced hyperglycemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 456.70
            },
            {
               "id": "HCG004",
               "name": "RespiCare",
               "description": "Pulmonary protectant for radiation pneumonitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 789.60
            },
            {
               "id": "HCG005",
               "name": "GastroGuard",
               "description": "Specialized antiemetic for chemotherapy-induced nausea.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 678.90
            },
            {
               "id": "HCG006",
               "name": "NeuroShield",
               "description": "Neuroprotective agent for chemotherapy-induced neuropathy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 1234.50
            },
            {
               "id": "HCG007",
               "name": "ArthroEase",
               "description": "NSAID formulated for cancer patients with joint pain.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "HCG008",
               "name": "OsteoCare",
               "description": "Bone-targeted therapy for skeletal metastases.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 2345.60
            },
            {
               "id": "HCG009",
               "name": "ImmunoBoost",
               "description": "Immunomodulator for cancer-related immunosuppression.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1456.80
            },
            {
               "id": "HCG010",
               "name": "SleepWell",
               "description": "Non-habit forming sleep aid for cancer patients.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 567.80
            },
            {
               "id": "HCG011",
               "name": "DermaRelief",
               "description": "Topical treatment for radiation dermatitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.70
            },
            {
               "id": "HCG012",
               "name": "ThyroBalance",
               "description": "Thyroid support for head and neck radiation patients.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 678.90
            },
            {
               "id": "HCG013",
               "name": "HydroSkin",
               "description": "Intensive moisturizer for xerosis during cancer treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.60
            },
            {
               "id": "HCG014",
               "name": "HemoStrong",
               "description": "Colony-stimulating factor for chemotherapy-induced neutropenia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 4567.80
            },
            {
               "id": "HCG015",
               "name": "LipidNorm",
               "description": "Lipid profile management for hormone therapy patients.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 678.90
            },
            {
               "id": "HCG016",
               "name": "NeuroCalm",
               "description": "Treatment for chemotherapy-related cognitive impairment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1234.50
            },
            {
               "id": "HCG017",
               "name": "UroProtect",
               "description": "Cytoprotectant for hemorrhagic cystitis prevention.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 1567.80
            },
            {
               "id": "HCG018",
               "name": "CardioFort",
               "description": "Heart function support during cancer treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 987.60
            },
            {
               "id": "HCG019",
               "name": "AnxioCalm",
               "description": "Non-sedating anxiolytic for cancer patients.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 678.90
            },
            {
               "id": "HCG020",
               "name": "NutriGI",
               "description": "Specialized nutritional supplement for GI cancer patients.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 789.60
            },
            {
               "id": "HCG021",
               "name": "FertiPreserve",
               "description": "Fertility preservation medication during cancer treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 3456.70
            },
            {
               "id": "HCG022",
               "name": "GlucoSafe",
               "description": "Anti-hyperglycemic optimized for cancer patients.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 567.80
            },
            {
               "id": "HCG023",
               "name": "OcuProtect",
               "description": "Eye protection formula for radiation patients.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.70
            },
            {
               "id": "HCG024",
               "name": "HepatoGuard",
               "description": "Liver protectant during chemotherapy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 1234.50
            },
            {
               "id": "HCG025",
               "name": "NerveShield",
               "description": "Comprehensive neuroprotective for cancer treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1567.80
            }
         ]
      },
      {
         "name": "Glenmark",
         "logo": "https://seekvectors.com/files/download/Glenmark-01.png",
         "medicines": [
            {
               "id": "GLN001",
               "name": "GlenPyrin",
               "description": "Combination antipyretic and decongestant.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 156.40
            },
            {
               "id": "GLN002",
               "name": "GlenHeart",
               "description": "Fixed-dose combination for hypertension.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 267.80
            },
            {
               "id": "GLN003",
               "name": "GlenSugar",
               "description": "Extended-release metformin formulation.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 245.70
            },
            {
               "id": "GLN004",
               "name": "GlenBreath",
               "description": "Triple therapy inhaler for severe COPD.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 789.60
            },
            {
               "id": "GLN005",
               "name": "GlenGut",
               "description": "Novel therapy for IBS-D with antispasmodic action.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 354.50
            },
            {
               "id": "GLN006",
               "name": "GlenMood",
               "description": "Novel antidepressant with improved side effect profile.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 456.70
            },
            {
               "id": "GLN007",
               "name": "GlenFlex",
               "description": "Topical NSAID gel with enhanced penetration.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 198.40
            },
            {
               "id": "GLN008",
               "name": "GlenBone",
               "description": "Once-monthly osteoporosis treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.70
            },
            {
               "id": "GLN009",
               "name": "GlenImmune",
               "description": "Specialized immune booster for the elderly.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "GLN010",
               "name": "GlenRest",
               "description": "Sleep aid with minimal morning grogginess.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 267.50
            },
            {
               "id": "GLN011",
               "name": "GlenAllergy",
               "description": "24-hour antihistamine with decongestant.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 187.40
            },
            {
               "id": "GLN012",
               "name": "GlenThyroid",
               "description": "Combination T3/T4 thyroid support.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 256.30
            },
            {
               "id": "GLN013",
               "name": "GlenDerm",
               "description": "Non-steroidal anti-inflammatory for psoriasis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.60
            },
            {
               "id": "GLN014",
               "name": "GlenFerro",
               "description": "Sustained-release iron supplement with vitamin C.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 156.70
            },
            {
               "id": "GLN015",
               "name": "GlenLipid",
               "description": "Triple therapy for complex dyslipidemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 654.30
            },
            {
               "id": "GLN016",
               "name": "GlenHead",
               "description": "Fast-acting migraine relief with antiemetic.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.80
            },
            {
               "id": "GLN017",
               "name": "GlenUTI",
               "description": "Long-acting urinary antiseptic with analgesic.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 187.60
            },
            {
               "id": "GLN018",
               "name": "GlenRhythm",
               "description": "Innovative antiarrhythmic with reduced side effects.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 567.80
            },
            {
               "id": "GLN019",
               "name": "GlenMind",
               "description": "Cognitive enhancer for mild cognitive impairment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 378.50
            },
            {
               "id": "GLN020",
               "name": "GlenDigest",
               "description": "Comprehensive digestive enzyme blend.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 245.60
            },
            {
               "id": "GLN021",
               "name": "GlenMater",
               "description": "Complete prenatal with morning sickness management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.70
            },
            {
               "id": "GLN022",
               "name": "GlenGluco",
               "description": "Next-generation insulin sensitizer.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 567.80
            },
            {
               "id": "GLN023",
               "name": "GlenSight",
               "description": "Combination eye drop for dry eye syndrome.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.40
            },
            {
               "id": "GLN024",
               "name": "GlenLiver",
               "description": "Hepatoprotective with detoxification support.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 456.70
            },
            {
               "id": "GLN025",
               "name": "GlenNerve",
               "description": "Targeted therapy for painful diabetic neuropathy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 678.90
            }
         ]
      },
      {
         "name": "Ranbaxy",
         "logo": "https://th.bing.com/th/id/OIP.-Qd8MnDagTAAtF8swPWA6wAAAA?w=474&h=320&rs=1&pid=ImgDetMain",
         "medicines": [
            {
               "id": "RBX001",
               "name": "FeverBan",
               "description": "Dual-action fever reducer with extended release.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 156.40
            },
            {
               "id": "RBX002",
               "name": "CardioRan",
               "description": "ACE inhibitor with potassium-sparing diuretic.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 276.80
            },
            {
               "id": "RBX003",
               "name": "GlucoRan",
               "description": "Insulin sensitizer with alpha-glucosidase inhibition.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.70
            },
            {
               "id": "RBX004",
               "name": "BroncoRan",
               "description": "Combination bronchodilator with anti-inflammatory.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.80
            },
            {
               "id": "RBX005",
               "name": "GastroRan",
               "description": "Advanced PPI with mucosal protective agent.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 245.60
            },
            {
               "id": "RBX006",
               "name": "NeuroRan",
               "description": "Fast-acting SNRI for depression and anxiety.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 367.80
            },
            {
               "id": "RBX007",
               "name": "JointRan",
               "description": "Extended-release analgesic for osteoarthritis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 287.50
            },
            {
               "id": "RBX008",
               "name": "OsteoRan",
               "description": "RANKL inhibitor for severe osteoporosis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 789.60
            },
            {
               "id": "RBX009",
               "name": "ImmunoRan",
               "description": "Biological response modifier for autoimmune disorders.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1245.70
            },
            {
               "id": "RBX010",
               "name": "SleepRan",
               "description": "Targeted melatonin receptor agonist for insomnia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 234.50
            },
            {
               "id": "RBX011",
               "name": "AllerRan",
               "description": "Third-generation antihistamine with mast cell stabilizer.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 187.60
            },
            {
               "id": "RBX012",
               "name": "ThyroRan",
               "description": "Bioidentical thyroid replacement therapy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 245.60
            },
            {
               "id": "RBX013",
               "name": "DermaRan",
               "description": "Novel biologics for severe psoriasis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 678.90
            },
            {
               "id": "RBX014",
               "name": "HemoRan",
               "description": "Oral iron chelator for chronic iron overload.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "RBX015",
               "name": "LipidRan",
               "description": "PCSK9 inhibitor for familial hypercholesterolemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 876.50
            },
            {
               "id": "RBX016",
               "name": "MigraRan",
               "description": "CGRP receptor antagonist for migraine prevention.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 567.80
            },
            {
               "id": "RBX017",
               "name": "UroRan",
               "description": "Anticholinergic with dual mechanism for OAB.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.60
            },
            {
               "id": "RBX018",
               "name": "CardioRanPlus",
               "description": "Novel potassium channel activator for angina.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.70
            },
            {
               "id": "RBX019",
               "name": "PsychoRan",
               "description": "D3/5-HT2A receptor modulator for bipolar disorder.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 567.80
            },
            {
               "id": "RBX020",
               "name": "GutRan",
               "description": "Targeted probiotic for IBD management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 267.40
            },
            {
               "id": "RBX021",
               "name": "PregnRan",
               "description": "Specialized prenatal with ginger for morning sickness.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "RBX022",
               "name": "DiabeRanXL",
               "description": "Once-weekly GLP-1 analog for diabetes.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1245.60
            },
            {
               "id": "RBX023",
               "name": "OpticalRan",
               "description": "Rho kinase inhibitor for open-angle glaucoma.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.70
            },
            {
               "id": "RBX024",
               "name": "LiverRan",
               "description": "Essential phospholipid complex for fatty liver disease.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.60
            },
            {
               "id": "RBX025",
               "name": "NeuropathRan",
               "description": "Dual sodium/calcium channel modulator for neuropathic pain.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 678.90
            }
         ]
      },
      {
         "name": "Aster Healthcare",
         "logo": "https://www.pngkit.com/png/full/336-3365629_recent-posts-aster-dm-healthcare-logo.png",
         "medicines": [
            {
               "id": "AST001",
               "name": "AsterFever",
               "description": "Triple-action fever and pain management formula.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 178.50
            },
            {
               "id": "AST002",
               "name": "AsterHeart",
               "description": "Next-generation beta-blocker with vasodilating properties.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.70
            },
            {
               "id": "AST003",
               "name": "AsterGlucose",
               "description": "Smart insulin formulation for type 1 diabetes.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 789.60
            },
            {
               "id": "AST004",
               "name": "AsterLung",
               "description": "Ultra-long-acting bronchodilator for COPD.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 567.80
            },
            {
               "id": "AST005",
               "name": "AsterAcid",
               "description": "Advanced acid suppression therapy with gastroprotection.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.40
            },
            {
               "id": "AST006",
               "name": "AsterMood",
               "description": "Triple-action antidepressant for treatment-resistant depression.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 456.70
            },
            {
               "id": "AST007",
               "name": "AsterJoint",
               "description": "Targeted anti-inflammatory for rheumatoid arthritis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 678.90
            },
            {
               "id": "AST008",
               "name": "AsterBone",
               "description": "Anabolic bone-forming agent for severe osteoporosis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1267.80
            },
            {
               "id": "AST009",
               "name": "AsterImmune",
               "description": "Precision immunomodulator for multiple sclerosis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 2345.60
            },
            {
               "id": "AST010",
               "name": "AsterSleep",
               "description": "Orexin antagonist for chronic insomnia disorder.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 456.70
            },
            {
               "id": "AST011",
               "name": "AsterAllergy",
               "description": "Biologic therapy for severe allergic asthma.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1456.80
            },
            {
               "id": "AST012",
               "name": "AsterThyroid",
               "description": "Precision-dose thyroid formulation with T3/T4 optimization.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "AST013",
               "name": "AsterSkin",
               "description": "IL-23 inhibitor for moderate to severe psoriasis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 1789.50
            },
            {
               "id": "AST014",
               "name": "AsterBlood",
               "description": "Novel erythropoiesis stimulator for CKD-related anemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 2345.60
            },
            {
               "id": "AST015",
               "name": "AsterLipid",
               "description": "ATP citrate lyase inhibitor for statin-resistant dyslipidemia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 876.50
            },
            {
               "id": "AST016",
               "name": "AsterHead",
               "description": "Small molecule CGRP antagonist for acute migraine.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 543.20
            },
            {
               "id": "AST017",
               "name": "AsterUrology",
               "description": "TRPV4 antagonist for overactive bladder syndrome.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 567.80
            },
            {
               "id": "AST018",
               "name": "AsterRhythm",
               "description": "IF channel inhibitor for heart failure with preserved ejection fraction.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 987.60
            },
            {
               "id": "AST019",
               "name": "AsterPsych",
               "description": "Trace amine receptor modulator for schizophrenia.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1234.50
            },
            {
               "id": "AST020",
               "name": "AsterGut",
               "description": "Gut-selective anti-inflammatory for ulcerative colitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 1567.80
            },
            {
               "id": "AST021",
               "name": "AsterPregnancy",
               "description": "Comprehensive prenatal with specialized neural tube support.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.70
            },
            {
               "id": "AST022",
               "name": "AsterMetabolic",
               "description": "Triple agonist for obesity and metabolic syndrome.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1789.50
            },
            {
               "id": "AST023",
               "name": "AsterVision",
               "description": "Complement inhibitor for geographic atrophy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 2345.60
            },
            {
               "id": "AST024",
               "name": "AsterLiver",
               "description": "FXR agonist for NASH treatment.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 1678.90
            },
            {
               "id": "AST025",
               "name": "AsterNerve",
               "description": "Nav1.7 inhibitor for refractory neuropathic pain.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1456.80
            }
         ]
      },
      {
         "name": "Wockhardt",
         "logo": "https://www.wockhardt.com/wp-content/uploads/2023/03/Wockhardt-55-years-png-logo.png",
         "medicines": [
            {
               "id": "WCK001",
               "name": "WockFever",
               "description": "Multi-symptom fever and cold relief.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 156.40
            },
            {
               "id": "WCK002",
               "name": "WockHeart",
               "description": "Novel ARNI for heart failure management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 987.60
            },
            {
               "id": "WCK003",
               "name": "WockSugar",
               "description": "Triple-action oral hypoglycemic agent.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 567.80
            },
            {
               "id": "WCK004",
               "name": "WockBreath",
               "description": "Next-generation inhaled corticosteroid with reduced systemic absorption.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 678.90
            },
            {
               "id": "WCK005",
               "name": "WockAcid",
               "description": "Acid reducer with mucosal healing properties.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "WCK006",
               "name": "WockNeuro",
               "description": "Fast-onset antidepressant with glutamatergic modulation.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 789.60
            },
            {
               "id": "WCK007",
               "name": "WockJoint",
               "description": "Injectable hyaluronic acid with chondroitin complex.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1234.50
            },
            {
               "id": "WCK008",
               "name": "WockBone",
               "description": "Dual-action bone anabolic and antiresorptive therapy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1567.80
            },
            {
               "id": "WCK009",
               "name": "WockImmune",
               "description": "Precision immunotherapy for Crohn's disease.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 2345.60
            },
            {
               "id": "WCK010",
               "name": "WockSleep",
               "description": "Melatonin receptor agonist with extended release.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 456.70
            },
            {
               "id": "WCK011",
               "name": "WockAllergy",
               "description": "Combination antihistamine with leukotriene modifier.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 267.40
            },
            {
               "id": "WCK012",
               "name": "WockThyroid",
               "description": "Extended-release T4 for stable thyroid levels.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "WCK013",
               "name": "WockDerm",
               "description": "PDE4 inhibitor for atopic dermatitis.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 789.60
            },
            {
               "id": "WCK014",
               "name": "WockBlood",
               "description": "Iron carboxymaltose for rapid iron repletion.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 678.90
            },
            {
               "id": "WCK015",
               "name": "WockLipid",
               "description": "Bempedoic acid for statin-intolerant patients.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 567.80
            },
            {
               "id": "WCK016",
               "name": "WockMigraine",
               "description": "Ditans for acute migraine with triptan contraindications.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 456.70
            },
            {
               "id": "WCK017",
               "name": "WockBladder",
               "description": "M3 selective antimuscarinic for OAB with reduced CNS effects.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 345.60
            },
            {
               "id": "WCK018",
               "name": "WockCardioPlus",
               "description": "SGLT2 inhibitor with cardioprotective benefits.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 789.60
            },
            {
               "id": "WCK019",
               "name": "WockBrain",
               "description": "Cognitive enhancer for Alzheimer's disease.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1234.50
            },
            {
               "id": "WCK020",
               "name": "WockDigest",
               "description": "Specialized enzyme therapy for pancreatic insufficiency.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 567.80
            },
            {
               "id": "WCK021",
               "name": "WockMaternity",
               "description": "Comprehensive prenatal with DHA and choline.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 345.60
            },
            {
               "id": "WCK022",
               "name": "WockDiabetes",
               "description": "Amylin analog for type 1 diabetes management.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1456.80
            },
            {
               "id": "WCK023",
               "name": "WockEye",
               "description": "Neuroprotective therapy for diabetic retinopathy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 789.60
            },
            {
               "id": "WCK024",
               "name": "WockLiver",
               "description": "Hepatic copper chelator for Wilson's disease.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": false,
               "price": 1567.80
            },
            {
               "id": "WCK025",
               "name": "WockNeuropathy",
               "description": "Selective NaV blocker for refractory peripheral neuropathy.",
               "imageUrl": Images[Math.floor(Math.random() * Images.length)],
               "inStock": true,
               "price": 1234.50
            }
         ]
      }
   ]
   }
   
   // const randomCategory = Math.ceil(Math.random() * allMedicines.brandsWithMedicines.length);
   // const { medicines } = allMedicines.brandsWithMedicines[randomCategory];
   const { medicines } =
      brandNum !== undefined && allMedicines.brandsWithMedicines[brandNum]
         ? allMedicines.brandsWithMedicines[brandNum]
         : { medicines: [] };

   return (
      <>
         <h2 className="capitalize tracking-wider text-center py-4 border-b-6 border-gray-300 font-bold text-3xl text-gray-800 m-10">
            {!brandNum && brandNum !== 0
               ? "Please Select a Brand Above To See Its Medicines"
               : allMedicines.brandsWithMedicines[brandNum].name + " Medicines..."}
         </h2>
         <Medicine medicines={medicines} handleAddToCart={handleAddToCart} handleOrder={handleOrder} />
      </>
   );
}

export default BrandMedicine
