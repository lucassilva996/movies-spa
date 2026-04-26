import { MovieItem } from "../components/movieItem/MovieItem";
import { useMovies } from "../hooks/useMovies";
import { useSearch } from "../components/SearchContext";
import styles from "./Movies.module.css";

export function Movies() {
    const { query } = useSearch();
    const movies = useMovies(query);

    return (
        <section className={styles.movies}>
            <h1>
                {query 
                    ? `Results for: "${query}"` 
                    : "Popular Movies"}
            </h1>

            <div className={styles.moviesList}>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieItem key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>No movies found.</p>
                )}
            </div>
        </section>
    );
}