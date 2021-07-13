import { useEffect, useState } from "react"
import User from './User/User';
import UserContext from '../../Contexts/userContext';
import REST_URL from "../../shared/restUrl"
import './Users.css';
import Sidebar from '../Sidebar/Sidebar';

const Users = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`${REST_URL}/users`)
            .then(response => response.json())
            .then(users => setUsers(users))
            .catch(err => console.log(err));

        return () => {
        }
    }, []);

    const onSelectUser = (userEvent) => {
        props.passStudent(userEvent);
    }

    return (
        <div className="data-wrapper">
            <button className="logout-btn" onClick={props.handleLogout}>Logout</button>

            <div className="Users">
                {users.map(user => {
                    return (
                        <UserContext.Provider key={user.id} value={user}>
                            <User selectedUser={onSelectUser} />
                        </UserContext.Provider>
                    )
                })}
            </div>

            <div className="sidebar">
                <Sidebar />
            </div>
        </div>
    );
}

export default Users;