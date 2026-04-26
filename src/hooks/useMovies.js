import { useEffect, useState } from "react";
import { getMovie, getPopularMovies, searchMovies } from "../services/Movies.Service";

export function useMovies(query) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (!query) {
            getPopularMovies().then(({ data }) => {
                setMovies(data.results);
            });
        } else {
            const delay = setTimeout(() => {
                searchMovies(query).then(({ data }) => {
                    setMovies(data.results);
                });
            }, 400);

            return () => clearTimeout(delay);
        }
    }, [query]);

    return movies;
}

export function useMovie(movieId) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getMovie(movieId).then(({ data }) => {
            setMovie(data);
        });
    }, [movieId]);

    return movie;
}