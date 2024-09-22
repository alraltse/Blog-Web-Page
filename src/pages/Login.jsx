import { Link } from "react-router-dom";
import VisibilityOn from "../assets/VisibilityOn";
import VisibilityOff from "../assets/VisibilityOff";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Cancel from "../assets/Cancel";

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = "Email is required."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please enter a valid email.'
    }
    if (!values.password) {
        errors.password = "Password is required."
    } else if (values.password.length < 8) {
        errors.password = "You password must contain between 8 and 12 characters."
    }
    return errors
}

export default function Login() {
    const navigate = useNavigate()
    const [visibility, setVisibility] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2))
        }
    })

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

    function handleSignInClick() {
        if ((!formik.errors.password && !formik.errors.email) && (formik.values.email !== "" && formik.values.password !== "")) {
            navigate("/main")
        }
    }

    return (
        <div className="login-container" onClick={handleBodyClick} onFocus={handleBodyClick}>
            <div className="login">
                <div className="form-login-background">

                    <form className="form-login" onSubmit={formik.handleSubmit}>
                        <h2 className="login-header">Sign in</h2>
                        
                        <input required 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        className="input-email-login-register" 
                        value={formik.values.email} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        />

                        {formik.touched.email && formik.errors.email
                            ? <div className="error">
                                <Cancel />
                                <span className="formik-error">
                                    {formik.errors.email}
                                </span>
                            </div>
                            : null}

                        <div className="visibility" onFocus={handleDisplay} onClick={handleDisplay}>
                            <input required 
                            type={visibility ? "text" : "password"} 
                            name="password" 
                            id="password" 
                            placeholder="Password" 
                            className="input-password-login-register" 
                            value={formik.values.password} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            />
                            
                            <span className="visibility-icon" id="visIcon">
                                { visibility ? <VisibilityOff onTrigger={handleVisibilityOff} /> : <VisibilityOn onTrigger={handleVisibilityOn} /> }
                            </span>

                        </div>

                        {formik.touched.password && formik.errors.password
                            ? <div className="error">
                                <Cancel />
                                <span className="formik-error">
                                    {formik.errors.password}
                                </span>
                                </div>
                            : null}
                        <button
                        type="submit"
                        className="btn-login" 
                        onClick={handleSignInClick}>
                            Sign in
                        </button>
                        <Link to="/register"  className="link-login">Create an account</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

