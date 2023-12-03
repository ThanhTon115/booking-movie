import { User } from './user';

interface MetaData {
  id?: string;
  createdAt?: Date;
  createdBy?: string;
  createdUser?: User;
  updatedAt?: Date;
  updatedBy?: string;
  updatedUser?: User;
}
interface BilingualObject {
  vi?: string;
  en?: string;
}

export { MetaData, BilingualObject };
