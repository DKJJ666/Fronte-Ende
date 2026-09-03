import './index.css';
import Buttons from '../../components/Buttons';
// import ModalMessage from '../../components/ModalMessage';

export default function ListUsers() {
  return (
    <div className="list-container">
      <h1>Usuários Cadastrados</h1>
      <ul>
        <li>
          Usuário Exemplo
          <Buttons>Editar</Buttons>
        </li>
      </ul>
    </div>
  );
}