import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: wrap:
  width: 100vw;
  width: 95vw;
  height: 100vh;
  margin: 15px;

  .name-style {
    justify-content: center;
    margin-left: 35vw;
    margin-right: ;
    color: #F2CC8F;
  }

  .about-style {
    flex: wrap;
    justify-content: space-around;
    width: 90%
  }

  .about-font-style {
    color: #81B29A;
  }

  .photo {
    flex: wrap;
    width: 100%;
    height: 100%;
  }

`;

export default function AboutMeDetail({ aboutMe }) {
  return (
    <Container>
      <div>
        <div className="name-style">
          <h1>{aboutMe.name}</h1>
        </div>
        <div>
          <div className="about-style">
            <p className="about-font-style">{aboutMe.about}</p>
          </div>
        </div>
        <div>
          <a href={aboutMe.photoHref}>
            <img
              className="photo"
              src={aboutMe.photoUrl}
              title={aboutMe.photoTitle}
              alt={aboutMe.name}
            />
          </a>
        </div>
      </div>
    </Container>
  );
}

AboutMeDetail.propTypes = {
  aboutMe: PropTypes.shape(PropTypes.obj),
};

AboutMeDetail.defaultProps = { aboutMe: {} };
