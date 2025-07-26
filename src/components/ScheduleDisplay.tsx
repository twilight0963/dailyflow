import React from 'react';
import './ScheduleDisplay.css';
import NavButton from './NavButton';
import VertSeparator from './VertSeparator';

interface ScheduleDisplay {
    title: string;
    date: Date;
}

const Schedule : React.FC<ScheduleDisplay> = ({title="Untitled", date}) => {
    return (
        <div className="schedule">
            <div className = 'name-date'>
                <h1 className='name'>{title}</h1>
                <h3 className='date'>Created at: {date.toDateString()}</h3>
            </div>
            <div className = 'buttons'>
                <NavButton label={'Use'}/>
                <VertSeparator/>
                <NavButton label={'View'}/>
                <VertSeparator/>
                <NavButton label={'Edit'}/>
            </div>
        </div>
    );
}

export default Schedule;