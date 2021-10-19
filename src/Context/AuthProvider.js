import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allcontexts = useFirebase();
    return (
        <AuthContext.Provider value={allcontexts}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;