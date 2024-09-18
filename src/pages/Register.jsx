import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="login">
        <h2>Register</h2>
        <form>
            <input required type="text" placeholder="Username" />
            <input required type="email" placeholder="Email" />
            <input required type="password" placeholder="Password" />
            <button>Login</button>
            <span>Already have an account? <Link to="/login">Login</Link></span>
        </form>
    </div>
)
}
