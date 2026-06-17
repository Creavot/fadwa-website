import './App.css'

const CALENDLY_LINK = 'https://calendly.com/atypikflow/30min'

function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">Fadwa Naboulssi</span>
      <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-small">
        Book a session
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-eyebrow">Fractional Head of AI</p>
            <h1 className="hero-headline">
              Your business deserves an AI brain.<br />
              I'll install it.
            </h1>
            <p className="hero-sub">
              I help coaches and consultants stop drowning in manual work and start running on intelligent systems.
              One 2-hour session gives your entire business a memory, a structure, and a direction.
            </p>
            <div className="hero-ctas">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book your AI Business Setup →
              </a>
              <a href="#how-it-works" className="btn btn-ghost">
                See how it works ↓
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

function Problem() {
  const problems = [
    {
      number: '01',
      title: 'Too much noise, not enough clarity',
      body: "Everyone is telling you to use AI. No one is telling you what actually matters for your specific business. You've tried ChatGPT. You've downloaded tools. Nothing connected. Nothing changed.",
    },
    {
      number: '02',
      title: 'Your business still runs on your memory',
      body: "Your client info is in your head. Your follow-ups are in your head. Your next steps are in your head. The moment you step away, everything slows down or stops.",
    },
    {
      number: '03',
      title: "You're implementing AI backwards",
      body: "Most coaches start with a tool and try to find a problem for it. That's why nothing sticks. The right approach starts with the business problem, not the software.",
    },
  ]

  return (
    <section className="section problem" id="problem">
      <div className="container">
        <h2 className="section-headline">You've heard about AI.<br />You've tried a few tools. Nothing stuck.</h2>
        <div className="problem-grid">
          {problems.map((p) => (
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

function AIOSSetup() {
  const deliverables = [
    'A centralized AI knowledge base built around your specific business',
    'Your top 3 automation opportunities identified, ranked, and explained',
    'A clear map of what to build next, and what to leave alone',
    'Full ownership of the system. You run it. No dependency on me.',
  ]

  return (
    <section className="section aios" id="aios">
      <div className="container">
        <div className="aios-inner">
          <div className="aios-text">
            <p className="section-eyebrow">Start here</p>
            <h2 className="section-headline">The AI Business Operating System Setup</h2>
            <p className="aios-body">
              A focused 2-hour working session where I install an AI brain inside your business.
              By the end, your priorities, your client base, your voice, your offers, and your
              operations are all documented, connected, and queryable.
              You ask it a question. It knows your business.
            </p>
            <p className="aios-label">What you walk away with:</p>
            <ul className="aios-list">
              {deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            <div className="aios-meta">
              <span>2 hours &nbsp;·&nbsp; Remote &nbsp;·&nbsp; $250</span>
            </div>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book your Setup Session →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      featured: true,
      title: 'AI Business Setup',
      tag: 'Start here',
      body: 'The entry point. One 2-hour session. Your AI brain is installed, your top priorities are mapped, and you leave with a system you own completely.',
      cta: 'Book a session',
      link: CALENDLY_LINK,
    },
    {
      featured: false,
      title: 'Fractional Head of AI',
      tag: 'Ongoing',
      body: 'I come in as your AI director, making decisions, overseeing builds, keeping your AI implementation aligned with your business goals. Strategy, not just execution.',
      cta: "Let's talk",
      link: '#contact',
    },
    {
      featured: false,
      title: 'Done-for-You Automation',
      tag: 'Project-based',
      body: 'You have a specific process that needs to be automated. I build it, test it, and hand it off completely ready to use.',
      cta: 'Tell me what you need',
      link: '#contact',
    },
  ]

  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="section-headline">Services</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div className={`service-card ${s.featured ? 'service-card--featured' : ''}`} key={s.title}>
              <span className="service-tag">{s.tag}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-body">{s.body}</p>
              <a
                href={s.link}
                target={s.link.startsWith('http') ? '_blank' : '_self'}
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

function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Diagnose',
      body: "I look at your business before I touch any tool. What's actually broken, where time is being lost, what's worth fixing.",
    },
    {
      step: '2',
      title: 'Decide',
      body: 'I tell you what to automate, what not to, and why. This decision is the work. Most people skip it and regret it.',
    },
    {
      step: '3',
      title: 'Build',
      body: 'I build what matters. Clean, tested, production-ready. Not a demo that collapses in week 2.',
    },
    {
      step: '4',
      title: 'Hand off',
      body: 'You receive the system, a walkthrough video, and documentation. Full ownership. No dependency.',
    },
  ]

  return (
    <section className="section how" id="how-it-works">
      <div className="container">
        <h2 className="section-headline">How it works</h2>
        <div className="steps-grid">
          {steps.map((s) => (
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

function Portfolio() {
  const work = [
    {
      tag: 'Sample Audit',
      title: 'AI Business Audit: Coaching Practice',
      context: 'Fictional coaching business, 5 clients/month',
      outcome: 'Identified 3 automatable processes, 6h/week saved, clear build roadmap',
      link: '#',
    },
    {
      tag: 'Case Study',
      title: 'Automated Client Onboarding',
      context: 'Life coach, 4-8 new clients per month',
      outcome: '45 minutes of manual admin per client → 0. Tally → n8n → Notion → Gmail',
      link: '#',
    },
    {
      tag: 'Case Study',
      title: 'Session-to-Content Pipeline',
      context: 'Business coach, records sessions weekly',
      outcome: '2 hours writing per post → 10 minutes editing. Google Drive → n8n → Claude → Notion',
      link: '#',
    },
    {
      tag: 'Walkthrough',
      title: 'AIOS Setup: Full Walkthrough',
      context: 'What a client receives after a setup session',
      outcome: 'Live Notion workspace, automation map, day-to-day usage demo',
      link: '#',
    },
  ]

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-headline">Work</h2>
        <p className="section-sub">Real systems. Real outcomes. Built for businesses that looked exactly like yours.</p>
        <div className="portfolio-grid">
          {work.map((w) => (
            <div className="portfolio-card" key={w.title}>
              <span className="portfolio-tag">{w.tag}</span>
              <h3 className="portfolio-title">{w.title}</h3>
              <p className="portfolio-context">{w.context}</p>
              <p className="portfolio-outcome">{w.outcome}</p>
              <a href={w.link} className="portfolio-link">See full case study →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
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
            <p className="section-eyebrow">Who I am</p>
            <h2 className="about-headline">I didn't start as the tech person in the room.</h2>
            <p>
              I spent years on the business side. Coaching entrepreneurs, managing marketing
              operations, training teams, building brands. I know what it feels like to run a
              business where everything lives in your head and the system breaks the moment you
              step away.
            </p>
            <p>
              That is where my real edge is. Not in code. In understanding the business first,
              before touching any tool.
            </p>
            <p>
              Most people implementing AI come from the technical side. They know the tools but
              not the business. I came from the other direction. I know the business. And I
              learned to build the tools.
            </p>
            <p className="about-location">
              Working with coaches and consultants worldwide. Arabic, French, and English.
            </p>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book your AI Business Setup →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
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
        alert('Message sent. I\'ll be in touch within 24 hours.')
        form.reset()
      })
      .catch(() => alert('Something went wrong. Email me directly at coach.fadwa.naboulssi@gmail.com'))
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-headline">Ready to give your business an AI brain?</h2>
        <div className="contact-inner">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="business">What does your business do?</label>
              <input type="text" id="business" name="business" placeholder="One line is enough" />
            </div>
            <div className="form-group">
              <label htmlFor="interest">What are you looking for?</label>
              <select id="interest" name="interest">
                <option value="">Select one</option>
                <option value="aios">AI Business Setup</option>
                <option value="fractional">Fractional Head of AI</option>
                <option value="dfy">Done-for-you automation</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Send →</button>
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
        <p className="footer-name">Fadwa Naboulssi · Fractional Head of AI</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/fadwa-naboulssi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:coach.fadwa.naboulssi@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <AIOSSetup />
      <Services />
      <HowItWorks />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
