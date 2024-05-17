





import React, { useState, useEffect } from 'react';

import { auth } from './GoogleSingin/firebase'; 
function Home() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user ? user : null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Hello, {currentUser ? currentUser.uid : 'guest'}!</h1>
    </div>
  );
}

export default Home;
