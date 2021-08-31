import { Request, Response, NextFunction } from "express";
import { UserDeposit } from "../models/UserDeposit"
import { PlaceOrder } from "../models/PlaceOrder";
import * as authService from "../services/authService";

export const getBalances = async (req: Request, res: Response) => {
    try {
        const userAuthId = authService.getToken
        const result = await UserDeposit.find({ userAuthId: userAuthId as any })

        if (result.length === 0) {
            return res.status(404).json({ message: "Not Found" });
        } else {
            return res.status(200).json({ data: result })
        }

    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

export const getOrders = async (req: Request, res: Response) => {
    try {
        const userAuthId = authService.getToken
        const result = await PlaceOrder.find({ userAuthId: userAuthId as any })
        if (result.length === 0) {
            return res.status(404).json({ message: "Not Found" });
        } else {
            return res.status(200).json({ data: result })
        }
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}


