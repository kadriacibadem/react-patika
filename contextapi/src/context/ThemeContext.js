import {createContext, useState, useEffect} from 'react';

const themeContext = createContext();

export const ThemeProvider = ({children}) => {
    
   
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem("theme", theme);
    } , [theme]);

    const values = {
        theme,
        setTheme
    }

    return (
        <themeContext.Provider value={values}>
            {children}
        </themeContext.Provider>
    )
}

export default themeContext;