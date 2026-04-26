import { moviesApis } from "../config/http";

export function getPopularMovies(){
    return moviesApis.get("movie/popular")
}

export function getMovie(movieId) {
    return moviesApis.get(`movie/${movieId}`)
}

export function searchMovies(query) {
    return moviesApis.get("/search/movie", {
        params: {
            query
        }
    });
}