import React from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './Header.css'

const Header = () => {
    return (
        <div className='py-10'>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/review'>Order Review</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            
        </div>
    );
};

export default Header;