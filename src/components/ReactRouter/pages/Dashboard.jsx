import { NavLink, Outlet } from "react-router-dom"
import "./Dashboard.css";

function Dashboard() {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <div className="dashboard-wrapper">
                <div className="sidebar">
                    <NavLink end to="">Profile</NavLink>
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