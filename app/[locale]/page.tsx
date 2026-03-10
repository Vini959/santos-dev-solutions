import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  contactLinks,
  isLocale,
  localeLabels,
  locales,
  translations,
} from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return translations[locale].metadata;
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const currentYear = new Date().getFullYear();
  const t = translations[locale];
  const sectionIds = {
    experience: "experiencia",
    projects: "projetos",
    about: "sobre",
    stack: "stack",
  };

  const contacts = Object.entries(contactLinks).map(([key, href]) => ({
    href,
    label: t.contacts[key as keyof typeof t.contacts],
  }));

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <div className="topbar-row">
            <p className="eyebrow">{t.brand}</p>
            <div className="locale-switcher" aria-label={t.languageSwitcherLabel}>
              {locales.map((item) => {
                const active = item === locale;

                return (
                  <a
                    key={item}
                    href={`/${item}`}
                    className={`locale-toggle${active ? " is-active" : ""}`}
                    hrefLang={item}
                    aria-current={active ? "page" : undefined}
                  >
                    {localeLabels[item]}
                  </a>
                );
              })}
            </div>
          </div>

          <h1>{t.hero.title}</h1>
          <p className="hero-text">{t.hero.text}</p>
          <p className="hero-subtext">{t.hero.subtext}</p>

          <div className="hero-actions">
            <a href={`#${sectionIds.experience}`} className="button button-primary">
              {t.hero.primaryCta}
            </a>
            <a href={`#${sectionIds.projects}`} className="button button-secondary">
              {t.hero.secondaryCta}
            </a>
          </div>

          <div className="contact-links" aria-label={t.hero.contactsLabel}>
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

          <ul className="highlight-list" aria-label={t.hero.highlightsLabel}>
            {t.hero.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="hero-card">
          <span className="card-label">{t.summary.title}</span>
          <div className="metric-grid">
            {t.summary.items.map((item) => (
              <article key={`${item.value}-${item.label}`}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="section" id={sectionIds.about}>
        <div className="section-heading">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>{t.about.title}</h2>
        </div>

        <div className="about-grid">
          {t.about.cards.map((card) => (
            <article className="info-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id={sectionIds.experience}>
        <div className="section-heading">
          <p className="eyebrow">{t.experience.eyebrow}</p>
          <h2>{t.experience.title}</h2>
        </div>

        <div className="timeline">
          {t.experience.items.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.title}`}>
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <strong>{item.company}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id={sectionIds.stack}>
        <div className="section-heading">
          <p className="eyebrow">{t.stack.eyebrow}</p>
          <h2>{t.stack.title}</h2>
        </div>

        <div className="stack-cloud">
          {t.stack.items.map((item) => (
            <span className="stack-pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section section-accent" id={sectionIds.projects}>
        <div className="section-heading">
          <p className="eyebrow">{t.projects.eyebrow}</p>
          <h2>{t.projects.title}</h2>
        </div>

        <div className="projects-panel">
          <article className="project-copy">
            {t.projects.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="project-note">
            <span>{t.projects.availabilityEyebrow}</span>
            <strong>{t.projects.availabilityTitle}</strong>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <p className="footer-title">{t.brand}</p>
          <span className="footer-tagline">{t.footer.tagline}</span>
        </div>

        <div className="footer-column">
          <span className="footer-heading">{t.footer.contactsHeading}</span>
          <div className="footer-links">
            {contacts.map((contact) => (
              <a key={contact.label} href={contact.href} target="_blank" rel="noreferrer">
                {contact.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column footer-legal">
          <span className="footer-heading">{t.footer.legalHeading}</span>
          <span>{t.footer.cnpj}</span>
          <span>
            © {currentYear} {t.brand}. {t.footer.rights}
          </span>
        </div>
      </footer>
    </main>
  );
}