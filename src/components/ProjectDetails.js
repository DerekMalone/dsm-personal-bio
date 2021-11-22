import PropTypes from 'prop-types';
import React from 'react';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { getProject } from '../helpers/projectsData';

export default function ProjectDetails({ repos }) {
  const [projects, setProjects] = useState({});
  const projectArray = [];

  useEffect(() => {
    repos.map((repo) => {
      console.warn('debug', repo);
      getProject(repo.repoName).then((response) => response.push(projectArray));
      setProjects(projectArray);
      return setProjects;
    });
    // setProjects(projectArray);
    // for (let i = 0; i < repos.length; i++) {
    //   getProject(repos[i].repoName).then((response) => projectArray.push(response));
    // }
    // setProjects(projectArray);
  }, []);

  console.warn('list of repos', repos);
  console.warn('project', projects.name);

  return (
    <>
      <div>
        <hr />
        <h3>{projects.name}</h3>
        <hr />
        <a href={projects.html_url}>Go to Project</a>
      </div>
    </>
  );
}

ProjectDetails.propTypes = {
  repos: PropTypes.shape(PropTypes.obj),
};

ProjectDetails.defaultProps = { repos: {} };
