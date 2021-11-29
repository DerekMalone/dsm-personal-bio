import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const ContactCard = styled.div`
  display: flex;
  margin: 5vh 20vw;
  border: solid 2px #e07a5f;
  border-radius: 10px;
  background-color: #81b29a;
  width: 50vw;

  .contents-style {
    flex: wrap;
    justify-content: space-between;
  }

  .contact-style {
    margin: 5px 100%;
    width: 100%;
    color: #f2cc8f;
  }

  .email-style {
    margin: 5px 85%;
    flex: wrap;
    width: 100%;
  }

  .phone-style {
    margin: 5px 105%;
    flex: wrap;
    width: 100%;
  }

  .gitHub-style {
    margin: 5px 90%;
    flex: wrap;
    width: 100%;
  }

  .linked-style {
    margin: 5px 90%;
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
