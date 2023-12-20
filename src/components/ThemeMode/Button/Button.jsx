import "./Button.css"

const Button = ({ mode, children }) => {
    const className = `btn--${mode}`;
    return <button className={`btn ${className}`}>{children}</button>;
}

export default Button;