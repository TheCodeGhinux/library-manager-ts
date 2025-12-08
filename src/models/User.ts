import mongoose, { Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  role: string;
  address: string;
  phone: string;

}

export enum RoleEnum {
  MEMBER = "member",
  LIBRARIAN = "librarian",
  ADMIN = "admin"

}

const UserSchema = new Schema<IUser>(
  {
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true },
    role: { type: String, enum: RoleEnum, default: RoleEnum.MEMBER },
    address: { type: String },
    phone: { type: String },
  },
  {timestamps: true}
)

export const User = mongoose.model<IUser>("User", UserSchema)