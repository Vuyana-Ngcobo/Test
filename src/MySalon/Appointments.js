import React, { useState } from 'react';
import axios from 'axios';
import Navigate from './Navbar';

function Appointments() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      Appointmentdate: selectedDate,
      time: selectedTime,
      comment: comments
      
      ,
    };
    console.log('Form Data:', data);

    try {
      const response = await axios.post('https://localhost:5011/api/GetInvolved', data);
      console.log(response.data);
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navigate />
      <div className='appointments'>
        <form onSubmit={handleSubmit} style={{ fontSize: '18px' }}>
          <h1>Make An Appointment!!</h1>
          <div>
            <label style={{ color: 'white', fontWeight: 'bold', lineHeight: '1.5', fontFamily: 'Arial', marginLeft: '50px' }}>First Name:</label>
            <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
          </div>

          <div>
            <label style={{ color: 'white', fontWeight: 'bold', lineHeight: '1.5', fontFamily: 'Arial', marginLeft: '50px' }}>Last Name:</label>
            <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
          </div>

          <div>
            <label style={{ color: 'white', fontWeight: 'bold', lineHeight: '1.5', fontFamily: 'Arial', marginLeft: '50px' }}>Contact:</label>
            <input type="text" value={contact} onChange={(event) => setContact(event.target.value)} />
          </div>

          <div>
            <label style={{ color: 'white', fontWeight: 'bold', lineHeight: '1.5', fontFamily: 'Arial', marginLeft: '120px' }}>Date:</label>
            <input type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} />
          </div>

          <div>
            <label style={{ color: 'white', fontWeight: 'bold', lineHeight: '1.5', fontFamily: 'Arial', marginLeft: '120px' }}>Time:</label>
            <input type="time" value={selectedTime} onChange={(event) => setSelectedTime(event.target.value)} />
          </div>

          <div>
            <label style={{ color: 'white', fontWeight: 'bold', lineHeight: '1.5', fontFamily: 'Arial', marginLeft: '120px' }}>Comments:</label>
            <textarea value={comments} onChange={(event) => setComments(event.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
        {submitted && (
          <div style={{ color: 'white', textAlign: 'center', marginTop: '20px', fontSize: '20px' }}>
            Thank You for your Message,Your Appointment been booked*-*.
          </div>
        )}
      </div>
    </>
  );
}

export default Appointments;
