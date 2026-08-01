import { useTheme } from "../context/ThemeContext";

function NavBar() {
    const {theme,toggleTheme} = useTheme();
    return ( 
        <button onClick={toggleTheme}>
            Switch to {theme === "light"?"dark":"light"} Theme
        </button>
     );
}

export default NavBar;