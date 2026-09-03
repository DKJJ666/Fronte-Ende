import "./index.css"

function CampText(props) {
  return (
    <div className="camp-text-container">
      <textarea className="camp-textarea" placeholder={props.placeholder}></textarea>
    </div>
  )
}

export default CampText
