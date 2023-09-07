import {EthereumClient, w3mConnectors, w3mProvider} from '@web3modal/ethereum'
import {Web3Modal} from '@web3modal/react'
import {configureChains, createConfig, WagmiConfig} from 'wagmi'
import {goerli, zkSyncTestnet, arbitrumGoerli} from 'wagmi/chains'


const setupWallet = () => {

    const chains = [goerli, zkSyncTestnet, arbitrumGoerli]

    const projectId = import.meta.env.VITE_PROJECT_ID;

    const {publicClient} = configureChains(chains, [w3mProvider({projectId})]);
    const wagmiConfig = createConfig({autoConnect: true, connectors: w3mConnectors({projectId, chains}), publicClient});
    const ethereumClient = new EthereumClient(wagmiConfig, chains);
    const theme = {
        "--w3m-font-family": "Pixeloid Sans, sans-serif",
        "--w3m-accent-color": "#FFF7F7",
        "--w3m-background-color": "black",
        "--w3m-container-border-radius": "0px",
        "--w3m-overlay-background-color": "transparent",
        "--w3m-background-border-radius": "0px",
        "--w3m-color-overlay": "black",
        "--w3m-secondary-button-border-radius": "0px",
        "--w3m-secondary-button-background-color": "black",
    }
    return {
        chains,
        projectId,
        wagmiConfig,
        ethereumClient,
        WagmiConfig,
        Web3Modal,
        theme,
    };
};

export default setupWallet;
