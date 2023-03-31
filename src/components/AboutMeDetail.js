import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 15px;
  border: 5px solid black;

  .about-style {
    justify-content: space-around;
  }

  .about-font-style {
    color: #81b29a;
  }

  .photo {
    width: 100%;
    height: auto;
  }

  .name-style {
    justify-content: center;
    color: #f2cc8f;
  }
`;

/*
.infoContainer {
    border: 5px solid black;
  }
*/

export default function AboutMeDetail({ aboutMe }) {
  return (
    <Container>
      <a href={aboutMe.photoHref}>
        <img
          className="photo"
          src={aboutMe.photoUrl}
          title={aboutMe.photoTitle}
          alt={aboutMe.name}
        />
      </a>
      <div className="infoContainer">
        <div className="name-style">
          <h1>{aboutMe.name}</h1>
        </div>
        <div>
          <div className="about-style">
            <p className="about-font-style">{aboutMe.about}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

AboutMeDetail.propTypes = {
  aboutMe: PropTypes.shape(PropTypes.obj),
};

AboutMeDetail.defaultProps = { aboutMe: {} };
