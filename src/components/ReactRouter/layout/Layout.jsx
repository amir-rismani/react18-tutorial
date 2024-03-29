import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"

function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <footer style={{ marginTop: '2rem' }}>Footer</footer>
        </div>
    )
}

export default Layout