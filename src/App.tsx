import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SchedulesPage from './pages/SchedulesPage';
import ProgressPage from './pages/ProgressPage';
import NewPage from './pages/NewPage';
import Login from './pages/FirstPage';
import Home from './pages/LandingPage';


function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/log-in" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/schedules" element={<SchedulesPage/>}/>
        <Route path="/progress" element={<ProgressPage/>}/>
        <Route path="/new" element={<NewPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
