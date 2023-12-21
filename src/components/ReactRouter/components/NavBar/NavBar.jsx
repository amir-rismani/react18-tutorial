import { NavLink } from "react-router-dom"
import "./NavBar.css"
function NavBar() {
    return (
        <ul className="navbar">
            <li className="nav-item"><NavLink to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/posts">Posts</NavLink></li>
            <li className="nav-item"><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>
    )
}

export default NavBar