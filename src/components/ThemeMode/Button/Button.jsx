import { useContext } from "react";
import "./Button.css"
import { ThemeContext } from "../ThemeMode";

const Button = ({ children }) => {
    // 3. consume context
    const { theme: mode } = useContext(ThemeContext)
    const className = `btn--${mode}`;
    return <button className={`btn ${className}`}>{children}</button>;
}

export default Button;