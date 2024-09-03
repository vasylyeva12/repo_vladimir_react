import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Error404 from './pages/Error404';
import './assets/styles/app.scss';
import Layout from './components/Layout';
import Post from './pages/Post';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:postId' element={<Post />} />
        <Route path='*' element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export default App