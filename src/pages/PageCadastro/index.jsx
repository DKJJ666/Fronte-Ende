import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CampText from "../../components/CampText";
import Buttons from "../../components/Buttons";
import api from "../../services/api.js"

export default function PageCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("Usuario");
  // const [confirmacao, setConfirmacao] = useState("");
  // const [aceitou, setAceitou] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async (event) =>{
    event.preventDefault();
    setMensagem("");
    try {
      await api.post("/usuarios/cadastro", {
        nome,
        email,
        senha,
        perfil,
      });
      setMensagem("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      setMensagem(error.response.data.message || "Erro ao realizar cadastro.");
    }
  }
  

  // function cadastrar(event) {
  //   event.preventDefault()
  //   console.log({ nome, email, senha, confirmacao, aceitou })
  //   setMensagem('Dados capturados com sucesso.')
  // }

  return (
    <div className="auth-layout auth-layout-cadastro">
      <div className="auth-photo">
        <img src="/fig-cafe-livros.jpg" alt="Xícara sobre livros empilhados" />
      </div>
      <div className="cadastro-container">
        <div className="auth-card">
          <p className="eyebrow">Olá, bem-vindo à sua área de</p>
          <h1 className="typing-title">Cadastro</h1>
          <p className="description">
            Crie sua conta para acessar a sua biblioteca pessoal.
          </p>
          <form onSubmit={handleCadastro}>
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
              {/* <CampText
                label="Confirme a senha"
                name="confirmacao"
                type="password"
                placeholder="Confirme sua senha"
                value={confirmacao}
                onChange={(event) => setConfirmacao(event.target.value)}
                required
              /> */}
              <select
                name="perfil"
                value={perfil}
                onChange={(event) => setPerfil(event.target.value)}
                required
              >
                <option value="">Selecione um perfil</option>
                <option value="usuario">Usuário</option>
                <option value="admin">Funcionario</option>
              </select>
            </div>
            {/* <label className="check-row">
              <input
                type="checkbox"
                checked={aceitou}
                onChange={(event) => setAceitou(event.target.checked)}
                required
              />{" "}
              <span>Eu concordo com os termos de uso.</span>
            </label> */}
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
