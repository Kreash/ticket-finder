import { EnGenres, RuGenres } from '@/shared/models/genre.model';

export function genreMapper(value: EnGenres | string): RuGenres | string {
  switch (value) {
    case EnGenres.action:
      return RuGenres.action;
    case EnGenres.comedy:
      return RuGenres.comedy;
    case EnGenres.fantasy:
      return RuGenres.fantasy;
    case EnGenres.horror:
      return RuGenres.horror;
    default:
      return value;
  }
}
