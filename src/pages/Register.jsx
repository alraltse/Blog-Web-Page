import { Link } from "react-router-dom"
import VisibilityOn from "../assets/VisibilityOn"
import VisibilityOff from "../assets/VisibilityOff"
import { useState } from "react"

export default function Register() {
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
        <div className="register-container" onClick={handleBodyClick} onFocus={handleBodyClick}>
            <div className="register">
                <div className="form-register-background">
                <form className="form-register">
                        <h2 className="register-header">Sign up</h2>
                        <input required type="text" placeholder="Name" className="input-name-login-register" />
                        <input required type="email" placeholder="Email" className="input-email-login-register" />
                        <div className="visibility" onFocus={handleDisplay} onClick={handleDisplay}>
                            <input required type="password" placeholder="Password" className="input-password-login-register" />
                            <span className="visibility-icon" id="visIcon">
                                { visibility ? <VisibilityOff onTrigger={handleVisibilityOff} /> : <VisibilityOn onTrigger={handleVisibilityOn} /> }
                            </span>
                        </div>
                        <button className="btn-register">Sign up</button>
                        <span>Already have an account? <Link to="/login" className="link-register">Sign in</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}
