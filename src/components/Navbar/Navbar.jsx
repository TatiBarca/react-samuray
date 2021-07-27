import React from 'react';
import s from'./Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.local}>
            <a>Profile</a>
        </div>
        <div className={s.local}>
            <a>Messages</a>
        </div>
        <div className={s.local}>
            <a>News</a>
        </div>
        <div className={s.local}>
            <a>Music</a>
        </div>
        <div className={s.local}>
            <a >Settings</a>
        </div>
    </nav>
};

export default Navbar;