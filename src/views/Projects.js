import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectDetails from '../components/ProjectDetails';
import { getRepoList } from '../helpers/projectsData';

export default function Projects({ user }) {
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

  return (
    <div className="card-box">
      {repos ? (
        <>
          {repos.map((repo) => (
            <ProjectDetails key={repo.repoName} repo={repo} user={user} />
          ))}
        </>
      ) : (
        'No Projects'
      )}
    </div>
  );
}

Projects.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Projects.defaultProps = { user: null };
