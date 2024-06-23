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
        border:"none",
        backgroundColor:"#161616",
        color:"#fff",
        padding: "10px",
        borderRadius:"10px",
        cursor:"pointer",
        width:"100%",
        fontSize: "12px"
    }}
>Withdraw</TransactionButton>
    </div>
 )
};
