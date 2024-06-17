import {chain} from '@/app/chain';
import {client} from '@/app/client';
import { getContract } from 'thirdweb';
import { stakingContractABI } from "./stackingContractABI";

const nftContractAddress = "0x200387eDA6B05eDeEBDa0BF8d224133607e06c32";
const rewardTokenContractAddress = "0xB27efBD68Cc86Ca75d5c2AF67174e3EF9C047dEB";
const stakingContractAddress = "0xbF2B3D44f9b7FD1E051D06ba831b0E0cb945B5B9";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress,
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingContractABI,
});
