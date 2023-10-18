import './Badge.css'
const Badge = ({ variant, title }) => {
    const className = variant ? `badge badge--${variant}` : 'badge';
    return (<span className={className}>{title}</span>);
}

export default Badge;