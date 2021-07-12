// import { useContext } from "react";
// import DataContext from "../../Contexts/dataContext";
import { useSelector } from 'react-redux';
import '../Posts/Posts.css';


const Todos = () => {
    // const dataContext = useContext(DataContext);
    const {todos} = useSelector(state => state.data);
    return (
        <div className="Posts">
        {/* {dataContext.userTodos.map(todo => { */}
        {todos.map(todo => {
            return (
                <div key={todo.id} className="post">
                    <div className="post__title"><span className="font-s">Title: </span>{todo.title}</div>
                    <div className="post__title"><span className="font-s">Completed: </span>{todo.completed.toString()}</div>
                </div>
            );
        })}
    </div>
    );
}
export default Todos;