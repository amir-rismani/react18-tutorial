import ThemeProvider from "./Context/ThemeContext";
import Panel from "./Panel/Panel";
import SwitchMode from "./SwitchMode/SwitchMode";

const ThemeMode = () => {
    return (
        <ThemeProvider>
            <div className="theme-mode text-center">
                <Panel />
                <SwitchMode />
            </div>
        </ThemeProvider>
    );
}

export default ThemeMode;