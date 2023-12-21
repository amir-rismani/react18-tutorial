import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/layout";

const ReactRouter = () => {
    return (<div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="posts" element={<Posts />}></Route>
                    <Route path="dashboard" element={<Dashboard />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>);
}

export default ReactRouter;