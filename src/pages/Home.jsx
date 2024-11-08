import { useState, useEffect, useRef } from "react"
import ArrowForward from "../assets/arrow-forward"
import ArrowBackward from "../assets/arrow-backward"
import CloseBtn from "../assets/close-btn"

const myApiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)
    const movieRef = useRef()

    const movieIds = [
        "tt3896198", "tt13130308", "tt6966692", "tt10048342", 
        "tt13452446", "tt0499549", "tt2442560", "tt5180504", 
        "tt8740790", "tt8962124", "tt1632701", "tt0458352", 
        "tt0250494", "tt30446769"
    ]

    const handleMoviesOrder = (direction) => {
        if (direction === 'left') {
            movieRef ? (movieRef.current.scrollLeft += 213) : null
        } else if (direction === 'right') {
            movieRef ? (movieRef.current.scrollLeft -= 213) : null
        }
    }
    const fetchMovies = async() => {
        try {
            const fetchedMovies = await Promise.all(
                movieIds.map(async (id) => {
                    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${myApiKey}`)
                    return response.json()
                })
            )
            setMovies(fetchedMovies)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchMovies()
 }, [])

    return (
        <div className="home-container">
            <div className="movies-container" ref={movieRef}>
                {selectedMovie && (
                    <div className="movieInfo">
                        <button className="close-btn" onClick={() => setSelectedMovie(null)}>
                            <CloseBtn />
                        </button>
                        <div className="plot">
                            <h2 className="movie-header">{selectedMovie.Title}</h2>
                            <div className="movie-span-container">
                                <span className="movie-span">{selectedMovie.Released}</span>
                                <span className="movie-span">{selectedMovie.Ratings[0]?.Value}</span>
                                <span className="movie-span">{selectedMovie.Country}</span>
                                <span className="movie-span">{selectedMovie.Type}</span>
                                <span className="movie-span">{selectedMovie.Genre}</span>
                            </div>
                            <p>{selectedMovie.Plot}</p>
                        </div>
                    </div>
                )}

                {movies.map((movie, index) => (
                    <div key={index} className="movie-poster">
                        <img 
                            className="movie-image"
                            src={movie.Poster} 
                            alt={movie.Title}
                            onClick={() => setSelectedMovie(movie)}
                        />
                        <p className="movie-name">{movie.Title}, {movie.Year}</p>
                    </div>
                ))}

                <span className="forward-span" onClick={() => handleMoviesOrder('left')}><ArrowForward /></span>
                <span className="backward-span" onClick={() => handleMoviesOrder('right')}><ArrowBackward /></span>
            </div>
        </div>
    )
}