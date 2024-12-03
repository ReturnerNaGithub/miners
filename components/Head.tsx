import { chain } from '@/app/chain';
import { client } from '@/app/client';
import React from 'react';
import { ConnectButton } from "thirdweb/react";

const Head = () => {
  return (


            <div style= {{

flexDirection: 'row',
width: "100%",
height:"60px",
display: "flex", 
gap: "1140px",
alignItems: 'flex-start', // Align items to the left
    justifyContent: 'flex-start', // Align items to the top
    padding: "10px 4px",

            }}>
                <img
  src="https://white-reasonable-barnacle-530.mypinata.cloud/ipfs/Qma49LjDEwqz3TePcBrWUwtviui9YJwHEHqqXXShYy4jgp/Miners%20nation%20-%20LOGO%20-%20BG.png"
  alt="logo"
  height={100}
  width={200}
  style={{ marginTop: -20 }}
/>
 
<ConnectButton
client = {client}
chain= {chain}



/> 
            </div>

    
  )
}


export default Head