import './index.css'

function Buttons({ children, type = 'button' }) {
  return <button className="button" type={type}>{children}</button>
}

export default Buttons
