import React from 'react';
// import styled from 'styled-components';
import { signInUser } from '../api/auth';

// TODO: Get the footer to actually be a footer and not displayed in the middle of the screen.

// const FooterDiv = styled.div`
//   bottom: 0;
//   height: 20px;
//   margin: 0 auto;

//   ul {
//     list-style: none;
//   }

//   a:hover {
//     text-decoration: underline;
//   }
// `;
// position: absolute;
// use this link for flexbox footer style setup:https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-multi-level-sticky-footer-with-flexbox--cms-33341
// modify to suit my needs.

// const handleSignInClick = (e) => {
//   e
// }

export default function Footer() {
  return (
    <footer className="footer-container">
      {
        // need useNav? need to change from button to ul with li...
      }
      <section className="footer-text">
        Derek Malone est 1989
        <button className="admn-btn" type="button" onClick={signInUser}>
          .
        </button>
      </section>
      {/* <ul>
        <li>
          <a href="/AboutMe" onClick={signInUser}>
            Derek Malone est 1989
          </a>
        </li>
      </ul> */}
    </footer>
  );
}
