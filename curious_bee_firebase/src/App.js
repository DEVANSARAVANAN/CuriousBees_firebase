




// // ##############################Auto refrshment----Below code for muliple item upadata,read,delete,add#########################################




// App.js
import React, { useState, useEffect } from "react";
import { firestore } from "./firebase";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", department: "", password: "", email: "" });
  const [editItem, setEditItem] = useState(null);


// Read data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsRef = firestore.collection("register");
        const snapshot = await itemsRef.get();
        const fetchedItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once


//Add item
  const handleAddItem = async () => {
    try {
      const newItemRef = await firestore.collection("register").add(newItem);
      const newItemData = { id: newItemRef.id, ...newItem }; // Combine new item with generated ID
      setItems(prevItems => [...prevItems, newItemData]); // Update state with the new item
      setNewItem({ name: "", department: "", password: "", email: "" }); // Clear input fields
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };






// Update
  const handleUpdateItem = async (id, updatedItem) => {
    try {
      await firestore.collection("register").doc(id).update(updatedItem);
      setEditItem(null);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };
// Delete
  const handleDeleteItem = async (id) => {
    try {
      await firestore.collection("register").doc(id).delete();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <div>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Enter name"
        />
        <input
          type="text"
          value={newItem.department}
          onChange={(e) => setNewItem({ ...newItem, department: e.target.value })}
          placeholder="Enter department"
        />
        <input
          type="text"
          value={newItem.password}
          onChange={(e) => setNewItem({ ...newItem, password: e.target.value })}
          placeholder="Enter password"
        />
        <input
          type="text"
          value={newItem.email}
          onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
          placeholder="Enter email"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {editItem === item.id ? (
              <div>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => setItems(items.map(i => i.id === item.id ? { ...i, name: e.target.value } : i))}
                />
                <input
                  type="text"
                  value={item.department}
                  onChange={(e) => setItems(items.map(i => i.id === item.id ? { ...i, department: e.target.value } : i))}
                />
                <input
                  type="text"
                  value={item.password}
                  onChange={(e) => setItems(items.map(i => i.id === item.id ? { ...i, password: e.target.value } : i))}
                />
                <input
                  type="text"
                  value={item.email}
                  onChange={(e) => setItems(items.map(i => i.id === item.id ? { ...i, email: e.target.value } : i))}
                />
                <button onClick={() => handleUpdateItem(item.id, item)}>Save</button>
              </div>
            ) : (
              <div>
                <span>{item.name} - {item.department} - {item.password} - {item.email}</span>
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                <button onClick={() => setEditItem(item.id)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;






























// // // // ###################### Return data form data base#########################################################//




// import React, { useState, useEffect } from "react";
// import { firestore } from "./firebase";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dataRef = firestore.collection("register");
//         const snapshot = await dataRef.get();
//         const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setData(fetchedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from Firestore</h1>
//       <ul>
//         {data.map(item => (
//           <div>
//            <b> Name:</b>
//           <p key={item.id}> {item.name}</p>
//           <b> Email:</b>
//           <p key={item.id}>{item.email}</p>
//           <b> Department:</b>
//           <p key={item.id}>{item.department}</p>
//           <b> password:</b>
//           <p key={item.id}>{item.password}</p>
//           <br></br>
//           <br></br>
//           </div>

//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// // // ###############################################################################################################
