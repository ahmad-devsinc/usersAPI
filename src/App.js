import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Users from './components/Users/Users';
import './App.css';
import REST_URL from './shared/restUrl';
import Landing from './components/Landing/Landing';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
/* Redux imports */
import { useDispatch } from "react-redux";
import { savePosts, saveAlbums, saveTodos } from './redux/reducer';
import Unauthorized from './components/Unauthorized/Unauthorized';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setUserData({
        selectedUser: {},
        userTodos: [],
        userAlbums: [],
        userPosts: []
      })
    }
  }, [])

  const [authorization, setAuthorization] = useState(false);

  const [userData, setUserData] = useState({
    selectedUser: {},
    userTodos: [],
    userAlbums: [],
    userPosts: []
  });

  const onPassedStudent = async (user) => {
    setUserData({ ...userData, selectedUser: user })
    await fetchUserPosts(user.id);
  };

  const fetchUserPosts = (userId) => {
    fetch(`${REST_URL}/posts`)
      .then(res => res.json())
      .then(posts => {
        let _posts = posts.filter(post => post.userId === userId);
        dispatch(savePosts(_posts))
        fetchUserAlbums(userId);
      }).catch(err => console.log(err));
  }

  const fetchUserAlbums = (userId) => {
    fetch(`${REST_URL}/albums`)
      .then(res => res.json())
      .then(albums => {
        let _albums = albums.filter(album => album.userId === userId);
        dispatch(saveAlbums(_albums));
        fetchUserTodos(userId);
      }).catch(err => console.log(err));
  }

  const fetchUserTodos = (userId) => {
    fetch(`${REST_URL}/todos`)
      .then(res => res.json())
      .then(todos => {
        let _todos = todos.filter(todo => todo.userId === userId);
        dispatch(saveTodos(_todos));
      }).catch(err => console.log(err));
  }

  const authorizeUser = (e) => {
    e.preventDefault();
    setAuthorization(true);
  }
  const handleLogout = (e) => {
    e.preventDefault();
    setAuthorization(false);
  }

  return (
    <div className="App">
      <div className="router">
        <Router>
          <Route exact path="/" render={props => <Landing {...props} authorizeUser={authorizeUser} />} />
          <ProtectedRoute exact path="/users" handleLogout={handleLogout} authorization={authorization} passStudent={onPassedStudent} component={Users} />
          <Route exact path="/unauthorized" component={Unauthorized} />
        </Router>
      </div>
    </div>
  );
}

export default App;
