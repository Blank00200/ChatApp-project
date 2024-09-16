import React, { createContext, useState, useContext } from 'react';
import Cookie from 'js-cookie'; // Make sure this is the correct import for cookie handling

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialUserState = Cookie.get("jwt") || localStorage.getItem("ChatApp");
    // Parse the user data and store it in state
    const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined);
    
    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
