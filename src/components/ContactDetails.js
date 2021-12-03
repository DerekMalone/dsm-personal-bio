import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const ContactCard = styled.div`
  justify-content: center;
  margin: 5rem 20vw;
  border: solid 2px #e07a5f;
  border-radius: 10px;
  background-color: #81b29a;
  width: 75vw;

  .contents-style {
    flex: wrap;
    justify-content: space-between;
  }

  .contact-style {
    justify-content: center;
    margin: 1rem;
    width: 100%;
    color: #f2cc8f;
  }

  .email-style {
    justify-content: center;
    margin: 1rem;
    flex: wrap;
    width: 100%;
  }

  .phone-style {
    justify-content: center;
    margin: 1rem;
    flex: wrap;
    width: 100%;
  }

  .gitHub-style {
    justify-content: center;
    margin: 5px;
    flex: wrap;
    width: 100%;
  }

  .linked-style {
    justify-content: center;
    margin: 5px;
    flex: wrap;
    width: 100%;
  }
`;

export default function ContactMe({ contact }) {
  return (
    <>
      <ContactCard>
        <div className="contents-style">
          <div className="contact-style">
            <h3>Contact Me</h3>
          </div>
          <div className="email-style">
            {contact.email} <i className="far fa-envelope" />
          </div>
          <div className="phone-style">
            {contact.phone} <i className="fas fa-phone" />
          </div>
          <div className="gitHub-style">
            <a href={contact.gitHub}>
              Derek Malone GitHub <i className="fab fa-github" />
            </a>
          </div>
          <div className="linked-style">
            <a href={contact.linkedIn}>
              Derek Malone Linkedin <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </ContactCard>
    </>
  );
}

ContactMe.propTypes = {
  contact: PropTypes.shape(PropTypes.obj),
};

ContactMe.defaultProps = { contact: {} };
