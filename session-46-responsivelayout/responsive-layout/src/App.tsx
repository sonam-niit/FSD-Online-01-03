import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutUs from "./components/Aboutus"
import NavBar from "./components/NavBar"
import PoductGrid from "./components/ProductGrid"
import Profile from "./components/Profile"
import Blogs from "./components/blogs"
import ContactUs from "./components/contactus"
import DynamicStyling from "./components/DynamicStyling"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<PoductGrid />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/dynamic" element={<DynamicStyling />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
