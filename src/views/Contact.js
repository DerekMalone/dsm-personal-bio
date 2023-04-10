import React, { useEffect, useState } from 'react';
import ContactMe from '../components/ContactDetails';
import getContactInfo from '../helpers/contactMeData';

export default function Contact() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    getContactInfo().then(setContact);
  }, []);

  return (
    <div className="main-content">
      <ContactMe contact={contact} />
    </div>
  );
}
