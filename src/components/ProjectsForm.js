import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createRepo, getSingleRepo } from '../helpers/projectsData';

const initialState = {
  firebaseKey: '',
  repoName: '',
  repoUrl: '',
  uid: '',
};

const ProjectsForm = ({ user }) => {
  const [formInput, setFormInput] = useState({});
  const { fbKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (fbKey) {
      getSingleRepo().then((obj) => {
        // fbkey
        setFormInput({
          firebaseKey: obj.firebaseKey,
          repoName: obj.repoName,
          repoUrl: obj.repoUrl,
        });
      });
    } else {
      setFormInput(initialState);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fbKey) {
      console.warn('user active');
      //   updateItem(formInput).then(() => {
      resetForm();
      history.push('/');
      //   });
    } else {
      console.warn('no user');
      createRepo({ ...formInput, uid: user.uid }).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <>
      <form className="stuff-form junk-div-style" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="form-control"
            name="repoName"
            value={formInput.repoName || ''}
            onChange={handleChange}
            placeholder="GitHub Repo Name"
            required
          />
        </div>
        <div>
          <input
            type="url"
            className="form-control"
            name="repoUrl"
            value={formInput.repoUrl || ''}
            onChange={handleChange}
            placeholder="GitHub Repo URL"
            required
          />
        </div>
        <div className="form-btn-group">
          <button type="submit" className="btn btn-success">
            {fbKey ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </>
  );
};

ProjectsForm.propTypes = {
  user: PropTypes.shape({
    firebaseKey: PropTypes.string,
    repoName: PropTypes.string,
    repoUrl: PropTypes.string,
    uid: PropTypes.string,
  }),
};

ProjectsForm.defaultProps = { user: {} };

export default ProjectsForm;
