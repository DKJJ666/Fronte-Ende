import './index.css'

function CampText({ label, type = 'text', placeholder, value, onChange, name, required = false }) {
  return (
    <label className="camp-text-container">
      <span>{label}</span>
      <input className="camp-textarea" name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} />
    </label>
  )
}

export default CampText
