import React, { useEffect, useState } from 'react';

const BannerImage = () => {
  const [img, setImg] = useState('');

  useEffect(() => {
    setImg(
      'https://res.cloudinary.com/dingomalone/image/upload/v1680299032/Personal%20Bio%20Site/IMG_6109_tfmtta_168a0c.jpg',
    );
  }, []);

  return (
    <div className="image-container">
      <img className="banner-image" src={img} alt="panorama of mountains" />
    </div>
  );
};

export default BannerImage;
