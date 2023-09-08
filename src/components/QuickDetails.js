import React, { useEffect, useState } from 'react';
import getContactInfo from '../helpers/contactMeData';

const QuickContact = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    getContactInfo().then(setContact);
  }, []);

  return (
    <>
      <div className="about-me-contact-font gitHub-style">
        <a href={contact.gitHub}>
          GitHub <i className="fab fa-github" />
        </a>
      </div>
      <div className="linked-style">
        <a href={contact.linkedIn}>
          Linkedin <i className="fab fa-linkedin" />
        </a>
      </div>
    </>
  );
};

export default QuickContact;
