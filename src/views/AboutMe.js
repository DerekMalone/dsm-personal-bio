import React, { useState, useEffect } from 'react';
import AboutMeDetail from '../components/AboutMeDetail';
import getAboutMe from '../helpers/amoutMeData';

export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState({});

  useEffect(() => {
    let isMounted = true;
    getAboutMe().then((repoArray) => {
      if (isMounted) setAboutMe(repoArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  console.warn('About Me', aboutMe);

  return (
    <div>
      <AboutMeDetail key={aboutMe.id} aboutMe={aboutMe} />
    </div>
  );
}
