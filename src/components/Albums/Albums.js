import { useSelector } from "react-redux";
import '../Posts/Posts.css';

const Albums = () => {
    const { todos } = useSelector(state => state.data);

    return (
        <div className="posts">
            {todos.map(album => {
                return (
                    <div key={album.id} className="post">
                        <div className="post-title">
                            <span className="font-s">Title: </span>
                            {album.title}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Albums;