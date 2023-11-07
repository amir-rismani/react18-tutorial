import './Header.css'

const Header = ({ notes }) => {
    return (
        <div className="header">
            <h1>My Notes ({notes.length})</h1>
            <select>
                <option>Sort based on completed</option>
                <option>Sort based on earlined</option>
                <option>Sort based on newest</option>
            </select>
        </div>
    )
};
export default Header;