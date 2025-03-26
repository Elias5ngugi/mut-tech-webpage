import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"; 


function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-container">
            <img src="/assets/mut-logo.png"alt="MUTC Logo" className="logo" />
            <span className="club-name">Murang'a University Tech Club</span>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/leadership">Leadership</Link></li>
                <li><Link to="/tracks">Tracks</Link></li>
                <li><Link to="/events">Events</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
