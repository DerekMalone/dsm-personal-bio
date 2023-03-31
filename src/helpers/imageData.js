import { Cloudinary } from '@cloudinary/url-gen';
// import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'Personal Bio Site',
  },
});

// const myImage = cld.image('sample');

export default cld;
