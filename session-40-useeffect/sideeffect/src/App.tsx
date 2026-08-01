import NavBar from "./components/NavBar";
import Users from "./components/Users"
import { useTheme } from "./context/ThemeContext"


function App() {

  const {theme} = useTheme();
 
  return (
    <div style={{
      background: theme === "light"?"#fff":"#333",
      color: theme === "light" ? "#000" : "#fff",
      padding: "15px"
    }}>
      <NavBar />
      <h2>Component Rendered</h2>
      <Users />
    </div>
  )
}

export default App
