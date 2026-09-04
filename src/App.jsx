import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import PageCadastro from './pages/PageCadastro'
import PageLogin from './pages/PageLogin'
import ListUsers from './pages/ListUsers'

function App() {
  return (
    <>
      <NavBar />
      <main id="app">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/cadastro" element={<PageCadastro />} />
          <Route path="/usuarios" element={<ListUsers />} />
        </Routes>
      </main>
    </>
  )
}

export default App
