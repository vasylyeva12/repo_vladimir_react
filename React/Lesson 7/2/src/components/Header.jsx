import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/styles/components/header.scss"

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="navbar">
                    <li><Link to="/" className="navbar__item navbar__item-active">Home</Link></li>
                    <li><Link to="/about" className="navbar__item">About</Link></li>
                    <li><Link to="/posts" className="navbar__item">Posts</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header