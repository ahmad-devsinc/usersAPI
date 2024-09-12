import './Comment.css';
 
const Comment = (prop) => {
    return(
        <div className="comment">
            <div className="comment-name">{prop.comment.name}</div>
            <div className="comment-body">{prop.comment.body}</div>
        </div>
    );
}

export default Comment;