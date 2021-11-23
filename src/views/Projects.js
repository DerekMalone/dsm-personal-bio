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
  }, []);

  console.warn(repos);

  return (
    <div>
      {repos ? (
        <>
          {repos.map((repo) => (
            <ProjectDetails key={repo.repoName} repo={repo} />
          ))}
        </>
      ) : (
        'No Projects'
      )}
      ;
    </div>
  );
}
