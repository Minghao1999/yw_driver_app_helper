import { useEffect, useMemo, useRef, useState } from 'react'
import { getLocalizedDriverChapters } from './driverTutorialData.js'
import { getLocalizedChapters } from './tutorialData.js'

const languages = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]

const interfaceCopy = {
  zh: {
    brandSubtitle: '操作指南', selectEndpoint: '选择教程端', driver: '司机端', fleet: '车队长端', selectLanguage: '选择语言',
    backToTop: '返回顶部', openMenu: '打开教程目录', closeMenu: '关闭教程目录', tutorialContents: '教程目录', version: '版本',
    zoom: '放大', viewLarger: '放大查看', subTutorial: '子教程', operationTutorial: '操作教程', note: '注意',
    entry: '入口', closeImage: '关闭大图', footer: 'YW Driver App Helper',
    skip: '跳到主要内容', backToTopFooter: '返回顶部 ↑',
  },
  en: {
    brandSubtitle: 'User Guide', selectEndpoint: 'Choose a guide', driver: 'Driver', fleet: 'Fleet Manager', selectLanguage: 'Select language',
    backToTop: 'Back to top', openMenu: 'Open tutorial menu', closeMenu: 'Close tutorial menu', tutorialContents: 'Tutorial contents', version: 'Version',
    zoom: 'View larger', viewLarger: 'View larger', subTutorial: 'Sub-guide', operationTutorial: 'Instructions', note: 'Note',
    entry: 'Entry', closeImage: 'Close enlarged image', footer: 'YW Driver App Helper',
    skip: 'Skip to main content', backToTopFooter: 'Back to top ↑',
  },
  es: {
    brandSubtitle: 'Guía de uso', selectEndpoint: 'Elegir guía', driver: 'Conductor', fleet: 'Jefe de flota', selectLanguage: 'Seleccionar idioma',
    backToTop: 'Volver arriba', openMenu: 'Abrir índice del tutorial', closeMenu: 'Cerrar índice del tutorial', tutorialContents: 'Índice del tutorial', version: 'Versión',
    zoom: 'Ampliar', viewLarger: 'Ver ampliada', subTutorial: 'Subguía', operationTutorial: 'Instrucciones', note: 'Nota',
    entry: 'Acceso', closeImage: 'Cerrar imagen ampliada', footer: 'YW Driver App Helper',
    skip: 'Saltar al contenido principal', backToTopFooter: 'Volver arriba ↑',
  },
}

