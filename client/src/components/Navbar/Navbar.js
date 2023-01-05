import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.scss'
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className="left">
                <div className='item'>
                    <img src='/img/en.png' alt='' style={{width:"21px", height:"22px"}} />
                    <KeyboardArrowDownIcon />
                </div>
                <div className='item'>
                    <span>USD</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className='item'>
                    <Link className="link" to="/products/1">Women</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/products/2">Men</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/products/3">Children</Link>
                </div>
            </div>
            <div className='center'>
                <Link className="link" to="/">ECOMSTORE</Link>
            </div>
            <div className='right'>
                <div className='item'>
                    <Link className="link" to="/">Homepage</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/">About</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/">Contact</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/">Store</Link>
                </div>
                <div className='icons'>
                    <SearchIcon />
                    <PersonOutlinedIcon />
                    <FavoriteBorderOutlinedIcon />
                    <div className='cartIcon' onClick={()=>setOpen(!open)}>
                        <ShoppingCartOutlinedIcon />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
        {open && <Cart />}
    </div>
  )
}

export default Navbar;