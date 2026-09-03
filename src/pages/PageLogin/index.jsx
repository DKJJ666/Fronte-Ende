// src/pages/PageLogin/index.jsx
import './index.css';
import CampText from '../../components/CampText';
import Buttons from '../../components/Buttons';

export default function PageLogin() {
  return (
    <div className="login-container">
      <h1>Acesse sua conta</h1>
      
      <form>
        <CampText label="E-mail" type="email" placeholder="Digite seu e-mail" />
        <CampText label="Senha" type="password" placeholder="Digite sua senha" />
        
        <Buttons type="submit">Entrar</Buttons>
      </form>
    </div>
  );
}