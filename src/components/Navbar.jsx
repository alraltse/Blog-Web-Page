import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">logo</div>
                <div className="links">
                    <Link className="link">Art</Link>
                </div>
            </div>
        </div>
    )
}