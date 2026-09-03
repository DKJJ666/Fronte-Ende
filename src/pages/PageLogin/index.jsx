import './index.css'
import CampText from '../../components/CampText'
import Buttons from '../../components/Buttons'

export default function PageLogin({ onEntrar, onIrParaCadastro }) {
  function entrar(event) { event.preventDefault(); onEntrar() }

  return (
    <div className="auth-layout auth-layout-login">
      <div className="auth-photo"><img src="/fig-pessoa-livros.jpg" alt="Pessoa segurando uma pilha de livros" /><div className="photo-caption"><strong>lume</strong><em>Volte para suas histórias.</em></div></div>
      <div className="login-container"><div className="auth-card"><p className="eyebrow">Que bom ter você de volta.</p><h1 className="typing-title">Login</h1><p className="description">Entre na sua conta para continuar de onde parou.</p><form onSubmit={entrar}><CampText label="Email" type="email" placeholder="Seu email" /><CampText label="Senha" type="password" placeholder="Sua senha" /><Buttons type="submit">Entrar na conta <span>→</span></Buttons></form><p className="account-link">Não possui uma conta? <button className="link-button" type="button" onClick={onIrParaCadastro}>Crie uma agora</button></p></div></div>
    </div>
  )
}
