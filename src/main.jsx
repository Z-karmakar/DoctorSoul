import { createRoot } from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewLogin from './newlogin.jsx';
import LoginNewCS from './loginnewcs.jsx';
import LoginChoice from './loginchoice.jsx';
import PatientDashboard from './patient-dashboard.jsx';
import DoctorLogin from './DoctorLoginForm.jsx';
import CreateDoctor from './DoctorRegisterForm.jsx';
import DoctorDashboard from './selected-doctordashboard.jsx';
import Driver from './Driver.jsx';
import Nurse from './Nurse.jsx';
import WorkerRegister from './WorkerRegistrationPage.jsx';
import WorkerLogin from './WorkerLoginPage.jsx';
import NurseDashboard from './NurseDashboard.jsx';
import NurseLoginForm from './NurseLoginForm.jsx';
import NurseRegisterForm from './NurseRegisterForm.jsx';
import Homepage from './homepage.jsx';
import Medicine from './EcommerceApp.jsx';
import MedicalAssistant from './ChatbotApp.jsx';
import Lab from './lab.jsx';
import ChatInterface from './ChatInterfaceApp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/LoginChoice',
    element: <LoginChoice />,
  },
  {
    path: '/CreateAccount',
    element: <NewLogin />,
  },
  {
    path: '/Login',
    element: <LoginNewCS />,
  },
  {
    path: '/Patient',
    element: <PatientDashboard />,
  },
  {
    path: '/DoctorLogin',
    element: <DoctorLogin />,
  },
  {
    path: '/CreateDoctor',
    element: <CreateDoctor />,
  },
  {
    path: '/DoctorDashboard',
    element: <DoctorDashboard />,
  },
  {
    path: '/Driver',
    element: <Driver />,
  },
  {
    path: '/Nurse',
    element: <Nurse />,
  },
  {
    path: '/WorkerRegister',
    element: <WorkerRegister />,
  },
  {
    path: '/WorkerLogin',
    element: <WorkerLogin />,
  },
  {
    path: '/NurseDashboard',
    element: <NurseDashboard />,
  },
  {
    path: '/NurseLogin',
    element: <NurseLoginForm />,
  },
  {
    path: '/NurseRegister',
    element: <NurseRegisterForm />,
  },
  
  {
    path: '/Homepage',
    element: <Homepage />,
  },
  {
    path: '/MedicalAssistant',
    element: <MedicalAssistant />,
  },
  {
    path: '/Medicine',
    element: <Medicine />,
  },
  {
    path:'/Lab',
    element:<Lab />,
  },
  {
    path:'/Chat',
    element:<ChatInterface />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);