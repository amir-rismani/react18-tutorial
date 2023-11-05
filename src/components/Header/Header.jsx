import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>My Notes (0)</h1>
            <select>
                <option>Sort based on completed</option>
                <option>Sort based on earlined</option>
                <option>Sort based on newest</option>
            </select>
        </div>
    )
};
export default Header;