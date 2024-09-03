import React from 'react';
import { CiSearch, CiSliderHorizontal } from "react-icons/ci";
import "./App.scss";

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
                    <input type="text" placeholder="Search coffee" className='search__input'/>
                    <CiSearch className='search__icon'/>
                  </div>

                  <button className='btn'><CiSliderHorizontal  className='btn-icon'/></button>
              </div>

          </header>

          <main className='content'>
              <div className="banner">
                  <img src="./images/banner.png" alt="" className='banner__image'/>
              </div>

              <div className="menu">
                <ul className="tab">
                  <li className="item"><a href="">Link 1</a></li>
                  <li className="item"><a href="">Link 2</a></li>
                  <li className="item"><a href="">Link 3</a></li>
                  <li className="item"><a href="">Link 4</a></li>
                  <li className="item"><a href="">Link 5</a></li>
                </ul>
              </div>
          </main>
      </div>
    </>
  )
}

export default App