import React from 'react';
import styled from 'styled-components';
import { signInUser } from '../api/auth';

const BtnStyle = styled.div`
  position: fixed;
  bottom: 35px;
  left: 45%;
  opacity: 50;
`;

export default function SignIn() {
  return (
    <BtnStyle>
      <button type="button" className="btn btn-success" onClick={signInUser}>
        Sign In
      </button>
    </BtnStyle>
  );
}
