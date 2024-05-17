



// import { firestore } from "./GoogleSingin/firebase";
// import { Navigate } from "react-router-dom";
// import React, { useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// // Initialize Firebase

// function Register() {

//   const firebaseConfig = {

//     apiKey: "AIzaSyDy9K9V9tMRsKMZ73dOIRiwquM-vyC1nVI",
//     authDomain: "registration-78709.firebaseapp.com",
//     projectId: "registration-78709",
//     storageBucket: "registration-78709.appspot.com",
//     messagingSenderId: "207657631029",
//     appId: "1:207657631029:web:69e4917cfa98907590a07c",
//     measurementId: "G-ZP11HRQ82R"
    
//   };
  
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
  
  
//     const [currentUser, setCurrentUser] = useState(null);
  
//     useEffect(() => {
      
//       const unsubscribe = onAuthStateChanged(auth, user => {
//         if (user) {
//           setCurrentUser(user);
//         } else {
//           setCurrentUser(null);
//         }
//       });
  
//     }, []); 
  
//    const [firstName, setFirstName] = useState("");
//   const [department, setDepartment] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [college, setCollege] = useState("");
//   const [position, setPosition] = useState("");

  
//   const [redirect, setRedirect] = useState(false); // State to control redirection


//   const handleAddItem = async () => {

//       try {
//               // Add item to Firebase collection with UID as document ID
//               await firestore.collection("register").doc(currentUser.uid).set({
//                 first_name: firstName,
//                 last_name: lastName,
//                 department: department,
//                 position: position,
//                 college: college
//               });



//       // Clear input fields after adding item
//       setFirstName("");
//       setLastName("");
//       setDepartment("");
//       setPosition("");
//       setCollege("");
      
//       // Set redirect state to true to trigger navigation
//       setRedirect(true);


//       console.log("Item added successfully!");
//     } catch (error) {

//       console.error("Error adding item:", error);
//     }
//   };


//   // Render Navigate component if redirect state is true
//   if (redirect) {
//     return <Navigate to="/feed" />;
//   }


//   return (
//     <div style={{
//       position: 'fixed',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//     }}>
//       <h1>Register</h1>
//       <br />
//       <br />
      
//       <div style={{
//         border: '2px solid black',
//         padding: '20px', 
//       }}>
//         <h3>First name</h3>
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           placeholder="Enter first name"
//         />
//         <br />
//         <h3>Last name</h3>
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           placeholder="Enter last name"
//         />
//         <br />
//         <h3>College</h3>
//         <input
//           type="text"
//           value={college}
//           onChange={(e) => setCollege(e.target.value)}
//           placeholder="Enter college"
//         />
//         <br />
//         <h3>Department</h3>
//         <input
//           type="text"
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//           placeholder="Enter department"
//         />
//         <br />
//         <h3>Position</h3>
//         <input
//           type="text"
//           value={position}
//           onChange={(e) => setPosition(e.target.value)}
//           placeholder="Enter position"
//         />
//         <br />
//         <br />
//         <br />
       
//         <button type="button" onClick={handleAddItem}>Continue</button>
//       </div>
//     </div>
//   );
// }

// export default Register;

// const register=Register;

// export { register};








import React, { useState, useEffect } from 'react';
import { firestore, auth } from './GoogleSingin/firebase'; // Import your Firestore instance and auth
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

function Register() {
  const [currentUser, setCurrentUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [department, setDepartment] = useState("");
  const [lastName, setLastName] = useState("");
  const [college, setCollege] = useState("");
  const [position, setPosition] = useState("");
  const [redirect, setRedirect] = useState(false); // State to control redirection

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAddItem = async () => {
    if (!currentUser) {
      console.error("No user is signed in.");
      return;
    }

    try {
      // Add item to Firebase collection with UID as document ID
      await firestore.collection("register").doc(currentUser.uid).set({
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
