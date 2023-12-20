import ThemeProvider from "./Context/ThemeContext";
import UserProvider from "./Context/UserContext";
import Welcome from "./Panel/Welcome/Welcome";
import SwitchMode from "./SwitchMode/SwitchMode";

const MultiContext = () => {
    return (
        <ThemeProvider>
            <UserProvider>
                <div className="theme-mode">
                    <Welcome/>
                    <SwitchMode />
                </div>
            </UserProvider>
        </ThemeProvider>
    );
}

export default MultiContext;