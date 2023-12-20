import "./Panel.css"
import { useTheme } from "../Context/ThemeContext";

const Panel = ({ title, children }) => {
    const { theme } = useTheme();
    const className = `panel--${theme}`
    return (
        <div className={`panel ${className}`}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default Panel;