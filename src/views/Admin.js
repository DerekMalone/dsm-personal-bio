import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import CloudinaryUploadWidget from '../helpers/imageData';

const Admin = ({ user }) => {
  const [userState, setUserState] = useState({});

  useEffect(() => {
    setUserState(user);
  }, []);

  //   <button id="upload_widget" class="cloudinary-button">Upload files</button>

  // <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>

  // <script type="text/javascript">
  //

  //   const postNewPhoto = () => {
  //     const myWidget = cloudinary.createUploadWidget(
  //       {
  //         cloudName: 'my_cloud_name',
  //         uploadPreset: 'my_preset',
  //       },
  //       (error, result) => {
  //         if (!error && result && result.event === 'success') {
  //           console.log('Done! Here is the image info: ', result.info);
  //         }
  //       },
  //     );
  //   };

  // document.getElementById("upload_widget").addEventListener("click", function(){
  //     myWidget.open();
  //   }, false);
  // </script>

  return (
    <div className="main-content">
      <h1>Admin Panel</h1>
      <div>Welcome {userState.fullName}</div>
      <div>Stuff should go here.</div>
      <div>Upload new profile photo:</div>
      {/* <CloudinaryUploadWidget />  need to resolve this... */}
    </div>
  );
};

Admin.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Admin.defaultProps = { user: null };

export default Admin;
