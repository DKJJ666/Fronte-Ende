import './index.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <span className="navbar-brand">Biblioteca</span>
      <div className="navbar-links">
        <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/login">Login</NavLink>
        <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/cadastro">Cadastro</NavLink>
        <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/usuarios">Usuários</NavLink>
      </div>
    </nav>
  )
}
