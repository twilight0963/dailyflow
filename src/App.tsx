import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage'
import SchedulesPage from './pages/SchedulesPage';


function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logged-in" element={<SchedulesPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
