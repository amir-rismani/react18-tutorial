import { useState } from "react";
import Panel from "./Panel/Panel";

const ThemeMode = () => {
    const [theme, setTheme] = useState('light');
    const handleChange = (e) => {
        e.target.checked ? setTheme("dark") : setTheme('light')
    }
    return (
        <div className="theme-mode text-center">
            <Panel mode={theme} />
            <label>
                <input type="checkbox" name="" id="theme" onChange={handleChange} />
                Use dark mode
            </label>
        </div>
    );
}

export default ThemeMode;