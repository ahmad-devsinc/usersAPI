import { useSelector } from 'react-redux';
import '../Posts/Posts.css';


const Todos = () => {
    const {todos} = useSelector(state => state.data);
    
    return (
        <div className="posts">
        {todos.map(todo => {
            return (
                <div key={todo.id} className="post">
                    <div className="post-title"><span className="font-s">Title: </span>{todo.title}</div>
                    <div className="post-title"><span className="font-s">Completed: </span>{todo.completed.toString()}</div>
                </div>
            );
        })}
    </div>
    );
}
export default Todos;