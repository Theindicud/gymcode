import { createContext, useState, useContext } from "react";

const AlertContext =  createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
    const [error, setError] = useState(null);

    const showAlert = (message) => {
        setError(message);
        setTimeout(() => {
            setError(null);
        }, 5000);
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            {children}
        </AlertContext.Provider>
    );
};