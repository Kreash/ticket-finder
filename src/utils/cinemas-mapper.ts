export enum RuSinemas {
  action = 'Боевик',
  comedy = 'Комедия',
  fantasy = 'Фэнтези',
  horror = 'Ужасы',
}

export enum EnSinemas {
  action = 'action',
  comedy = 'comedy',
  fantasy = 'fantasy',
  horror = 'horror',
}

export function cinemasMapper(value: EnSinemas | string): RuSinemas | string {
  switch (value) {
    case EnSinemas.action:
      return RuSinemas.action;
    case EnSinemas.comedy:
      return RuSinemas.comedy;
    case EnSinemas.fantasy:
      return RuSinemas.fantasy;
    case EnSinemas.horror:
      return RuSinemas.horror;
    default:
      return value;
  }
}
