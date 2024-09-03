import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const App = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <a href="/">Logo</a>

                        <CiShoppingCart />
                    </div>
                </div>
            </header>

            <div className="wrapper">
                <div className="container">

                    <div className="wrapper__content">
                    <aside className="sidebar">
                        <nav className="nav">
                            <ul>
                                <li><a href="/" className='nav__item'>Link 1</a></li>
                                <li><a href="/" className='nav__item'>Link 2</a></li>
                                <li><a href="/" className='nav__item'>Link 3</a></li>
                                <li><a href="/" className='nav__item'>Link 4</a></li>
                            </ul>
                        </nav>
                    </aside>

                    <main className="content">
                        <div className="content__header">
                            <select name="" id="">
                                <option value="">link 1</option>
                                <option value="">link 2</option>
                                <option value="">link 3</option>
                            </select>
                        </div>
                        
                        <div className="content__container">
                            <div className="products">
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App