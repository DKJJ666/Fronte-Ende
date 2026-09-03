import './index.css';
import CampText from '../../components/CampText';
import Buttons from '../../components/Buttons';

export default function PageCadastro() {
  return (
    <div className="cadastro-container">
      <h1>Crie sua conta</h1>
      <form>
        <CampText label="Nome" placeholder="Digite seu nome completo" />
        <CampText label="E-mail" type="email" placeholder="Digite seu e-mail" />
        <CampText label="Senha" type="password" placeholder="Crie uma senha" />
        <Buttons>Cadastrar</Buttons>
      </form>
    </div>
  );
}