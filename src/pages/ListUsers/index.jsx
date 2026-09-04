import "./index.css";

const users = [];

export default function ListUsers({ onSair }) {
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
          {/* <nav>
            <button type="button">Dashboard</button>
            <button type="button">Livraria</button>
            <button type="button">Sistema</button>
            <button className="selected" type="button">
              Usuários
            </button>
          </nav> */}
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
              <span>+{users.length}</span>
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
          </div>
        </div>
      </section>
    </div>
  );
}
