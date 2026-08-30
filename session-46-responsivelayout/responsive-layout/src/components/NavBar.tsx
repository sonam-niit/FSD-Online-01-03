import { Link } from "react-router-dom";

function NavBar() {
    return ( 
        <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
            <h1 className="text-xl font-bold">
                MyApp
            </h1>

            <div className="hidden md:flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/products">Products</Link>
                <Link to="/aboutus">AboutUs</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contactus">Contact Us</Link>
                <Link to="/dynamic">Dynamic Style</Link>
                
            </div>
            <button className="md:hidden text-2xl">
                ☰
            </button>
        </nav>
     );
}

export default NavBar;