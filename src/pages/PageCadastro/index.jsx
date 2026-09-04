import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import CampText from "../../components/CampText";
import Buttons from "../../components/Buttons";

export default function PageCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [aceitou, setAceitou] = useState(false);
  const [mensagem, setMensagem] = useState("");

  function cadastrar(event) {
    event.preventDefault();
    console.log({ nome, email, senha, confirmacao, aceitou });
    setMensagem("Dados capturados com sucesso.");
  }

  return (
    <div className="auth-layout auth-layout-cadastro">
      <div className="auth-photo">
        <img src="/fig-cafe-livros.jpg" alt="Xícara sobre livros empilhados" />
        <div className="photo-caption">
          <strong>lume</strong>
          <em>Um espaço para suas histórias.</em>
        </div>
      </div>
      <div className="cadastro-container">
        <div className="auth-card">
          <p className="eyebrow">Olá, bem-vindo à sua área de</p>
          <h1 className="typing-title">Cadastro</h1>
          <p className="description">
            Crie sua conta para acessar a sua biblioteca pessoal.
          </p>
          <form onSubmit={cadastrar}>
            <div className="form-grid">
              <CampText
                label="Nome"
                name="nome"
                placeholder="Seu nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
              />
              <CampText
                label="Email"
                name="email"
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <CampText
                label="Senha"
                name="senha"
                type="password"
                placeholder="Sua senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                required
              />
              <CampText
                label="Confirme a senha"
                name="confirmacao"
                type="password"
                placeholder="Confirme sua senha"
                value={confirmacao}
                onChange={(event) => setConfirmacao(event.target.value)}
                required
              />
            </div>
            <label className="check-row">
              <input
                type="checkbox"
                checked={aceitou}
                onChange={(event) => setAceitou(event.target.checked)}
                required
              />{" "}
              <span>Eu concordo com os termos de uso.</span>
            </label>
            <Buttons type="submit">
              Criar a conta <span>→</span>
            </Buttons>
          </form>
          {mensagem && <p className="form-message success">{mensagem}</p>}
          <p className="account-link">
            Já tem uma conta? <Link to="/login">Faça login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
