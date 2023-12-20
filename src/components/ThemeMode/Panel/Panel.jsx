import "./Panel.css"
import Button from "../button/button";
const Panel = ({ mode }) => {
    const className = `panel--${mode}`
    return (
        <div className={`panel ${className}`}>
            <h1>Welcome</h1>
            <Button mode={mode}>Sign up</Button>
            <Button mode={mode}>Log in</Button>
        </div>
    );
}

export default Panel;