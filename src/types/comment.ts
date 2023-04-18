import { IUser } from "./user";

export type IComment = {
  user: IUser;
  text: string;
};