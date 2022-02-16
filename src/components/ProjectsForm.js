import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { createRepo, getSingleRepo, updateSingleRepo } from '../helpers/projectsData';

const FormContainer = styled.div`
  margin: 2rem;
`;

const H3 = styled.h3`
  align: center;
  color: #e07a5f;
`;

const FormInput = styled.div`
  border: solid 0.25rem #81b29a;
  border-radius: 10px;
`;

const initialState = {
  firebaseKey: '',
  repoName: '',
  repoUrl: '',
  uid: '',
};

const ProjectsForm = () => {
  const [formInput, setFormInput] = useState({});
  const { fbKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (fbKey) {
      getSingleRepo(fbKey).then((obj) => {
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
      updateSingleRepo(formInput).then(() => {
        resetForm();
        history.push('/projects');
      });
    } else {
      console.warn('no user');
      createRepo({ ...formInput }).then(() => {
        // , uid: user.uid
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <FormContainer>
      <H3 className="add-edit-style">Add/Edit Projects</H3>
      <FormInput>
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
      </FormInput>
    </FormContainer>
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
