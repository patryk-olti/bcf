import React , { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false);

    const toggleIsDark = () => setIsDark( prevValue => !prevValue );

    return(
        <AppContext.Provider value={{
            isDark,
            toggleIsDark
        }} >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;