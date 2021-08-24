"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = exports.TokenValue = void 0;
var TokenValue;
(function (TokenValue) {
    TokenValue["XRP"] = "XRP";
    TokenValue["BTC"] = "BTC";
    TokenValue["ETC"] = "ETC";
})(TokenValue = exports.TokenValue || (exports.TokenValue = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["WITHDRAWAL"] = "WITHDRAWAL";
    TransactionType["DEPOSIT"] = "DEPOSIT";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
