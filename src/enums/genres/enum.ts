// Generated by https://quicktype.io

export interface Genre {
  count: number;
  next: null;
  previous: null;
  results: Result[];
}

export interface Result {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: Game[];
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  added: number;
}
