import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Overview = () => {
  const doctors = [
    {
      name: "Dr Ashuk Singh",
      specialty: "Psychologist",
      clinic: "Mental Clinic",
      patients: 15,
      status: "in",
    },
    {
      name: "Dr Kashmir",
      specialty: "Heart Surgeon",
      clinic: "Mental Clinic",
      patients: 3,
      status: "in",
    },
    {
      name: "Dr Mendez",
      specialty: "Dental Specialist",
      clinic: "Dental Clinic",
      patients: 7,
      status: "out",
    },
  ];
  const data = [
    { month: 'Jan', male: 30, female: 45 },
    { month: 'Feb', male: 40, female: 55 },
    { month: 'Mar', male: 35, female: 60 },
    { month: 'Apr', male: 50, female: 65 },
    { month: 'May', male: 45, female: 70 },
    { month: 'Jun', male: 60, female: 75 },
  ];

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      display: 'grid',
      gridTemplateColumns: '1fr',
      height: '130px',
      overflowY:'auto',
      scrollbarWidth: 'none', /* For Firefox */
      msOverflowStyle: 'none',
    },
    header: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 0.7fr 0.7fr 0.7fr 1.1fr',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '2px solid #ccc',
      fontWeight: 'bold',
    },
    gridRow: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
      width:'600px'
    },
    doctorItem: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
      height:'80px'
    },
    doctorInfo: {
      display: 'flex',
      alignItems: 'center',
      flex: 2,
    },
    doctorAvatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#ddd',
      marginRight: '10px',
    },
    doctorName: {
      fontWeight: 'bold',
    },
    doctorSpecialty: {
      color: '#888',
    },
    column: {
      flex: 1,
      textAlign: 'center',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  };
  

  return (
    <div style={styles.gridRow}>
        <div>
        <div style={styles.header}>
            <div></div>
            <div>Name</div>
            <div>Clinic</div>
            <div>Patients</div>
            <div >Status</div>
            <div>Actions</div>
          </div>
        <div style={styles.container}>
          {doctors.map((doctor, index) => (
            <div key={index} style={styles.doctorItem} className="doctor-item">
              <div style={{ flex: 0.5 }}>
                <input type="checkbox" />
              </div>
              <div style={styles.doctorInfo}>
                <div style={styles.doctorAvatar}></div>
                <div>
                  <p style={styles.doctorName}>{doctor.name}</p>
                  <p style={styles.doctorSpecialty}>{doctor.specialty}</p>
                </div>
              </div>
              <div style={styles.column}>{doctor.clinic}</div>
              <div style={styles.column}>{doctor.patients}</div>
              <div style={styles.column}>{doctor.status}</div>
              <div style={styles.actions}>
              <FontAwesomeIcon
                  icon={doctor.status === "in" ? faCheckCircle : faTimesCircle}
                  style={{ color: doctor.status === "in" ? 'green' : 'red', marginRight: '10px' }}
                />
              </div>
              <div>
              <button style={{backgroundColor:'yellow',borderRadius:'50px',border:'20px',height:'30px',width:'30px'}}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              </div>
            </div>
          ))}
        </div>
        </div>
       <div style={{padding:'10px'}}>
       <div style={{ 
      padding: '10px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>Monthly Patients Visits</h3>

      <div style={{ height: '170px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666' }}
            />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="male" 
              stroke="#3182CE" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              activeDot={{ r: 6 }} 
            />
            <Line 
              type="monotone" 
              dataKey="female" 
              stroke="#D53F8C" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Overview;