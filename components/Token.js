import React from 'react'

const Token = ({src, alt}) => {
  return <img 
  src={src} 
  alt={alt}
  style={{
    width: '100px',
    height: '100%',
    objectFit:"fill",
    borderRadius:"90px",
  }}
   />;
    
};

export default Token;
