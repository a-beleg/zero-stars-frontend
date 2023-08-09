import {provide} from "../helpers/ioc";
import {computed, makeAutoObservable} from "mobx";
import {mainColumnsText} from "./static";

@provide.singleton()
export class UserStore {
    mintCount = 0;

    constructor() {
        makeAutoObservable(this);
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
        return (id: string) => document.querySelector(`#${id} div`) as HTMLDivElement
    }

}