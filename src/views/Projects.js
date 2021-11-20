import React, { useState, useEffect } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import { getProject, getRepoList } from '../helpers/projectsData';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [projects, setProjects] = useState({});

  useEffect(() => {
    getRepoList().then(setRepos);
    setProjects(repos);
    repos.forEach((repo) => {
      getProject(repo.repo_name).then(setProjects); // ((prevState) => [...prevState, newRepo])
    });
    // repos.map(() => getProject().then(setProjects));
    // setProjects(mappedRepos);
    // ;
  }, []);
  // console.warn('repo name', repos.repo_name);
  console.warn('repos', repos);
  console.warn('projects', projects);

  return (
    <div>
      <ProjectDetails repos={repos} />
    </div>
  );
}
