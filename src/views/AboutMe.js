import React, { useState, useEffect } from 'react';
import AboutMeDetail from '../components/AboutMeDetail';
import getAboutMe from '../helpers/aboutMeData';
import BannerImage from '../components/BannerImage';

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

  return (
    <>
      <div>
        <BannerImage />
      </div>
      <div>
        <AboutMeDetail key={aboutMe.id} aboutMe={aboutMe} />
      </div>
    </>
  );
}
