import { useState, useEffect } from 'react'
import './App.css'
import translations from './translations'

const CALENDLY_LINK = 'https://calendly.com/atypikflow/30min'

function LangToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        className={`lang-btn ${lang === 'en' ? 'lang-btn--active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span className="lang-divider" aria-hidden="true">|</span>
      <button
        className={`lang-btn ${lang === 'fr' ? 'lang-btn--active' : ''}`}
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
      >
        FR
      </button>
    </div>
  )
}

function Nav({ t, lang, setLang }) {
  return (
    <nav className="nav">
      <div className="nav-logo-block">
        <span className="nav-logo">Fadwa Naboulssi</span>
        <span className="nav-tagline">Fractional Head of AI</span>
      </div>
      <div className="nav-right">
        <LangToggle lang={lang} setLang={setLang} />
        <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-small">
          {t.nav.cta}
        </a>
      </div>
    </nav>
  )
}

function Hero({ t }) {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-eyebrow">{t.hero.eyebrow}</p>
            <h1 className="hero-headline">
              {t.hero.headline1}<br />
              {t.hero.headline2}
            </h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-ctas">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {t.hero.ctaPrimary}
              </a>
              <a href="#how-it-works" className="btn btn-ghost">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <div className="photo-placeholder">
              <span>Your photo here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Problem({ t }) {
  return (
    <section className="section problem" id="problem">
      <div className="container">
        <h2 className="section-headline">
          {t.problem.headline1}<br />
          {t.problem.headline2}
        </h2>
        <div className="problem-grid">
          {t.problem.items.map((p) => (
            <div className="problem-card" key={p.number}>
              <span className="problem-number">{p.number}</span>
              <h3 className="problem-title">{p.title}</h3>
              <p className="problem-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AIOSSetup({ t }) {
  return (
    <section className="section aios" id="aios">
      <div className="container">
        <div className="aios-inner">
          <div className="aios-text">
            <p className="section-eyebrow">{t.aios.eyebrow}</p>
            <h2 className="section-headline">{t.aios.headline}</h2>
            <p className="aios-body">{t.aios.body}</p>
            <p className="aios-label">{t.aios.label}</p>
            <ul className="aios-list">
              {t.aios.deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            <div className="aios-meta">
              <span>{t.aios.meta}</span>
            </div>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.aios.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services({ t }) {
  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="section-headline">{t.services.headline}</h2>
        <div className="services-grid">
          {t.services.items.map((s) => (
            <div className={`service-card ${s.featured ? 'service-card--featured' : ''}`} key={s.title}>
              <span className="service-tag">{s.tag}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-body">{s.body}</p>
              <a
                href={s.link === 'calendly' ? CALENDLY_LINK : s.link}
                target={s.link === 'calendly' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`btn ${s.featured ? 'btn-primary' : 'btn-outline'}`}
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks({ t }) {
  return (
    <section className="section how" id="how-it-works">
      <div className="container">
        <h2 className="section-headline">{t.how.headline}</h2>
        <div className="steps-grid">
          {t.how.steps.map((s) => (
            <div className="step" key={s.step}>
              <span className="step-number">{s.step}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio({ t }) {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-headline">{t.portfolio.headline}</h2>
        <p className="section-sub">{t.portfolio.sub}</p>
        <div className="portfolio-grid">
          {t.portfolio.items.map((w) => (
            <div className="portfolio-card" key={w.title}>
              <span className="portfolio-tag">{w.tag}</span>
              <h3 className="portfolio-title">{w.title}</h3>
              <p className="portfolio-context">{w.context}</p>
              <p className="portfolio-outcome">{w.outcome}</p>
              <a href="#" className="portfolio-link">{t.portfolio.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About({ t }) {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-photo">
            <div className="photo-placeholder photo-placeholder--small">
              <span>Photo</span>
            </div>
          </div>
          <div className="about-text">
            <p className="section-eyebrow">{t.about.eyebrow}</p>
            <h2 className="about-headline">{t.about.headline}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p className="about-location">{t.about.location}</p>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.about.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact({ t }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    fetch('https://formspree.io/f/FORMSPREE_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then(() => {
        alert(t.contact.success)
        form.reset()
      })
      .catch(() => alert(t.contact.error))
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-headline">{t.contact.headline}</h2>
        <div className="contact-inner">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contact.name.label}</label>
              <input type="text" id="name" name="name" required placeholder={t.contact.name.placeholder} />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.email.label}</label>
              <input type="email" id="email" name="email" required placeholder={t.contact.email.placeholder} />
            </div>
            <div className="form-group">
              <label htmlFor="business">{t.contact.business.label}</label>
              <input type="text" id="business" name="business" placeholder={t.contact.business.placeholder} />
            </div>
            <div className="form-group">
              <label htmlFor="interest">{t.contact.interest.label}</label>
              <select id="interest" name="interest">
                <option value="">{t.contact.interest.placeholder}</option>
                {t.contact.interest.options.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">{t.contact.submit}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-name">Fadwa Naboulssi · Fractional Head of AI · © 2026 All rights reserved</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/fadwa-naboulssi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:coach.fadwa.naboulssi@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [lang, setLang] = useState('en')
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Problem t={t} />
      <AIOSSetup t={t} />
      <Services t={t} />
      <HowItWorks t={t} />
      <Portfolio t={t} />
      <About t={t} />
      <Contact t={t} />
      <Footer />
    </>
  )
}
