import React from 'react';
import { CiSearch, CiShoppingBasket, CiSliderHorizontal } from "react-icons/ci";
import "./App.scss";
import { useSelector } from 'react-redux';

const App = () => {
  const products = useSelector(state => state.data);

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
              <li><a href="" className='tab__item tab__item-active'>All Coffee</a></li>
              <li><a href="" className='tab__item'>Machiato</a></li>
              <li><a href="" className='tab__item'>Latte</a></li>
              <li><a href="" className='tab__item'>Americano</a></li>
            </ul>
          </div>

          <div className="products">
            {
              products && products.map(item => (
                <div className="item" key={item.id}>
                  <img src={item.image} alt={item.title} className="item__image" />

                  <div className='item__content'>
                    <h2 className='item__title'>{item.title}</h2>
                    <p className='item__subtitle'>{item.description}</p>
                  </div>

                  <div className='item__footer'>
                    <span className='item__price'>$ {item.price}</span>

                    <button className='btn btn-small'><CiShoppingBasket className='btn-icon' /></button>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
      </div>
    </>
  )
}

export default App