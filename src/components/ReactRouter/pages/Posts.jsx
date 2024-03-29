import { Link } from "react-router-dom"

function Posts() {
    return (
        <div>
            <h1>Posts Page</h1>
            <ul>
                <li>
                    {/* declarative navigate */}
                    <Link to="1?type=free&cat=frontend">Post 1</Link>
                </li>
                <li>
                    <Link to="2">Post 2</Link>
                </li>
                <li>
                    <Link to="3">Post 3</Link>
                </li>
            </ul>
            <Link to="/">Go to homepage</Link>
        </div>
    )
}

export default Posts