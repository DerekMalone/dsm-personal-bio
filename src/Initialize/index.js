/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import 'firebase/auth';
import firebase from 'firebase/app';
import BioNavbar from '../components/Navbar';
import Routes from '../routes/Routes';
import { signOutUser } from '../api/auth';
import Footer from '../views/Footer';
import firebaseConfig from '../api/apiKeys';

// const SignOutStyle = styled.div`
//   text-right
// `;

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
      {user ? (
        <div className="text-center mt-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={signOutUser}
          >
            Sign Out.
          </button>
        </div>
      ) : (
        // <SignIn user={user} />

        <Footer user={user} />
      )}
      <BioNavbar user={user} />
      <Routes user={user} />
    </>
  );
}

export default Initialize;
