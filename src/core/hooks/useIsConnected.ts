import {useWeb3React} from "@web3-react/core";

export default function useConnection(){
    const { library, account } = useWeb3React()

    return typeof account === "string" && !!library;
}