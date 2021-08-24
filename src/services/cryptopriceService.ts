import axios from "axios";
import { CryptoPrice, TokenValue } from "../models/cryptoTypes";
const cryptoCurrencies = Object.values(TokenValue);
const getCryptoPrices: CryptoPrice[] = []

export  async function  getCryptoComparePrices() {
    try {
        for (let i = 0; i < cryptoCurrencies.length; i++) {
                 const cryptoPrice =  await axios.get("https://min-api.cryptocompare.com/data/price?fsym=" + cryptoCurrencies[i] + "&tsyms=USD")
                 getCryptoPrices.push({value:cryptoCurrencies[i], price:cryptoPrice.data.USD})
          }
          return getCryptoPrices
    }
    catch(error) {
        console.log(error);
        return error;
    }
}