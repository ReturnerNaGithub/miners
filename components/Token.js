import React from 'react'

const Token = ({src, alt}) => {
  return <img 
  src={src} 
  alt={alt}
  style={{
    width: '200px',
    height: '100%',
    objectFit:"contain"
  }}
   />;
    
};

export default Token;
