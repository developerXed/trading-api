"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceOrder = void 0;
var mongoose_1 = require("mongoose");
var placeOrderSchema = new mongoose_1.Schema({
    orderId: { type: String },
    side: { type: String },
    amount: { type: String },
    token: { type: String },
    price: { type: String },
    userAuthId: { type: String }
});
exports.PlaceOrder = mongoose_1.model('PlaceOrder', placeOrderSchema);
