import React from 'react';
import styled from 'styled-components';

const Techdiv = styled.div`
  display: flex;
  flex: wrap;
`;

export default function TechDetails() {
  return (
    <>
      <Techdiv>
        <i className="fab fa-react" />
        <i className="fab fa-js" />
        <i className="fab fa-sass" />
        <i className="fab fa-html5" />
        <i className="fab fa-github" />
        <i className="fab fa-bootstrap" />
        <img
          className="postman-student-expert"
          src="/images/postman.png"
          alt="student expert badge"
        />
        <img
          className="firebase-logo"
          src="/images/firebase-logo-vertical.png"
          alt="firebase logo"
        />
      </Techdiv>
    </>
  );
}
