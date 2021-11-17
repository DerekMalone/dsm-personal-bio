import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import BioNavbar from '../components/Navbar';
import Routes from '../routes/Routes';
import { SignIn } from '../views';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          uid: authed.uid,
          fullName: authed.displayName,
          user: authed.email.split('@')[0],
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <SignIn />
      <BioNavbar />
      <Routes />
    </>
  );
}

export default Initialize;
