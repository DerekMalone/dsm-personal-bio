import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getProject, deleteSingleRepo } from '../helpers/projectsData';

export default function ProjectDetails({ repo, user }) {
  const [projects, setProjects] = useState({});

  const history = useHistory();

  const handleDelete = () => {
    console.warn('delete clicked', repo.firebaseKey);
    deleteSingleRepo(repo.firebaseKey).then(() => history.push('/'));
  };

  useEffect(() => {
    getProject(repo.repoName).then(setProjects);
  }, []);

  return (
    <>
      {user ? (
        <article className="project-detail">
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
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </article>
      ) : (
        <article className="project-detail">
          <h2 className="name-style">{repo.repoName}</h2>
          <h3 className="projects-style">{projects[7]}</h3>
          <a href={projects[6]}>Go to Project</a>
        </article>
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
