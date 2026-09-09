import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CampText from "../../components/CampText";
import Buttons from "../../components/Buttons";
import api from "../../services/api";

export default function PageLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/usuarios/login", {
      email,
      senha,
    });

    console.log("Resposta da API:", res.data);

    localStorage.setItem("token", res.data.token);

    if (res.data.usuario) {
      localStorage.setItem("perfil", res.data.usuario.perfil);
    }

    setError("");
    navigate("/usuarios");
  } catch (err) {
    console.error("Erro no login:", err.response?.data || err.message);
    setError("Email ou senha inválidos");
  }
};

  return (
    <div className="auth-layout auth-layout-login">
      <div className="auth-photo">
        <img
          src="/fig-pessoa-livros.jpg"
          alt="Pessoa segurando uma pilha de livros"
        />
      </div>
      <div className="login-container">
        <div className="auth-card">
          <p className="eyebrow">Que bom ter você de volta.</p>
          <h1 className="typing-title">Login</h1>
          <p className="description">
            Entre na sua conta para continuar de onde parou.
          </p>
          <form onSubmit={handleLogin}>
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
          {error && <p className="form-message error">{error}</p>}
          <p className="account-link">
            Não possui uma conta? <Link to="/cadastro">Crie uma agora</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
