interface MetaData {
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
}
interface BilingualObject {
  vi?: string;
  en?: string;
}

export { MetaData, BilingualObject };
