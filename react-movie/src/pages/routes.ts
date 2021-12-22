import { PageRoute } from '../utils/types';
import { Home, Search, Tv, Movie, MovieDetails, TvDetails } from './index';

export const Routes: PageRoute[] = [
    { pathname: "/", component: Home },
    { pathname: "/search", component: Search },
    { pathname: "/tv", component: Tv },
    { pathname: "/tv/:id", component: TvDetails },
    { pathname: "/movies", component: Movie },
    { pathname: "/movie/:id", component: MovieDetails },
]