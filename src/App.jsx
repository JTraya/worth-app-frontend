// src/App.jsx

import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import PostForm from "./components/Posts/PostForm";
import PostEditForm from "./components/Posts/PostEditForm";

import * as authService from "./services/authService";
import * as postService from "./services/postService"

const App = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState(authService.getUser());  
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')

  function handleLogout(){
    localStorage.removeItem('token');
    // need to remove the token from the
    setUser(null)
  }

  async function handleAddPost(formData){
    try {

      const data = await postService.create(formData)
      console.log(data)
      setPosts([data, ...posts])
      setError('')
      navigate('/')
      
    } catch (error) {
      console.log(error)
      setError("Sorry we couldn't create your post at the moment, please try again")
      
    }
  }

  async function handleEditPost(id, formData){
    try {

      const editedPost = await postService.edit(id, formData)
      console.log('Edit: ', editedPost)
      const newPostsArray = posts.map((post) => {
        return post._id === editedPost._id ? editedPost : post
      })

      setPosts(newPostsArray)
      navigate('/')
      
    } catch (error) {
      console.log(error)
      
    }
  }

  async function handleDeletePost(postId){
    try {

      const deletedPost = await postService.deletePost(postId)
      console.log('Deleted: ', deletedPost)
      const newPostsArray = posts.filter(post => {
        return post._id !== deletedPost._id
      })

      setPosts(newPostsArray)
      navigate('/')
      
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(() => {

    async function getPosts(){
      try {

        const data = await postService.index()
        console.log('Data: ', data)
        setPosts(data)
        setError('')
        
      } catch (error) {
        console.log(error)
        setError("Sorry couldn't find any posts, please try again")
        
      }
    }

    getPosts()

  }, [])

  if (!user) {
    return (
      <>
        <NavBar user={user}/>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/signup"
            element={<SignupForm setUser={setUser} />}
          ></Route>
          <Route
            path="/signin"
            element={<SigninForm setUser={setUser} />}
          ></Route>
        </Routes>
      </>
    );
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Dashboard user={user} posts={posts} handleDeletePost={handleDeletePost} />} />
        <Route
          path="/signup"
          element={<SignupForm setUser={setUser} />}
        ></Route>
        <Route
          path="/signin"
          element={<SigninForm setUser={setUser} />}
        ></Route>
        <Route path="/create" element={<PostForm user={user} handleAddPost={handleAddPost} />} />
        <Route path="/:userId" element={<ProfilePage />} />
        <Route path="/:postId/edit" element={<PostEditForm user={user} handleEditPost={handleEditPost}/>} />
      </Routes>
    </>
  );
};

export default App;
