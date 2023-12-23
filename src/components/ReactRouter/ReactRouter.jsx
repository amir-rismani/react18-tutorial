import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/layout";
import Profile from "./pages/Profile";
import Payments from "./pages/Payments";
import Login from "./pages/Login";

const ReactRouter = () => {
    return (<div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/:id" element={<Post />} />
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route index element={<Navigate to="profile" replace={true} />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="payments" element={<Payments />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>);
}

export default ReactRouter;