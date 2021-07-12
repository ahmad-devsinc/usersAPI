import './Comment.css';
 
const Comment = (prop) => {
    return(
        <div className="Comment">
            <div className="comment__name">{prop.comment.name}</div>
            <div className="comment__body">{prop.comment.body}</div>
        </div>
    );
}

export default Comment;