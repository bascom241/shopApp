import React, { useRef } from 'react'
import './NavBar.css'
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const NavBar = () => {


        const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.left = '0'
    }

    const closeMenu = () =>{
        menuRef.current.style.left= '-350px'
      
    }



    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const [navState,setNavState] = useState('Category');
    return (
        <>
            <nav className='nav-container'>


                <div className='header-wrapper'>
                    <h1>Fay's Hub </h1>
                    <div>
                        <input
                            placeholder='search for styles here'
                            className='input'
                            value={value}
                            onChange={handleChange}
                            type='text'
                        />
                        <FaBars className='nav-open' onClick={openMenu} />
                    </div>


                    <div className='nav-list' >
                        <ul  ref={menuRef} className='list-container'>
                            <AiOutlineClose onClick={closeMenu} className='nav-close' />
                            <li onClick={()=> setNavState('Home')} className={navState === 'Home'? 'active': ''}>Home</li>
                            <li onClick={()=> setNavState('Category')} className={navState === 'Category'? 'active': ''}>Category</li>
                            <li onClick={()=> setNavState('Shop')} className={navState === 'Shop'? 'active': ''}>Shop</li>
                            <li onClick={()=> setNavState('Contact-us')} className={navState === 'Contact-us'? 'active': ''}>Contact-us</li>
                        </ul>
                    </div>
                    <div className='icon-container'>
                        <span class="material-symbols-outlined">favorite</span>
                        <Link to='/cart'> <span class="material-symbols-outlined">shopping_cart</span></Link>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default NavBar
