import { IUser, User } from "../models/User";
import { AppError, BadRequestError } from "../utils/appError";
import * as bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerUser = async(payload: IUser) => {
  // const {email, password, role, address, phone} = payload

  const existingUser= await User.findOne({email: payload.email})
  
  if(existingUser){
    throw new AppError('User already exists', 400)
  }

  const hashed = await bcrypt.hash(payload.password, 10)
  const user = await User.create({...payload, password: hashed})

  return user
}

export const loginUser = async(payload: {email: string, password: string}) => {
  const user = await User.findOne({ email: payload.email })

  if (!user) {
    throw new AppError('Invalid user', 400)
  }

  const match = await bcrypt.compare(payload.password, user.password)
  if(!match) {
    throw new BadRequestError("Invalid credentials")
  }

  const jwtPayload = {
    id: user._id,
    email: user.email,
    role: user.role
  }

  const token = jwt.sign(jwtPayload, process.env.SECRET_KEY!, {expiresIn: '1d'})

  return {user, token}
}