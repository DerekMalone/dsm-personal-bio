import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import PropTypes from 'prop-types';
import { getProject } from '../helpers/projectsData';

export default function ProjectDetails({ repos }) {
  const [projects, setProjects] = useState({});
  useEffect(() => {
    // const  = (...repos);
    repos.map(() => getProject().then(setProjects));
    // setProjects(mappedRepos);
    // ;
  }, []);
  console.warn('debug', projects);

  return (
    <div>
      <h1>Top 4 Projects Go Here</h1>
      <div>{/* <h3></h3> */}</div>
    </div>
  );
}

ProjectDetails.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object),
};

ProjectDetails.defaultProps = { repos: [] };
