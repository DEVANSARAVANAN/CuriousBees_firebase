



import React, { useState } from "react";
import { firestore } from "./GoogleSingin/firebase";
import { Navigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [department, setDepartment] = useState("");
  const [lastName, setLastName] = useState("");
  const [college, setCollege] = useState("");
  const [position, setPosition] = useState("");

  const [redirect, setRedirect] = useState(false); // State to control redirection

  const handleAddItem = async () => {
    try {
      // Add item to Firebase collection
      await firestore.collection("register").add({
        first_name: firstName,
        last_name: lastName,
        department: department,
        position: position,
        college: college
      });

      // Clear input fields after adding item
      setFirstName("");
      setLastName("");
      setDepartment("");
      setPosition("");
      setCollege("");
      
      // Set redirect state to true to trigger navigation
      setRedirect(true);

      console.log("Item added successfully!");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Render Navigate component if redirect state is true
  if (redirect) {
    return <Navigate to="/feed" />;
  }


  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
      <h1>Register</h1>
      <br />
      <br />
      
      <div style={{
        border: '2px solid black',
        padding: '20px', 
      }}>
        <h3>First name</h3>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter first name"
        />
        <br />
        <h3>Last name</h3>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter last name"
        />
        <br />
        <h3>College</h3>
        <input
          type="text"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          placeholder="Enter college"
        />
        <br />
        <h3>Department</h3>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Enter department"
        />
        <br />
        <h3>Position</h3>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Enter position"
        />
        <br />
        <br />
        <br />
       
        <button type="button" onClick={handleAddItem}>Continue</button>
      </div>
    </div>
  );
}

export default Register;

const register=Register;

export { register};