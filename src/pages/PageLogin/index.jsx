import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import CampText from "../../components/CampText";
import Buttons from "../../components/Buttons";

export default function PageLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function entrar(event) {
    event.preventDefault();
    console.log({ email, senha });
    setMensagem("Dados capturados com sucesso.");
  }

  return (
    <div className="auth-layout auth-layout-login">
      <div className="auth-photo">
        <img
          src="/fig-pessoa-livros.jpg"
          alt="Pessoa segurando uma pilha de livros"
        />
        <div className="photo-caption">
          <strong>lume</strong>
          <em>Volte para suas histórias.</em>
        </div>
      </div>
      <div className="login-container">
        <div className="auth-card">
          <p className="eyebrow">Que bom ter você de volta.</p>
          <h1 className="typing-title">Login</h1>
          <p className="description">
            Entre na sua conta para continuar de onde parou.
          </p>
          <form onSubmit={entrar}>
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
            <Buttons type="submit">
              Entrar na conta <span>→</span>
            </Buttons>
          </form>
          {mensagem && <p className="form-message success">{mensagem}</p>}
          <p className="account-link">
            Não possui uma conta? <Link to="/cadastro">Crie uma agora</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
