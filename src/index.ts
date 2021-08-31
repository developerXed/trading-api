
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import * as authService from "./services/authService";
import * as depositOrderController from "./controllers/depositOrdersController";
import * as balanceAndOrdersController from "./controllers/balanceAndOrdersController"

const app = express();
const port = 3003;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://edi:testpassword@cluster0.9x3yu.mongodb.net/metamask-api?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });

app.post('/auth', authService.authenticateUser);
app.post('/deposit', authService.verifyToken, depositOrderController.depositAmount)
app.post('/place-order', authService.verifyToken, depositOrderController.placeOrder)
app.get('/get-balances', authService.verifyToken, balanceAndOrdersController.getBalances)
app.get('/get-order', authService.verifyToken, balanceAndOrdersController.getOrders);
app.post('/cancel-order', authService.verifyToken, depositOrderController.cancelOrder);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
}


