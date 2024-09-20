import { Link } from "react-router-dom";
import VisibilityOn from "../assets/VisibilityOn";
import VisibilityOff from "../assets/VisibilityOff";
import { useState } from "react";

export default function Login() {
    const [visibility, setVisibility] = useState(false)

    function handleDisplay(e) {
        e.stopPropagation()
        const spanIcon = document.getElementById("visIcon")
        spanIcon.style.display = "flex"
    }

    function handleBodyClick() {
        const spanIcon = document.getElementById("visIcon")
        spanIcon.style.display = "none"
    }
    
    function handleVisibilityOn() {
        setVisibility(true)
    }

    function handleVisibilityOff() {
        setVisibility(false)
    }

    return (
        <div className="login-container" onClick={handleBodyClick} onFocus={handleBodyClick}>
            <div className="login">
                <div className="form-login-background">
                    <form className="form-login">
                        <h2 className="login-header">Sign in</h2>
                        <input required type="text" placeholder="Email" className="input-email-login-register" />
                        <div className="visibility" onFocus={handleDisplay} onClick={handleDisplay}>
                            <input required type={visibility ? "text" : "password"} placeholder="Password" className="input-password-login-register" />
                            <span className="visibility-icon" id="visIcon">
                                { visibility ? <VisibilityOff onTrigger={handleVisibilityOff} /> : <VisibilityOn onTrigger={handleVisibilityOn} /> }</span>
                        </div>
                        <button className="btn-login">Sign in</button>
                        <Link to="/register"  className="link-login">Create an account</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}