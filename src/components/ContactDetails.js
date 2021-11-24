import PropTypes from 'prop-types';

import React from 'react';

export default function ContactMe({ contact }) {
  return (
    <>
      <div>
        <h3>Contact Me</h3>
        <div>
          {contact.email} <i className="far fa-envelope" />
        </div>
        <div>
          {contact.phone} <i className="fas fa-phone" />
        </div>
        <div>
          <a href={contact.gitHub}>
            Derek Malone GitHub <i className="fab fa-github" />
          </a>
        </div>
        <div>
          <a href={contact.linkedIn}>
            Derek Malone Linkedin <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </>
  );
}

ContactMe.propTypes = {
  contact: PropTypes.shape(PropTypes.obj),
};

ContactMe.defaultProps = { contact: {} };
