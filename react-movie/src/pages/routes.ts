import { PageRoute } from '../utils/types';
import { Home, Search, Tv, Movie } from './index';

export const Routes: PageRoute[] = [
    { pathname: "/", component: Home },
    { pathname: "/search", component: Search },
    { pathname: "/tv", component: Tv },
    { pathname: "/movies", component: Movie },
]