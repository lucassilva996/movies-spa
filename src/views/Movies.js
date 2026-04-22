import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/Movies.Service";

export function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getPopularMovies().then(({data}) => {
            setMovies(data.results)
        })
    }, [])
    return (
        <section>
            <h1>Filmes populares</h1>
            <ul>
                {movies.map((movie) => <li>{movie.title}</li>)}
            </ul>
        </section>
    );
}