/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import BioNavbar from '../components/Navbar';
import Routes from '../routes/Routes';
import Footer from '../views/Footer';
import { firebaseConfig } from '../api/apiKeys';

function Initialize() {
  const [user, setUser] = useState(null);
  // const [admin, setAdmin] = useState(null);

  useEffect(() => {
    // Would like to attempt to use Service Accounts -> Firebase Admin SDK if possible (https://github.com/nss-evening-cohort-16/evening-client-side/discussions/120)
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          uid: authed.uid,
          fullName: authed.displayName,
          user: authed.email.split('@')[0],
          isAdmin: authed.uid === firebaseConfig.adminUID,
        };
        setUser(userObj);
        // if (authed && userObj.uid === firebaseConfig.adminUID) {
        //   userObj = {
        //     isAdmin: firebaseConfig.adminUID,
        //   };
        //   setUser(userObj);
        // }
      } else if (user || user === null) {
        setUser(null);
      }
    });
  }, []);

  // TODO: Need to figure out why this warn was here...
  // console.warn(user);
  return (
    <>
      <BioNavbar user={user} />
      <Routes user={user} />
      <Footer user={user} />
    </>
  );
}

export default Initialize;
