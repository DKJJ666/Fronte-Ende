import './index.css'

function CampText({ label, type = 'text', placeholder }) {
  return (
    <label className="camp-text-container">
      <span>{label}</span>
      <input className="camp-textarea" type={type} placeholder={placeholder} />
    </label>
  )
}

export default CampText
