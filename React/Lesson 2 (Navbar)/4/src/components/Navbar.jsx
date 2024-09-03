import React from 'react'
import NavbarItem from './NavbarItem'
// import {NavbarItem} from './NavbarItem'

const Navbar = ({data}) => {
  return (
    <nav className='navbar'>
        <ul>
            {
                data && data.map(item => <NavbarItem key={item.id} label={item.label}/>)
            }
        </ul>
    </nav>
  )
}

export default Navbar