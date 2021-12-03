import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import  from 'react';
import styled from 'styled-components';
import { getProject } from '../helpers/projectsData';

const ProjectDiv = styled.div`
  justify-content: space-around;
  align-content: space-around;
  border: solid 2px #e07a5f;
  border-radius: 10px;
  width: 95vw;
  margin: 15px;
  background-color: #81b29a;

  .name-style {
    color: #f2cc8f;
  }

  .projects-style {
    color: #3d405b;
  }
`;

export default function ProjectDetails({ repo, user }) {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    getProject(repo.repoName).then(setProjects);
  }, []);

  return (
    <>
      {user ? (
        <ProjectDiv>
          <h2 className="name-style">{repo.repoName}</h2>
          <h3 className="projects-style">{projects[7]}</h3>

          <div className="card-btn-container">
            <a href={projects[6]} type="button" className="btn btn-link">
              Go to Project
            </a>
            <Link
              to={`/edit/${repo.firebaseKey}`}
              type="button"
              className="btn btn-success"
            >
              Edit
            </Link>
          </div>
        </ProjectDiv>
      ) : (
        <ProjectDiv>
          <h2 className="name-style">{repo.repoName}</h2>
          <h3 className="projects-style">{projects[7]}</h3>
          <a href={projects[6]}>Go to Project</a>
        </ProjectDiv>
      )}
    </>
  );
}

ProjectDetails.propTypes = {
  repo: PropTypes.shape(PropTypes.obj),
  user: PropTypes.shape({
    firebaseKey: PropTypes.string,
    repoName: PropTypes.string,
    repoUrl: PropTypes.string,
    uid: PropTypes.string,
  }),
};

ProjectDetails.defaultProps = { repo: {}, user: {} };
