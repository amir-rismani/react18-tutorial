import { useState } from "react";
import "./LoginForm.css"
import { useUser } from "../../Context/UserContext";
const LoginForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const { setUser } = useUser();
    const canLogin = firstName && lastName;
    return (
        <form className="login">
            <div className="form-group">
                <label htmlFor="first-name">First Name:</label>
                <input type="text" name="" id="first-name" className="form-input" value={firstName} onInput={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" name="" id="last-name" className="form-input" value={lastName} onInput={(e) => setLastName(e.target.value)} />
            </div>
            <button disabled={!canLogin} className="login__button" onClick={() => setUser({ name: firstName + ' ' + lastName })}>login</button> {!canLogin && <span className="red">Fill in both fields.</span>}
        </form>
    );
}

export default LoginForm;