import { File } from '../shared/types';
import { MetaData } from './metaData';

export interface Movie extends MetaData {
  name: string;
  basePrice: number;
  basePriceDiscount: number;
  thumbnail: string;
  files: File[];
  rating?: number | undefined;
  description?: string;
  shortDescription?: string;
  trailerUrl?: string;
  duration?: number;
  publishedAt?: Date;
  premiereAt?: Date;
  bannerUrl?: string;
  slug: string;
}
