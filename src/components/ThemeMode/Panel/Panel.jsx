import "./Panel.css"
import Button from "../button/button";
import { useContext } from "react";
import { ThemeContext } from "../ThemeMode";

const Panel = () => {
    // 3. consume context
    const mode = useContext(ThemeContext)
    const className = `panel--${mode}`
    return (
        <div className={`panel ${className}`}>
            <h1>Welcome</h1>
            <Button>Sign up</Button>
            <Button>Log in</Button>
        </div>
    );
}

export default Panel;