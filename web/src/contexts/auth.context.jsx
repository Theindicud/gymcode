import { createContext, useEffect, useState, useContext } from "react";
import { getProfile, login, logout } from "../services/api.service";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState();

    async function fetchProfile() {
        try {
            const response = await getProfile();
            setUser(response.data);
        } catch (error) {
            setUser(null);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) fetchProfile();
        else setUser(null);
    }, []);

    async function doLogin(data) {
        await login(data);
        fetchProfile();
    }

    function doLogout(navigate) {
        setUser(null);
        logout();
        navigate("/login");
    }

    const value = {
        user,
        doLogin,
        doLogout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
