import React from 'react';
import './NavBar.css';
import NavButton from './NavButton';
import VertSeparator from './VertSeparator';

const Navbar : React.FC = () => {
    return (
        <nav className="nav-bar">
            <p className='logo'> DailyFlow </p>
            <div className = 'nav-buttons'>
                <NavButton label={'New'}></NavButton>
                <VertSeparator></VertSeparator>
                <NavButton label={'Progress'}></NavButton>
                <VertSeparator></VertSeparator>
                <NavButton label={'Schedule'} enabled={false}></NavButton>
            </div>
        </nav>
    );
}

export default Navbar;