import ThemeProvider from "../../ThemeMode/Context/ThemeContext"
import UserProvider from "../Context/UserContext";

const Providers = ({ children }) => {
    return (
        <UserProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </UserProvider>
    );
}

export default Providers;