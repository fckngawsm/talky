export interface User {
  id: number;
  phone: string;
  login: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
}
