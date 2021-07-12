import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Users from './components/Users/Users';
import Sidebar from './components/Sidebar/Sidebar';
import DataContext from './Contexts/dataContext';
import './App.css';
import REST_URL from './shared/restUrl';

/* Redux imports */
import { useDispatch } from "react-redux";
import { savePosts, saveAlbums, saveTodos } from './redux/reducer';
function App() {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    selectedUser: {},
    userTodos: [],
    userAlbums: [],
    userPosts: []
  });

  const onPassedStudent = async (user) => {
    setUserData(prev => {
      return { ...prev, selectedUser: user }
    });
    await fetchUserPosts(user.id);
  };

  const fetchUserPosts = (userId) => {
    fetch(`${REST_URL}/posts`)
      .then(res => res.json())
      .then(posts => {
        let _posts = posts.filter(post => post.userId === userId);
        dispatch(savePosts(_posts))
        // setUserData(prev => {
        //   return { ...prev, userPosts: _posts }
        // });
        fetchUserAlbums(userId);
      }).catch(err => console.log(err));
  }

  const fetchUserAlbums = (userId) => {
    fetch(`${REST_URL}/albums`)
      .then(res => res.json())
      .then(albums => {
        let _albums = albums.filter(album => album.userId === userId);
        dispatch(saveAlbums(_albums));
        // setUserData(prev => {
        //   return { ...prev, userAlbums: _albums }
        // });
        fetchUserTodos(userId);
      }).catch(err => console.log(err));
  }

  const fetchUserTodos = (userId) => {
    fetch(`${REST_URL}/todos`)
      .then(res => res.json())
      .then(todos => {
        let _todos = todos.filter(todo => todo.userId === userId);
        dispatch(saveTodos(_todos));
        // setUserData(prev => {
        //   return { ...prev, userTodos: _todos }
        // });
      }).catch(err => console.log(err));
  }

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

  return (
    <div className="App">
      <div className="router">
        <Router>
          <Switch>
            <Route exact path="/">
              <Users passStudent={onPassedStudent} />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="sidebar">
        <DataContext.Provider value={userData}>
          <Sidebar />
        </DataContext.Provider>
      </div>
    </div>
  );
}

export default App;
