import {createStore} from "../stores/UserStore";
import {useAccount, useDisconnect, useNetwork} from "wagmi";
import {useWeb3Modal} from "@web3modal/react";
import {useZeroStarsBalanceOf, useZeroStarsTotalSupply} from "../contracts/contract";
import {Hex} from "viem";
import {arbitrumGoerli, goerli, zkSyncTestnet} from "wagmi/chains";

export type ChainsData = { ZkSync: number, Arbitrum: number, ETH: number };
export const DefaultData = {ZkSync: 0, Arbitrum: 0, ETH: 0}


const useInitStore = () => {

    const store = createStore();
    const {open} = useWeb3Modal();
    const {chain} = useNetwork()
    const {address, status} = useAccount()
    const {disconnect} = useDisconnect()

    const {data: ZkSyncTotal} = useZeroStarsTotalSupply({chainId: goerli.id});
    const {data: ArbitrumTotal} = useZeroStarsTotalSupply({chainId: arbitrumGoerli.id});
    const {data: ETHTotal} = useZeroStarsTotalSupply({chainId: goerli.id});


    const {data: ZkSyncBalance} = useZeroStarsBalanceOf({chainId: zkSyncTestnet.id, args: [address as Hex]});
    const {data: Arbitrum} = useZeroStarsBalanceOf({chainId: arbitrumGoerli.id, args: [address as Hex]});
    const {data: ETH} = useZeroStarsBalanceOf({chainId: goerli.id, args: [address as Hex]});

    const userTokens: ChainsData = {
        ZkSync: Number(ZkSyncBalance),
        Arbitrum: Number(Arbitrum),
        ETH: Number(ETH)
    }

    const totalSupply: ChainsData = {
        ZkSync: Number(ZkSyncTotal),
        Arbitrum: Number(ArbitrumTotal),
        ETH: Number(ETHTotal)
    }

    store.initialize(status, address, open, disconnect, userTokens, totalSupply, chain);
    return {store};
};

export {useInitStore};
