"use client";

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { useEffect, useState } from "react";
import { claimTo, getNFTs, ownerOf, totalSupply } from "thirdweb/extensions/erc721";
import { ConnectButton, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { NFT_CONTRACT } from "../utils/contracts";
import { NFT } from "thirdweb";
import { NFTCard } from "./NFTCard";


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
    contract: NFT_CONTRACT,
    method: "getStakeInfo",
    params: [account?.address||""]
});

    if(account){
        return(
            <div style= {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:"#1515",
            borderRadius:"8px",
            width:"500px",
            padding: "20px",
            
            
            }}>
<ConnectButton
 client = {client}
 chain= {chain}
/>
<div style= {{
display: 'flex',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
margin: "20px 0",
width: "100%",
}}>

<h2 style={{marginRight: "20px"}}>Your GSD NFT vote token to claim</h2>

<TransactionButton
transaction={() => (
claimTo({
    contract: NFT_CONTRACT,
    to: account?.address || "",
    quantity: BigInt(1),
})

)}
onTransactionConfirmed={() => {
    alert("Your journey begins");
    getOwnedNFTs();
}}
style= {{
    fontSize: '12px',
    backgroundColor:"#1555ff15",
    color: "white",
    borderRadius:"18px",
    padding: "20px 20px",
}}


>Claim NFT</TransactionButton>

</div>
<hr style={{
width: "100%",
border: "1px solid #333"

}}/>
<div style={{
    margin: "20px 0",
    width: "100%",
    
    }}>

<h2>Owned GSD NFT</h2>

<div style={{
    display: "flex",
    flexDirection:"row",
    flexWrap: "wrap",
    width:"500px"
}}>
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

<p>You own 0 NFTs</p>

    )}

</div>
</div>

 </div>
        )
    }

}