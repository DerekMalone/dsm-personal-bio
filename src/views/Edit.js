import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectsForm from '../components/ProjectsForm';
import { getSingleRepo } from '../helpers/projectsData';

export default function Edit() {
  const { fbKey } = useParams();
  const [editItem, setEditItem] = useState({});

  // working on resolving params being passed and

  useEffect(() => {
    getSingleRepo(fbKey).then(setEditItem);
  });

  return (
    <div>
      <div className="formContainer">
        <ProjectsForm user={editItem} />
      </div>
    </div>
  );
}
