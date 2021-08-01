import configData from "./config.json";
import { read_cookie } from 'sfcookies';


export const getProviderURL = () => {
    const networkProvider = read_cookie("blockExplorerNetwork")
    switch (networkProvider) {
        case "Mainnet":
           return configData.MAINNET_URL
        case "Rinkeby":
           return configData.RINKEBY_URL
        case "Kovan":
           return configData.KOVAN_URL
        case "Gorli":
           return configData.GORLI
        case "Ropsten":
           return configData.ROPSTEN_URL
        default:
           return configData.MAINNET_URL
    }
    
};