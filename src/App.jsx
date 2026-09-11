import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import PageCadastro from './pages/PageCadastro'
import PageLogin from './pages/PageLogin'
import ListUsers from './pages/ListUsers'
import PageBooks from './pages/PageBooks'




function App() {
  return (
    <>
      <main id="app">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/cadastro" element={<PageCadastro />} />
          <Route path="/usuarios" element={<ListUsers />} />
          <Route path="/livros" element={<PageBooks />} />
        </Routes>
      </main>
    </>
  )
}

export default App
