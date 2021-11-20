import React, { useState, useEffect } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import { getProject, getRepoList } from '../helpers/projectsData';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [projects, setProjects] = useState({});

  useEffect(() => {
    getRepoList().then(setRepos); // need to resolve how this is pulling repos and calling projects...
    getProject('you-do-app').then(setProjects);
    // repos.forEach((repo) => {
    //   getProject(repo).then(setProjects); // ((prevState) => [...prevState, newRepo])
    // });
    // repos.map(() => getProject().then(setProjects));
    // setProjects(mappedRepos);
    // ;
  }, []);

  console.warn('projects', projects);
  console.warn('repo name', repos.repoName);
  console.warn('repos', repos);

  return (
    <div>
      <ProjectDetails repos={repos} />
    </div>
  );
}
