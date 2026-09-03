import "./index.css"

function ModalMessage(props) {
  return (
    <div className="modal">
      <p className="message">{props.message}</p>
    </div>
  )
}

export default ModalMessage
