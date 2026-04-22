import axios from "axios";

export const moviesApis = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDUxYzM5YTlhMjc4NzI0MmU5MjQwYmE3ZTBhZjFiZCIsIm5iZiI6MTc3NjgzMTU4Ni4wMzcsInN1YiI6IjY5ZTg0YzYyYmFiYmUxOTVlMWMwMTBkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jz06QrbzUR19z0wHQUwedwDspV9frZH7YyZrkCB9uSY`
    }
});