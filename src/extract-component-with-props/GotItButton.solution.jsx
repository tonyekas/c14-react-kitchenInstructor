import './GotItButton.css'

export default function GotItButton({ title }) {
  return (
    <button 
      className="got-it-button" 
      onClick={() => confirm("Are you sure?")}
    >
      { title }
    </button>
  )
}
