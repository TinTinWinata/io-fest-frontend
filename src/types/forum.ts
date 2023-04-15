import { IUser } from "./user";

export type IForum = {
  user: IUser;
  title: string;
  description: string;
  comment: number;
  seen: number;
};