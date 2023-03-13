import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from '@fortawesome/fontawesome-svg-core/import.macro';
import { signInUser } from '../api/auth';

// TODO: Get the footer to actually be a footer and not displayed in the middle of the screen.

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0;
  height: 20px;
  margin: 0 auto;

  ul {
    list-style: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
// use this link for flexbox footer style setup:https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-multi-level-sticky-footer-with-flexbox--cms-33341
// modify to suit my needs.

// const handleSignInClick = (e) => {
//   e
// }

export default function Footer() {
  return (
    <FooterDiv>
      {
        // need useNav? need to change from button to ul with li...
      }
      <ul>
        <li>
          <a href="/AboutMe" onClick={signInUser}>
            <FontAwesomeIcon icon="fa-solid fa-rectangle-code" />
            Derek Malone est 1989
          </a>
        </li>
      </ul>
    </FooterDiv>
  );
}
