import React from 'react';

// const TechLogos = styled.div`
//   flex: wrap;
//   justify-content: space-around;
//   background-color: #f4f1de;
//   border: solid 0.25rem #81b29a;
//   border-radius: 10px;

//   .react-logo,
//   .javascript-logo,
//   .sass-logo,
//   .html5-logo,
//   .github-logo,
//   .bootstrap-logo,
//   .postman-student-expert,
//   .firebase-logo {
//     margin: 1rem;
//     height: 6.5rem;
//     width: 6.5rem;
//   }
// `;

export default function TechDetails() {
  return (
    <>
      <section className="tech-section">
        <div className="tech-logos">
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
        </div>
      </section>
    </>
  );
}
