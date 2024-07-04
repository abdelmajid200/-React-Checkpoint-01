import React from 'react';
import './Image.css'
function Image({ imageUrl, altText }) {
  
  return <img src={imageUrl} alt={altText} />;

}

export default Image;
