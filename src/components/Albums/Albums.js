import { useEffect } from "react";
import { useSelector } from "react-redux";
import '../Posts/Posts.css';

const Albums = () => {
    const { todos } = useSelector(state => state.data);

    useEffect(() => {
    }, [todos]);

    return (
        <div className="Posts">
            {todos.map(album => {
                return (
                    <div key={album.id} className="post">
                        <div className="post__title">
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