import { Model, Document, Schema, model, ObjectId } from 'mongoose'

export interface IUser extends Document {
    amount: string;
    token: string;
    side: string;
    price: string;
    userAuthId: string;
    orderId: string;
}

const placeOrderSchema = new Schema<IUser>({
    orderId: { type: String },
    side: { type: String },
    amount: { type: String },
    token: { type: String },
    price: { type: String },
    userAuthId: { type: String }
});


export const PlaceOrder: Model<IUser> = model('PlaceOrder', placeOrderSchema);