import React , { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false);
    const [logged, setLogged] = useState(false);
    const [userName, setUserName] = useState('');

    const toggleIsDark = () => setIsDark( prevValue => !prevValue );
    const toggleLogged = () => setLogged( prevValue => !prevValue );

    return(
        <AppContext.Provider value={{
            isDark, logged, userName,
            toggleIsDark, toggleLogged, setUserName
        }} >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;