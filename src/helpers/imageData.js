import React from 'react';
import cloudinaryConfig from '../api/apiKeys';

const CloudinaryUploadWidget = () => {
  // componentDidMount();
  const cloudName = `${cloudinaryConfig.cloud_name}`;
  const uploadPreset = 'nd8mre0t';

  const myWidget = window.cloudinary.cloudinaryUploadWidget(
    {
      cloudName,
      uploadPreset,
    },
    (error, result) => {
      if (!error && result && result.event === 'success') {
        console.log('Done! Here is your image info: ', result.info);
        document
          .getElementById('uplodaedImage')
          .setAttribute('src', result.info.secure_url);
      }
    },
  );
  document.getElementById('upload_widget').addEventListener(
    'click',
    () => {
      myWidget.open();
    },
    false,
  );

  // render();
  return (
    <button type="button" id="upload_widget" className="cloudinary-button">
      Upload
    </button>
  );
};

export default CloudinaryUploadWidget;
