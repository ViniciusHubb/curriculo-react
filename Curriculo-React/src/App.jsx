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
          <button className="nav-link" onClick={() => scrollTo('resumo')}>About</button>
          <button className="nav-link" onClick={() => scrollTo('experiencia')}>Experience</button>
          <button className="nav-link" onClick={() => scrollTo('formacao')}>Education</button>
          <button className="nav-link" onClick={() => scrollTo('habilidades')}>Skills</button>
          <button className="nav-link" onClick={() => scrollTo('projetos')}>Projects</button>
          <button className="nav-link" onClick={() => scrollTo('idiomas')}>Languages</button>
          <button className="nav-link" onClick={() => scrollTo('contato')}>Contact</button>
        </div>
      </nav>

      <main className="content">

        {/* ── PERSONAL INFO ── */}
        <section id="apresentacao" className="section hero">
          <img src="/icon.png" alt="Profile photo" className="foto" />
          <div className="hero-text">
            <h1 className="title">Vinícius dos Santos Oliveira</h1>
            <p className="subtitle">Junior Developer · QA</p>
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
          <h2 className="section-title">About</h2>
          <p className="paragraph">
            I am seeking an opportunity as a <strong>Junior Developer</strong>. I aim to contribute to the
            team while growing professionally, and I am currently improving my skills in <strong>Java</strong>{' '}
            and <strong>Software Quality</strong>.
          </p>
        </section>

        <hr className="divider" />

        {/* ── WORK EXPERIENCE ── */}
        <section id="experiencia" className="section">
          <h2 className="section-title">Professional Experience</h2>

          <div className="card">
            <div className="card-header">
              <span className="card-title">QA Intern</span>
              <span className="card-company">CWI Software</span>
              <span className="card-period">08/2025 — Present</span>
            </div>
            <div className="tags">
              <span className="tag">Automated Testing</span>
              <span className="tag">Playwright</span>
              <span className="tag">Robot Framework</span>
              <span className="tag">Manual Testing</span>
            </div>
            <p className="paragraph">
              Develop and execute test cases. Build test automation using frameworks.
            </p>
          </div>

        </section>

        <hr className="divider" />

        {/* ── EDUCATION ── */}
        <section id="formacao" className="section">
          <h2 className="section-title">Education</h2>
          <div className="card">
            <div className="card-header">
              <span className="card-title">Associate Degree in Systems Analysis and Development</span>
              <span className="card-company">SENAC Recife</span>
              <span className="card-period">2024 — 2026</span>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── SKILLS ── */}
        <section id="habilidades" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-columns">
            <div>
              <h3 className="skills-subtitle">Technical</h3>
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
                <span className="tag">Automated Testing</span>
                <span className="tag">Agile Methodologies</span>
                <span className="tag">Requirements Engineering</span>
              </div>
            </div>
            <div>
              <h3 className="skills-subtitle">Behavioral</h3>
              <div className="tags">
                <span className="tag soft">Proactivity</span>
                <span className="tag soft">Communication</span>
                <span className="tag soft">Resilience</span>
                <span className="tag soft">Self-taught</span>
                <span className="tag soft">Leadership</span>
                <span className="tag soft">Teamwork</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── CERTIFICATIONS & COURSES ── */}
        <section id="certificacoes" className="section">
          <h2 className="section-title">Certifications &amp; Courses</h2>
          <div className="card">
            <div className="card-header">
              <span className="card-title">Java Training Program</span>
              <span className="card-company">Rede Cidadã</span>
              <span className="card-period">12/2024 — 04/2025</span>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <span className="card-title">Quality Engineering Program</span>
              <span className="card-company">CWI Software</span>
              <span className="card-period">06/2026 — 22/2026</span>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── PROJECTS / PORTFOLIO ── */}
        <section id="projetos" className="section">
          <h2 className="section-title">Academic Experience &amp; Projects</h2>

          <div className="card highlight">
            <div className="card-header">
              <span className="card-title">🏆 Hackathon — Hacker Cidadão 13.0</span>
              <span className="card-period">05/2025</span>
            </div>
            <p className="paragraph">
              <strong>Winning Project:</strong> team development of an award-winning technological solution at
              Hacker Cidadão 13.0, focused on urban cleaning and smart cities, as part of the public
              challenges of the 3rd Open Innovation Cycle by EITA! Recife.
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="card-title">Habita Recife</span>
              <span className="card-company">Rede cidadã</span>
              <span className="card-period">12/2024 — 04/2025</span>
            </div>
            <div className="tags">
              <span className="tag">Java</span>
              <span className="tag">SpringBoot</span>
              <span className="tag">React</span>
            </div>
            <ul className="list">
              <li>
                <strong>Recife Housing Management Platform:</strong> group full-stack development where we were
                challenged to create an innovative solution for a relevant social problem.
              </li>
              <li>
                <strong>Time Tracking System:</strong> group development of a system that allows employees to
                register clock-in and clock-out times, correct records, and justify absences. (React)
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="card-title">Electronic Time Tracking System</span>
              <span className="card-company">Residência SIDI</span>
            </div>
            <div className="tags">
              <span className="tag">React</span>
            </div>
            <p className="paragraph">
              System that allows employees to register clock-in and clock-out times, correct records, and
              justify absences.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ── LANGUAGES ── */}
        <section id="idiomas" className="section">
          <h2 className="section-title">Languages</h2>
          <div className="card">
            <p className="paragraph">🇧🇷 <strong>Portuguese</strong> — Native</p>
            <p className="paragraph">🇺🇸 <strong>English</strong> — Intermediate</p>
          </div>
        </section>

        <hr className="divider" />

        {/* ── CONTACT FORM ── */}
        <section id="contato" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="paragraph">Fill out the form to get in touch:</p>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input className="input" name="nome" placeholder="First name*" value={form.nome} onChange={handleChange} required />
              <input className="input" name="sobrenome" placeholder="Last name*" value={form.sobrenome} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input className="input" name="email" type="email" placeholder="Email*" value={form.email} onChange={handleChange} required />
              <input className="input" name="telefone" type="tel" placeholder="Phone*" value={form.telefone} onChange={handleChange} required />
            </div>
            <textarea className="input textarea" name="mensagem" placeholder="Message" rows={4} value={form.mensagem} onChange={handleChange} />
            <div className="form-buttons">
              <button type="button" className="btn btn-clear" onClick={handleClear}>Clear</button>
              <button type="submit" className="btn btn-send">Send</button>
            </div>
          </form>
        </section>

      </main>

      <footer className="footer">
        <p>Copyright © 2025 Vinícius dos Santos Oliveira. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
