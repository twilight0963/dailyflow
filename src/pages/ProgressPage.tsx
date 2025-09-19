import "./ProgressPage.css"
import Navbar from "../components/NavBar"
import Separator from "../components/Separator"



export default function ProgressPage() {
  return (
    <div className="page">
      <Navbar />
      <Separator/>
      <div className="view-frame">
        <div className="stat-frame">
          <h2 className="stat-title">Snoozed Tasks:</h2>
          <div className="stat-content">
            <p className="stat-start">You have snoozed</p>
            <p className="stat-number">5</p>
            <p className="stat-progress">+1 ↑</p>
            <p className="stat-subtext">tasks in the last 7 days.</p>
            <p className="stat-tip">Tip: Give ample breaks between tasks.</p>
          </div>
        </div>
        <div className="stat-frame">
          <h2 className="stat-title">Completion Streak:</h2>
          <div className="stat-content">
            <p className="stat-start">You have completed all tasks in the last</p>
            <p className="stat-number">4</p>
            <p className="stat-progress" style={{color: '#3CFF59'}}>+1 ↑</p>
            <p className="stat-subtext">days!</p>
            <p className="stat-tip">Well done!!</p>
          </div>
        </div>
      </div>
    </div>
  )
}