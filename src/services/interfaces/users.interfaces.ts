import { Document } from "./base.interfaces";

interface UserBase {
  email: string;
  password: string;
}

export interface UserModel extends UserBase, Document {}
export interface UserModelPopulated extends UserBase, Document {}
