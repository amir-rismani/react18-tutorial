import { NavLink, Outlet, useLocation } from "react-router-dom"
import "./Dashboard.css";

function Dashboard() {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h1>Dashboard Page</h1>
            <div className="dashboard-wrapper">
                <div className="sidebar">
                    {/* declarative navigate */}
                    <NavLink end to="profile">Profile</NavLink>
                    <NavLink to="payments">Payments</NavLink>
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard