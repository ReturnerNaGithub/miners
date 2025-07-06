import React from 'react';
import SocialIcons from "./SocialIcons";// Import the SocialIcons component


const Footer2 = () => {
  return (


    <div>
      <div className='news'>
        <img
          src="https://i.imgur.com/i9oyBs1.png"
          alt="reklama3"
          width={520}
          height={300}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <img
          src="https://i.imgur.com/i9oyBs1.png"
          alt="reklama4"
          width={520}
          height={300}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />


      </div>

      <div>
        <h2
          style={{
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "0.5rem",
            marginBottom:"0.2rem",
            textAlign: "center",
            gap:"20px",
            justifyContent: "center",
          }}>
          <div style={{
            
            gap:"22px"
          }}
        ><SocialIcons />
        </div>
          Powered by Gaming Studio Damana
        </h2>
        
      </div>
    </div>

  )
}

export default Footer2
