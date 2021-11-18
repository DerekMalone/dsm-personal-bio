import React, { useState, useEffect } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import { getRepoList } from '../helpers/projectsData';

export default function Projects() {
  const [repos, setRepos] = useState({});
  useEffect(() => {
    getRepoList().then(setRepos);
  }, []);

  console.warn(repos);

  return (
    <div>
      <ProjectDetails repos={repos} />
    </div>
  );
}
