import { useEffect, useMemo, useRef, useState } from 'react'
import { chapters } from './tutorialData.js'

const languages = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]

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

function LanguagePicker({ language, onChange }) {
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
        <div className="language-menu" role="listbox" aria-label="选择语言">
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

function EndpointSwitch({ endpoint, onChange }) {
  return (
    <div className="endpoint-switch" aria-label="选择教程端">
      <button className={endpoint === 'driver' ? 'is-active' : ''} onClick={() => onChange('driver')}>司机端</button>
      <button className={endpoint === 'fleet' ? 'is-active' : ''} onClick={() => onChange('fleet')}>车队长端</button>
    </div>
  )
}

function Header({ endpoint, setEndpoint, language, setLanguage, mobileOpen, setMobileOpen }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="返回顶部">
        <span className="brand-mark">YW</span>
        <span className="brand-copy"><strong>Driver App</strong><small>操作指南</small></span>
      </a>
      <div className="header-center"><EndpointSwitch endpoint={endpoint} onChange={setEndpoint} /></div>
      <div className="header-actions">
        <LanguagePicker language={language} onChange={setLanguage} />
        <button className="mobile-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="打开教程目录">
          <Icon name={mobileOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}

function Sidebar({ mobileOpen, setMobileOpen, endpoint, setEndpoint }) {
  const sidebarRef = useRef(null)
  const links = useMemo(() => chapters.flatMap((chapter) => [
    { id: chapter.id, title: chapter.title, chapter: true, number: chapter.number },
    ...chapter.procedures.flatMap((procedure) => [
      { id: procedure.id, title: procedure.title },
      ...(procedure.children ?? []).map((child) => ({ id: child.id, title: child.title, child: true })),
    ]),
  ]), [])
  const [activeId, setActiveId] = useState(links[0]?.id ?? '')

  useEffect(() => {
    if (endpoint !== 'fleet') return undefined

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
    <aside ref={sidebarRef} className={`sidebar ${endpoint === 'driver' ? 'is-driver' : ''} ${mobileOpen ? 'is-open' : ''}`} aria-label="教程目录">
      <div className="sidebar-inner">
        <div className="mobile-endpoint">
          <p className="sidebar-label">选择教程端</p>
          <EndpointSwitch endpoint={endpoint} onChange={(value) => { setEndpoint(value); setMobileOpen(false) }} />
        </div>
        {endpoint === 'fleet' ? (
          <>
            <p className="sidebar-label">教程目录</p>
            <nav>
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`${link.chapter ? 'chapter-link' : link.child ? 'procedure-link child-link' : 'procedure-link'} ${activeId === link.id ? 'is-current' : ''}`}
                  aria-current={activeId === link.id ? 'location' : undefined}
                  onClick={() => { setActiveId(link.id); setMobileOpen(false) }}
                >
                  {link.chapter && <span>{link.number}</span>}
                  {link.title}
                </a>
              ))}
            </nav>
            <div className="sidebar-meta"><span>版本</span><strong>2026.10</strong></div>
          </>
        ) : (
          <p className="sidebar-empty">司机端资料尚未提供。切换至车队长端可查看现有教程。</p>
        )}
      </div>
    </aside>
  )
}

function Screenshot({ item, onOpen, index }) {
  return (
    <button className="screenshot" onClick={() => onOpen(item)} aria-label={`放大查看：${item.alt}`}>
      <span className="screenshot-number">{String(index + 1).padStart(2, '0')}</span>
      <span className="screenshot-frame">
        <img src={item.src} alt={item.alt} loading="lazy" />
      </span>
      <span className="zoom-hint"><Icon name="expand" size={16} /> 放大</span>
    </button>
  )
}

