import "./Button.css"
import { useTheme } from "../Context/ThemeContext";

const Button = ({ children }) => {
    const { theme } = useTheme();
    const className = `btn--${theme}`;
    return <button className={`btn ${className}`}>{children}</button>;
}

export default Button;