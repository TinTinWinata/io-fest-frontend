import { IUser } from "./user";

export type IForum = {
  id?: string;
  user: IUser;
  title: string;
  description: string;
  comment: number;
  seen: number;
};