import React from 'react';
import './NavBar.css';
import NavButton from './NavButton';
import VertSeparator from './VertSeparator';
import { useLocation, useNavigate } from 'react-router-dom';


const Navbar : React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const homePage = () => {
        navigate("/")
    }
    const schedulePage = () => {
        navigate("/schedules")
    }

    const progressPage = () => {
        navigate("/progress")
    }

    const newPage = () => {
        navigate("/new")
    }



    return (
        <nav className="nav-bar">
            <button className='logo' onClick={homePage}> DailyFlow </button>
            <div className = 'nav-buttons'>
                <NavButton label={'New'} onClick={newPage} enabled={location.pathname != '/new'}></NavButton>
                <VertSeparator></VertSeparator>
                <NavButton label={'Progress'} onClick={progressPage} enabled={location.pathname != '/progress'}></NavButton>
                <VertSeparator></VertSeparator>
                <NavButton label={'Schedule'} onClick={schedulePage} enabled={location.pathname != '/schedules'}></NavButton>
            </div>
        </nav>
    );
}

export default Navbar;