import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const [isAuth, setIsAuth] = useState(false);
    const handleLogin = () => {
        // imperative navigate
        navigate("/dashboard", { replace: true, state: "Logged in..." })
    }
    return (
        <>
            <h1>Login Page</h1>
            {/* imperative navigate */}
            {isAuth && <Navigate to="/dashboard" replace={true} />}
            <button type="button" onClick={handleLogin}>login</button>
        </>

    )
}

export default Login