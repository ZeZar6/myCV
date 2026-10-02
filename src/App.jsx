import { useEffect, useState } from 'react'
import { additionalTraining, educationAreas, interests, languages, links, profile, skillGroups } from './data/site.js'
import { projects } from './data/projects.js'

const navItems = [['About', '#about'], ['Projects', '#projects'], ['Expertise', '#expertise'], ['Contact', '#contact']]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function ProjectVisual({ project }) {
  if (project.image) {
    const imageSrc = project.image.startsWith('/') ? `${import.meta.env.BASE_URL}${project.image.slice(1)}` : project.image
    return <img className="project-image" src={imageSrc} alt={project.imageAlt || ''} loading="lazy" />
  }
  return <div className={`visual-placeholder placeholder-${project.number}`} aria-label="Project image placeholder">
    <div className="placeholder-grid" />
    <span className="placeholder-cross cross-one">＋</span><span className="placeholder-cross cross-two">＋</span>
    <span className="placeholder-orbit orbit-one" /><span className="placeholder-orbit orbit-two" />
    <span className="placeholder-label">IMAGE / FIGURE</span>
    <span className="placeholder-index">{project.number}</span>
  </div>
}

function ProjectDialog({ project, onClose }) {
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.classList.add('modal-open')
    return () => { document.removeEventListener('keydown', onKey); document.body.classList.remove('modal-open') }
  }, [onClose])

  return <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
      <button className="dialog-close" onClick={onClose} aria-label="Close project details">×</button>
      <ProjectVisual project={project} />
      <div className="dialog-copy"><span className="eyebrow">PROJECT {project.number} / {project.category}</span>
        <h2 id="dialog-title">{project.title}</h2><p>{project.details}</p>
        <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        <p className="dialog-note">Selected project summary provided by César Rodríguez Gutiérrez.</p>
      </div>
    </section>
  </div>
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const categories = ['All', ...new Set(projects.map(({ category }) => category))]
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter(({ category }) => category === activeFilter)
  const emailHref = `mailto:${profile.email}`

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="César Rodríguez Gutiérrez, home"><span className="wordmark-mark">CR</span><span className="wordmark-name">CÉSAR RODRÍGUEZ<span>PHYSICS × INDUSTRIAL TECHNOLOGIES</span></span></a>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}<span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
      <nav id="primary-nav" className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href={emailHref}>Let’s connect <Arrow diagonal /></a>
      </nav>
    </header>

    <main id="main">
      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="status-dot" /> PHYSICS × ENGINEERING <span className="eyebrow-divider">/</span> {profile.city.toUpperCase()}</div>
          <h1>Understanding<br />the world. <span>Building</span><br /><span className="accent-line">what comes next.</span></h1>
          <p className="hero-intro">I’m <strong>{profile.name}</strong>, an {profile.headline.toLowerCase()} with a strong interest in applied physics, instrumentation, scientific computing and physical modelling.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Arrow /></a><a className="text-link" href="#about">More about me <Arrow /></a></div>
          <div className="hero-meta"><span>01 — {String(projects.length).padStart(2, '0')} <i /> SELECTED PROJECTS</span><span>UC3M <i /> DOUBLE DEGREE</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract scientific waveform illustration">
          <div className="art-topline"><span>FIG. 01</span><span>PHYSICAL SYSTEMS / 2026</span></div>
          <div className="art-rings"><div className="ring ring-a"/><div className="ring ring-b"/><div className="ring ring-c"/><div className="ring-core"><span>φ</span></div><div className="ring-point"/><div className="ring-point point-two"/></div>
          <div className="art-axis axis-x"/><div className="art-axis axis-y"/><span className="axis-label axis-label-x">x / POSITION</span><span className="axis-label axis-label-y">y / RESPONSE</span>
          <span className="art-coordinate coord-a">Δ 0.042</span><span className="art-coordinate coord-b">f(t) →</span>
          <div className="art-bottomline"><span>OBSERVE</span><span>MODEL</span><span>ITERATE <b>↗</b></span></div>
        </div>
        <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/></div>
      </section>

      <section className="intro-strip"><div className="section-wrap strip-inner"><span className="eyebrow">A PRACTICE BUILT AROUND CURIOSITY</span><p>From a sensor signal to a physical model, <em>the details matter.</em></p><span className="strip-symbol">✳</span></div></section>

      <section className="section-wrap about-section" id="about">
        <div className="section-heading"><div><span className="eyebrow">01 / ABOUT</span><h2>Physics-minded.<br /><span>Engineer by training.</span></h2></div><span className="section-index">A — 01</span></div>
        <div className="about-grid"><div className="about-copy"><p className="lead">{profile.headline} at {profile.university}, interested in applied physics, instrumentation, scientific computing and physical modelling.</p><p>My academic and project experience combines programming, simulation, data acquisition, electronics and engineering analysis. I’m interested in contributing to experimental and technical projects involving sensors, measurement systems, scientific instrumentation and multidisciplinary engineering.</p><p><strong>Relevant academic areas</strong><br />{educationAreas.join(' · ')}</p><p><strong>Additional training</strong><br />{additionalTraining}</p><p><strong>Languages</strong><br />{languages.join(' · ')}</p></div>
          <aside className="education-card"><span className="eyebrow">ACADEMIC SNAPSHOT</span><div className="education-mark">UC<span>3</span>M</div><h3>{profile.university}</h3><p>{profile.degree}</p><div className="education-foot"><span>GRADE AVERAGE</span><strong>{profile.grade}</strong></div></aside></div>
      </section>

      <section className="projects-section" id="projects"><div className="section-wrap projects-wrap">
        <div className="section-heading"><div><span className="eyebrow">02 / SELECTED WORK</span><h2>Curiosity, <span>made tangible.</span></h2></div><span className="section-index">{String(projects.length).padStart(2, '0')} PROJECTS</span></div>
        <p className="section-deck">Selected technical projects across instrumentation, scientific computing and mechanical engineering. Open a card to read the project summary.</p>
        <div className="filter-row" aria-label="Filter projects">{categories.map((category) => <button key={category} className={activeFilter === category ? 'filter-chip filter-active' : 'filter-chip'} aria-pressed={activeFilter === category} onClick={() => setActiveFilter(category)}>{category}<span>{category === 'All' ? projects.length : projects.filter((p) => p.category === category).length}</span></button>)}</div>
        <div className="project-grid">{visibleProjects.map((project) => <button className="project-card" key={project.id} onClick={() => setSelectedProject(project)} aria-label={`View details for ${project.title}`}>
          <ProjectVisual project={project} /><div className="project-card-copy"><div className="project-card-top"><span className="eyebrow">{project.category}</span><span className="project-number">{project.number}</span></div><h3>{project.title}<span className="card-arrow"><Arrow diagonal /></span></h3><p>{project.summary}</p><div className="tag-list">{project.tags.slice(0, 3).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
        </button>)}</div>
        <p className="projects-footnote"><span>↗</span> Selected project summaries from academic and engineering work.</p>
      </div></section>

      <section className="section-wrap expertise-section" id="expertise"><div className="section-heading"><div><span className="eyebrow">03 / EXPERTISE</span><h2>Tools for asking<br /><span>better questions.</span></h2></div><span className="section-index">METHOD / TOOLKIT</span></div>
        <div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title}><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3><div className="skill-items">{group.items.map((item) => <span key={item}>{item}<b>↗</b></span>)}</div></article>)}</div>
        <div className="interests-block"><div><span className="eyebrow">RESEARCH INTERESTS</span><p>Questions I’m keen to explore</p></div><div className="interest-list">{interests.map((interest, index) => <span key={interest}><i>0{index + 1}</i>{interest}</span>)}</div></div>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-wrap"><span className="eyebrow">04 / CONTACT</span><div className="contact-main"><h2>Have a question<br />worth <span>measuring?</span></h2><div className="contact-side"><p>I’m interested in connecting around engineering physics, scientific instrumentation and simulation.</p>{profile.email ? <><a className="button button-primary" href={`mailto:${profile.email}`}>Get in touch <Arrow diagonal /></a><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a></> : <span className="button button-disabled" aria-disabled="true">Email coming soon</span>}</div></div>
        <div className="contact-bottom"><div className="contact-name"><span className="wordmark-mark">CR</span><span>{profile.name}<small>ENGINEERING PHYSICS · UC3M</small></span></div><div className="portfolio-links"><span className="eyebrow">PORTFOLIO LINKS</span>{links.map((link) => { const href = link.href.startsWith('/') ? `${import.meta.env.BASE_URL}${link.href.slice(1)}` : link.href; return <a key={link.label} href={href} target={link.label === 'LinkedIn' ? '_blank' : undefined} rel={link.label === 'LinkedIn' ? 'noreferrer' : undefined} download={link.download || undefined}>{link.label}<Arrow diagonal /></a> })}</div><span className="copyright">© {new Date().getFullYear()} · BUILT WITH CURIOSITY</span></div>
      </div></section>
    </main>
    {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </>
}

export default App
