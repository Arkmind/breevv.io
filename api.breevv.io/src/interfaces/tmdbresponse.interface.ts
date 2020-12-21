export interface TMDbMedia {
  original_title: string,
  poster_path: string,
  video: Boolean,
  vote_average: Number,
  media_type: string,
  overview: string,
  release_date: string,
  title: string,
  popularity: Number,
  vote_count: Number,
  id: Number,
  adult: Boolean,
  genre_ids: Array<Number>,
  backdrop_path: string,
  original_language: string,
}

export interface TMDbResponse {
  total_results: Number,
  page: Number,
  total_pages: Number,
  results: Array<TMDbMedia>
}
