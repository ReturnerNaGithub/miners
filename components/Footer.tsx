import React from 'react'

const Footer = () => {
  return (


    <div>
    <div style={{
      display: 'flex',
      backgroundColor: '#116c7a',
      borderRadius: '0.5rem',
      marginTop:"1 rem",
      
      
    }}>
      <div className="mt-0">
        <img
          src="https://white-reasonable-barnacle-530.mypinata.cloud/ipfs/Qma49LjDEwqz3TePcBrWUwtviui9YJwHEHqqXXShYy4jgp/Miners%20nation%20-%20LOGO%20-%20BG.png"
          alt="reklama1"
          width={800}
          height={400}
        />
      </div>
      <div>
        <h2 >App for STAKING NFTs</h2>

        <h4 className="text-2xl font-bold mb-2 ">Welcome to our NFT staking app! By staking your NFT, you will earn MINE tokens as rewards. These tokens will have utility in the upcoming game, offering you exclusive benefits and opportunities.</h4>
        <h2 className="text-2xl font-bold mb-2 ">Why stake your NFT?</h2>

        <li>Produce MINE game tokens as the first and only holder.</li>
        <li>Access the VIP section for airdrops and pre-sale opportunities.</li>
        <li>Join an exclusive shareholding Discord room.</li>
        <li>Play a role in setting the market price for MINE tokens.</li>
        <li>Become one of the first testing players before new game levels are released.</li>
        <li>Please note: You can have only 1 GSD NFT in your wallet.</li>

        <h2 className="text-2xl font-bold mb-2">Stake now and secure your place in the MINE ecosystem!</h2>

      </div>
    </div>

    <div>
    <h2 
  style={{
    color: "white", 
    fontSize: "2.2rem", 
    fontWeight: "bold", 
    marginTop: "0.5rem",
    marginBottom:"0.5rem", 
    textAlign: "center",
    justifyContent: "center",
  }}
>
  News
</h2>
    </div>
    </div>
  
  )
}

export default Footer
