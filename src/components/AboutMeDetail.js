import PropTypes from 'prop-types';
import React from 'react';
// , { useEffect }
// let aboutMeDetails = {};

export default function AboutMeDetail({ aboutMe }) {
  return (
    <>
      <h1>{aboutMe.name}</h1>
      <div>
        <p>{aboutMe.about}</p>
        <hr />
        <a href={aboutMe.photoHref}>
          <img
            src={aboutMe.photoUrl}
            title={aboutMe.photoTitle}
            alt={aboutMe.name}
          />
        </a>
      </div>
    </>
  );
}

AboutMeDetail.propTypes = {
  aboutMe: PropTypes.shape(PropTypes.obj),
};

AboutMeDetail.defaultProps = { aboutMe: {} };
