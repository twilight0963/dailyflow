import React from 'react';
import './NewUser.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const NewUser : React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/logged-in")
    }

    return(
    <div className='new-user'>
        <div className='info'>
            <h1 className='title'>Set A Schedule!</h1>
            <p className='text'>Looking to increase productivity? Start by making a new schedule!</p>
        </div>

        <Button label="Create Schedule!" onClick={handleClick}/>
        
    </div>
    )
}

export default NewUser