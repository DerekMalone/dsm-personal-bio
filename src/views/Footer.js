import React from 'react';
import styled from 'styled-components';
import { signInUser } from '../api/auth';

// TODO: Get the footer to actually be a footer and not displayed in the middle of the screen.

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 644px;
  height: 20px;
  margin: 0 auto;
`;
// trying to resolve issues.
export default function Footer() {
  return (
    <FooterDiv>
      <button type="button" className="btn btn-success" onClick={signInUser}>
        Derek Malone est 1989
      </button>
    </FooterDiv>
  );
}
