import "./index.css";
import { useEffect, useState } from 'react';
import api from '../../services/api.js';



export default function ListUsers({onSair}) {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    api.get('/usuarios')
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar usuários:', error);
      })
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) {
    return (
      <p>Carregando, baby...</p>
    );
  }

  return (
    <div className="list-container">
      <aside className="sidebar">
        <div className="sidebar-logo">lume</div>
        <div className="admin">
          <div className="admin-avatar">A</div>
          <div>
            <strong>Admin01</strong>
            <small>Administrador</small>
          </div>
        </div>
        <p className="sidebar-label">Menu principal</p>
        <button className="sidebar-item" type="button">
          ▦ <span>Dashboard</span>
        </button>
        <button className="sidebar-item" type="button">
          ▤ <span>Biblioteca</span>
        </button>
        <button className="sidebar-item" type="button">
          ☷ <span>Sistema</span>
        </button>
        <button className="sidebar-item active" type="button">
          ♧ <span>Usuários</span>
        </button>
        <div className="sidebar-bottom">
          <span>☾</span>
          <button type="button" onClick={onSair}>
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
              <h1>Olá, Admin01, seja bem vindo ao nosso sistema moderno</h1>
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
            <div className="table-head">
              <span>Nome</span>
              <span>Email</span>
              <span>Senha</span>
              <b>◉</b>
            </div>
            <div className="table-empty-space" />
             <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
          </div>
        </div>
      </section>
    </div>
  );
}
