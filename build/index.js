"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var authService = __importStar(require("./services/authService"));
var depositOrderController = __importStar(require("./controllers/depositOrdersController"));
var balanceAndOrdersController = __importStar(require("./controllers/balanceAndOrdersController"));
var app = express_1.default();
var port = 3003;
app.use(cors_1.default());
app.use(body_parser_1.default.json({ limit: '10mb' }));
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect("mongodb+srv://edi:testpassword@cluster0.9x3yu.mongodb.net/metamask-api?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });
app.post('/auth', authService.authenticateUser);
app.post('/deposit', authService.verifyToken, depositOrderController.depositAmount);
app.post('/place-order', authService.verifyToken, depositOrderController.placeOrder);
app.get('/get-balances', authService.verifyToken, balanceAndOrdersController.getBalances);
app.get('/get-order', authService.verifyToken, balanceAndOrdersController.getOrders);
app.post('/cancel-order', authService.verifyToken, depositOrderController.cancelOrder);
try {
    app.listen(port, function () {
        console.log("Connected successfully on port " + port);
    });
}
catch (error) {
}
