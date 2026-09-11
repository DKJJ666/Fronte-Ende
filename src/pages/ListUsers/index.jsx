import "./index.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";


export default function ListUsers() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  function handleVoltar() {
  navigate('/login', { replace: true })
}

  useEffect(() => {
    let ativo = true;

    api
      .get("/usuarios")
      .then((response) => {
        if (!ativo) return;
        const dados = Array.isArray(response.data) ? response.data : [];
        setUsuarios(dados);
      })
      .catch((error) => {
        if (!ativo) return;
        console.error("Erro ao buscar usuários:", error);
        setErro("Não foi possível carregar os usuários. Tente novamente.");
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });

    return () => {
      ativo = false;
    };
  }, []);

  if (carregando) {
    return <p className="users-status">Carregando usuários...</p>;
  }

  return (
    <div className="list-container">
      <aside className="sidebar">
        <div className="sidebar-logo">lume</div>
        <div className="admin">
          <div className="admin-avatar">A</div>
          <div>
            <small>Administrador</small>
          </div>
        </div>
        <p className="sidebar-label">Menu principal</p>
        <button className="sidebar-item" type="button">
          ▦ <span>Dashboard</span>
        </button>
        <NavLink
          className={({ isActive }) =>
            `sidebar-item${isActive ? " active" : ""}`
          }
          to="/livros"
        >
          ▤ <span>Biblioteca</span>
        </NavLink>
        <button className="sidebar-item" type="button">
          ☷ <span>Sistema</span>
        </button>
        <button className="sidebar-item active" type="button">
          ♧ <span>Usuários</span>
        </button>
        <div className="sidebar-bottom">
          <span>☾</span>
  <button
          className="books-back-button"
          type="button"
          onClick={handleVoltar}
        >
            ↪
        </button>
        </div>
      </aside>
      <section className="users-main">
        <header className="users-header">
          <span className="profile-dot">A</span>
        </header>
        <div className="users-content">
          <div className="users-banner">
            <div className="banner-image">
              <img
                src="/fig-banner-dashboard.jpg"
                alt="Criança usando um notebook rosa"
              />
            </div>
            <div className="banner-art">Senhas são sigilosas.</div>
          </div>
          <div className="users-welcome">
            <div>
              <h1>Olá, seja bem vindo ao nosso sistema moderno</h1>
              <p>
                Precisa de alguma ajuda?{" "}
                <a href="#suporte">Conte com nosso suporte.</a>
              </p>
            </div>
            <div className="welcome-avatars">
              <span className="photo-avatar">
                <img src="/fig-avatar-admin.png" alt="" />
              </span>
              <span>AM</span>
              <span>CR</span>
              <span>+{usuarios.length}</span>
            </div>
          </div>
          <div className="table-box">
            <div className="table-head" role="row">
              <span>Nome</span>
              <span>Email</span>
              <span>Senha</span>
              <span>Ações</span>
            </div>
            {erro ? (
              <p className="table-message error-message">{erro}</p>
            ) : usuarios.length === 0 ? (
              <p className="table-message">Nenhum usuário cadastrado.</p>
            ) : (
              <div className="table-body">
                {usuarios.map((usuario) => (
                  <div
                    className="table-row"
                    key={usuario.id ?? usuario.email}
                    role="row"
                  >
                    <span>{usuario.nome || "Não informado"}</span>
                    <span>{usuario.email || "Não informado"}</span>
                    <span aria-label="Senha protegida">••••••••</span>
                    <button
                      className="delete-button"
                      type="button"
                      aria-label={`Excluir ${usuario.nome || "usuário"}`}
                    >
                      ✖
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
