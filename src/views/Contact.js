import React, { useEffect, useState } from 'react';
import ContactMe from '../components/ContactDetails';
import getContactInfo from '../helpers/contactMeData';

export default function Contact() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    getContactInfo().then(setContact);
  }, []);

  console.warn('debug', contact);

  return (
    <div>
      <ContactMe contact={contact} />
    </div>
  );
}
