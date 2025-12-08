import { Request, Response } from "express";
import { registerUser } from "../services/auth";
import { STATUS_CODES } from "http";

export const register = async (req: Request, res: Response) => {
  const payload = req.body;

  const resp =  await registerUser(payload)
  return res.success("User registered successfully", resp, 201)
}