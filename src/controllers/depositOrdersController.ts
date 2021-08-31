import { Request, Response, NextFunction } from "express";
import { UserDeposit } from "../models/UserDeposit"
import { PlaceOrder } from "../models/PlaceOrder";
import * as authService from "../services/authService";

const generateId = Math.floor(Math.random() * 100)

export const depositAmount = async (req: Request, res: Response) => {
    const amount = req.body.amount;
    const token = req.body.token;

    try {
        const deposit = new UserDeposit({
            userAuthId: authService.getToken,
            amount: amount,
            token: token,
            orderId: generateId
        })
        await deposit.save()
        return res.status(201).json({ message: 'Created' })
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

export const placeOrder = async (req: Request, res: Response) => {
    const side = req.body.side;
    const amount = req.body.amount;
    const token = req.body.token;
    const price = req.body.price;

    try {
        const placedOrder = new PlaceOrder({
            userAuthId: authService.getToken,
            amount: amount,
            token: token,
            side: side,
            price: price,
            orderId: generateId
        })
        await placedOrder.save()
        return res.status(201).json({ message: 'Created' })
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

export const cancelOrder = async (req: Request, res: Response) => {
    const orderId = req.body.orderId;
    try {
        await PlaceOrder.deleteOne({ orderId })
        return res.status(200).json({ message: "Order deleteted OrderId" + orderId })
    } catch (err) {
        return res.status(500).json({ message: err })
    }

}
