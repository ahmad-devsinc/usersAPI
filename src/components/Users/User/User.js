import { useContext } from 'react';
import UserContext from '../../../Contexts/userContext';
import './User.css';

const User = (props) => {
    const userContext = useContext(UserContext);
    
    const selectUser = (user) => {
        props.selectedUser(user);
    }
    return (
        <div className="User">
            <div className="card" onClick={()=>selectUser(userContext)}>
                <div className="card__head">
                    <span className="username">{userContext.username}</span>
                    <span className="detail-icon"></span>
                </div>
                <div className="card__body">
                    <div className="details">
                        <div className="item">
                            <span className="item__s">Full name:</span>&nbsp;<span className="item__m">{userContext.name}</span>
                        </div>
                        <div className="item">
                            <span className="item__s">Email:</span>&nbsp;<span className="item__m">{userContext.email}</span>
                        </div>
                        <div className="item">
                            <span className="item__s">Phone:</span>&nbsp;<span className="item__m">{userContext.phone}</span>
                        </div>
                        <div className="item">
                            <span className="item__s">Website:</span>&nbsp;<span className="item__m">{userContext.website}</span>
                        </div>
                        <div className="item">
                            <span className="item__s">Address:</span>&nbsp;<span className="item__m">{userContext.address.street}, {userContext.address.suite}, {userContext.address.city}</span>
                        </div>
                        <div className="item">
                            <span className="item__s">Company:</span>&nbsp;
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