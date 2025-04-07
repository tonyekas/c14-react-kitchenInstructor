// import from './GetItButton.css';
import './GotItButton.solution.css';

export function GetItButton() {
  return (
    <button 
      className="get-it-button" 
      onClick={() => confirm("Are you sure?")}
    >
      Get it?
    </button>
  )
  
}