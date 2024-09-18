import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <h2>Login</h2>
            <form>
                <input required type="text" placeholder="Username" />
                <input required type="password" placeholder="Password" />
                <button>Login</button>
                <span><Link to="/register">Create an account</Link></span>
            </form>
        </div>
    )
}