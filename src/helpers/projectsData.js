/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import { firebaseConfig } from '../api/apiKeys';

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

const getProject = async (repoName) => {
  const repo = await axios.get(`${gitHubUrl}/repos/DerekMalone/${repoName}`);
  const repoData = Object.values(repo.data);
  return repoData;
};

const createRepo = (repoItem) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${dbUrl}/projects.json`, repoItem)
      .then((obj) => {
        const fbkey = { firebaseKey: obj.data.name };
        axios
          .patch(`${dbUrl}/projects/${obj.data.name}.json`, fbkey)
          .then(() => {
            getRepoList().then(resolve);
          });
      })
      .catch(reject);
  });

const getSingleRepo = (fbKey) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbUrl}/projects/${fbKey}.json`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });

const updateRepo = async (repoItem) => {
  const repo = axios.put(`${dbUrl}/projects/${repoItem.fbKey}.json`, repoItem);
  const repoData = Object.values(repo.data);
  return repoData;
};

const deleteSingleRepo = (fbKey) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${dbUrl}/projects/${fbKey}.json`)
      .then(() => getSingleRepo().then(resolve))
      .catch(reject);
  });

export {
  getProject,
  getRepoList,
  createRepo,
  updateRepo,
  getSingleRepo,
  deleteSingleRepo,
};
