import { Link } from "react-router-dom";
import VisibilityOn from "../assets/VisibilityOn";
import VisibilityOff from "../assets/VisibilityOff";
import { useState } from "react";

export default function Login() {
    const [visibility, setVisibility] = useState(false)

    function handleDisplay() {
       const visOn = document.getElementById("visibilityOn")
       visOn.style.display = "flex"
    }
    
    function handleVisibilityOn() {
        setVisibility(true)
    }

    function handleVisibilityOff() {
        setVisibility(false)
    }

    return (
        <div className="login-container">
            <div className="login">
                <div className="form-login-background">
                    <form className="form-login">
                        <h2 className="login-header">Sign in</h2>
                        <input required type="text" placeholder="Email" className="input-email-login-register" />
                        <div className="visibility">
                            <input required type={visibility ? "text" : "password"} placeholder="Password" className="input-password-login-register" onClick={handleDisplay}/>
                            <span className="visibility-icon">
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