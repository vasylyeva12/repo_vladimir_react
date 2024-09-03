import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Error404 from './pages/Error404';
import './assets/styles/app.scss';
import Layout from './components/Layout';
import Post from './pages/Post';
import Categories from './pages/Categories';
import Products from './pages/Products';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/products/all' element={<Products />} />
        <Route path='/products/:categoryId' element={<Products />} />
        <Route path='*' element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export default App