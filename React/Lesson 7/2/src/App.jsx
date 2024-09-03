import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Error404 from './pages/Error404';
import Header from './components/Header';
import './assets/styles/app.scss';


const App = () => {
  return (
    <>
       <Header />

        <main className='container'>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/posts' element={<Posts />}/>
                <Route path='*' element={<Error404 />}/>
            </Routes>
        </main>
    </>
  )
}

export default App