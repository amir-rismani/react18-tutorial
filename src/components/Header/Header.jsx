import './Header.css'

const Header = ({ notes, sortBy, onSortBy }) => {
    return (
        <div className="header">
            <h1>My Notes ({notes.length})</h1>
            <select value={sortBy} onChange={onSortBy}>
                <option value="latest">Sort based on newest</option>
                <option value="earliest">Sort based on earliest</option>
                <option value="completed">Sort based on completed</option>
            </select>
        </div>
    )
};
export default Header;