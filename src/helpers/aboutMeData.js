/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import { firebaseConfig } from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAboutMe = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbUrl}/about-me.json`)
      .then((response) => resolve(Object.values(response.data)[0]))
      .catch(reject);
  });

export default getAboutMe;
