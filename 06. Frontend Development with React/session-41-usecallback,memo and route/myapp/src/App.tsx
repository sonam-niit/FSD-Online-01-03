import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./component/home"
import About from "./component/about"
import Counter from "./component/counter"
import UserList from "./component/UserLists"
import Details from "./component/details"

function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link> |
        <Link to="/about">About Us</Link> |
        <Link to="/counter">Counter</Link> |
        <Link to="/users">User List</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
