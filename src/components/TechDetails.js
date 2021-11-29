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
        <img className="react-logo" src="/logo512.png" alt="React.js logo" />
        <img
          className="javascript-logo"
          src="/images/JavaScript-logo.png"
          alt="JavaScript logo"
        />
        <img
          className="sass-logo"
          src="/images/sass-logo.png"
          alt="Sass logo"
        />
        <img
          className="html5-logo"
          src="/images/html5-logo.png"
          alt="HTML 5 logo"
        />
        <img
          className="github-logo"
          src="/images/github-mark.png"
          alt="GitHub logo"
        />
        <img
          className="bootstrap-logo"
          src="/images/bootstrap-logo.png"
          alt="Bootstrap logo"
        />
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
