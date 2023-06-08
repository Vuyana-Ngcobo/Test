/*import React, { useState } from "react";
import axios from 'axios';
import "./App.css";
import { Link } from "react-router-dom";


function UserForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [province, setProvince] = useState("");



  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };


  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  
  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("Name:", name);
    //console.log("Surname:", surname);
    //console.log("Age:", age);
    const user = {
      "FirstName": name,
      "LastName": surname,
      "Age": age,
      "Gender": gender,
      "Province": province

    };
    

    try {
      const response = axios.post('https://localhost:7089/api/TestingApi', user);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    
    // Clear the form
    setName('');
    setSurname('');
    setAge('');
    setGender('');
    setProvince('');

   
  };




  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h1>This is the Registration Section</h1>
      <p>Please complete the form below</p>
      <br></br>


      <label> Name:<input type="text" value={name} onChange={handleNameChange} /></label>
      <br></br>
      <label> Surname:<input type="text" value={surname} onChange={handleSurnameChange} /></label>
      <br></br>
      <label> Age:<input type="number" value={age} onChange={handleAgeChange} /></label>
      <br></br><br></br>

      <label>Gender:
  <select value={gender} onChange={handleGenderChange}>
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</label>
<br></br><br></br>

<label>Province:
  <select value={province} onChange={handleProvinceChange}>
    <option value="">Select Your Province</option>
    <option value="Gauteng">Gauteng</option>
    <option value="Western Cape">Western Cape</option>
    <option value="Eastern Cape">Eastern Cape</option>
    <option value="Mpumalanga">Mpumalanga</option>
    <option value="North West">North West</option>
    <option value="Limpopo">Limpopo</option>
    <option value="Free State">Free State</option>
    <option value="Eastern Cape">Eastern Cape</option>
    <option value="Northern Cape">Northern Cape</option>

  </select>
</label>
<br></br><br></br>




      <button type="add">Add</button>
      <br></br>

    </form>
    <Link to="/">
    <button type="button">Back To Menu</button>
  </Link>
  <br></br>
  <br></br>
  <footer>
      <p>&copy; 2023 My Salon. All rights reserved.</p>
      </footer>

  </div>
  );
}
export default UserForm;*/