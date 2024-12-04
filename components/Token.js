import React from 'react'

const Token = ({src, alt}) => {
  return <img 
  src={src} 
  alt={alt}
  style={{
    width: '150px',
    height: '150%',
    objectFit:"contain",
    borderRadius:"50px",
  }}
   />;
    
};

export default Token;
