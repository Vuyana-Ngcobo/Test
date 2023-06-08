import React, { useState } from 'react';

function GetInvolved() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [contact, setContact] = useState("");
    const [numOfPeople, setNumOfPeople] = useState(0);
    const [comment, setComment] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    const handleContactChange = (e) => {
        setContact(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            "Name": name,
            "Surname": surname,
            "Contact": contact,
            "Comment": comment,
        };

        console.log(user); // Do whatever you want with the user object

        // Clear the form
        setName("");
        setSurname("");
        setContact("");
        setComment("");

        // Increment the number of people
        setNumOfPeople(numOfPeople + 1);
    };

    return (
        <div>
            <h1>Get Involved with Us</h1>
            <p>Thank you for your interest in getting involved with OFuze Beauty Salon! Please fill in the form below with your information:</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />

                <label>
                    Surname:
                    <input type="text" value={surname} onChange={handleSurnameChange} />
                </label>
                <br />

                <label>
                    Contact Number:
                    <input type="text" value={contact} onChange={handleContactChange} />
                </label>
                <br />

                <label>
                    Add a Comment:
                </label>
                <div className="user-list">
                    <textarea defaultValue={GetInvolved} readOnly rows={8} cols={60}></textarea>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <button type="back">Back To Menu</button>
                <button type="submit">Submit</button>

            </form>

            <p>Number of people interested: {numOfPeople}</p>
        </div>
    );
}

export default GetInvolved;
