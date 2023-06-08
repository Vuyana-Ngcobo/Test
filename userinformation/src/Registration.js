import React, { useState } from "react";
import axios from 'axios'
import "./App.css"


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
    

    axios.post('https://localhost:7190/api/TestingApi', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };




  return (
    <form onSubmit={handleSubmit}>
      <h1>This is the Registration Section</h1>
      <p>Please complete the form below</p>
      <br></br><br></br>


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



      <button type="back">Back To Menu</button>
      <button type="add">Add</button>
      <br></br>

    </form>
  );
}
export default UserForm;