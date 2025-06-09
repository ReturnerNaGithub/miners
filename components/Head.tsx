import { chain } from '@/app/chain';
import { client } from '@/app/client';
import React from 'react';
import { ConnectButton } from "thirdweb/react";

const Head = () => {
  return (



    <div className='header'>

     <a 
href="https://www.facebook.com/GamingStudioDamana"  
target="_blank" 
rel="noopener noreferrer">
  <img src="https://drive.google.com/drive/folders/1XmIutqFT9xYLx5AYlUK9osGxVCYJJsID"
  alt="logo"
  height={100}
  width={200} />
</a>
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
