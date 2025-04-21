import React, { useState } from "react";
import {
   MessageSquare,
   User,
   UserCheck,
   Send,
   Phone,
   Video,
   Paperclip,
   MoreVertical,
   Search,
   ArrowLeft,
   Calendar,
   Clock,
   Bell,
   Settings,
   Clipboard,
   Shield,
   Heart,
   Activity,
   FileText,
   Info,
} from "lucide-react";

const HealthcareChat = () => {
   const [activeUserType, setActiveUserType] = useState("patients");
   const [activeChat, setActiveChat] = useState(null);
   const [message, setMessage] = useState("");

   // Color schemes for each user type
   const colorSchemes = {
      patients: {
         primary: "bg-blue-500",
         light: "bg-blue-100",
         hover: "bg-blue-50",
         active: "bg-blue-100",
         text: "text-blue-600",
         border: "border-blue-600",
      },
      nurses: {
         primary: "bg-purple-500",
         light: "bg-purple-100",
         hover: "bg-purple-50",
         active: "bg-purple-100",
         text: "text-purple-600",
         border: "border-purple-600",
      },
      doctors: {
         primary: "bg-green-500",
         light: "bg-green-100",
         hover: "bg-green-50",
         active: "bg-green-100",
         text: "text-green-600",
         border: "border-green-600",
      },
   };

   // Get current color scheme
   const currentScheme = colorSchemes[activeUserType];

   // Sample data for each user type
   const userData = {
      patients: [
         {
            id: 1,
            name: "John Smith",
            avatar: "👨",
            lastMessage: "When should I take my medication?",
            time: "10:30 AM",
            unread: 2,
            status: "online",
         },
         {
            id: 2,
            name: "Sarah Johnson",
            avatar: "👩",
            lastMessage: "I need to reschedule my appointment",
            time: "9:15 AM",
            unread: 0,
            status: "offline",
         },
         {
            id: 3,
            name: "Michael Brown",
            avatar: "👨",
            lastMessage: "Are there any side effects?",
            time: "Yesterday",
            unread: 1,
            status: "away",
         },
         {
            id: 4,
            name: "Emma Davis",
            avatar: "👩",
            lastMessage: "Thank you for your help",
            time: "Yesterday",
            unread: 0,
            status: "online",
         },
         {
            id: 5,
            name: "Olivia Wilson",
            avatar: "👩",
            lastMessage: "I need to reschedule my appointment",
            time: "Yesterday",
            unread: 0,
            status: "online",
         },
      ],
      nurses: [
         {
            id: 1,
            name: "Nurse Wilson",
            avatar: "👩‍⚕️",
            lastMessage: "Patient in Room 302 needs assistance",
            time: "11:45 AM",
            unread: 3,
            status: "online",
         },
         {
            id: 2,
            name: "Nurse Garcia",
            avatar: "👨‍⚕️",
            lastMessage: "Medication administered to Mr. Johnson",
            time: "8:20 AM",
            unread: 0,
            status: "online",
         },
         {
            id: 3,
            name: "Nurse Chen",
            avatar: "👩‍⚕️",
            lastMessage: "Lab results are ready",
            time: "Yesterday",
            unread: 0,
            status: "away",
         },
         {
            id: 4,
            name: "Nurse Thompson",
            avatar: "👨‍⚕️",
            lastMessage: "Shift change update",
            time: "Yesterday",
            unread: 2,
            status: "offline",
         },
         {
            id: 5,
            name: "Olivia Wilson",
            avatar: "👩",
            lastMessage: "I need to reschedule my appointment",
            time: "Yesterday",
            unread: 0,
            status: "online",
         }
      ],
      doctors: [
         {
            id: 1,
            name: "Dr. Williams",
            avatar: "👨‍⚕️",
            lastMessage: "Updated treatment plan attached",
            time: "12:05 PM",
            unread: 1,
            status: "online",
         },
         {
            id: 2,
            name: "Dr. Rodriguez",
            avatar: "👩‍⚕️",
            lastMessage: "Please review the latest lab work",
            time: "9:30 AM",
            unread: 4,
            status: "online",
         },
         {
            id: 3,
            name: "Dr. Patel",
            avatar: "👨‍⚕️",
            lastMessage: "Conference call at 3 PM today",
            time: "Yesterday",
            unread: 0,
            status: "away",
         },
         {
            id: 4,
            name: "Dr. Kim",
            avatar: "👩‍⚕️",
            lastMessage: "Patient discharge instructions",
            time: "Yesterday",
            unread: 0,
            status: "offline",
         },
         {
            id: 5,
            name: "Dr. Olivia Wilson",
            avatar: "👩",
            lastMessage: "I need to reschedule my appointment",
            time: "Yesterday",
            unread: 0,
            status: "online",
         }
      ],
   };

   // Sample messages for all user types

   const defaultMessages = {
      patients: {
         1: [
            {
               id: 1,
               sender: "user",
               text: "Hello doctor, I have a question about my prescription",
               time: "10:15 AM",
            },
            {
               id: 2,
               sender: "me",
               text: "Of course, how can I help you today?",
               time: "10:20 AM",
            },
            {
               id: 3,
               sender: "user",
               text: "When should I take my medication?",
               time: "10:30 AM",
            },
            {
               id: 4,
               sender: "me",
               text: "Your antibiotic should be taken twice daily with food. Is that the medication you're referring to?",
               time: "10:35 AM",
            },
            {
               id: 5,
               sender: "user",
               text: "Yes, and also the pain medication. Should I take them together?",
               time: "10:40 AM",
            },
            {
               id: 6,
               sender: "me",
               text: "The pain medication can be taken every 6 hours as needed, but not more than 4 times daily. You can take it with the antibiotic if the timing aligns.",
               time: "10:45 AM",
            },
            {
               id: 7,
               sender: "user",
               text: "I'm also experiencing some stomach discomfort after taking the antibiotic.",
               time: "10:50 AM",
            },
            {
               id: 8,
               sender: "me",
               text: "That can happen with antibiotics. Try taking it with a full meal rather than a light snack. If the discomfort is severe or continues, please let me know.",
               time: "10:55 AM",
            },
            {
               id: 9,
               sender: "user",
               text: "Thank you, that's helpful. Should I complete the full course even if I feel better?",
               time: "11:00 AM",
            },
            {
               id: 10,
               sender: "me",
               text: "Yes, absolutely. It's essential to complete the entire course of antibiotics even if your symptoms improve. Stopping early can lead to recurring infection or antibiotic resistance.",
               time: "11:05 AM",
            },
         ],
         2: [
            {
               id: 1,
               sender: "user",
               text: "I've been experiencing severe headaches lately",
               time: "11:05 AM",
            },
            {
               id: 2,
               sender: "me",
               text: "I'm sorry to hear that. How long have you been having these headaches?",
               time: "11:08 AM",
            },
            {
               id: 3,
               sender: "user",
               text: "For about two weeks now, and they're getting worse",
               time: "11:15 AM",
            },
         ],
         3: [
            {
               id: 1,
               sender: "user",
               text: "Do I need to fast before my blood test tomorrow?",
               time: "2:30 PM",
            },
            {
               id: 2,
               sender: "me",
               text: "Yes, please fast for at least 8 hours before your appointment. Water is fine though.",
               time: "2:35 PM",
            },
            {
               id: 3,
               sender: "user",
               text: "Thank you, I'll make sure to do that",
               time: "2:40 PM",
            },
            {
               id: 4,
               sender: "me",
               text: "Great. Is your appointment in the morning or afternoon tomorrow?",
               time: "2:45 PM",
            },
            {
               id: 5,
               sender: "user",
               text: "It's at 9:30 AM. So I should stop eating after midnight?",
               time: "2:50 PM",
            },
            {
               id: 6,
               sender: "me",
               text: "Yes, that would be perfect. No food after midnight, but please stay hydrated with water.",
               time: "2:55 PM",
            },
            {
               id: 7,
               sender: "user",
               text: "Can I take my regular medications in the morning?",
               time: "3:00 PM",
            },
            {
               id: 8,
               sender: "me",
               text: "You can take most medications with a small sip of water, but hold off on any diabetes medications until after the test. Which medications are you currently taking?",
               time: "3:05 PM",
            },
            {
               id: 9,
               sender: "user",
               text: "I take lisinopril for blood pressure and a daily vitamin.",
               time: "3:10 PM",
            },
            {
               id: 10,
               sender: "me",
               text: "You can take the lisinopril with a small sip of water, but please skip the vitamin until after your blood work is complete. The vitamin could potentially affect certain test results.",
               time: "3:15 PM",
            },
         ],
         4: [
            {
               id: 1,
               sender: "user",
               text: "My knee pain is back again after physical therapy",
               time: "4:10 PM",
            },
            {
               id: 2,
               sender: "me",
               text: "I'm sorry to hear that. Can you describe the pain and when it occurs?",
               time: "4:15 PM",
            },
            {
               id: 3,
               sender: "user",
               text: "It hurts when I climb stairs or walk for longer than 10 minutes",
               time: "4:22 PM",
            },
         ],
         5: [
            {
               id: 1,
               sender: "user",
               text: "Is it normal to feel dizzy after taking the new medication?",
               time: "9:45 AM",
            },
            {
               id: 2,
               sender: "me",
               text: "Some dizziness can be a side effect. How severe is it and when does it occur?",
               time: "9:50 AM",
            },
            {
               id: 3,
               sender: "user",
               text: "It happens about an hour after taking it and lasts for 30 minutes",
               time: "9:55 AM",
            },
            {
               id: 4,
               sender: "me",
               text: "That timing does align with when the medication reaches peak levels in your system. Is the dizziness mild or severe enough that you need to sit down?",
               time: "10:00 AM",
            },
            {
               id: 5,
               sender: "user",
               text: "It's moderate - I don't need to lie down, but I definitely feel unsteady when walking.",
               time: "10:05 AM",
            },
            {
               id: 6,
               sender: "me",
               text: "I suggest taking the medication right before bedtime instead, which might allow you to sleep through the worst of the side effects. Are you able to shift your dosing schedule?",
               time: "10:10 AM",
            },
            {
               id: 7,
               sender: "user",
               text: "Yes, I can try that. Will the dizziness side effect diminish over time?",
               time: "10:15 AM",
            },
            {
               id: 8,
               sender: "me",
               text: "Many patients do find that side effects like dizziness subside after the first 1-2 weeks as your body adjusts to the medication. If it doesn't improve or worsens, we may need to consider alternatives.",
               time: "10:20 AM",
            },
            {
               id: 9,
               sender: "user",
               text: "Should I be concerned about driving while on this medication?",
               time: "10:25 AM",
            },
            {
               id: 10,
               sender: "me",
               text: "Given the dizziness you're experiencing, I would recommend avoiding driving for at least 2 hours after taking the medication. Once we see if the bedtime dosing helps and how your body adjusts over the next week, we can reassess this recommendation.",
               time: "10:30 AM",
            },
         ],
      },
      nurses: {
         1: [
            {
               id: 1,
               sender: "user",
               text: "I need to reschedule my appointment",
               time: "9:15 AM",
            },
            {
               id: 2,
               sender: "me",
               text: "Of course, how can I help you today?",
               time: "9:20 AM",
            },
            {
               id: 3,
               sender: "user",
               text: "Are there any side effects?",
               time: "9:30 AM",
            },
            {
               id: 4,
               sender: "me",
               text: "I think there might be some confusion. Were you asking about side effects of a medication? Or did you want to reschedule an appointment?",
               time: "9:35 AM",
            },
            {
               id: 5,
               sender: "user",
               text: "Sorry, I meant to reschedule my follow-up appointment for next week. I have a work conflict.",
               time: "9:40 AM",
            },
            {
               id: 6,
               sender: "me",
               text: "No problem at all. Let me check what availability we have. What days work best for you next week?",
               time: "9:45 AM",
            },
            {
               id: 7,
               sender: "user",
               text: "Tuesday or Thursday afternoon would be ideal if possible.",
               time: "9:50 AM",
            },
            {
               id: 8,
               sender: "me",
               text: "We have an opening on Thursday at 2:15 PM or Tuesday at 3:30 PM. Would either of those work for you?",
               time: "9:55 AM",
            },
            {
               id: 9,
               sender: "user",
               text: "Thursday at 2:15 PM would be perfect. Thank you.",
               time: "10:00 AM",
            },
            {
               id: 10,
               sender: "me",
               text: "Great! I've rescheduled your appointment for Thursday at 2:15 PM. You'll receive a confirmation email shortly. Is there anything else you need help with today?",
               time: "10:05 AM",
            },
         ],
         2: [
            {
               id: 1,
               sender: "user",
               text: "How should I change my dressing at home?",
               time: "1:05 PM",
            },
            {
               id: 2,
               sender: "me",
               text: "I'd be happy to explain the process. Do you have the supplies we discussed?",
               time: "1:10 PM",
            },
            {
               id: 3,
               sender: "user",
               text: "Yes, I bought everything from the pharmacy yesterday",
               time: "1:15 PM",
            },
         ],
         3: [
            {
               id: 1,
               sender: "user",
               text: "My blood pressure reading was high this morning",
               time: "8:20 AM",
            },
            {
               id: 2,
               sender: "me",
               text: "What was the reading? And have you taken your medication today?",
               time: "8:25 AM",
            },
            {
               id: 3,
               sender: "user",
               text: "It was 160/95 and yes, I took my medication as prescribed",
               time: "8:30 AM",
            },
            {
               id: 4,
               sender: "me",
               text: "That is elevated. Were you feeling anxious or stressed when you took the reading? Sometimes that can affect the numbers.",
               time: "8:35 AM",
            },
            {
               id: 5,
               sender: "user",
               text: "I was rushing to get ready for work, so maybe a little stressed.",
               time: "8:40 AM",
            },
            {
               id: 6,
               sender: "me",
               text: "I suggest retaking your blood pressure after sitting quietly for 5 minutes. Make sure your arm is supported and at heart level. Could you do that and let me know the new reading?",
               time: "8:45 AM",
            },
            {
               id: 7,
               sender: "user",
               text: "I just retook it and it's 150/90 now. Still high but a bit better.",
               time: "8:55 AM",
            },
            {
               id: 8,
               sender: "me",
               text: "That's still elevated. Have you noticed any other symptoms like headache, dizziness, or vision changes? Also, have you been consistent with your low-sodium diet?",
               time: "9:00 AM",
            },
            {
               id: 9,
               sender: "user",
               text: "No other symptoms, but I did have pizza last night which probably had a lot of salt.",
               time: "9:05 AM",
            },
            {
               id: 10,
               sender: "me",
               text: "That could definitely contribute to the higher reading. Please continue your medication as prescribed, monitor your salt intake closely, and take your blood pressure again this evening and tomorrow morning. If it remains above 150/90, please call the office to speak with Dr. Johnson about possibly adjusting your medication.",
               time: "9:10 AM",
            },
         ],
         4: [
            {
               id: 1,
               sender: "user",
               text: "When will my test results be available?",
               time: "3:40 PM",
            },
            {
               id: 2,
               sender: "me",
               text: "Let me check that for you. Which tests did you have done?",
               time: "3:45 PM",
            },
            {
               id: 3,
               sender: "user",
               text: "The blood work and urinalysis from Tuesday's appointment",
               time: "3:50 PM",
            },
         ],
         5: [
            {
               id: 1,
               sender: "user",
               text: "I think I might be having an allergic reaction to the antibiotic",
               time: "7:10 PM",
            },
            {
               id: 2,
               sender: "me",
               text: "What symptoms are you experiencing? This could be serious.",
               time: "7:12 PM",
            },
            {
               id: 3,
               sender: "user",
               text: "I have a rash on my arms and my face feels swollen",
               time: "7:15 PM",
            },
            {
               id: 4,
               sender: "me",
               text: "This sounds concerning. Are you having any difficulty breathing or tightness in your throat?",
               time: "7:17 PM",
            },
            {
               id: 5,
               sender: "user",
               text: "No trouble breathing yet, but the swelling seems to be getting worse",
               time: "7:20 PM",
            },
            {
               id: 6,
               sender: "me",
               text: "Please stop taking the antibiotic immediately. Given the facial swelling that's progressing, you should go to the emergency room right away. This could develop into a more severe reaction.",
               time: "7:22 PM",
            },
            {
               id: 7,
               sender: "user",
               text: "Should I drive myself or call an ambulance?",
               time: "7:25 PM",
            },
            {
               id: 8,
               sender: "me",
               text: "If you have someone who can drive you immediately, that's fine. If you're alone or the swelling is spreading rapidly, please call 911. Do not wait to see if it gets better on its own.",
               time: "7:27 PM",
            },
            {
               id: 9,
               sender: "user",
               text: "My daughter can drive me. I'll head to the ER now.",
               time: "7:30 PM",
            },
            {
               id: 10,
               sender: "me",
               text: "That's good. Please update me after you've been seen. I'll also call ahead to the ER to let them know you're coming in with a suspected medication allergy. Be sure to bring the antibiotic with you so they know exactly what you were taking.",
               time: "7:32 PM",
            },
         ],
      },
      doctors: {
         1: [
            {
               id: 1,
               sender: "user",
               text: "I need to reschedule my appointment",
               time: "9:15 AM",
            },
            {
               id: 2,
               sender: "me",
               text: "Of course, how can I help you today?",
               time: "9:20 AM",
            },
            {
               id: 3,
               sender: "user",
               text: "Are there any side effects?",
               time: "9:30 AM",
            },
            {
               id: 4,
               sender: "me",
               text: "I notice there might be some confusion in our conversation. Were you asking about medication side effects or about rescheduling an appointment?",
               time: "9:35 AM",
            },
            {
               id: 5,
               sender: "user",
               text: "Sorry for the confusion. I meant to ask about the potential side effects of the procedure we discussed last time.",
               time: "9:40 AM",
            },
            {
               id: 6,
               sender: "me",
               text: "No problem. For the arthroscopic knee procedure, common side effects include temporary pain, swelling, and stiffness at the joint. Most patients can return to light activities within a week, though complete recovery takes 4-6 weeks.",
               time: "9:45 AM",
            },
            {
               id: 7,
               sender: "user",
               text: "Is there a high risk of infection? That's my main concern.",
               time: "9:50 AM",
            },
            {
               id: 8,
               sender: "me",
               text: "The risk of infection is actually quite low, less than 1%. We take multiple precautions before, during, and after surgery to prevent infection. You'll also receive detailed care instructions for keeping the incision sites clean.",
               time: "9:55 AM",
            },
            {
               id: 9,
               sender: "user",
               text: "That's reassuring. Now about rescheduling, I need to move my surgery date due to a work commitment.",
               time: "10:00 AM",
            },
            {
               id: 10,
               sender: "me",
               text: "I understand. Let me check my surgical schedule. I have openings on the 15th and 22nd of next month. Would either of those dates work better with your schedule?",
               time: "10:05 AM",
            },
         ],
         2: [
            {
               id: 1,
               sender: "user",
               text: "Dr. Smith, I've reviewed the MRI results for patient #4382",
               time: "11:30 AM",
            },
            {
               id: 2,
               sender: "me",
               text: "Thank you. What did you find in the imaging?",
               time: "11:35 AM",
            },
            {
               id: 3,
               sender: "user",
               text: "There's a small herniation at L4-L5 that could explain the symptoms",
               time: "11:40 AM",
            },
         ],
         3: [
            {
               id: 1,
               sender: "user",
               text: "Can you consult on a case in the ER?",
               time: "2:15 PM",
            },
            {
               id: 2,
               sender: "me",
               text: "Yes, I can come down. What's the situation?",
               time: "2:17 PM",
            },
            {
               id: 3,
               sender: "user",
               text: "55-year-old male with chest pain and abnormal ECG",
               time: "2:20 PM",
            },
            {
               id: 4,
               sender: "me",
               text: "I'll be there in 5 minutes. Has troponin been drawn? And what exactly are you seeing on the ECG?",
               time: "2:22 PM",
            },
            {
               id: 5,
               sender: "user",
               text: "Troponin is slightly elevated at 0.09 and there's ST elevation in leads V2-V4.",
               time: "2:25 PM",
            },
            {
               id: 6,
               sender: "me",
               text: "That's concerning for anterior MI. Has the cath lab been notified yet? What's his pain level and has he received aspirin?",
               time: "2:27 PM",
            },
            {
               id: 7,
               sender: "user",
               text: "Cath lab is on standby. Pain is 7/10, radiating to left arm. He's received 325mg aspirin and we've started IV nitro.",
               time: "2:30 PM",
            },
            {
               id: 8,
               sender: "me",
               text: "Good. Let's activate the cath lab now rather than waiting. I'll want a formal STEMI protocol initiated. Any contraindications to heparin or other relevant history I should know?",
               time: "2:32 PM",
            },
            {
               id: 9,
               sender: "user",
               text: "No contraindications. History of hypertension and hyperlipidemia. No previous cardiac events. Father had MI at age 60.",
               time: "2:35 PM",
            },
            {
               id: 10,
               sender: "me",
               text: "Understood. I'm coming down now and will assess him immediately. Please have his previous records pulled if available and let the cath lab know we'll likely be proceeding with primary PCI within the next 30 minutes.",
               time: "2:37 PM",
            },
         ],
         4: [
            {
               id: 1,
               sender: "user",
               text: "I'd like your opinion on this treatment plan before I finalize it",
               time: "4:50 PM",
            },
            {
               id: 2,
               sender: "me",
               text: "I'd be happy to review it. Can you share the details?",
               time: "4:55 PM",
            },
            {
               id: 3,
               sender: "user",
               text: "It's for the transplant patient in room 302. I'm considering reducing the immunosuppressants",
               time: "5:00 PM",
            },
         ],
         5: [
            {
               id: 1,
               sender: "user",
               text: "Are you available for the tumor board meeting tomorrow at 8?",
               time: "5:30 PM",
            },
            {
               id: 2,
               sender: "me",
               text: "Yes, I've blocked that time off. Which cases are we reviewing?",
               time: "5:35 PM",
            },
            {
               id: 3,
               sender: "user",
               text: "We have three complex lung cancer cases and one unusual melanoma presentation",
               time: "5:40 PM",
            },
            {
               id: 4,
               sender: "me",
               text: "Sounds interesting. Do you have the pathology reports for the melanoma case? I'd like to review it beforehand.",
               time: "5:45 PM",
            },
            {
               id: 5,
               sender: "user",
               text: "Yes, I'll send them over. The melanoma is amelanotic with unusual histological features that don't fit classic subtypes.",
               time: "5:50 PM",
            },
            {
               id: 6,
               sender: "me",
               text: "That's definitely worth discussing in detail. Has molecular testing been completed yet? I'd be particularly interested in BRAF status.",
               time: "5:55 PM",
            },
            {
               id: 7,
               sender: "user",
               text: "Still pending. The initial immunohistochemistry panel showed S100 and SOX10 positivity but HMB-45 negativity.",
               time: "6:00 PM",
            },
            {
               id: 8,
               sender: "me",
               text: "Interesting IHC profile. Let's make sure we have digital pathology slides available for review during the meeting. What about the lung cases? Any molecular findings there?",
               time: "6:05 PM",
            },
            {
               id: 9,
               sender: "user",
               text: "One has an EGFR exon 19 deletion, one has ALK rearrangement, and the third is KRAS G12C positive. All are adenocarcinomas.",
               time: "6:10 PM",
            },
            {
               id: 10,
               sender: "me",
               text: "Perfect, so we have targeted therapy options for all three. I'll review the latest trial data on KRAS G12C inhibitors before the meeting. There's promising new data on combination approaches I think we should consider for that patient.",
               time: "6:15 PM",
            },
         ],
      },
   };

   // Sample chat messages for demonstration
   const [chats, setChats] = useState(defaultMessages);

   const handleSendMessage = () => {
      if (!message.trim() || !activeChat) return;

      const newMessage = {
         id: chats[activeUserType][activeChat]?.length + 1 || 1,
         sender: "me",
         text: message,
         time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
         }),
      };

      setChats((prevChats) => ({
         ...prevChats,
         [activeUserType]: {
            ...prevChats[activeUserType],
            [activeChat]: [
               ...(prevChats[activeUserType][activeChat] || []),
               newMessage,
            ],
         },
      }));

      setMessage("");
   };

   const handleKeyPress = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
         e.preventDefault();
         handleSendMessage();
      }
   };

   // Icons for each user type
   const userTypeIcons = {
      patients: <User className="h-6 w-6" />,
      nurses: <Activity className="h-6 w-6" />,
      doctors: <Clipboard className="h-6 w-6" />,
   };

   // Status indicators
   const statusIndicator = (status) => {
      switch (status) {
         case "online":
            return "bg-green-400";
         case "away":
            return "bg-yellow-400";
         case "offline":
            return "bg-gray-400";
         default:
            return "bg-gray-400";
      }
   };

   return (
      <div className="flex h-screen bg-gray-100">
         {/* Sidebar */}
         <div className="w-80 bg-white border-r flex flex-col overflow-hidden">
            {/* Header with logo */}
            <div
               className={`${currentScheme.primary} text-white p-4 flex items-center justify-between`}
            >
               <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6" />
                  <h1 className="text-lg font-bold">HealthChat</h1>
               </div>
               <div className="flex space-x-2">
                  <button className="p-1 rounded-full hover:bg-white hover:bg-opacity-20">
                     <Bell className="h-5 w-5" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-white hover:bg-opacity-20">
                     <Settings className="h-5 w-5" />
                  </button>
               </div>
            </div>

            {/* User type tabs */}
            <div className="flex border-b">
               {["patients", "nurses", "doctors"].map((userType) => (
                  <button
                     key={userType}
                     className={`flex-1 py-4 text-center capitalize ${activeUserType === userType
                           ? `${colorSchemes[userType].text} border-b-2 ${colorSchemes[userType].border}`
                           : "text-gray-600"
                        }`}
                     onClick={() => {
                        setActiveUserType(userType);
                        setActiveChat(null);
                     }}
                  >
                     <div className="flex flex-col items-center gap-1">
                        {userTypeIcons[userType]}
                        <span>{userType}</span>
                     </div>
                  </button>
               ))}
            </div>

            {/* Search bar */}
            <div className="p-3 border-b">
               <div className="relative">
                  <input
                     type="text"
                     placeholder="Search conversations"
                     className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
               </div>
            </div>

            {/* Chat list */}
            <div className="flex-1 overflow-y-auto">
               {userData[activeUserType].map((user) => (
                  <div
                     key={user.id}
                     className={`flex items-center p-3 border-b cursor-pointer hover:${currentScheme.hover
                        } ${activeChat === user.id ? currentScheme.active : ""}`}
                     onClick={() => setActiveChat(user.id)}
                  >
                     <div className="relative flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center text-2xl overflow-hidden">
                        <div
                           className={`absolute inset-0 ${currentScheme.light} opacity-50`}
                        ></div>
                        <span className="relative">{user.avatar}</span>
                        <div
                           className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${statusIndicator(
                              user.status
                           )}`}
                        ></div>
                     </div>
                     <div className="ml-3 flex-1">
                        <div className="flex justify-between items-baseline">
                           <h3 className="font-medium">{user.name}</h3>
                           <div className="flex items-center text-xs text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{user.time}</span>
                           </div>
                        </div>
                        <p className="text-sm text-gray-600 truncate">
                           {user.lastMessage}
                        </p>
                     </div>
                     {user.unread > 0 && (
                        <div
                           className={`ml-2 ${currentScheme.primary} text-white rounded-full h-5 w-5 flex items-center justify-center text-xs`}
                        >
                           {user.unread}
                        </div>
                     )}
                  </div>
               ))}
            </div>

            {/* Quick actions */}
            <div className="border-t p-3 bg-gray-50">
               <div className="flex justify-around">
                  <button className="p-2 rounded-full hover:bg-gray-200">
                     <Calendar className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-200">
                     <FileText className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-200">
                     <Info className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-200">
                     <Shield className="h-5 w-5 text-gray-600" />
                  </button>
               </div>
            </div>
         </div>

         {/* Chat area */}
         {activeChat ? (
            <div className="flex-1 flex flex-col">
               {/* Chat header */}
               <div
                  className={`${currentScheme.light} p-4 border-b flex items-center justify-between`}
               >
                  <div className="flex items-center">
                     <button
                        className="md:hidden mr-2"
                        onClick={() => setActiveChat(null)}
                     >
                        <ArrowLeft className="h-5 w-5" />
                     </button>
                     <div
                        className={`h-10 w-10 ${currentScheme.primary} text-white rounded-full flex items-center justify-center text-xl mr-3`}
                     >
                        {
                           userData[activeUserType].find(
                              (user) => user.id === activeChat
                           )?.avatar
                        }
                     </div>
                     <div>
                        <h2 className="font-medium">
                           {
                              userData[activeUserType].find(
                                 (user) => user.id === activeChat
                              )?.name
                           }
                        </h2>
                        <div className="flex items-center text-xs">
                           <div
                              className={`h-2 w-2 rounded-full ${statusIndicator(
                                 userData[activeUserType].find(
                                    (user) => user.id === activeChat
                                 )?.status
                              )} mr-1`}
                           ></div>
                           <p className="text-gray-500 capitalize">
                              {
                                 userData[activeUserType].find(
                                    (user) => user.id === activeChat
                                 )?.status
                              }
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center space-x-3">
                     <button
                        className={`text-gray-600 p-2 rounded-full hover:${currentScheme.hover}`}
                     >
                        <Phone className="h-5 w-5" />
                     </button>
                     <button
                        className={`text-gray-600 p-2 rounded-full hover:${currentScheme.hover}`}
                     >
                        <Video className="h-5 w-5" />
                     </button>
                     <button
                        className={`text-gray-600 p-2 rounded-full hover:${currentScheme.hover}`}
                     >
                        <Info className="h-5 w-5" />
                     </button>
                     <button
                        className={`text-gray-600 p-2 rounded-full hover:${currentScheme.hover}`}
                     >
                        <MoreVertical className="h-5 w-5" />
                     </button>
                  </div>
               </div>

               {/* Messages */}
               <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
                  <div className="space-y-4">
                     {(chats[activeUserType][activeChat] || []).map((msg) => (
                        <div
                           key={msg.id}
                           className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"
                              }`}
                        >
                           <div
                              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow-sm ${msg.sender === "me"
                                    ? `${currentScheme.primary} text-white rounded-br-none`
                                    : "bg-white text-gray-800 rounded-bl-none"
                                 }`}
                           >
                              <p>{msg.text}</p>
                              <div
                                 className={`flex items-center text-xs mt-1 ${msg.sender === "me"
                                       ? "text-white text-opacity-70"
                                       : "text-gray-500"
                                    }`}
                              >
                                 <Clock className="h-3 w-3 mr-1" />
                                 <p>{msg.time}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Message input */}
               <div className="bg-white p-4 border-t">
                  <div className="flex items-center">
                     <div className="flex space-x-2">
                        <button
                           className={`text-gray-500 p-2 rounded-full hover:${currentScheme.hover}`}
                        >
                           <Paperclip className="h-5 w-5" />
                        </button>
                        <button
                           className={`text-gray-500 p-2 rounded-full hover:${currentScheme.hover}`}
                        >
                           <FileText className="h-5 w-5" />
                        </button>
                     </div>
                     <div className="flex-1 mx-3">
                        <textarea
                           value={message}
                           onChange={(e) => setMessage(e.target.value)}
                           onKeyDown={handleKeyPress}
                           placeholder="Type a message"
                           className={`w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:${currentScheme.text} resize-none h-10`}
                        />
                     </div>
                     <button
                        className={`${currentScheme.primary} text-white rounded-full p-3 flex items-center justify-center disabled:opacity-50 shadow-md hover:shadow-lg transition-shadow`}
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                     >
                        <Send className="h-5 w-5" />
                     </button>
                  </div>
               </div>
            </div>
         ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
               <div className="text-center p-8 rounded-lg bg-white shadow-md max-w-md">
                  <div
                     className={`h-20 w-20 ${currentScheme.light} rounded-full flex items-center justify-center ${currentScheme.text} mx-auto mb-4`}
                  >
                     <MessageSquare className="h-10 w-10" />
                  </div>
                  <h2 className="text-xl font-medium text-gray-800">
                     Healthcare Communications
                  </h2>
                  <p className="text-gray-500 mt-2 mb-6">
                     Select a conversation to start messaging
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                     <div
                        className={`p-3 ${colorSchemes.patients.light} ${colorSchemes.patients.text} rounded-lg`}
                     >
                        <User className="h-6 w-6 mx-auto mb-1" />
                        <span className="text-sm">Patients</span>
                     </div>
                     <div
                        className={`p-3 ${colorSchemes.nurses.light} ${colorSchemes.nurses.text} rounded-lg`}
                     >
                        <Activity className="h-6 w-6 mx-auto mb-1" />
                        <span className="text-sm">Nurses</span>
                     </div>
                     <div
                        className={`p-3 ${colorSchemes.doctors.light} ${colorSchemes.doctors.text} rounded-lg`}
                     >
                        <Clipboard className="h-6 w-6 mx-auto mb-1" />
                        <span className="text-sm">Doctors</span>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default HealthcareChat;
