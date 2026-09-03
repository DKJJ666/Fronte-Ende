import './index.css'
import CampText from '../../components/CampText'
import Buttons from '../../components/Buttons'

export default function PageCadastro({ onVoltar }) {
  function cadastrar(event) { event.preventDefault(); onVoltar() }

  return (
    <div className="auth-layout auth-layout-cadastro">
      <div className="auth-photo"><img src="/fig-cafe-livros.jpg" alt="Xícara sobre livros empilhados" /><div className="photo-caption"><strong>lume</strong><em>Um espaço para suas histórias.</em></div></div>
      <div className="cadastro-container"><div className="auth-card"><p className="eyebrow">Olá, bem-vindo à sua área de</p><h1 className="typing-title">Cadastro</h1><p className="description">Crie sua conta para acessar a sua biblioteca pessoal.</p><form onSubmit={cadastrar}><div className="form-grid"><CampText label="Nome" placeholder="Seu nome" /><CampText label="Email" type="email" placeholder="Seu email" /><CampText label="Senha" type="password" placeholder="Sua senha" /><CampText label="Confirme a senha" type="password" placeholder="Confirme sua senha" /></div><label className="check-row"><input type="checkbox" required /> <span>Eu concordo com os termos de uso.</span></label><Buttons type="submit">Criar a conta <span>→</span></Buttons></form><p className="account-link">Já tem uma conta? <button className="link-button" type="button" onClick={onVoltar}>Faça login</button></p></div></div>
    </div>
  )
}
