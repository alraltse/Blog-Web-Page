import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import SearchIcon from "../assets/search-icon"

let searchData;

export default function Navbar() {
    const inputData = useRef()

    const fetchSearch = async() => {
        const response = await fetch(`http://www.omdbapi.com/?t=${inputData.current.value}&apikey=2f2d1988`)
        const data = await response.json()
        searchData = data;
        console.log(searchData)
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