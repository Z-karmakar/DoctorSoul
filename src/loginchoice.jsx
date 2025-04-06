import { useNavigate } from 'react-router-dom';

const LoginChoice = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Select Your Role</h1>
        <p className="text-gray-500 mt-2">Choose how you want to proceed:</p>
        <div className="mt-6 space-y-4">
          <button onClick={() => navigate('/DoctorLogin')} className="block w-64 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Doctor</button>
          <button onClick={() => navigate('/Login')} className="block w-64 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Patient</button>
          <button onClick={() => navigate('/WorkerLogin')} className="block w-64 bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700">Worker</button>
          <button onClick={() => navigate('/NurseLogin')} className="block w-64 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Nurse</button>
        </div>
      </div>
    </div>
  );
};

export default LoginChoice;