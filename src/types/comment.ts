import { IUser } from "./user";

export type IComment = {
  commenter: IUser;
  comment: string;
  createdAt: Date;
};