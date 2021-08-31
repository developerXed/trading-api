import { Model, Document, Schema, model } from 'mongoose'

export interface IUser extends Document {
  amount: string;
  token: string;
  userAuthId: string;
  orderId:string;
}

const userDepositSchema = new Schema<IUser>({
  amount: { type: String },
  token: { type: String },
  orderId: { type: String },
  userAuthId: { type: String }
});


export const UserDeposit: Model<IUser> = model('UserDeposit', userDepositSchema);