import { MetaData } from './metaData';
import { Movie } from './movie';
type ActorRoleType = 'director' | 'actor';

export interface Actor extends MetaData {
  name: string;
  gender: boolean;
  dob: Date;
  hometown?: string;
  avatar?: string;
  releatedMovies?: Movie[];
  biography?: string;
  characterName?: string;
  role?: ActorRoleType[];
}
