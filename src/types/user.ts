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

// <th></th>
// <th>ID</th>
// <th>Email</th>
// <th>Active</th>
// <th>Username</th>
// <th>Role</th>