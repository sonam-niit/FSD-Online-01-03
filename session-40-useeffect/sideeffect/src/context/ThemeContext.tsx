import { createContext, useContext, useState, type ReactNode } from "react";

type Theme = "light" | "dark"
type ThemeContextType = {
    theme:Theme;
    toggleTheme: ()=> void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

type Props = {
    children : ReactNode
}

export const ThemeProvider = ({children}:Props)=>{
    const [theme,setTheme] = useState<Theme>("light");

    const toggleTheme = ()=>{
        setTheme(prev=>prev==="light"?"dark":"light")
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=>{
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useTheme use inside the provider")
    }
    return context;
}