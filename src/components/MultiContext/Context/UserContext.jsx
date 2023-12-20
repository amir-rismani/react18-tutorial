import { createContext, useContext, useState } from "react";

// 1. create context
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        // 2. provide context
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

// 3. consume context
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('UserContext was used outside of UserProvider.');
    return context
}
