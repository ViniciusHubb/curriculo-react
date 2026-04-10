import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ nome: '', sobrenome: '', email: '', telefone: '', mensagem: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleClear = () => setForm({ nome: '', sobrenome: '', email: '', telefone: '', mensagem: '' });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <button className="nav-link" onClick={() => scrollTo('apresentacao')}>Vinícius dos Santos</button>
          <button className="nav-link" onClick={() => scrollTo('resumo')}>Sobre</button>
          <button className="nav-link" onClick={() => scrollTo('experiencia')}>Experiência</button>
          <button className="nav-link" onClick={() => scrollTo('formacao')}>Formação</button>
          <button className="nav-link" onClick={() => scrollTo('habilidades')}>Habilidades</button>
          <button className="nav-link" onClick={() => scrollTo('projetos')}>Projetos</button>
          <button className="nav-link" onClick={() => scrollTo('idiomas')}>Idiomas</button>
          <button className="nav-link" onClick={() => scrollTo('contato')}>Contato</button>
        </div>
      </nav>

      <main className="content">

        {/* ── PERSONAL INFO ── */}
        <section id="apresentacao" className="section hero">
          <img src="/icon.png" alt="Foto de perfil" className="foto" />
          <div className="hero-text">
            <h1 className="title">Vinícius dos Santos Oliveira</h1>
            <p className="subtitle">Desenvolvedor Júnior · QA</p>
            <div className="contact-grid">
              <span>📧 <a href="mailto:viniciuscontato2024@gmail.com">viniciuscontato2024@gmail.com</a></span>
              <span>📞 <a href="tel:+5581998777963">(81) 9 9877-7963</a></span>
              <span>💼 <a href="https://www.linkedin.com/in/vinícius-oliveira-ads" target="_blank" rel="noreferrer">linkedin.com/in/vinícius-oliveira-ads</a></span>
              <span>🐙 <a href="https://github.com/ViniciusHubb" target="_blank" rel="noreferrer">github.com/ViniciusHubb</a></span>
              <span>📍 Jaboatão dos Guararapes — PE</span>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── PROFESSIONAL SUMMARY ── */}
        <section id="resumo" className="section">
          <h2 className="section-title">Sobre</h2>
          <p className="paragraph">
            Busco oportunidade como <strong>Desenvolvedor Júnior</strong>. Procuro contribuir no setor ao me
            desenvolver profissionalmente, atualmente estou me aprimorando em <strong>Java</strong> e{' '}
            <strong>Qualidade de Software</strong>.
          </p>
        </section>

        <hr className="divider" />

        {/* ── WORK EXPERIENCE ── */}
        <section id="experiencia" className="section">
          <h2 className="section-title">Experiência Profissional</h2>

          <div className="card">
            <div className="card-header">
              <span className="card-title">Estágio em QA</span>
              <span className="card-company">CWI Software</span>
              <span className="card-period">08/2025 — Atual</span>
            </div>
            <div className="tags">
              <span className="tag">Testes Automatizados</span>
              <span className="tag">Playwright</span>
              <span className="tag">Robot Framework</span>
              <span className="tag">Testes Manuais</span>
            </div>
            <p className="paragraph">
              Desenvolver e executar casos de teste. Desenvolver automação de testes utilizando frameworks.
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="card-title">Residência Tecnológica</span>
              <span className="card-company">Empresa SIDI</span>
              <span className="card-period">08/2025 — 10/2025</span>
            </div>
            <div className="tags">
              <span className="tag">Java</span>
              <span className="tag">SpringBoot</span>
              <span className="tag">React</span>
            </div>
            <ul className="list">
              <li>
                <strong>Plataforma de Gestão Habitacional de Recife:</strong> desenvolvimento full-stack em grupo
                onde fomos desafiados a criar uma solução inovadora para um problema social pertinente.
              </li>
              <li>
                <strong>Sistema de Ponto:</strong> criação em grupo de um sistema que permite aos funcionários
                registrar entrada e saída, corrigir registros e justificar faltas. (React)
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="card-title">Capacitação Java</span>
              <span className="card-company">Rede Cidadã</span>
              <span className="card-period">12/2024 — 04/2025</span>
            </div>
            <p className="paragraph">
              Programa de capacitação profissional com foco em desenvolvimento Java.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ── EDUCATION ── */}
        <section id="formacao" className="section">
          <h2 className="section-title">Formação Acadêmica</h2>
          <div className="card">
            <div className="card-header">
              <span className="card-title">Tecnólogo em Análise e Desenvolvimento de Sistemas</span>
              <span className="card-company">SENAC Recife</span>
              <span className="card-period">2024 — 2026</span>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── SKILLS ── */}
        <section id="habilidades" className="section">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills-columns">
            <div>
              <h3 className="skills-subtitle">Técnicas</h3>
              <div className="tags">
                <span className="tag">Java</span>
                <span className="tag">SpringBoot</span>
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Python</span>
                <span className="tag">HTML &amp; CSS</span>
                <span className="tag">MySQL</span>
                <span className="tag">Playwright</span>
                <span className="tag">Robot Framework</span>
                <span className="tag">Testes Automatizados</span>
                <span className="tag">Metodologias Ágeis</span>
                <span className="tag">Engenharia de Requisitos</span>
              </div>
            </div>
            <div>
              <h3 className="skills-subtitle">Comportamentais</h3>
              <div className="tags">
                <span className="tag soft">Proatividade</span>
                <span className="tag soft">Comunicação</span>
                <span className="tag soft">Resiliência</span>
                <span className="tag soft">Autodidata</span>
                <span className="tag soft">Liderança</span>
                <span className="tag soft">Trabalho em Equipe</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── CERTIFICATIONS & COURSES ── */}
        <section id="certificacoes" className="section">
          <h2 className="section-title">Certificações &amp; Cursos</h2>
          <div className="card">
            <div className="card-header">
              <span className="card-title">Capacitação em Java</span>
              <span className="card-company">Rede Cidadã</span>
              <span className="card-period">12/2024 — 04/2025</span>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── PROJECTS / PORTFOLIO ── */}
        <section id="projetos" className="section">
          <h2 className="section-title">Experiências Acadêmicas &amp; Projetos</h2>

          <div className="card highlight">
            <div className="card-header">
              <span className="card-title">🏆 Hackaton — Hacker Cidadão 13.0</span>
              <span className="card-period">05/2025</span>
            </div>
            <p className="paragraph">
              <strong>Projeto Vencedor:</strong> desenvolvimento em grupo de uma solução tecnológica premiada no
              Hacker Cidadão 13.0, com foco em limpeza urbana e cidades inteligentes, como parte dos desafios
              públicos do 3º Ciclo de Inovação Aberta do EITA! Recife.
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="card-title">Plataforma de Gestão Habitacional de Recife</span>
              <span className="card-company">Residência SIDI</span>
            </div>
            <div className="tags">
              <span className="tag">Java</span>
              <span className="tag">SpringBoot</span>
              <span className="tag">React</span>
            </div>
            <p className="paragraph">
              Desenvolvimento full-stack em grupo de uma solução inovadora para gestão dos conjuntos habitacionais
              de Recife.
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="card-title">Sistema de Ponto Eletrônico</span>
              <span className="card-company">Residência SIDI</span>
            </div>
            <div className="tags">
              <span className="tag">React</span>
            </div>
            <p className="paragraph">
              Sistema que permite aos funcionários registrar entrada e saída, corrigir registros e justificar
              faltas.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ── LANGUAGES ── */}
        <section id="idiomas" className="section">
          <h2 className="section-title">Idiomas</h2>
          <div className="card">
            <p className="paragraph">🇧🇷 <strong>Português</strong> — Nativo</p>
            <p className="paragraph">🇺🇸 <strong>Inglês</strong> — Intermediário</p>
          </div>
        </section>

        <hr className="divider" />

        {/* ── CONTACT FORM ── */}
        <section id="contato" className="section">
          <h2 className="section-title">Contato</h2>
          <p className="paragraph">Preencha o formulário para entrar em contato:</p>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input className="input" name="nome" placeholder="Nome*" value={form.nome} onChange={handleChange} required />
              <input className="input" name="sobrenome" placeholder="Sobrenome*" value={form.sobrenome} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input className="input" name="email" type="email" placeholder="Email*" value={form.email} onChange={handleChange} required />
              <input className="input" name="telefone" type="tel" placeholder="Telefone*" value={form.telefone} onChange={handleChange} required />
            </div>
            <textarea className="input textarea" name="mensagem" placeholder="Mensagem" rows={4} value={form.mensagem} onChange={handleChange} />
            <div className="form-buttons">
              <button type="button" className="btn btn-clear" onClick={handleClear}>Limpar</button>
              <button type="submit" className="btn btn-send">Enviar</button>
            </div>
          </form>
        </section>

      </main>

      <footer className="footer">
        <p>Copyright © 2025 Vinícius dos Santos Oliveira. Todos os Direitos Reservados.</p>
      </footer>
    </div>
  );
}
