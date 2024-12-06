import React from 'react';
import SocialIcons from "./SocialIcons";// Import the SocialIcons component


const Footer2 = () => {
  return (


    <div>
      <div className='news'>
        <img
          src="https://white-reasonable-barnacle-530.mypinata.cloud/ipfs/QmNrfUAJ1E3WqtnwZL9XnTW37ZZVsz3AJcuCPVuzHMATnr/free%202play...png"
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
          src="https://white-reasonable-barnacle-530.mypinata.cloud/ipfs/QmNrfUAJ1E3WqtnwZL9XnTW37ZZVsz3AJcuCPVuzHMATnr/hero%20reklama.png"
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