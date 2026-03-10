const highlights = [
  "React e Next.js para produtos web modernos",
  "Experiência com Liferay em ambiente corporativo",
  "React Native para interfaces mobile objetivas",
];

const timeline = [
  {
    period: "Hoje",
    title: "Desenvolvedor de Software Junior",
    company: "Mood Solutions",
    description:
      "Atuando no desenvolvimento de software com foco em entrega, manutenção e evolução de produtos digitais.",
  },
  {
    period: "Experiência anterior",
    title: "Aprendiz Administrativo",
    company: "BRF",
    description:
      "Vivência em rotina corporativa, organização de processos e colaboração com times de negócio.",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Liferay",
  "React Native",
  "JavaScript",
  "UI responsiva",
  "Integração de sistemas",
];

const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinicius-dos-santos-rosa-a0a895244/",
  },
  {
    label: "GitHub",
    href: "https://github.com/Vini959",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5542991224783?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20santos-dev-solutions.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">santos-dev-solutions</p>
          <h1>Construindo experiências web premium com React e Next.js.</h1>
          <p className="hero-text">
            Sou Vinicius dos Santos Rosa e lidero a santos-dev-solutions com foco
            em sites, interfaces e produtos digitais que unem velocidade,
            clareza visual e execução profissional.
          </p>
          <p className="hero-subtext">
            Aos 19 anos, já somo mais de dois anos de experiência prática com web,
            portais corporativos, mobile e desenvolvimento orientado a resultado.
          </p>

          <div className="hero-actions">
            <a href="#experiencia" className="button button-primary">
              Ver experiência
            </a>
            <a href="#projetos" className="button button-secondary">
              Projetos públicos
            </a>
          </div>

          <div className="contact-links" aria-label="Canais oficiais">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                {contact.label}
              </a>
            ))}
          </div>

          <ul className="highlight-list" aria-label="Principais competências">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="hero-card">
          <span className="card-label">Resumo profissional</span>
          <div className="metric-grid">
            <article>
              <strong>2+ anos</strong>
              <span>de experiência prática</span>
            </article>
            <article>
              <strong>4 frentes</strong>
              <span>web, mobile, portal e produto</span>
            </article>
            <article>
              <strong>Atual</strong>
              <span>Mood Solutions</span>
            </article>
            <article>
              <strong>Base</strong>
              <span>React, Next e Liferay</span>
            </article>
          </div>
        </aside>
      </section>

      <section className="section" id="sobre">
        <div className="section-heading">
          <p className="eyebrow">Sobre mim</p>
          <h2>Perfil jovem, repertório profissional e vontade real de construir</h2>
        </div>

        <div className="about-grid">
          <article className="info-card">
            <h3>Quem eu sou</h3>
            <p>
              Sou um desenvolvedor que cresceu próximo da tecnologia e transformou
              essa afinidade em carreira. Hoje atuo com foco em criar experiências
              consistentes, escaláveis e com boa leitura para o usuário final.
            </p>
          </article>

          <article className="info-card">
            <h3>Como trabalho</h3>
            <p>
              Gosto de interfaces bem resolvidas, código organizado e entregas com
              padrão visual forte. Meu estilo mistura visão de produto,
              responsabilidade técnica e facilidade para aprender rápido.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="experiencia">
        <div className="section-heading">
          <p className="eyebrow">Experiência</p>
          <h2>Uma trajetória em evolução contínua</h2>
        </div>

        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.title}`}>
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <strong>{item.company}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="stack">
        <div className="section-heading">
          <p className="eyebrow">Stack principal</p>
          <h2>Tecnologias com as quais entrego valor hoje</h2>
        </div>

        <div className="stack-cloud">
          {stack.map((item) => (
            <span className="stack-pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section section-accent" id="projetos">
        <div className="section-heading">
          <p className="eyebrow">Projetos públicos</p>
          <h2>Meu GitHub faz parte da minha vitrine profissional</h2>
        </div>

        <div className="projects-panel">
          <article className="project-copy">
            <p>
              Além da experiência no mercado, mantenho projetos públicos que
              reforçam meu interesse por desenvolvimento, estudo contínuo e
              construção de portfólio.
            </p>
            <p>
              Essa combinação entre experiência profissional e projetos autorais
              mostra consistência, iniciativa e vontade de evoluir de forma prática.
            </p>
          </article>

          <article className="project-note">
            <span>Disponível para</span>
            <strong>Freelas, oportunidades CLT e parcerias em produto</strong>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <p>santos-dev-solutions</p>
        <div className="footer-links">
          {contacts.map((contact) => (
            <a key={contact.label} href={contact.href} target="_blank" rel="noreferrer">
              {contact.label}
            </a>
          ))}
        </div>
        <span>CNPJ 59.448.748/0001-02</span>
      </footer>
    </main>
  );
}

