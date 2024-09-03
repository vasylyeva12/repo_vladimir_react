import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
        <header>
          <nav>
            <ul className="navbar">
              <li><a href="/" className="navbar__item navbar__item-active">Home</a></li>
              <li><a href="/about" className="navbar__item">About</a></li>
              <li><a href="/posts" className="navbar__item">Posts</a></li>
            </ul>
          </nav>
        </header>

        <main>
            <Routes>
                <Route path='/' element={<h1>HOME PAGE</h1>}/>
                <Route path='/about' element={<h1>ABOUT PAGE</h1>}/>
                <Route path='/posts' element={<h1>POSTS PAGE</h1>}/>
            </Routes>
        </main>
    </>
  )
}

export default App