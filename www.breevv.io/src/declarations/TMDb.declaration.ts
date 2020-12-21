export type TMDbGenre = {
    id: number,
    name: string,
}

export type TMDbCompanie = {
    id: number,
    logo_path: string | null,
    name: string,
    origin_country: string,
}

export type TMDbCountry = {
    iso_3166_1: string,
    name: string,
}

export type TMDbLanguage = {
    iso_639_1: string,
    name: string,
}

export type TMDbCollection = {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
}

export type TMDbResponse = {
    adult: Boolean,
    backdrop_path: string,
    belongs_to_collection: TMDbCollection | Boolean | null,
    budget: number,
    genres: Array<TMDbGenre>,
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string | null,
    production_companies: Array<TMDbCompanie>,
    production_countries: Array<TMDbCountry>,
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: Array<TMDbLanguage>,
    status: string,
    tagline: string,
    title: string,
    video: Boolean,
    vote_average: number,
    vote_count: number,
}