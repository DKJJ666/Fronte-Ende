import './App.css'
import { useState } from 'react'
import PageCadastro from './pages/PageCadastro'
import PageLogin from './pages/PageLogin'
import ListUsers from './pages/ListUsers'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showCadastro, setShowCadastro] = useState(false);

  return (
    <div>
      {isLoggedIn ? (

        <ListUsers />
      ) : (

        showCadastro ? (
          <PageCadastro 
            onVoltar={() => setShowCadastro(false)} 
          />
        ) : (
          <PageLogin 
            onEntrar={() => setIsLoggedIn(true)} 
            onIrParaCadastro={() => setShowCadastro(true)} 
          />
        )
      )}
    </div>
  )
}

export default App