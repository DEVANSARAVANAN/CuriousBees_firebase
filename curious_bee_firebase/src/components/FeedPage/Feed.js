// // // // import React from 'react'
// // // // import LeftPanel from './LeftPanel'
// // // // import Posts from './Posts'
// // // // import RightPanel from './RightPanel'

// // // // const Feed = () => {
// // // //   return (
// // // //     <div className='container-fluid'>
// // // //       <div className='row'>
// // // //         <div className='col-3 border'>
// // // //           <LeftPanel />
// // // //         </div>
// // // //         <div className='col-6'>
// // // //           <Posts />
// // // //         </div>
// // // //         <div className='col-3 border'>
// // // //           <RightPanel />
// // // //         </div>
// // // //       </div>
      
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Feed



// // // ############################simple feed page####################


// // // import React from 'react'
// // // import LeftPanel from './LeftPanel'
// // // import Posts from './Posts'
// // // import RightPanel from './RightPanel'
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // // import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


// // // const Feed = () => {
// // //   return (
// // //     <div className='container-fluid'>
// // //       <ul className="d-flex">
  
// // //     <button type="button">Create +</button>
  
// // //   <li className='search my-3 d-flex'>
// // //     <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
// // //     <input type='search' placeholder='Search' className='' />
// // //   </li>
// // // </ul>

// // //       <div className='row'>
// // //         <div className='col-3 border column left-panel'>
// // //           <LeftPanel />
// // //         </div>
// // //         <div className='col-6 column posts'>
// // //           <Posts />
// // //         </div>
// // //         <div className='col-3 border column right-panel'>
// // //           <RightPanel />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Feed










// // import React from 'react'
// // import LeftPanel from './LeftPanel'
// // import Posts from './Posts'
// // import RightPanel from './RightPanel'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


// // const Feed = () => {
// //   return (
// //     <div className='container-fluid'>

// //        <ul className="d-flex align-items-center"> {/* Use align-items-center to vertically center items */}
// //       <li className='search my-3 d-flex'>
// //         <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
// //         <input type='search' placeholder='Search' className='' />
// //       </li>
// //       <l><button type="button">Create +</button></l> {/* Wrap the button in an <li> */}
// //     </ul>

// //       <div className='row'>
// //         <div className='col-3 border column left-panel'>
// //           <LeftPanel />
// //         </div>
// //         <div className='col-6 column posts'>
// //           <Posts />
// //         </div>
// //         <div className='col-3 border column right-panel'>
// //           <RightPanel />
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Feed














// // ########################################simple feed code###########################



import LeftPanel from './LeftPanel';
import Posts from './Posts';
import RightPanel from './RightPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import { firestore } from "../../components/GoogleSingin/firebase";
import { register } from '../register';


const Feed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
   
  };
  
const [newItem, setNewItem] = useState({ title: "", collaborators: "", message: "" });
//Add item
  const handleAddItem = async () => {
    try {
      const newItemRef = await firestore.collection("post").add(newItem);
      // const newItemData = { id: newItemRef.id, ...newItem }; // Combine new item with generated ID
      
      setNewItem({ title: "", collaborators: "", message: ""}); // Clear input fields
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding item:", error);
      setIsModalOpen(false);
    }
  };

  return (
    <div>{isModalOpen?
      (
    <div className="modal-overlay">
      <h1>Post Page {register.firstName}</h1>
    <div  style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Optionally set height to center vertically in the viewport
      
    }}>
      <p></p>
       <div style={{border: '2px solid black',
        padding: '20px', }}>
         <input
         style={{ width: '600px',height: '50px' }} 
          type="text"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          placeholder="Title"
        />
        <br></br>
        <br></br>
        <input
        style={{ width: '600px',height: '60px' }} 
          type="text"
          value={newItem.collaborators}
          onChange={(e) => setNewItem({ ...newItem, collaborators: e.target.value })}
          placeholder="Collaborators"
        />
        <br></br>
        <br></br>
        <input
        style={{ width: '600px' ,height: '100px'}} 
          type="text"
          value={newItem.message}
          onChange={(e) => setNewItem({ ...newItem, message: e.target.value })}
          placeholder="What on yoour mind?"
          
        />
        <br></br>
      <br></br>
      <button class= 'create-btn' onClick={handleAddItem} > Post</button>
      </div>    

      </div>
      </div>

      ) :(

    <div className='container-fluid'>
      <ul className="d-flex align-items-center justify-content-center"> 
        <li className='search my-3 d-flex'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
          <input type='search' placeholder='Search' className='' />
        </li>
        <l><button class= 'create-btn'onClick={openModal} type="button">Create +</button></l> 
      </ul>

      <div className='row'>
        <div className='col-3 border column left-panel'>
          <LeftPanel />
        </div>
        <div className='col-6 column posts'>
          <Posts />
        </div>
        <div className='col-3 border column right-panel'>
          <RightPanel />
        </div>
      </div>
    </div>
    )
} </div>
  );
}

export default Feed;


























