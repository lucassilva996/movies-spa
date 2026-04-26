import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { FaSearch } from 'react-icons/fa';
import { useSearch } from "../components/SearchContext";

export function Header(){
    const [open, setOpen] = useState(false)
    const { query, setQuery } = useSearch();

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Movies Review</h1>

            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                </ul>

                <div className={`${styles.search} ${open ? styles.active : ""}`}>
                    <input 
                        type="text" 
                        placeholder="Search movies..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <FaSearch 
                        className={styles.icon} 
                        onClick={() => setOpen(!open)} 
                    />
                </div>
            </nav>
        </header>
    )
}