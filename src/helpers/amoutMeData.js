import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAboutMe = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/about-me.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export default getAboutMe;
