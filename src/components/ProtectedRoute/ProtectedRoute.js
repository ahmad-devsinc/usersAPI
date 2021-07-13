import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, authorization, ...rest }) => {
    return (
        <Route {...rest} render={
            props => {
                if (authorization) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={
                        { pathname: '/unauthorized', state: { from: props.location } }
                    } />
                }
            }
        } />
    );
}

export default ProtectedRoute;