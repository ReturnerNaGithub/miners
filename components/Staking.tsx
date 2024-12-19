"use client";

import { useEffect, useState } from "react";
import { claimTo, getNFTs, ownerOf, totalSupply } from "thirdweb/extensions/erc721";
import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";

import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { NFT} from "thirdweb";
import { NFTCard } from "./NFTCard";
import { StakedNFTCard } from "./StakedNFTCard";
import { StakeRewards } from "./StakeRewards";



export const Staking = () => {
    const account = useActiveAccount();

    const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);

    const getOwnedNFTs = async () => {
        let ownedNFTs: NFT[] = [];

        const totalNFTSupply = await totalSupply({
            contract: NFT_CONTRACT
        });
        const nfts = await getNFTs({
            contract: NFT_CONTRACT,
            start: 0,
            count:  parseInt (totalNFTSupply.toString())
        });

        for(let nft of nfts) {
            const owner = await ownerOf({
                contract: NFT_CONTRACT,
                tokenId: nft.id
            });

            if(owner === account?.address){
                ownedNFTs.push(nft);
            }
        }
        setOwnedNFTs(ownedNFTs);

    };

    useEffect(() => {
        if(account){
            getOwnedNFTs();
        }
    }, [account]);

    const {
        data: stakedInfo,
        refetch: refetchStakedInfo
    } = useReadContract({
        contract: STAKING_CONTRACT,
        method: "getStakeInfo",
        params: [ account?.address || "" ]
    });

    if(account){
        return(

            <div style= {{
                justifyContent: "center",
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                opacity: 0.7,
                padding: "4px 4px",
            marginTop:"18px",
            backgroundColor:"#151515",


            }}>

                <div className="max-w-2xl pr-12 mr-2">
                    <div className="gsd-nft" >
                        <div className="w-1/2 mb-12">
                            <img
                                src="https://white-reasonable-barnacle-530.mypinata.cloud/ipfs/QmPP1BoLfaSjiSazUguD31ukkVGXBXr9HsAPg5iq3Xu25p"
                                alt="panel"
                                width={850}
                                height={600}
                                style={{
                                    maxWidth: '100%',
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain"
                                  }}
                            />
                        </div>
                        <div className="gsd-nft-subgrp">
                            <h2 style= {{
                                justifyContent: "center",
           fontSize:"44px",
                                padding: "4px 4px",
            marginTop:"18px",

                            }}>GSD NFT</h2>
                            <div className="w-1/3 pr-16 py-16 ">

                                By purchasing this NFT,
                                you’ll begin earning MINE tokens.
                                As the primary investor and shareholder,
                                holding this GSD grants you the exclusive opportunities like:
                                <li>to produce MINE game tokens
                                    as the first and only holder.</li>
                                <li>VIP section for Airdrops and Pre-sale</li>
                                <li>Shareholding Discord room</li>
                                <li>Placing MINE tokens on the market and determent the price</li>
                                <li>First testing players before Level in the game comes out</li>
                                <li>You can have only 1 GSD in your wallet</li>
                            </div>


                            <TransactionButton
                                transaction={() => (
                                    claimTo({
                                        contract: NFT_CONTRACT,
                                        to: account?.address || "",
                                        quantity: BigInt(1),
                                    })

                                )}
                                onTransactionConfirmed={() => {
                                    alert("Congratulation,Your journey begins");
                                    getOwnedNFTs();
                                }}
style= {{
    display:"flex",
                                    fontSize: '12px',
    backgroundColor:"#116c7a",
                                    color: "white",
    borderRadius:"18px",
                                    padding: "10px 10px",
    marginTop:"42px",
                                    height: "50px",
    width:"10px",
                                }}
                            >Buy NFT</TransactionButton>
                             <div>
               <div><h4
                style= {{
                    display:"flex",
                    fontSize: '28px',
                    color: "white",
                    marginLeft:"16px",
                    textDecoration: "line-through",
                    gap:"12px"
                }}
                >
                    Price: 500 POL<span style={{
                    textDecoration:"none",
                    display:"flex",
                    fontSize: '16px',
                    color: "white",
                    backgroundColor:"#116c7a",
                    padding: "10px 10px",
                    border:"dots",
                    borderRadius:"18px",
                }}>Next Halving 0,5 MINE Daily</span></h4>
               
                </div> 
<div>
                <h4
                style= {{
                    display:"flex",
                    fontSize: '26px',
                    color: "white",
                    marginLeft:"16px",
                    
                                                }}
                >Price: 300 POL</h4>

                
                </div>
                </div>
                        </div>
                    </div>
                </div>





                <div className="gsd-box" style={{

    width: "fit-content",
   backgroundColor: "black",
    padding: "20px",
    marginTop:"12px",
    }}>
<h2>Your GSD NFT</h2>

                    <div style={{
                        marginTop:"12px 0",
                    }}>
                        <p style={{
                        }}>

                        </p>
                        <p style={{
                            marginTop: "10px",
                        }}>Daily Rewards: 1 MINE token</p>
                        {ownedNFTs && ownedNFTs.length > 0 ? (
ownedNFTs.map((nft) =>(
                                <NFTCard
                                    key={nft.id}
                                    nft={nft}
                                    refetchOwnedNFTs={getOwnedNFTs}
                                    refetchStakedInfo={refetchStakedInfo}
                                />

                            ))
                        ) : (

                            <p>You own: 0 GSD</p>

                        )}

                    </div>


                </div>

<StakeRewards/>

                <div>

                </div>
           

                <div className="gsd-box" style={{

width: "fit-content",
backgroundColor:"black",
borderRadius:"16px",
padding: "20px",
marginTop:"12px",
}}>
                    <h2 style={{
justifyContent: "center",
alignItems: 'center',
                    }}>Staked GSD</h2>
<div style={{
     display: "flex",
     width: "100%",
      flexDirection: "row",
       flexWrap: "wrap",
        alignItems: 'center',
justifyContent: "center"
}}>

{stakedInfo && stakedInfo [0].length > 0 ? (
                            stakedInfo[0].map((tokenId: bigint) => (
                                <StakedNFTCard
                                    key={tokenId}
                                    tokenId={tokenId}
                                    refetchStakedInfo={refetchStakedInfo}
                                    refetchOwnedNFTs={getOwnedNFTs}
                                />
                            ))
                        ) : (

    <p> You have 0 staked GSD </p>
)}
</div>
</div>
</div>
        )
    }

}
