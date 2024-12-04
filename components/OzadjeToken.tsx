import React from "react";

const OzadjeToken = () => {
  const gradientStyle = {
    height: "100vh", // Full screen height
    background: "linear-gradient(45deg, #ff7e5f, #feb47b)", // Replace colors as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "24px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={gradientStyle}>
      <h1>Beautiful Gradient Background</h1>
    </div>
  );
};

export default OzadjeToken;
