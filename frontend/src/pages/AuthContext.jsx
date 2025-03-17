import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create an AuthContext
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    // Check if user is already logged in
    useEffect(() => {
        if (token) {
            axios.get("http://127.0.0.1:8000/api/user/", {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then(response => setUser(response.data))
                .catch(() => logout()); // If token is invalid, logout user
        }
    }, [token]);

    // Login function
    const login = (username, password) => {
        axios.post("http://127.0.0.1:8000/api/login/", { username, password })
            .then(response => {
                localStorage.setItem("token", response.data.access);
                setToken(response.data.access);
                setUser(response.data.user);
            })
            .catch(() => alert("Invalid credentials"));
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
