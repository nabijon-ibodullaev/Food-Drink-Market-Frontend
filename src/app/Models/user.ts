import { Role } from './role';

export class User {
  _id!: string;
  username!: string;
  email!: string;
  password!: string;
  role!: Role;
  token?: string;
}
