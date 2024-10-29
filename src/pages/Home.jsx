import { useState, useEffect, useRef } from "react"
import ArrowForward from "../assets/arrow-forward"
import ArrowBackward from "../assets/arrow-backward"
import CloseBtn from "../assets/close-btn"
import HarryPotterSpells from "../components/harryPotterSpells"

const myApiKey = '2f2d1988'

export default function Home() {
    const [movieOne, setMovieOne] = useState([])
    const [movieTwo, setMovieTwo] = useState([])
    const [movieThree, setMovieThree] = useState([])
    const [movieFour, setMovieFour] = useState([])
    const [movieFive, setMovieFive] = useState([])
    const [movieSix, setMovieSix] = useState([])
    const [movieSeven, setMovieSeven] = useState([])
    const [movieEight, setMovieEight] = useState([])
    const [movieNine, setMovieNine] = useState([])
    const [movieTen, setMovieTen] = useState([])
    const [movieEleven, setMovieEleven] = useState([])
    const [movieTwelve, setMovieTwelve] = useState([])
    const [movieThirteen, setMovieThirteen] = useState([])
    const [movieFourteen, setMovieFourteen] = useState([])
    const [div, setDiv] = useState()

    const movieRef = useRef()

    const handleMoviesOrder = (direction) => {
        if (direction === 'left') {
            movieRef ? (movieRef.current.scrollLeft += 213) : null
        } else if (direction === 'right') {
            movieRef ? (movieRef.current.scrollLeft -= 213) : null
        }
    }

    const returnDiv = (movie, index) => {
        setDiv(
            <div key={index} className="movieInfo">
                <button className="close-btn" onClick={() => setDiv(null)}><CloseBtn /></button>
                <div className="plot">
                    <h2 className="movie-header">{movie.Title}</h2>
                    <div className="movie-span-container">
                        <span className="movie-span">{movie.Released}</span>
                        <span className="movie-span">{movie.Ratings[0]?.Value}</span>
                        <span className="movie-span">{movie.Country}</span>
                        <span className="movie-span">{movie.Type}</span>
                        <span className="movie-span">{movie.Genre}</span>
                    </div>
                    <p>{movie.Plot}</p>
                </div>
            </div>
        )
    }

    useEffect(() => {
        const fetchMovieOne = async() => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${myApiKey}`)
                const data = await response.json()
                setMovieOne(data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchMovieOne()
    }, [])

    useEffect(() => {
        const fetchMovieTwo = async() => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?i=tt13130308&apikey=${myApiKey}`)
                const data = await response.json()
                setMovieTwo(data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchMovieTwo()
 }, [])

    useEffect(() => {
        const fetchMovieThree = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt6966692&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieThree(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieThree()
}, [])

    useEffect(() => {
        const fetchMovieFour = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt10048342&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieFour(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieFour()
    }, [])

    useEffect(() => {
        const fetchMovieFive = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt13452446&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieFive(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieFive()
    }, [])

    useEffect(() => {
        const fetchMovieSix = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt0499549&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieSix(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieSix()
    }, [])

    useEffect(() => {
        const fetchMovieSeven = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt2442560&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieSeven(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieSeven()
    }, [])

    useEffect(() => {
        const fetchMovieEight = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt5180504&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieEight(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieEight()
    }, [])

    useEffect(() => {
        const fetchMovieNine = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt8740790&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieNine(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieNine()
    }, [])

    useEffect(() => {
        const fetchMovieTen = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt8962124&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieTen(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieTen()
    }, [])

    useEffect(() => {
        const fetchMovieEleven = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt1632701&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieEleven(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieEleven()
    }, [])

    useEffect(() => {
        const fetchMovieTwelve = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt0458352&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieTwelve(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieTwelve()
    }, [])

    useEffect(() => {
        const fetchMovieThirteen = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt0250494&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieThirteen(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieThirteen()
    }, [])

    useEffect(() => {
        const fetchMovieFourteen = async() => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt30446769&apikey=${myApiKey}`)
            const data = await response.json()
            setMovieFourteen(data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchMovieFourteen()
    }, [])

    return (
        <div className="home-container">
            <div className="movies-container" ref={movieRef}>
                    {div}
                <div className="movie-poster">
                    <img className="movie-image" src={movieOne.Poster} alt={movieOne.Title} onClick={() => returnDiv(movieOne)} />
                    <p className="movie-name">{movieOne.Title}, {movieOne.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieTwo.Poster} alt={movieTwo.Title} onClick={() => returnDiv(movieTwo)} />
                    <p className="movie-name">{movieTwo.Title}, {movieTwo.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieThree.Poster} alt={movieThree.Title} onClick={() => returnDiv(movieThree)} />
                    <p className="movie-name">{movieThree.Title}, {movieThree.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieFour.Poster} alt={movieFour.Title} onClick={() => returnDiv(movieFour)} />
                    <p className="movie-name">{movieFour.Title}, {movieFour.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieFive.Poster} alt={movieFive.Title} onClick={() => returnDiv(movieFive)} />
                    <p className="movie-name">{movieFive.Title}, {movieFive.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieSix.Poster} alt={movieSix.Title} onClick={() => returnDiv(movieSix)} />
                    <p className="movie-name">{movieSix.Title}, {movieSix.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieSeven.Poster} alt={movieSeven.Title} onClick={() => returnDiv(movieSeven)} />
                    <p className="movie-name">{movieSeven.Title}, {movieSeven.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieEight.Poster} alt={movieEight.Title} onClick={() => returnDiv(movieEight)} />
                    <p className="movie-name">{movieEight.Title}, {movieEight.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieNine.Poster} alt={movieNine.Title} onClick={() => returnDiv(movieNine)} />
                    <p className="movie-name">{movieNine.Title}, {movieNine.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieTen.Poster} alt={movieTen.Title} onClick={() => returnDiv(movieTen)} />
                    <p className="movie-name">{movieTen.Title}, {movieTen.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieEleven.Poster} alt={movieEleven.Title} onClick={() => returnDiv(movieEleven)} />
                    <p className="movie-name">{movieEleven.Title}, {movieEleven.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieTwelve.Poster} alt={movieTwelve.Title} onClick={() => returnDiv(movieTwelve)} />
                    <p className="movie-name">{movieTwelve.Title}, {movieTwelve.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieThirteen.Poster} alt={movieThirteen.Title} onClick={() => returnDiv(movieThirteen)} />
                    <p className="movie-name">{movieThirteen.Title}, {movieThirteen.Year}</p>
                </div>
                <div className="movie-poster">
                    <img className="movie-image" src={movieFourteen.Poster} alt={movieFourteen.Title} onClick={() => returnDiv(movieFourteen)} />
                    <p className="movie-name">{movieFourteen.Title}, {movieFourteen.Year}</p>
                </div>
                <span className="forward-span" onClick={() => handleMoviesOrder('left')}><ArrowForward /></span>
                <span className="backward-span" onClick={() => handleMoviesOrder('right')}><ArrowBackward /></span>
            </div>
            <div className="second-container">
            <HarryPotterSpells />
            </div>
        </div>
    )
}