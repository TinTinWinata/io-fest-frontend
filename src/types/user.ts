export type IUser = {
  id?: string;
  isActive: boolean;
  name: string;
  username: string;
  password: string;
  email: string;
  role?: string;
  imageUrl?: string;
};



export const EXAMPLE_USER: IUser = {
  isActive: true,
  password: 'tintin',
  username: 'TinTin',
  id: '1',
  email: 'tintin6892@gmail.com',
  name: 'TinTin Winata',
  role: 'Doctor',
  imageUrl: '/assets/default_profile_picture.webp',
};