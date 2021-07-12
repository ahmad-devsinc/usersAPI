import { useEffect } from "react";
import { useSelector } from "react-redux";
// import DataContext from "../../Contexts/dataContext";
import '../Posts/Posts.css';

const Albums = () => {
    // const dataContext = useContext(DataContext);
    const { todos } = useSelector(state => state.data);

    useEffect(() => {
    }, [todos]);
    // useEffect(() => {
    // }, [dataContext]);

    return (
        <div className="Posts">
            {/* {dataContext.userAlbums.map(album => { */}
            {todos.map(album => {
                return (
                    <div key={album.id} className="post">
                        <div className="post__title">
                            <span className="font-s">Title: </span>
                            {album.title}
                        </div>
                        {/* <div className="images">
                            {photos.map(img=>{
                                return(
                                    (img.albumId === album.id)? <img className="image" src={img.thumbnailUrl} alt={img.title} />: ''
                                )
                            })}
                        </div> */}
                    </div>
                );
            })}
        </div>
    );
}

export default Albums;