import { useTheme } from "../Context/ThemeContext";

const SwitchMode = () => {
    const { theme, setTheme } = useTheme();
    const handleChange = (e) => {
        setTheme(e.target.checked ? "dark" : 'light')
    }

    return (
        <label>
            <input type="checkbox" checked={theme === 'dark'} id="theme" onChange={handleChange} />
            Use dark mode
        </label>
    );
}

export default SwitchMode;