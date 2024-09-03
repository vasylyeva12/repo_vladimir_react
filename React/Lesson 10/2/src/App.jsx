import React from 'react';
import { CiSearch, CiShoppingBasket, CiSliderHorizontal } from "react-icons/ci";
import "./App.scss";
import { useSelector } from 'react-redux';
import {NavLink, Routes, Route} from "react-router-dom";

const App = () => {


  return (
    <>
      <div className="page-mobile">
        <header className='header'>
          <div className='header__info'>
            <span>Hello 🖐</span>
            <h2>John Done</h2>
          </div>

          <div className='header__search'>
            <div className='search'>
              <input type="text" placeholder="Search coffee" className='search__input' />
              <CiSearch className='search__icon' />
            </div>

            <button className='btn'><CiSliderHorizontal className='btn-icon' /></button>
          </div>

          <div className="banner">
            <img src="./images/banner.png" alt="" className='banner__image' />
          </div>
        </header>

        <main className='content'>
          <div className="menu">
            <ul className="tab">
              <li><NavLink to="/" className='tab__item tab__item-active'>All Coffee</NavLink></li>
              <li><NavLink to="/categories/1" className='tab__item'>Machiato</NavLink></li>
              <li><NavLink to="/categories/2" className='tab__item'>Latte</NavLink></li>
              <li><NavLink to="/categories/3" className='tab__item'>Americano</NavLink></li>
            </ul>
          </div>


          <Routes>
              <Route path="/" element={<h1>Products All</h1>} />
              <Route path="/categories/1" element={<h1>Products 1</h1>} />
              <Route path="/categories/2" element={<h1>Products 2</h1>} />
              <Route path="/categories/3" element={<h1>Products 3</h1>} />
          </Routes>

        </main>
      </div>
    </>
  )
}

export default App