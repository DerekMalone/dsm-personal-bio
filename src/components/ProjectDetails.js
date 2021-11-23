import PropTypes from 'prop-types';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { getProject } from '../helpers/projectsData';

export default function ProjectDetails({ repo }) {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    getProject(repo.repoName).then(setProjects);
  }, []);

  return (
    <>
      <div>
        <h2>{repo.repoName}</h2>
        <hr />
        <h3>{projects[7]}</h3>
        <hr />
        <a href={projects[6]}>Go to Project</a>
        <hr />
      </div>
    </>
  );
}

ProjectDetails.propTypes = {
  repo: PropTypes.shape(PropTypes.obj),
};

ProjectDetails.defaultProps = { repo: {} };
