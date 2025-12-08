import { IsEmail, IsEnum, IsPhoneNumber, IsString } from "class-validator";
import { RoleEnum } from "../models/User";


export class RegisterDTO {

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsEnum(RoleEnum)
  role!: RoleEnum;

  @IsString()
  address: string;

  @IsPhoneNumber()
  phone: string;
}