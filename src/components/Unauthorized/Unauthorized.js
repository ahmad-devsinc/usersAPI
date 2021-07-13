import { Link } from 'react-router-dom';

const Unauthorized = () => {
    const inlineStyle = {
        textAlign: 'center'
    };

    return (
        <div style={inlineStyle}>
            Error, The page you requested is not available
            <p><Link to="/">Go to the main page</Link></p>
        </div>
    )
}
export default Unauthorized;