import React , { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false);
    const [logged, setLogged] = useState(false);

    const toggleIsDark = () => setIsDark( prevValue => !prevValue );
    const toggleLogged = () => setLogged( prevValue => !prevValue );

    return(
        <AppContext.Provider value={{
            isDark, logged,
            toggleIsDark, toggleLogged
        }} >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;