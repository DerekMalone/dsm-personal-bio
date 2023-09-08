import React, { useState, useEffect } from 'react';
import AboutMeDetail from '../components/AboutMeDetail';
import getAboutMe from '../helpers/aboutMeData';
import BannerImage from '../components/BannerImage';
import QuickContact from '../components/QuickDetails';

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
    <div className="main-content">
      <BannerImage />
      <AboutMeDetail key={aboutMe.id} aboutMe={aboutMe} />
      <div className="about-me-contact">
        <a className="about-me-contact-font" href="/contact">
          Quick Links
        </a>
        <QuickContact />
      </div>
    </div>
  );
}
