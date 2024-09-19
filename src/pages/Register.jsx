import { Link } from "react-router-dom"

export default function Register() {
    return (  
        <div className="register-container">
            <div className="register">
                <div className="form-register-background">
                <form className="form-register">
                        <h2 className="register-header">Sign up</h2>
                        <input required type="text" placeholder="Name" className="input-login-register" />
                        <input required type="email" placeholder="Email" className="input-login-register" />
                        <input required type="password" placeholder="Password" className="input-login-register" />
                        <button className="btn-register">Sign up</button>
                        <span>Already have an account? <Link to="/login" className="link-register">Sign in</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}
