import "./index.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../services/api.js";


function disponibilidadeNormalizada(valor) {
  if (typeof valor === "string") {
    return ["true", "1", "sim", "disponível", "disponivel"].includes(
      valor.trim().toLowerCase(),
    );
  }

  return Boolean(valor);
}

export default function Books({ onSair }) {
  const navigate = useNavigate();
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  function handleVoltar() {
    navigate("/login", { replace: true });
  }

  useEffect(() => {
    let ativo = true;

    api
      .get("/livros")
      .then((response) => {
        if (!ativo) return;
        setLivros(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        if (!ativo) return;
        console.error("Erro ao buscar livros:", error);
        setErro(
          error.response?.data?.message ||
            error.message ||
            "Erro ao buscar livros.",
        );
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });

    return () => {
      ativo = false;
    };
  }, []);

  if (carregando) {
    return <p className="books-status">Carregando livros...</p>;
  }

  return (
    <div className="books-page">
      <aside className="books-sidebar">
        <div className="books-logo">lume</div>

        <div className="books-admin">
          <div className="books-admin-avatar">A</div>
          <div>
            <small>Administrador</small>
          </div>
        </div>

        <p className="books-sidebar-label">Menu principal</p>
        <button className="books-sidebar-item" type="button">
          ▦ <span>Dashboard</span>
        </button>
        <NavLink className="books-sidebar-item active" to="/livros">
          ▤ <span>Biblioteca</span>
        </NavLink>
        <button className="books-sidebar-item" type="button">
          ☷ <span>Sistema</span>
        </button>
          <NavLink className="books-sidebar-item" to="/usuarios">
            ♧ <span>Usuários</span>
          </NavLink>
        <div className="books-sidebar-bottom">
          <span>☾</span>
          <button type="button" onClick={onSair} aria-label="Sair">
            ↪
          </button>
        </div>
      </aside>

      <section className="books-main">
        <header className="books-header">
          <button
            className="books-back-button"
            type="button"
            onClick={handleVoltar}
          >
            ← Voltar
          </button>
          <span className="books-profile">A</span>
        </header>

        <div className="books-content">
          <div className="books-banner">
            <div className="books-banner-image">
              <img src="/fig-pessoa-livros.jpg" alt="Pessoa lendo um livro" />
            </div>
            <div className="books-banner-art">
              Boas histórias ficam para sempre.
            </div>
          </div>

          <div className="books-welcome">
            <div>
              <h1>Olá, confira nossa biblioteca</h1>
              <p>
                Encontre informações sobre os livros cadastrados no sistema.
              </p>
            </div>
            <div className="books-count">
              {livros.length}
              <small>{livros.length === 1 ? "livro" : "livros"}</small>
            </div>
          </div>

          <div className="books-table-box">
            <div className="books-table-head" role="row">
              <span>Título</span>
              <span>Autor</span>
              <span>Disponibilidade</span>
              <span>Editora</span>
              <span>Ações</span>
            </div>

            {erro ? (
              <p className="books-table-message books-error">{erro}</p>
            ) : livros.length === 0 ? (
              <p className="books-table-message">Nenhum livro cadastrado.</p>
            ) : (
              <div className="books-table-body">
                {livros.map((livro) => {
                  const disponivel = disponibilidadeNormalizada(
                    livro.disponibilidade,
                  );

                  return (
                    <div
                      className="books-table-row"
                      key={livro.id ?? livro.titulo}
                      role="row"
                    >
                      <span title={livro.titulo}>
                        {livro.titulo || "Não informado"}
                      </span>
                      <span title={livro.autor}>
                        {livro.autor || "Não informado"}
                      </span>
                      <span>
                        <b
                          className={`availability ${disponivel ? "available" : "unavailable"}`}
                        >
                          {disponivel ? "Disponível" : "Indisponível"}
                        </b>
                      </span>
                      <span title={livro.editora}>
                        {livro.editora || "Não informado"}
                      </span>
                      <button
                        className="books-action"
                        type="button"
                        aria-label={`Ver detalhes de ${livro.titulo || "livro"}`}
                      >
                        →
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
