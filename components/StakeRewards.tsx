import { useEffect } from "react";
import { balanceOf } from "thirdweb/extensions/erc20";
import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { REWARD_TOKEN_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { prepareContractCall, toEther } from "thirdweb";
import Token from "./Token";

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
        <div style={{
             width:"50%", 
             height:"100px",
             display:"flex",
             gap:"100px",
             padding:"20px",
             marginTop:"22px",
             alignItems: 'center',
justifyContent: "center",
             flexDirection:"row" }}>
            {!isTokenBalanceLoading && (
            <div>
<Token src="https://white-reasonable-barnacle-530.mypinata.cloud/ipfs/QmUTYURaYUS4PJoTmPQPgu3ETDuaxkhXwDgpcza1Y1a332/web%20front%20page%20animirana.gif" alt ="token" />

            </div>
           )}
<h2 className="text-2xl font-bold  text-white">Your Rewards : {stakedInfo && toEther(BigInt(stakedInfo[1]?.toString() ?? '0'))} </h2>
<TransactionButton
transaction={() => (
    prepareContractCall({
        contract: STAKING_CONTRACT,
        method: "claimRewards"
    })
)}
onTransactionConfirmed={() => {
    alert("Tokens claimed");
    refetchStakedInfo();
    refetchTokenBalance();

}}
style ={{
    display:"flex",
    fontSize: '12px',
    backgroundColor:"#116c7a",
    color: "white",
    borderRadius:"18px",
    padding: "10px 10px",
    marginTop:"12px",
    height: "50px",
    width:"10px",


}}
>Claim MINE</TransactionButton>

        </div>
        
    );
};
