import { IComment } from "./comment";
import { IUser } from "./user";

export type IForum = {
  id?: string;
  creator: IUser;
  title: string;
  description: string;
  forumComments: IComment[];
  seen: number;
  createdAt: Date;
};