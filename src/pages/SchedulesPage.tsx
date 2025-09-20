import Navbar from "../components/NavBar";
import Separator from "../components/Separator";
import Schedule from "../components/ScheduleDisplay";
import './SchedulesPage.css';

const data: Record<string, Date> = {
  "Schedule 1": new Date("2025-07-25T10:30:00"),
  "Schedule 2": new Date("2025-07-26T15:00:00"),
  "Schedule 3": new Date("2025-07-30T00:00:00"),
  "Schedule 4": new Date("2025-07-30T00:00:00")
};


export default function SchedulesPage() {
  return (
    <div className="page">
      <Navbar />
      <div className='schedule-frame'>
        <div style={{ width: '100%', marginBottom: '20px' }}>
          <Separator />
        </div>
        {Object.entries(data).map(([label,date]) => (
          <div className='frame'>
            
            <Schedule title={label} date={date}/>
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
}