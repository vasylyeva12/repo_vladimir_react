import React from 'react'
import {NavLink } from 'react-router-dom'
import "../assets/styles/components/header.scss"

const Header = () => {

    const setActiveLink = ({isActive})=> isActive ? "navbar__item navbar__item-active" : "navbar__item"

    return (
        <header>
            <nav>
                <ul className="navbar">
                    <li><NavLink to="/" className={setActiveLink}>Home</NavLink></li>
                    <li><NavLink to="/categories" className={setActiveLink}>Categories</NavLink></li>
                    <li><NavLink to="/products/all" className={setActiveLink}>All products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header