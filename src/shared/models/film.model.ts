﻿export interface Film {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export interface Cinema {
  id: string;
  name: string;
  movieIds: string[];
}
