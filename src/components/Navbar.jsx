import { Link } from "react-router-dom"
import { useContext, useRef} from "react"
import SearchIcon from "../assets/search-icon"
import { useNavigate } from "react-router-dom"
import { SearchContext } from "./SearchContext"

const myApiKey = '2f2d1988'

export default function Navbar() {
    const inputData = useRef()
    const navigate = useNavigate()

    const { searchData, setSearchData } = useContext(SearchContext)

    const fetchSearch = async() => {
        if (inputData.current.value !== "") {
            const response = await fetch(`http://www.omdbapi.com/?t=${inputData.current.value}&plot=full&apikey=${myApiKey}`)
            const data = await response.json()
            setSearchData(data);
            console.log(data)
            navigate('/post/:id')
        } else {
            console.log('Search field is empty.')
        }
    }

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo"><img className="logo-img" src="src/assets/logo.png" /></div>
                <div className="grouped-items">
                <div className="search-field">
                    <input type="text" className="search" ref={inputData} />
                    <span className="search-icon-span"><SearchIcon onTrigger={fetchSearch} /></span>
                </div>
                <div className="links">
                    <Link className="link" to="/login">Sign in</Link>
                </div>
                </div>
            </div>
        </div>
    )
}
