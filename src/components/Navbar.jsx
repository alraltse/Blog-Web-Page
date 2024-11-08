import { Link } from "react-router-dom"
import { useContext, useEffect, useRef} from "react"
import SearchIcon from "../assets/search-icon"
import SearchIconMedia from "../assets/search-icon-media"
import { useNavigate } from "react-router-dom"
import { SearchContext } from "./SearchContext"
import { useState } from "react"

const myApiKey = import.meta.env.VITE_API_KEY

export default function Navbar() {
    const inputData = useRef()
    const navigate = useNavigate()

    const {setSearchData} = useContext(SearchContext)

    const [query, setQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const fetchSuggestions = async() => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${myApiKey}`)
                const data = await response.json()
                if (data.Search) {
                    setSuggestions(data.Search)
                } else {
                    setSuggestions([])
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchSuggestions()
    }, [query])

    const handleSelectMovie = (movie) => {
        setQuery(movie.Title)
        setSuggestions([])
    }

    const fetchSearch = async() => {
        if (inputData.current.value !== "") {
            const response = await fetch(`http://www.omdbapi.com/?t=${inputData.current.value}&plot=full&apikey=${myApiKey}`)
            const data = await response.json()
            setSearchData(data)
            navigate('/post/:id')
        } else {
            console.log('Search field is empty.')
        }
    }

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo"><img className="logo-img" src="src/assets/logo.png" onClick={() => navigate('/')} /></div>
                <div className="grouped-items">
                <div className="search-field">
                    <div>
                        <input 
                            type="text" 
                            className="search"
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                            ref={inputData} 
                        />
                        {suggestions.length > 0 && (
                            <ul className="suggestions-list">
                            {suggestions.map((movie) => (
                                <li
                                    key={movie.imdbID}
                                    onClick={() => handleSelectMovie(movie)}
                                    className="suggestion-item"
                                >
                                    {movie.Title} ({movie.Year})
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                    <span className="search-icon-span"><SearchIcon onTrigger={fetchSearch} /><SearchIconMedia onTrigger={fetchSearch} /></span>
                </div>
                <div className="links">
                    <Link className="link" to="/login">Sign in</Link>
                </div>
                </div>
            </div>
        </div>
    )
}
