import { Link } from "react-router-dom"
import VisibilityOn from "../assets/VisibilityOn"
import VisibilityOff from "../assets/VisibilityOff"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import Cancel from "../assets/Cancel.jsx"

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = "Name is required."
    }
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

export default function Register() {
    const navigate = useNavigate()
    const [visibility, setVisibility] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
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

    function handleSignUpClick(event) {
        event.preventDefault()
        if ((!formik.errors.name && !formik.errors.email && !formik.errors.password) && (formik.values.name !== "" && formik.values.email !== "" && formik.values.password !== "")) {
            navigate("/main")
        }
    }

    return (  
        <div className="register-container" onClick={handleBodyClick} onFocus={handleBodyClick}>
            <div className="register">
                <div className="form-register-background">

                <form className="form-register" onSubmit={formik.handleSubmit}>
                        <h2 className="register-header">Sign up</h2>

                        <input required 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="input-name-login-register"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />

                        {formik.touched.name && formik.errors.name
                            ? <div className="error">
                                <Cancel />
                                <span className="formik-error">
                                    {formik.errors.name}
                                </span>
                            </div>
                            : null}

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
                        className="btn-register" 
                        onClick={handleSignUpClick}>
                            Sign up
                        </button>
                        <span>Already have an account?
                            <Link to="/login" className="link-register"> Sign in</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}
