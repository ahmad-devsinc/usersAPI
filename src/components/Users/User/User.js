import { useContext } from 'react';
import UserContext from '../../../Contexts/userContext';
import './User.css';

const User = (props) => {
    const userContext = useContext(UserContext);
    
    const selectUser = (user) => {
        props.selectedUser(user);
    }
    return (
        <div className="user">
            <div className="card" onClick={()=>selectUser(userContext)}>
                <div className="card-head">
                    <span className="username">{userContext.username}</span>
                    <span className="detail-icon"></span>
                </div>
                <div className="card-body">
                    <div className="details">
                        <div className="item">
                            <span className="item-s">Full name:</span>&nbsp;<span className="item-m">{userContext.name}</span>
                        </div>
                        <div className="item">
                            <span className="item-s">Email:</span>&nbsp;<span className="item-m">{userContext.email}</span>
                        </div>
                        <div className="item">
                            <span className="item-s">Phone:</span>&nbsp;<span className="item-m">{userContext.phone}</span>
                        </div>
                        <div className="item">
                            <span className="item-s">Website:</span>&nbsp;<span className="item-m">{userContext.website}</span>
                        </div>
                        <div className="item">
                            <span className="item-s">Address:</span>&nbsp;<span className="item-m">{userContext.address.street}, {userContext.address.suite}, {userContext.address.city}</span>
                        </div>
                        <div className="item">
                            <span className="item-s">Company:</span>&nbsp;
                            <span className="company-item">
                                <span>{userContext.company.name}</span>
                                <span className="f-small">({userContext.company.catchPhrase})</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card__foot"></div>
            </div>
        </div>
    )
}

export default User;