import { Link } from 'react-router-dom';

const Landing = (props) => {
    const inlineStyle = {
        textAlign: 'center'
    };

    return (
        <div style={inlineStyle}>
            <p>Authorize access to view data</p>
            <p><Link to="/users">View Users</Link></p>
            <button onClick={props.authorizeUser}>Authorize</button>

        </div>
    );
}

export default Landing;