import { IComment } from './comment';
import { EXAMPLE_USER, IUser } from './user';

export type IForum = {
  id?: string;
  creator: IUser;
  title: string;
  description: string;
  forumComments: IComment[];
  seen: number;
  createdAt: Date;
};

export const EXAMPLE_FORUM: IForum = {
  createdAt: new Date(),
  creator: EXAMPLE_USER,
  description: '',
  forumComments: [],
  seen: 0,
  title: '',
  id: '',
};
