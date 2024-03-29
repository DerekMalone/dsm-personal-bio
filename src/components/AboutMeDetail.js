import PropTypes from 'prop-types';
import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   margin: 15px;
//   border: 5px solid black;

//   .about-style {
//     justify-content: space-around;
//   }

//   .about-font-style {
//     color: #81b29a;
//   }

//   .photo {
//     width: 50%;
//     height: auto;
//   }

//   .name-style {
//     justify-content: center;
//     color: #f2cc8f;
//   }
//   .infoContainer {
//     flex: wrap;
//     border: 5px solid black;
//     width: 100vw;
//   }
// `;

export default function AboutMeDetail({ aboutMe }) {
  return (
    <article className="about-me-detail-container">
      <img
        className="photo"
        src={aboutMe.photoUrl}
        title={aboutMe.photoTitle}
        alt={aboutMe.name}
      />
      <div className="infoContainer">
        <div>
          <div className="about-style">
            <p className="about-font-style">{aboutMe.about}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

AboutMeDetail.propTypes = {
  aboutMe: PropTypes.shape(PropTypes.obj),
};

AboutMeDetail.defaultProps = { aboutMe: {} };
