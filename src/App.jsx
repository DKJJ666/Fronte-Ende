import './App.css'
import { useState } from 'react'
import PageCadastro from './pages/PageCadastro'
import PageLogin from './pages/PageLogin'
import ListUsers from './pages/ListUsers'

function App() {
  const [tela, setTela] = useState('login')

  function abrirTela(nomeDaTela) {
    setTela(nomeDaTela)
  }

  return (
    <main id="app">
      <section className="screen">
        {tela === 'login' && <PageLogin onEntrar={() => abrirTela('usuarios')} onIrParaCadastro={() => abrirTela('cadastro')} />}
        {tela === 'cadastro' && <PageCadastro onVoltar={() => abrirTela('login')} />}
        {tela === 'usuarios' && <ListUsers onSair={() => abrirTela('login')} />}
      </section>
    </main>
  )
}

export default App
