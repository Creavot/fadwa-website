import { useState, useEffect } from 'react'
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import './App.css'
import translations from './translations'
import caseStudies from './caseStudies'

function LangToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button className={`lang-btn ${lang === 'en' ? 'lang-btn--active' : ''}`} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
      <span className="lang-divider" aria-hidden="true">|</span>
      <button className={`lang-btn ${lang === 'fr' ? 'lang-btn--active' : ''}`} onClick={() => setLang('fr')} aria-pressed={lang === 'fr'}>FR</button>
    </div>
  )
}

function Nav({ t, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
      <div className="nav-top">
        <a href="/#hero" className="nav-logo-block">
          <span className="nav-logo">Fadwa Naboulssi</span>
          <span className="nav-tagline">Fractional Head of AI</span>
        </a>
        <ul className="nav-links">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a href={`/${l.href}`} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <LangToggle lang={lang} setLang={setLang} />
          <a href="/#contact" className="btn btn-small">{t.nav.cta}</a>
          <button
            className={`nav-hamburger${menuOpen ? ' nav-hamburger--open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      {menuOpen && (
        <ul className="nav-mobile-links">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a href={`/${l.href}`} className="nav-mobile-link" onClick={handleLinkClick}>{l.label}</a>
            </li>
          ))}
        </ul>
      )}
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
            <p className="hero-tagline">
              {t.hero.tagline1}<br />
              {t.hero.tagline2}
            </p>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">{t.hero.ctaPrimary}</a>
              <a href="#how-it-works" className="btn btn-ghost">{t.hero.ctaSecondary}</a>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/fadwa.png" alt="Fadwa Naboulssi" className="hero-photo-img" />
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
        <h2 className="section-headline" data-animate>
          {t.problem.headline1}<br />{t.problem.headline2}
        </h2>
        <div className="problem-grid">
          {t.problem.items.map((p, i) => (
            <div className="problem-card" key={p.number} data-animate data-delay={i + 1}>
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

function Services({ t }) {
  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="section-headline" data-animate>{t.services.headline}</h2>
        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <div className={`service-card ${s.featured ? 'service-card--featured' : ''}`} key={s.title} data-animate data-delay={i + 1}>
              <span className="service-tag">{s.tag}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-body">{s.body}</p>
              <a href={s.link} className="btn btn-outline">
                VIEW
              </a>
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
          <p className="section-eyebrow" data-animate>{t.aios.eyebrow}</p>
          <h2 className="section-headline" data-animate data-delay="1">{t.aios.headline}</h2>
          <p className="aios-body" data-animate data-delay="2">{t.aios.body}</p>
          <p className="aios-label" data-animate data-delay="3">{t.aios.label}</p>
          <ul className="aios-list" data-animate data-delay="3">
            {t.aios.deliverables.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <div className="aios-meta" data-animate data-delay="4">
            <span>{t.aios.meta}</span>
          </div>
          <a href="#contact" className="btn btn-primary" data-animate data-delay="4">
            {t.aios.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

function HowItWorks({ t }) {
  return (
    <section className="section how" id="how-it-works">
      <div className="container">
        <h2 className="section-headline" data-animate>{t.how.headline}</h2>
        <div className="steps-grid">
          {t.how.steps.map((s, i) => (
            <div className="step" key={s.step} data-animate data-delay={i + 1}>
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
        <h2 className="section-headline" data-animate>{t.portfolio.headline}</h2>
        <p className="section-sub" data-animate data-delay="1">{t.portfolio.sub}</p>
        <div className="portfolio-grid">
          {t.portfolio.items.map((w, i) => (
            <div className="portfolio-card" key={w.title} data-animate data-delay={i + 1}>
              <span className="portfolio-tag">{w.tag}</span>
              <h3 className="portfolio-title">{w.title}</h3>
              <p className="portfolio-context">{w.context}</p>
              <p className="portfolio-outcome">{w.outcome}</p>
              <Link to={`/case-studies/${w.slug}`} className="portfolio-link">{t.portfolio.cta}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Trust({ t }) {
  return (
    <section className="section trust" id="trust">
      <div className="container">
        <h2 className="section-headline" data-animate>{t.trust.headline}</h2>
        <div className="trust-grid">
          {t.trust.items.map((item, i) => (
            <div className="trust-item" key={item.number} data-animate data-delay={i + 1}>
              <span className="trust-number">{item.number}</span>
              <h3 className="trust-title">{item.title}</h3>
              <p className="trust-body">{item.body}</p>
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
            <img src="/fadwa.png" alt="Fadwa Naboulssi" className="about-photo-img" />
          </div>
          <div className="about-eyebrow-wrap">
            <p className="section-eyebrow" data-animate>{t.about.eyebrow}</p>
          </div>
          <div className="about-text-body">
            <h2 className="about-headline" data-animate data-delay="1">{t.about.headline}</h2>
            <p data-animate data-delay="2">{t.about.p1}</p>
            <p data-animate data-delay="3">{t.about.p2}</p>
            <p data-animate data-delay="3">{t.about.p3}</p>
            <p className="about-location" data-animate data-delay="4">{t.about.location}</p>
            <a href="#contact" className="btn btn-primary" data-animate data-delay="4">
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
      .then(() => { alert(t.contact.success); form.reset() })
      .catch(() => alert(t.contact.error))
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-headline" data-animate>{t.contact.headline}</h2>
        <div className="contact-inner" data-animate data-delay="1">
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

function useScrollAnimations(deps) {
  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, deps)
}

function HomePage({ t, lang, setLang }) {
  useScrollAnimations([lang])

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Problem t={t} />
      <Services t={t} />
      <AIOSSetup t={t} />
      <HowItWorks t={t} />
      <Portfolio t={t} />
      <Trust t={t} />
      <About t={t} />
      <Contact t={t} />
      <Footer />
    </>
  )
}

function CaseStudyPage({ t, lang, setLang }) {
  const { slug } = useParams()
  const navigate = useNavigate()
  useScrollAnimations([lang, slug])

  const item = t.portfolio.items.find((w) => w.slug === slug)
  const detail = caseStudies[slug]

  useEffect(() => {
    if (!item || !detail) navigate('/', { replace: true })
  }, [item, detail, navigate])

  if (!item || !detail) return null

  const d = detail[lang]

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} />
      <section className="section case-study" id="case-study">
        <div className="container case-study-inner">
          <a href="/#portfolio" className="case-study-back">{t.caseStudyPage.back}</a>
          <span className="portfolio-tag">{item.tag}</span>
          {detail.illustrative && (
            <span className="case-study-illustrative">{t.caseStudyPage.illustrative}</span>
          )}
          <h1 className="case-study-title" data-animate>{item.title}</h1>
          <p className="case-study-hook" data-animate data-delay="1">{d.hook}</p>

          <div className="case-study-block" data-animate data-delay="2">
            <h2 className="case-study-heading">{t.caseStudyPage.whoFor}</h2>
            {Array.isArray(d.whoFor) ? (
              <ul className="case-study-whofor">
                {d.whoFor.map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            ) : (
              <p>{d.whoFor}</p>
            )}
          </div>

          <div className="case-study-block" data-animate data-delay="3">
            <h2 className="case-study-heading">{t.caseStudyPage.problem}</h2>
            <p>{d.problem}</p>
          </div>

          <div className="case-study-block" data-animate data-delay="3">
            <h2 className="case-study-heading">{t.caseStudyPage.whatChanged}</h2>
            <p>{d.whatChanged}</p>
          </div>

          <div className="case-study-block case-study-results" data-animate data-delay="4">
            <h2 className="case-study-heading">{t.caseStudyPage.results}</h2>
            <ul>
              {d.results.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>

          {detail.loomUrl && (
            <div className="case-study-block" data-animate data-delay="4">
              <h2 className="case-study-heading">{t.caseStudyPage.loom}</h2>
              <div className="case-study-loom">
                <iframe
                  src={`${detail.loomUrl.replace('/share/', '/embed/')}`}
                  frameBorder="0"
                  allowFullScreen
                  title={item.title}
                />
              </div>
            </div>
          )}

          {detail.screenshots.length > 0 && (
            <div className="case-study-block" data-animate data-delay="5">
              <div className="case-study-screenshots">
                {detail.screenshots.map((s, i) => (
                  <figure key={s.src}>
                    <img src={s.src} alt={s.caption[lang]} loading="lazy" />
                    <figcaption>{s.caption[lang]}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="case-study-block case-study-underhood" data-animate data-delay="5">
            <h2 className="case-study-heading">{t.caseStudyPage.underHood}</h2>
            <p>{d.underHood}</p>
          </div>

          <div className="case-study-cta" data-animate data-delay="6">
            <p>{t.caseStudyPage.cta}</p>
            <a href="/#contact" className="btn btn-primary">
              {t.hero.ctaPrimary}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default function App() {
  const [lang, setLang] = useState('en')
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <Routes>
      <Route path="/" element={<HomePage t={t} lang={lang} setLang={setLang} />} />
      <Route path="/case-studies/:slug" element={<CaseStudyPage t={t} lang={lang} setLang={setLang} />} />
    </Routes>
  )
}
