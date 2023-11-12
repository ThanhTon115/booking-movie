import { File } from '../shared/types';
import { MetaData } from './metaData';

export type MovieTypeByAge = 'P' | 'K' | 'T13' | 'T16' | 'T18' | 'C';

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
  typeByAge: MovieTypeByAge;
}

export interface Reaction {
  id?: string;
  liked: boolean;
  name?: string;
}
export interface Review extends MetaData {
  content: string;
  rating: number;
  reactions?: string[];
  replies?: string[];
}
