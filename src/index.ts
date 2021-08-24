import csv from "csv-parser";
import * as fs from "fs";
import { getCryptoComparePrices } from "./services/cryptopriceService";
import { TokenValue,  TransactionType, Token, CryptoPrice } from "./models/cryptoTypes";

const portfolioAmount: number[] = [];

fs.createReadStream('data/transactions.csv')
  .pipe(csv())
  .on('data', (row: Token) => {
        if (row.transaction_type === TransactionType.WITHDRAWAL && row.token === TokenValue.XRP) {
            portfolioAmount.push(+row.amount);
        }
  })
  .on('end', () => {
    calculatePortfolio();
    console.log('CSV file successfully processed');
  });

async function calculatePortfolio(){
    let cryptoPrice = await getCryptoComparePrices()
    cryptoPrice =  cryptoPrice.find((prices: CryptoPrice) => prices.value === TokenValue.XRP)
    const currentPricePortfolio: number = portfolioAmount.reduce((a: number, b: number) => a + b * cryptoPrice.price, 0);

  console.log("USD", currentPricePortfolio.toFixed(2));

}

