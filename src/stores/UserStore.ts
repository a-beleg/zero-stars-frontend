import {action, computed, makeAutoObservable} from "mobx";
import {mainColumnsText} from "./static";
import {Chain} from "viem";

export type ChainsData = { ZkSync: number, Arbitrum: number, ETH: number };
export const DefaultData = {ZkSync: 0, Arbitrum: 0, ETH: 0}


export class UserStore {
    connectedAccount: `0x${string}` | undefined = undefined;
    status: string = "disconnected";

    userTokens: ChainsData = DefaultData
    totalSupply: ChainsData = DefaultData;

    open: (() => void) | undefined
    disconnect: (() => void) | undefined
    chain: Chain & { unsupported?: boolean | undefined; } | undefined;


    constructor() {
        makeAutoObservable(this);
    }

    @action
    initialize(
        status: string,
        address: `0x${string}` | undefined,
        open: () => void,
        disconnect: () => void,
        userTokens:
            { ZkSync: number, Arbitrum: number, ETH: number }
        ,
        totalSupply:
            { ZkSync: number, Arbitrum: number, ETH: number }
        ,
        chain: Chain & {
            unsupported?: boolean | undefined;
        } | undefined) {
        console.log('store initialize');
        this.status = status;
        this.connectedAccount = address;
        this.open = open;
        this.disconnect = disconnect;
        this.chain = chain;
        this.userTokens = userTokens;
        this.totalSupply = totalSupply;
    }

    @computed
    get content() {
        const words = mainColumnsText.join(" ").split(" ");
        const target = Math.ceil(words.length / 2);
        return {
            leftColumn: words.slice(0, target).join(" "),
            rightColumn: words.slice(target).join(" ")
        };
    }

    @computed
    get columnDiv() {
        return (id: string) => document.querySelector(`#${id} div`) as HTMLDivElement;
    }

    @computed
    get address() {
        return this.connectedAccount ? this.connectedAccount : "";
    }

    @computed
    get shortenedAddress() {
        return this.shortenHexString(this.address);
    }

    shortenHexString(hexString: string, numChars = 4) {
        return hexString.length <= numChars * 2
            ? hexString
            : `${hexString.slice(0, numChars + 2)}...${hexString.slice(-numChars)}`;
    }

}

export const createStore = () => {
    return new UserStore();
};

