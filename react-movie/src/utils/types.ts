export enum Media {
    MOVIE = "movie",
    TV = "tv",
    ALL = "all",
    PERSON = "person",
}

export type MediaType = Required<Media.TV> | Required<Media.MOVIE>;
export type RawResponse = Feature[] & Member[]
export type Genre = { [key: number]: string }
export type PageRoute = {
    pathname: string;
    component: React.FC<{}>;
}
export type RawResult = {
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    vote_average: number;
    vote_count: number;
}
export type TvListResult = RawResult & {
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
    media_type: Required<Media.TV>;
}
export type MovieListResult = RawResult & {
    adult: boolean;
    original_title: string;
    release_date: string;
    title: string;
    video: boolean;
    media_type: Required<Media.MOVIE>;
}
export type PersonTvListResult = TvListResult;
export type PersonMovieListResult = MovieListResult;
export type KnownFor = PersonTvListResult | PersonMovieListResult;
export type PeopleListResult = {
    adult: boolean;
    id: number;
    known_for: KnownFor[];
    name: string;
    popularity: number;
    profile_path: string | null;
    media_type: Required<Media.PERSON>;
}
export type Feature = TvListResult | MovieListResult;
export type SearchResults = TvListResult | MovieListResult | PeopleListResult;
export type RawSearchResponse = {
    page: number;
    results: SearchResults[];
    total_pages: number;
    total_results: number;
};
export type RawTrailerInfo = {
    id: string;
    iso_3166_1: string;
    iso_639_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
};
export type Member = {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number
    profile_path: string;
}