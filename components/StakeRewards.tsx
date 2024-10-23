import { useEffect } from "react";
import { balanceOf } from "thirdweb/extensions/erc20";
import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { REWARD_TOKEN_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { prepareContractCall, toEther } from "thirdweb";

export const StakeRewards = () => {
const account = useActiveAccount();

const {
    isLoading: isTokenBalanceLoading,
    refetch: refetchTokenBalance,
} = useReadContract(
    balanceOf,
    {
        contract: REWARD_TOKEN_CONTRACT,    
        address: account?.address || "",
    }
);
const {
    data: stakedInfo,
    refetch: refetchStakedInfo,
} = useReadContract({
    contract: STAKING_CONTRACT,
    method: "getStakeInfo",
    params: [account?.address || ""],//ne vem ce je to dobro
});

useEffect(() => {
    refetchStakedInfo();
    const interval = setInterval(() =>{
        refetchStakedInfo();
    },1000);
    return () => clearInterval(interval);
}, []);



    return (
        <div style={{ width:"100%", display:"flex", flexDirection:"column" }}>
            {!isTokenBalanceLoading && (
            <p>Wallet Balance</p>
           )}
<h2>Stake Rewards MINE tokens: {stakedInfo && toEther(BigInt(stakedInfo[1]?.toString() ?? '0'))} </h2>
<TransactionButton
transaction={() => (
    prepareContractCall({
        contract: STAKING_CONTRACT,
        method: "claimRewards"
    })
)}
onTransactionConfirmed={() => {
    alert("Mine Tokens claimed");
    refetchStakedInfo();
    refetchTokenBalance();

}}
style ={{
    border:"none",
        backgroundColor:"#333",
        color:"#fff",
        padding: "10px",
        borderRadius:"10px",
        cursor:"pointer",
        width:"20%",
        fontSize: "12px"

}}
>Claim MINE tokens</TransactionButton>

        </div>
    );
};
