import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <nav >
            <Link to="/list" className="link"><span className='header'>XpeedStudio</span></Link>
            <Link to="/list" className="link">Table</Link>
            <Link to="/create" className="link">Create Form</Link>
            <Link to="/update" className="link">Update Form</Link>
        </nav>
    );
};

export default Nav;