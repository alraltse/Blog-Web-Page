import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../components/SearchContext"

export default function SingleArticle() {
    const { searchData } = useContext(SearchContext)

    return (
        <div className="single-article-container">
            {searchData 
            ? (
                <div className="movie-page">
                    <div className="image-span"><img src={searchData.Poster} className="article-movie-image" /></div>
                    <div className="movie-description">
                        <h3 className="movie-title">{searchData.Title} ({searchData.Year})</h3>
                        <ul className="description-list">
                            <li>{searchData.Released}</li>
                            <li>{searchData.Country}</li>
                            <li>{searchData.Genre}</li>
                            <li>{searchData.Runtime}</li>
                        </ul>
                        <p className="movie-rating">{searchData.Ratings[0]?.Value}</p>
                        <i className="movie-overview-heading">Overview</i>
                        <p className="movie-overview">{searchData.Plot}</p>
                    </div>
                </div>
            )
            : <p>No search found.</p>}
            
        </div>
    )
}