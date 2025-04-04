import './GotItButton.css'

export default function GotItButton() {
  return (
    <button 
      className="got-it-button" 
      onClick={() => confirm("Are you sure?")}
    >
      Get it?
    </button>
  )
}
