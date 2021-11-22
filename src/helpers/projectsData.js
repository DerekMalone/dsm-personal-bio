import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const gitHubUrl = 'https://api.github.com';

// const getRepoList = () => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/projects.json`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch(reject);
// });

const getRepoList = async () => {
  const repoList = axios
    .get(`${dbUrl}/projects.json`)
    .then((response) => Object.values(response.data));
  return repoList;
};

// const getProject = (repo) => new Promise((resolve, reject) => {
//   axios.get(`${gitHubUrl}/repos/DerekMalone/${repo}`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch(reject);
// });

const getProject = async (repoArray) => {
  const repo = await axios.get(`${gitHubUrl}/repos/DerekMalone/${repoArray}`);
  const repoData = Object.values(repo.data);
  return repoData;
};

export { getProject, getRepoList };
