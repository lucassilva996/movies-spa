import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/Movies.Service";

export function useMovies(){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getPopularMovies().then(({data}) => {
            setMovies(data.results)
        })
    }, [])
    return movies;
}