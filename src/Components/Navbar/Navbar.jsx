import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="space-x-5 text-center font-semibold mt-3 mb-10">
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Navbar;