function Procedure({ procedure, onOpen, nested = false }) {
  return (
    <article className={`procedure ${nested ? 'is-subprocedure' : ''}`} id={procedure.id}>
      <div className="procedure-copy">
        <p className="section-kicker">{nested ? '子教程' : '操作教程'}</p>
        <h3>{procedure.title}</h3>
        <ol className="steps">
          {procedure.steps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}
        </ol>
        {procedure.note && <p className="note"><strong>注意</strong>{procedure.note}</p>}
      </div>
      <div className={`screenshot-grid ${procedure.images.length === 1 ? 'single' : ''}`}>
        {procedure.images.map((item, index) => <Screenshot key={item.src} item={item} index={index} onOpen={onOpen} />)}
      </div>
      {procedure.children?.length > 0 && (
        <div className="subprocedures">
          {procedure.children.map((child) => <Procedure key={child.id} procedure={child} onOpen={onOpen} nested />)}
        </div>
      )}
    </article>
  )
}

function Chapter({ chapter, onOpen }) {
  return (
    <section className={`chapter accent-${chapter.accent}`} id={chapter.id}>
      <header className="chapter-header">
        <div className="chapter-number">{chapter.number}</div>
        <div>
          <p className="chapter-eyebrow">{chapter.eyebrow}</p>
          <h2>{chapter.title}</h2>
        </div>
      </header>
      {chapter.note && <p className="chapter-note"><span>使用前确认</span>{chapter.note}</p>}
      <div className={`entry-block ${chapter.entry.length === 3 ? 'has-three-images' : ''}`}>
        <div className="entry-copy">
          <span>入口</span>
          <h3>从首页进入{chapter.title}</h3>
        </div>
        <div className="entry-images">
          {chapter.entry.map((item, index) => <Screenshot key={item.src} item={item} index={index} onOpen={onOpen} />)}
        </div>
      </div>
      {chapter.procedures.map((procedure) => <Procedure key={procedure.id} procedure={procedure} onOpen={onOpen} />)}
    </section>
  )
}

function Placeholder({ type, onFleet }) {
  const isLanguage = type === 'language'
  return (
    <main className="placeholder-page" id="main-content">
      <div className="placeholder-visual"><span>{isLanguage ? '译' : 'D'}</span></div>
      <p className="section-kicker">Content status</p>
      <h1>{isLanguage ? '内容待翻译' : '司机端资料待补充'}</h1>
      <p>{isLanguage ? 'English / Español 教程尚未提供。目前仅展示中文原始内容，不会自动生成或补写译文。' : '当前项目已预留司机端教程入口。收到司机端资料后，可按相同结构补充章节、步骤与截图。'}</p>
      {isLanguage && <button className="primary-button" onClick={onFleet}>返回中文内容 <Icon name="arrow" size={18} /></button>}
    </main>
  )
}

function Lightbox({ image, onClose }) {
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
      <button className="lightbox-close" onClick={onClose} aria-label="关闭大图"><Icon name="close" /></button>
      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <img src={image.src} alt={image.alt} />
        <p>{image.alt}</p>
      </div>
    </div>
  )
}

function TutorialHome({ onOpen }) {
  return (
    <main className="tutorial-main" id="main-content">
      <span id="top" className="top-anchor" />
      {chapters.map((chapter) => <Chapter key={chapter.id} chapter={chapter} onOpen={onOpen} />)}
      <footer className="footer"><span className="brand-mark">YW</span><p>YW Driver App Helper · 纯前端静态教程</p><a href="#top">返回顶部 ↑</a></footer>
    </main>
  )
}

export default function App() {
  const [endpoint, setEndpoint] = useState('fleet')
  const [language, setLanguage] = useState('zh')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <>
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <Header endpoint={endpoint} setEndpoint={setEndpoint} language={language} setLanguage={setLanguage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {language === 'zh' && <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} endpoint={endpoint} setEndpoint={setEndpoint} />}
      {mobileOpen && <button className="sidebar-backdrop" onClick={() => setMobileOpen(false)} aria-label="关闭目录" />}
      {language !== 'zh' ? (
        <Placeholder type="language" onFleet={() => setLanguage('zh')} />
      ) : endpoint === 'driver' ? (
        <Placeholder type="driver" />
      ) : (
        <TutorialHome onOpen={setLightboxImage} />
      )}
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  )
}
