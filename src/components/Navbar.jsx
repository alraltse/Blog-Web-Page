import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo"><img className="logo-img" src="src/assets/login-icon.png" /></div>
                <div className="links">
                    <Link className="link">Sign in</Link>
                </div>
            </div>
        </div>
    )
}