export type IUser = {
  id?: string;
  isActive: boolean;
  name: string;
  username: string;
  password: string;
  email: string;
  role?: string;
  token?: string;
  profilePicture?: string;
};

export const EXAMPLE_USER: IUser = {
  isActive: true,
  password: 'tintin',
  username: 'TinTin',
  id: '1',
  email: 'tintin6892@gmail.com',
  name: 'TinTin Winata',
  role: 'Doctor',
  profilePicture: '/assets/default_profile_picture.webp',
};

export type IUserFilterContainer = {
  admins: IUser[];
  doctors: IUser[];
  members: IUser[];
};

export const enum USER_FILTER {
  ALL,
  MEMBER,
  ADMIN,
  DOCTOR,
}
