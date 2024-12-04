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
            width: "fit-content",
             height:"fit-content",
             display:"flex",
             gap:"40px",
             padding:"40px",
             marginTop:"20px",
             alignItems: 'left',
justifyContent: "center",
             background: "linear-gradient(45deg, #116c7a, #041524)",
             borderRadius:"25px",

             }}>
            {!isTokenBalanceLoading && (
            <div>
<Token src="https://white-reasonable-barnacle-530.mypinata.cloud/ipfs/QmagiPm6p9Y3psGqZbHF5rAf2YBPe48EkEDKKoaP8KACFo/Mine%20Token_BG.gif" alt ="token" />

                </div>
            )}
            <div className="stake-reward-subgrp">
                <h2 className="text-2xl">Rewards : {stakedInfo && toEther(BigInt(stakedInfo[1]?.toString() ?? '0'))} </h2>
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
                        padding: "10px 10px",
                        height: "50px",
                        width:"10px",
                        borderRadius:"25px",


                    }}
                >Claim MINE</TransactionButton>
            </div>
        </div>

    );
};
