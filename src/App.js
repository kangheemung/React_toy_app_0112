
import './App.css';
// Import Routes instead of Switch
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './User/Login';
import Signup from './User/Signup';
import Profile from './User/Profile';
import Post from './Post/Post';
import PostList from './Post/PostList';
function App() {
  return (
    <>
    <Router>
    <Header  bg="dark" data-bs-theme="dark"/>
    <Routes>
      <Route path="/"  element ={<Home />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/profile" element ={<Profile />}/>
      <Route path="/login" element ={<Login  />}/>
      <Route path="/post"  element ={<Post />}/>
      <Route path="/postlist"  element ={<PostList />}/>
    </Routes>
  </Router>
    ここはappです。
    </>
  );
}

export default App;
