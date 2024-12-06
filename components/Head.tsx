import { chain } from '@/app/chain';
import { client } from '@/app/client';
import React from 'react';
import { ConnectButton } from "thirdweb/react";

const Head = () => {
  return (


    <div className='header'>
      <img
        src="https://white-reasonable-barnacle-530.mypinata.cloud/ipfs/Qma49LjDEwqz3TePcBrWUwtviui9YJwHEHqqXXShYy4jgp/Miners%20nation%20-%20LOGO%20-%20BG.png"
        alt="logo"
        height={100}
        width={200}
        className='logo'
      />
     <button className=' back-btn'>Back to WebPage</button>

      <ConnectButton
        client = {client}
        chain= {chain}
        connectButton={{
          style: {
          minWidth: "165px",
          height: "50px",
          },
          className: 'connect-btn', // Custom CSS class for additional styling
        }}
      />
    </div>


  )
}


export default Head