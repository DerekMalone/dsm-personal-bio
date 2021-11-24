import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// const getContactInfo = async () => {
//   const contact = axios.get(`${dbUrl}/contact-me.json`);
//   const contInfo = Object.values(contact.data);
//   return contInfo;
// };

const getContactInfo = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/contact-me.json`)
    .then((response) => resolve(Object.values(response.data)[0]))
    .catch(reject);
});

export default getContactInfo;
