// import { useContext, useEffect, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import DataContext from "../../Contexts/dataContext";
import REST_URL from "../../shared/restUrl";
import Comment from '../Comment/Comment';
import './Posts.css';
import { saveComments } from "../../redux/reducer";

const Posts = () => {
    // const dataContext = useContext(DataContext);
    // const [comments, setComments] = useState([]);
    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.data);
    const { comments } = useSelector(state => state.data);

    const fetchComments = () => {
        fetch(`${REST_URL}/comments`).then(res => res.json())
            // .then(comments => setComments(comments))
            .then(comments => dispatch(saveComments(comments)))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchComments();
    }, [posts])
    // useEffect(() => {
    //     fetchComments();
    // }, [dataContext])

    return (
        <div className="Posts">
            {/* {dataContext.userPosts.map(post => { */}
            {posts.map(post => {
                return (
                    <div key={post.id} className="post">
                        <div className="post__title"><span className="font-s">Title: </span>{post.title}</div>
                        <div className="post__body"><span className="font-s">Body: </span>{post.body}</div>

                        <div className="comments">
                            {comments.map(comment => {
                                return (comment.postId === post.id) ? <Comment key={comment.id} comment={comment} /> : <div key={comment.id}></div>
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Posts;