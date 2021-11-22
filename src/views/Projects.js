import React, { useState, useEffect } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import { getRepoList } from '../helpers/projectsData';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getRepoList().then((repoArray) => {
      if (isMounted) setRepos(repoArray);
    });
    return () => {
      isMounted = false;
    };
    // need to resolve how this is pulling repos and calling projects...
    // getProject('you-do-app').then(setProjects);
    // repos.forEach((repo) => {
    //   getProject(repo).then(setProjects); // ((prevState) => [...prevState, newRepo])
    // });
    // repos.map(() => getProject().then(setProjects));
    // setProjects(mappedRepos);
    // ;
  }, []);

  // console.warn('repo name', repos[0].repoName);
  // console.warn('repos', repos);

  return (
    <div>
      <ProjectDetails repos={repos} />
      {/* { repos ? (
        <>
          {repos.map((repo) => (
            <ProjectDetails repos={repo} />
          ))}
        </>
      ) : (
        'No Projects'
      )}; */}
    </div>
  );
}
