import { createContext, useContext, useState } from "react";

// 1. create context
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    return (
        // 2. provide context
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;

// 3. consume context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('ThemeContext was used outside of ThemeProvider.');
    return context
}
