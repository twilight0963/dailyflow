import CurrentCompleted from '../components/CurrentCompleted';
import Navbar from '../components/NavBar';
import NextTask from '../components/NextTask';
import CurrentTask from '../components/CurrentTask';
import './LandingPage.css';
import type { Task } from '../models/tasks';
import Separator from '../components/Separator';

const currentTask: Task = {
  name: "Design Meeting",
  timeStart: new Date(Date.now() + 45 * 60000),
  timeEnd: new Date(Date.now() + 60 * 60000),
  description: "Discuss the new design proposals"
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className='main-div'>
            <h2 className='welcome'>Welcome to DailyFlow!</h2>
            
            <Separator />

            <CurrentCompleted />
            <NextTask />
            
            <CurrentTask task={currentTask}/>
        </div>

      </main>
    </div>
  );
}