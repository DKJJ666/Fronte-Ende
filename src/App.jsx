import './App.css'
import { Route, Routes, Navigate, NavLink  } from 'react-router-dom'
import PageCadastro from './pages/PageCadastro'
import PageLogin from './pages/PageLogin'
import ListUsers from './pages/ListUsers'

function App() {
  return (
    <>
    <div className='app'>
      <nav className='users-header'>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/cadastro">Cadastro</NavLink>
        <NavLink to="/usuarios">Usuários</NavLink>
      </nav>
    </div>
    <main id="app">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/cadastro" element={<PageCadastro />} />
        <Route path="/usuarios" element={<ListUsers />} />
      </Routes>
    </main>
    </>
  )
}

export default App
