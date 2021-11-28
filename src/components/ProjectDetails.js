import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'; // useParams,
import { useEffect, useState } from 'react/cjs/react.development';
import { getProject } from '../helpers/projectsData';

// let userStatus = false;

export default function ProjectDetails({ repo, user }) {
  // const { fbKey } = useParams({});
  const [projects, setProjects] = useState({});

  useEffect(() => {
    getProject(repo.repoName).then(setProjects);
  }, []);

  return (
    <>
      {user ? (
        <div>
          <h2>{repo.repoName}</h2>
          <hr />
          <h3>{projects[7]}</h3>
          <hr />
          <a href={projects[6]}>Go to Project</a>
          <hr />
          <div className="card-btn-container">
            <Link
              to={`/edit/${repo.id}`}
              type="button"
              className="btn btn-success"
            >
              Edit
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h2>{repo.repoName}</h2>
          <hr />
          <h3>{projects[7]}</h3>
          <hr />
          <a href={projects[6]}>Go to Project</a>
          <hr />
        </div>
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
