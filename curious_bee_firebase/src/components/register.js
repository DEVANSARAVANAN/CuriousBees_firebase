


// import React, { useState } from "react";
// import { firestore } from "./GoogleSingin/firebase";

// function Register() {
//   const [name, setName] = useState("");
//   const [department, setDepartment] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   const handleAddItem = async () => {
//     try {
//       // Add item to Firebase collection
//       await firestore.collection("register").add({
//         name: name,
//         department: department,
//         password: password,
//         email: email
//       });

//       // Clear input fields after adding item
//       setName("");
//       setDepartment("");
//       setPassword("");
//       setEmail("");

//       console.log("Item added successfully!");
//     } catch (error) {
//       console.error("Error adding item:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Item</h2>
//       <div>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter name"
//         />
//         <input
//           type="text"
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//           placeholder="Enter department"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter password"
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter email"
//         />
//         <button onClick={handleAddItem}>Add Item</button>
//       </div>
//     </div>
//   );
// }

// export default Register;
















import React, { useState } from "react";
import { firestore } from "./GoogleSingin/firebase";
// import { useHistory } from 'react-router-dom';


function Register() {
  const [firstName, setFirstName] = useState("");
  const [department, setDepartment] = useState("");
  const [lastName, setLastName] = useState("");
  const [college, setCollege] = useState("");
  const [position, setPosition] = useState("");
//   const history = useHistory();


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
    //   history.push("/home");
      console.log("Item added successfully!");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div  style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        }}>

      <h1>Register</h1>
      <br></br>
      <br></br>
      
      <div  style={{
      
      
      border: '2px solid black', // Adding black border
      padding: '20px', // Adding some padding for better appearance
      }} >
      <h3>First name</h3>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter first name"
        />
        <br></br>
        <h3>Last name</h3>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter last name"
        />
        <br></br>
        <h3>College</h3>
         <input
          type="text"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          placeholder="Enter college"
        />
        <br></br>
         <h3>Department</h3>

        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Enter department"
        />
        <br></br>
        <h3>position</h3>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Enter position"
        />
        <br></br>
        <br></br>
        <br></br>
       
        <button type="button" onClick={handleAddItem}>Continue</button>
      </div>
    </div>
  );
}

export default Register;
