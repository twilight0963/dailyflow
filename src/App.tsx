import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage'
import SchedulesPage from './pages/SchedulesPage';
import ProgressPage from './pages/ProgressPage';
import NewPage from './pages/NewPage';


function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<SchedulesPage/>}/>
        <Route path="/progress" element={<ProgressPage/>}/>
        <Route path="/new" element={<NewPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
