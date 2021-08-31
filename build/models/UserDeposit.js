"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeposit = void 0;
var mongoose_1 = require("mongoose");
var userDepositSchema = new mongoose_1.Schema({
    amount: { type: String },
    token: { type: String },
    orderId: { type: String },
    userAuthId: { type: String }
});
exports.UserDeposit = mongoose_1.model('UserDeposit', userDepositSchema);