function Icon({ name, size = 20 }) {
  const paths = {
    chevron: <path d="m9 18 6-6-6-6" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    expand: <><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function LanguagePicker({ language, onChange, copy }) {
  const [open, setOpen] = useState(false)
  const current = languages.find((item) => item.code === language)

  return (
    <div className="language-picker">
      <button className="language-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-haspopup="listbox">
        <Icon name="globe" size={18} />
        <span>{current.label}</span>
        <span className={`language-caret ${open ? 'is-open' : ''}`}>⌄</span>
      </button>
      {open && (
        <div className="language-menu" role="listbox" aria-label={copy.selectLanguage}>
          {languages.map((item) => (
            <button
              key={item.code}
              className={language === item.code ? 'is-active' : ''}
              onClick={() => { onChange(item.code); setOpen(false) }}
              role="option"
              aria-selected={language === item.code}
            >
              <span>{item.label}</span>
              {language === item.code && <Icon name="check" size={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function EndpointSwitch({ endpoint, onChange, copy }) {
  return (
    <div className="endpoint-switch" aria-label={copy.selectEndpoint}>
      <button className={endpoint === 'driver' ? 'is-active' : ''} onClick={() => onChange('driver')}>{copy.driver}</button>
      <button className={endpoint === 'fleet' ? 'is-active' : ''} onClick={() => onChange('fleet')}>{copy.fleet}</button>
    </div>
  )
}

function Header({ endpoint, setEndpoint, language, setLanguage, mobileOpen, setMobileOpen, copy }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={copy.backToTop}>
        <span className="brand-mark">YW</span>
        <span className="brand-copy"><strong>Driver App</strong><small>{copy.brandSubtitle}</small></span>
      </a>
      <div className="header-center"><EndpointSwitch endpoint={endpoint} onChange={setEndpoint} copy={copy} /></div>
      <div className="header-actions">
        <LanguagePicker language={language} onChange={setLanguage} copy={copy} />
        <button className="mobile-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? copy.closeMenu : copy.openMenu}>
          <Icon name={mobileOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}

function Sidebar({ mobileOpen, setMobileOpen, endpoint, setEndpoint, chapters, copy }) {
  const sidebarRef = useRef(null)
  const links = useMemo(() => chapters.flatMap((chapter, chapterIndex) => [
    { id: chapter.id, title: chapter.title, chapter: true, number: String(chapterIndex + 1) },
    ...chapter.procedures.flatMap((procedure, procedureIndex) => [
      { id: procedure.id, title: procedure.title, number: `${chapterIndex + 1}.${procedureIndex + 1}` },
      ...(procedure.children ?? []).map((child, childIndex) => ({
        id: child.id,
        title: child.title,
        child: true,
        number: `${chapterIndex + 1}.${procedureIndex + 1}.${childIndex + 1}`,
      })),
    ]),
  ]), [chapters])
  const [activeId, setActiveId] = useState(links[0]?.id ?? '')

  useEffect(() => {
    const targets = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const updateActiveLink = () => {
      const trackingLine = Math.min(window.innerHeight * 0.28, 220)
      let nextId = targets[0]?.id ?? ''

      targets.forEach((target) => {
        if (target.getBoundingClientRect().top <= trackingLine) nextId = target.id
      })

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        nextId = targets.at(-1)?.id ?? nextId
      }

      setActiveId((currentId) => currentId === nextId ? currentId : nextId)
    }

    updateActiveLink()
    window.addEventListener('scroll', updateActiveLink, { passive: true })
    window.addEventListener('resize', updateActiveLink)
    return () => {
      window.removeEventListener('scroll', updateActiveLink)
      window.removeEventListener('resize', updateActiveLink)
    }
  }, [endpoint, links])

  useEffect(() => {
    setActiveId(links[0]?.id ?? '')
  }, [endpoint, links])

  useEffect(() => {
    const sidebar = sidebarRef.current
    const activeLink = sidebar?.querySelector('.is-current')
    if (!sidebar || !activeLink) return

    const sidebarBox = sidebar.getBoundingClientRect()
    const linkBox = activeLink.getBoundingClientRect()
    const isOutsideView = linkBox.top < sidebarBox.top + 70 || linkBox.bottom > sidebarBox.bottom - 52

    if (isOutsideView) {
      sidebar.scrollTo({
        top: Math.max(0, sidebar.scrollTop + linkBox.top - sidebarBox.top - sidebar.clientHeight / 2),
        behavior: 'smooth',
      })
    }
  }, [activeId])

  return (
    <aside ref={sidebarRef} className={`sidebar ${mobileOpen ? 'is-open' : ''}`} aria-label={copy.tutorialContents}>
      <div className="sidebar-inner">
        <div className="mobile-endpoint">
          <p className="sidebar-label">{copy.selectEndpoint}</p>
          <EndpointSwitch endpoint={endpoint} onChange={(value) => { setEndpoint(value); setMobileOpen(false) }} copy={copy} />
        </div>
        <p className="sidebar-label">{copy.tutorialContents}</p>
        <nav>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${link.chapter ? 'chapter-link' : link.child ? 'procedure-link child-link' : 'procedure-link'} ${activeId === link.id ? 'is-current' : ''}`}
              aria-current={activeId === link.id ? 'location' : undefined}
              onClick={() => { setActiveId(link.id); setMobileOpen(false) }}
            >
              <span className="link-number">{link.number}</span>
              {link.title}
            </a>
          ))}
        </nav>
        <div className="sidebar-meta"><span>{copy.version}</span><strong>2026.10</strong></div>
      </div>
    </aside>
  )
}

function Screenshot({ item, onOpen, index, copy }) {
  return (
    <button className="screenshot" onClick={() => onOpen(item)} aria-label={`${copy.viewLarger}: ${item.alt}`}>
      <span className="screenshot-number">{String(index + 1).padStart(2, '0')}</span>
      <span className="screenshot-frame">
        <img src={item.src} alt={item.alt} loading="lazy" />
      </span>
      <span className="zoom-hint"><Icon name="expand" size={16} /> {copy.zoom}</span>
    </button>
  )
}

function Procedure({ procedure, onOpen, copy, nested = false }) {
  return (
    <article className={`procedure ${nested ? 'is-subprocedure' : ''}`} id={procedure.id}>
      <div className="procedure-copy">
        <p className="section-kicker">{nested ? copy.subTutorial : copy.operationTutorial}</p>
        <h3>{procedure.title}</h3>
        {procedure.note && <p className="note"><strong>{copy.note}</strong>{procedure.note}</p>}
      </div>
      <div className={`screenshot-grid ${procedure.images.length === 1 ? 'single' : ''}`}>
        {procedure.images.map((item, index) => <Screenshot key={item.src} item={item} index={index} onOpen={onOpen} copy={copy} />)}
      </div>
      {procedure.children?.length > 0 && (
        <div className="subprocedures">
          {procedure.children.map((child) => <Procedure key={child.id} procedure={child} onOpen={onOpen} copy={copy} nested />)}
        </div>
      )}
    </article>
  )
}

function Chapter({ chapter, onOpen, copy }) {
  return (
    <section className={`chapter accent-${chapter.accent}`} id={chapter.id}>
      <header className="chapter-header">
        <div className="chapter-number">{chapter.number}</div>
        <div>
          <p className="chapter-eyebrow">{chapter.eyebrow}</p>
          <h2>{chapter.title}</h2>
        </div>
      </header>
      {chapter.note && <p className="chapter-note"><span>{copy.note}</span>{chapter.note}</p>}
      {chapter.images?.length > 0 && (
        <div className={`screenshot-grid chapter-screenshots ${chapter.images.length === 1 ? 'single' : ''}`}>
          {chapter.images.map((item, index) => <Screenshot key={item.src} item={item} index={index} onOpen={onOpen} copy={copy} />)}
        </div>
      )}
      {chapter.entry.length > 0 && (
        <div className={`entry-block ${chapter.entry.length > 1 ? 'has-multiple-images' : ''} ${chapter.entry.length === 3 ? 'has-three-images' : ''}`}>
          <div className="entry-copy">
            <span>{copy.entry}</span>
            <h3>{chapter.entryTitle}</h3>
          </div>
          <div className="entry-images">
            {chapter.entry.map((item, index) => <Screenshot key={item.src} item={item} index={index} onOpen={onOpen} copy={copy} />)}
          </div>
        </div>
      )}
      {chapter.procedures.map((procedure) => <Procedure key={procedure.id} procedure={procedure} onOpen={onOpen} copy={copy} />)}
    </section>
  )
}

function Lightbox({ image, onClose, copy }) {
  useEffect(() => {
    if (!image) return undefined
    const onKey = (event) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => { document.removeEventListener('keydown', onKey); document.body.classList.remove('no-scroll') }
  }, [image, onClose])
  if (!image) return null
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.alt} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label={copy.closeImage}><Icon name="close" /></button>
      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <img src={image.src} alt={image.alt} />
        <p>{image.alt}</p>
      </div>
    </div>
  )
}

function TutorialHome({ chapters, onOpen, copy }) {
  return (
    <main className="tutorial-main" id="main-content">
      <span id="top" className="top-anchor" />
      {chapters.map((chapter) => <Chapter key={chapter.id} chapter={chapter} onOpen={onOpen} copy={copy} />)}
      <footer className="footer"><span className="brand-mark">YW</span><p>{copy.footer}</p><a href="#top">{copy.backToTopFooter}</a></footer>
    </main>
  )
}

export default function App() {
  const [endpoint, setEndpoint] = useState('driver')
  const [language, setLanguage] = useState('zh')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const previousEndpoint = useRef(endpoint)
  const copy = interfaceCopy[language]
  const chapters = useMemo(
    () => endpoint === 'driver' ? getLocalizedDriverChapters(language) : getLocalizedChapters(language),
    [endpoint, language],
  )

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language
  }, [language])

  useEffect(() => {
    if (previousEndpoint.current === endpoint) return
    previousEndpoint.current = endpoint
    setMobileOpen(false)
    setLightboxImage(null)
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [endpoint])

  return (
    <div className={`app language-${language}`}>
      <a className="skip-link" href="#main-content">{copy.skip}</a>
      <Header endpoint={endpoint} setEndpoint={setEndpoint} language={language} setLanguage={setLanguage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} copy={copy} />
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} endpoint={endpoint} setEndpoint={setEndpoint} chapters={chapters} copy={copy} />
      {mobileOpen && <button className="sidebar-backdrop" onClick={() => setMobileOpen(false)} aria-label={copy.closeMenu} />}
      <TutorialHome chapters={chapters} onOpen={setLightboxImage} copy={copy} />
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} copy={copy} />
    </div>
  )
}
