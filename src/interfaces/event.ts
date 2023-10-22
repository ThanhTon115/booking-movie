import { BilingualObject, MetaData } from './metaData';

export interface Event extends MetaData {
  title: BilingualObject;
  content?: BilingualObject;
  shortDescription: BilingualObject;
  publishedAt?: Date;
  bannerUrl?: string;
}
