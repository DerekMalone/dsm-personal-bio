import PropTypes from 'prop-types';
import React from 'react';

export default function ContactMe({ contact }) {
  return (
    <>
      <article className="contact-card">
        {/* <div className="contents-style"> */}
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
        {/* </div> */}
      </article>
    </>
  );
}

ContactMe.propTypes = {
  contact: PropTypes.shape(PropTypes.obj),
};

ContactMe.defaultProps = { contact: {} };
