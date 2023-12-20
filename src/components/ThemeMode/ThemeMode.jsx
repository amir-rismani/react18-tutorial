import { createContext, useState } from "react";
import Panel from "./Panel/Panel";
// 1. create context
export const ThemeContext = createContext();

const ThemeMode = () => {
    const [theme, setTheme] = useState('light');
    const handleChange = (e) => {
        e.target.checked ? setTheme("dark") : setTheme('light')
    }
    return (
        // 2. provide context
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="theme-mode text-center">
                <Panel />
                <label>
                    <input type="checkbox" checked={theme === 'dark'} id="theme" onChange={handleChange} />
                    Use dark mode
                </label>
            </div>
        </ThemeContext.Provider>
    );
}

export default ThemeMode;