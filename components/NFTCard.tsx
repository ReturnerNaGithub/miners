import { client } from "@/app/client";
import { useState } from "react";
import { NFT, prepareContractCall } from "thirdweb";
import { approve } from "thirdweb/extensions/erc20";
import { MediaRenderer, TransactionButton } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";


type OwnedNFTsProps = {
  nft: NFT;
  refetchOwnedNFTs: () => void;
  refetchStakedInfo: () => void;
};

export const NFTCard = ({
  nft,
  refetchOwnedNFTs,
  refetchStakedInfo,
}: OwnedNFTsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  return (
    <div style={{ margin: "10px" }}>
      <MediaRenderer
        client={client}
        src={nft.metadata.image}
        style={{
          borderRadius: "10px",
          marginBottom: "10px",
          height: "200px",
          width: "200px",
        }}
      />
      <p style={{ margin: "0 10px 10px 10px" }}>{nft.metadata.name}</p>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          border: "none",
          backgroundColor: "#161616",
          color: "#f2ff6fff",
          padding: "10px",
          borderRadius: "10px",
          cursor: "pointer",
          width: "100%",
        }}>
        Stake
      </button>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 20, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              minWidth: "300px",
              backgroundColor: "#222",
              padding: "20px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
            <h3 style={{ margin: "10px 0", color: "white" }}>
              You are the best staker
            </h3>
            <MediaRenderer
              client={client}
              src={nft.metadata.image}
              style={{
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            />
            {!isApproved ? (
              <TransactionButton
                transaction={() =>
                  approve({
                    contract: NFT_CONTRACT,
                    to: STAKING_CONTRACT.address,
                    tokenId: nft.id,
                  })
                }
                style={{
                  width: "100%",
                }}
                onTransactionConfirmed={() => setIsApproved(true)}
              >
                Approve
              </TransactionButton>
            ) : (
              <TransactionButton
                transaction={() =>
                  prepareContractCall({
                    contract: STAKING_CONTRACT,
                    method: "stake",
                    params: [[nft.id]],
                  })
                }
                onTransactionConfirmed={() => {
                  alert("Staked: Congratulation");
                  setIsModalOpen(false);
                  refetchOwnedNFTs();
                  refetchStakedInfo();
                }}
                style={{ width: "100%", color: "red" }}
              >
                Stake
              </TransactionButton>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
