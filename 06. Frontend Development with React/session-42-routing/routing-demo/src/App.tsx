import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Dashboard from "./components/dashboard"
import Profile from "./components/profile"
import Settings from "./components/settin"
import Home from "./components/home"
import Login from "./components/login"
import ProtectedRoute from "./components/protectedRoute"
import RefDemo from "./components/RefDemo"


function App() {

  return (
    <>
      <BrowserRouter>

        <Link to="/">Home</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/focus">RefDemo</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/focus" element={<RefDemo />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />} >
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
