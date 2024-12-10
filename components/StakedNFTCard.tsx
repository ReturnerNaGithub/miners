import { getNFT } from "thirdweb/extensions/erc721";
import { MediaRenderer, TransactionButton, useReadContract } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { prepareContractCall } from "thirdweb";
import { client } from "@/app/client";

type StakedNFTCardProps = {
    tokenId: bigint,
    refetchStakedInfo: () => void;
    refetchOwnedNFTs: () => void;
};
 export const StakedNFTCard = ({ tokenId, refetchStakedInfo, refetchOwnedNFTs }: StakedNFTCardProps) => {

 const{
    data:nft
 } = useReadContract (
    getNFT,{
    contract: NFT_CONTRACT,
    tokenId: tokenId
 }
 );

 return (
    <div style ={{ margin: "10px" }}>
        <MediaRenderer
        client={client}
        src={nft?.metadata.image}
        style={{
            borderRadius:"10px",
            marginBottom:"10px",
            height:"200px",
            width:"200px"
        }}
/>
<p style={{margin:"0 10px 10px 10px"}}>{nft?.metadata.name}</p>
<TransactionButton
transaction={() => (
    prepareContractCall({
        contract:STAKING_CONTRACT,
        method: "withdraw",
        params: [[tokenId]]
    })
    )}
    onTransactionConfirmed={() => {
        alert("Withdrawn successfully");
        refetchStakedInfo();
        refetchOwnedNFTs();
    }}
    style={{
        fontSize: '18px',
        backgroundColor:"white",
        color: "black",
        borderRadius:"16px",
        padding: "10px 0px",
        height: "50px",
        width:"100px",
    }}
>Unstake</TransactionButton>
    </div>
 )
};
