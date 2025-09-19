import React from 'react';
import './NavBar.css';
import NavButton from './NavButton';
import VertSeparator from './VertSeparator';
import { useLocation, useNavigate } from 'react-router-dom';


const Navbar : React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const schedulePage = () => {
        navigate("/home")
    }

    const progressPage = () => {
        navigate("/progress")
    }

    const newPage = () => {
        navigate("/new")
    }



    return (
        <nav className="nav-bar">
            <p className='logo'> DailyFlow </p>
            <div className = 'nav-buttons'>
                <NavButton label={'New'} onClick={newPage} enabled={location.pathname != '/new'}></NavButton>
                <VertSeparator></VertSeparator>
                <NavButton label={'Progress'} onClick={progressPage} enabled={location.pathname != '/progress'}></NavButton>
                <VertSeparator></VertSeparator>
                <NavButton label={'Schedule'} onClick={schedulePage} enabled={location.pathname != '/home'}></NavButton>
            </div>
        </nav>
    );
}

export default Navbar;