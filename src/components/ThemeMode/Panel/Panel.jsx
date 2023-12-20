import "./Panel.css"
import Button from "../button/button";
import { useTheme } from "../Context/ThemeContext";

const Panel = () => {
    const { theme, setTheme } = useTheme();
    const className = `panel--${theme}`
    return (
        <div className={`panel ${className}`}>
            <h1>Welcome</h1>
            <Button>Sign up</Button>
            <Button>Log in</Button>
            <button onClick={() => setTheme('dark')}>Change Theme Mode</button>
        </div>
    );
}

export default Panel;