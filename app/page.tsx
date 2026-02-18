'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Home() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Scroll-reveal animation
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    reveals.forEach((el) => observer.observe(el))

    // Sticky navbar
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 60)
      }
      const btn = document.getElementById('backToTop')
      if (btn) {
        btn.classList.toggle('visible', window.scrollY > 400)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Shared SVG gradient definitions */}
      <svg width="0" height="0" style={{position:'absolute'}}>
        <defs>
          <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ecdc4"/>
            <stop offset="100%" stopColor="#667eea"/>
          </linearGradient>
          <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b35"/>
            <stop offset="100%" stopColor="#ec4899"/>
          </linearGradient>
        </defs>
      </svg>

      {/* ═══ STICKY NAVBAR ═══ */}
      <nav ref={navRef} className="navbar">
        <div className="container">
          <Link href="/" className="nav-brand">
            <Image src="/logo.png" alt="MOMNTS" width={36} height={36} />
            <span>MOMNTS</span>
          </Link>
          <Link href="#download" className="nav-cta">
            Stáhnout zdarma
          </Link>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{display:'inline',verticalAlign:'-2px',marginRight:'4px'}}><path d="M12 22c1-3 4-6 4-10a4 4 0 0 0-8 0c0 4 3 7 4 10z" stroke="url(#grad-teal)" strokeWidth="2" fill="none"/><path d="M12 2v6" stroke="url(#grad-teal)" strokeWidth="2" strokeLinecap="round"/></svg> Od rodičů pro rodiče · 2 min denně</div>

          <h1>Každý den je<br />příležitost být<br />lepším rodičem</h1>
          <p className="description">
            Mindful parenting s&nbsp;denní reflexí. Zapisujte si&nbsp;své momenty,
            získejte AI tipy a&nbsp;budujte hlubší vztah se&nbsp;svými dětmi.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeInUp 0.8s ease 0.4s both' }}>
            <Link href="#download" className="cta-button orange">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{display:'inline',verticalAlign:'-3px',marginRight:'6px'}}><path d="M12 3l1.5 3.2 3.5.5-2.5 2.5.6 3.5L12 11l-3.1 1.7.6-3.5-2.5-2.5 3.5-.5z" fill="white"/></svg>
              Začít reflektovat zdarma
            </Link>
          </div>

          <div className="download-buttons" style={{ marginTop: '20px', animation: 'fadeInUp 0.8s ease 0.5s both' }}>
            <a href="https://play.google.com/store/apps/details?id=com.zosiii.moments" className="download-btn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924L12.073 11.73.258 22.544c-.346-.342-.258-.937-.258-.937V1.862s-.087-.596.258-.938zm.515-.47L12.891 6.87l-3.064 3.044L1.852.454zm0 23.092l7.975-6.016 3.064 3.044L1.852 23.546z"/></svg>
              <span className="dl-text"><span className="dl-small">Stáhnout na</span><span className="dl-store">Google Play</span></span>
            </a>
            <a href="https://apps.apple.com/cz/app/momnts/id6752495827" className="download-btn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span className="dl-text"><span className="dl-small">Stáhnout na</span><span className="dl-store">App Store</span></span>
            </a>
          </div>

          <div className="preview">
            <div className="ui-card">
              <h3 style={{ marginBottom: '14px', fontSize: '16px', fontWeight: 700 }}>Měl(a) jste dnes hluboký čas s&nbsp;dítětem?</h3>
              <div className="pill-group">
                <button className="pill primary">✓ Ano</button>
                <button className="pill">~ Možná trochu</button>
                <button className="pill">✕ Ne</button>
              </div>
            </div>
            <div className="idea-card">
              <div className="idea-heading"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{display:'inline',verticalAlign:'-3px',marginRight:'4px'}}><path d="M9 21h6M12 3a6 6 0 0 1 4 10.5V17H8v-3.5A6 6 0 0 1 12 3z" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Nápad na dnešek</div>
              <div className="idea-title">Děti kolem 4 let často touží po pozornosti, kterou jinak dostává mladší sourozenec.</div>
              <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.9 }}>Zkuste dát staršímu dítěti malou roli – například ať vybere pyžamko pro dvouletého. Cítí důležitost místo rivality.</p>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z" fill="#faf8f4"/></svg>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid reveal">
            <div className="stat-item">
              <div className="stat-number">2 min</div>
              <div className="stat-label">Denní reflexe stačí</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">AI</div>
              <div className="stat-label">Personalizované tipy</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Soukromí vašich dat</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PSYCHOLOGY SECTION ═══ */}
      <section id="psychology" className="section psychology-section">
        <div className="container">
          <h2 className="reveal">Proč denní reflexe mění rodičovství?</h2>
          <p className="subtitle reveal reveal-delay-1">
            Vědecky podložené benefity mindful parentingu pro vás i&nbsp;vaše děti
          </p>

          <div className="psychology-grid">
            <article className="psychology-card psychology-card--emotions reveal reveal-delay-1">
              <div className="photo-header"></div>
              <div className="grain"></div>
              <div className="content">
                <div className="eyebrow" style={{color: '#E6A373'}}>
                  <span className="dot"></span>
                  Emoční regulace
                </div>
                <h3>Když se potkáme očima, emoce se ztiší</h3>
                <p>Denní reflexe posiluje vaši schopnost rozpoznat a&nbsp;regulovat pocity. Děti pak rychleji přebírají klid a&nbsp;jistotu od vás.</p>
                <div className="quote">&ldquo;Když rodiče lépe regulují své emoce, vytváří bezpečnější prostor pro emoční vývoj dětí.&rdquo;</div>
              </div>
            </article>

            <article className="psychology-card psychology-card--presence reveal reveal-delay-2">
              <div className="photo-side"></div>
              <div className="content">
                <div className="eyebrow" style={{color: '#83C5BE'}}>
                  <span className="dot"></span>
                  Vědomé rodičovství
                </div>
                <h3>Přítomnost je největší dar, který můžete dát</h3>
                <p>Pravidelná reflexe vás učí být v&nbsp;momentu s&nbsp;dětmi. Snižuje rodičovský stres a&nbsp;zlepšuje kvalitu vztahu.</p>
                <div className="quote">&ldquo;Minuta opravdové pozornosti má větší hodnotu než hodina na autopilota.&rdquo;</div>
              </div>
            </article>

            <article className="psychology-card psychology-card--habits reveal reveal-delay-3">
              <div className="photo-header"></div>
              <div className="grain"></div>
              <div className="content">
                <div className="eyebrow" style={{color: '#D4A574'}}>
                  <span className="dot"></span>
                  Pozitivní vzorce
                </div>
                <h3>Co sledujeme, to roste</h3>
                <p>Zachytávání drobných úspěchů pomáhá budovat návyky radosti, trpělivosti a&nbsp;sounáležitosti. Neuroplasticita pracuje s&nbsp;vámi.</p>
                <div className="quote">&ldquo;Zaměření na pozitivní momenty mění návyk – a&nbsp;mění i&nbsp;dětství.&rdquo;</div>
              </div>
            </article>
          </div>

          <div className="reveal reveal-delay-4" style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="#download" className="cta-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{display:'inline',verticalAlign:'-2px',marginRight:'6px'}}><rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="18" x2="12" y2="18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Stáhnout aplikaci
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PARALLAX ═══ */}
      <section className="parallax-section">
        <div className="parallax-content">
          <h2>Každý moment počítá</h2>
          <p>
            Rodičovství není o&nbsp;dokonalosti, ale o&nbsp;přítomnosti.
            Momnts vám pomůže najít radost v&nbsp;každodenních okamžicích.
          </p>
        </div>
      </section>

      {/* ═══ ACTIVITY SUGGESTIONS ═══ */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="reveal">Nápad na dnešek</h2>
          <p className="subtitle reveal reveal-delay-1">Kreativní aktivity inspirované vaší reflexí</p>
          <div className="features-grid">
            <div className="activity-card reveal reveal-delay-1">
              <div className="activity-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 0 0-7 7c0 3.87 7 13 7 13s7-9.13 7-13a7 7 0 0 0-7-7z" stroke="white" strokeWidth="2"/><circle cx="12" cy="9" r="2.5" stroke="white" strokeWidth="2"/></svg></div>
              <h3>Kreativní tvoření</h3>
              <p>Vytvořte spolu něco jednoduchého z&nbsp;toho, co máte doma. Koláž z&nbsp;časopisů, malování prsty nebo stavění z&nbsp;krabic.</p>
            </div>
            <div className="activity-card reveal reveal-delay-2">
              <div className="activity-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M17 8c0-4-3.5-6-5-6S7 4 7 8c-3 0-5 2-5 5s2 5 5 5h10c3 0 5-2 5-5s-2-5-5-5z" stroke="white" strokeWidth="2" strokeLinejoin="round"/><path d="M12 18v4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></div>
              <h3>Objevování přírody</h3>
              <p>Vydejte se na procházku a&nbsp;hledejte zajímavé kameny, listy nebo květiny. Vytvořte si přírodní sbírku.</p>
            </div>
            <div className="activity-card reveal reveal-delay-3">
              <div className="activity-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h3>Společné čtení</h3>
              <p>Přečtěte si pohádku a&nbsp;pak si společně vymyslete vlastní konec. Nebo si vyprávějte příběhy o&nbsp;tom, co jste dnes zažili.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="reveal">Jak Momnts funguje</h2>
          <p className="subtitle reveal reveal-delay-1">Jednoduchý nástroj pro každodenní růst ve&nbsp;vašem rodičovství</p>
          <div className="features-grid">
            <div className="feature-card reveal reveal-delay-1">
              <span className="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="url(#grad-teal)" strokeWidth="2"/><path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="url(#grad-teal)" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="19" x2="12" y2="23" stroke="url(#grad-teal)" strokeWidth="2" strokeLinecap="round"/></svg></span>
              <h3>Hlasové nebo textové reflexe</h3>
              <p>Rychle si nahrajte nebo napište, jak se vám dařilo. Hlasové poznámky se automaticky přepíší na text.</p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <span className="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M17 18a5 5 0 0 0-10 0" stroke="url(#grad-orange)" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="13" r="4" stroke="url(#grad-orange)" strokeWidth="2"/><path d="M2 12h2M20 12h2M12 2v2" stroke="url(#grad-orange)" strokeWidth="2" strokeLinecap="round"/></svg></span>
              <h3>Ranní inspirace</h3>
              <p>Každé ráno dostanete 2 personalizované karty s&nbsp;tipy. AI analyzuje vaše vzorce a&nbsp;navrhuje konkrétní strategie.</p>
            </div>
            <div className="feature-card reveal reveal-delay-3">
              <span className="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="url(#grad-teal)" strokeWidth="2.5" strokeLinecap="round"/></svg></span>
              <h3>Sledování pokroku</h3>
              <p>Jednoduché denní hodnocení ukazuje trendy. Vidíte, co funguje a&nbsp;kde máte prostor pro růst.</p>
            </div>
          </div>
          <div className="reveal reveal-delay-4" style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="#download" className="cta-button"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{display:'inline',verticalAlign:'-2px',marginRight:'6px'}}><rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="18" x2="12" y2="18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> Stáhnout aplikaci</Link>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="reveal">Pro rodiče, kteří chtějí růst</h2>
          <p className="subtitle reveal reveal-delay-1">Momnts není jen aplikace – je to váš denní společník na&nbsp;cestě k&nbsp;lepšímu rodičovství.</p>
          <div className="features-grid">
            <div className="feature-card reveal reveal-delay-1">
              <span className="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" stroke="url(#grad-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              <h3>Pro rodiče malých dětí</h3>
              <p>Zvládáte náročné období? Momnts vám pomůže najít radost i&nbsp;v&nbsp;těžkých dnech a&nbsp;budovat trpělivost.</p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <span className="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.3L12 16.7l-6.2 4.5 2.4-7.3L2 9.4h7.6z" stroke="url(#grad-teal)" strokeWidth="2" strokeLinejoin="round"/></svg></span>
              <h3>Pro rodiče školáků</h3>
              <p>Navigujte výzvy školního věku s&nbsp;větší jistotou. Tipy na komunikaci, hranice a&nbsp;podporu samostatnosti.</p>
            </div>
            <div className="feature-card reveal reveal-delay-3">
              <span className="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="url(#grad-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="url(#grad-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              <h3>Pro celou rodinu</h3>
              <p>Budujte rodinné tradice a&nbsp;posilujte vztahy. Prostředí plné lásky, porozumění a&nbsp;vzájemné podpory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRIVACY ═══ */}
      <section className="section">
        <div className="container">
          <h2 className="reveal">Vaše soukromí je priorita</h2>
          <p className="subtitle reveal reveal-delay-1">Transparentní přístup k&nbsp;ochraně vašich dat</p>
          <div className="features-grid">
            <div className="feature-card reveal reveal-delay-1">
              <span className="feature-icon"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="url(#grad-teal)" strokeWidth="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="url(#grad-teal)" strokeWidth="2" strokeLinecap="round"/></svg></span>
              <h3>Žádné ukládání hlasu</h3>
              <p>Hlasové nahrávky se okamžitě přepíší na text a&nbsp;poté se smažou. Žádné audio na serverech.</p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <span className="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="url(#grad-teal)" strokeWidth="2" strokeLinejoin="round"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="url(#grad-teal)" strokeWidth="2" strokeLinecap="round"/></svg></span>
              <h3>Pouze potřebná data</h3>
              <p>Ukládáme jen textové poznámky, hodnocení a&nbsp;základní informace o&nbsp;dětech pro personalizaci.</p>
            </div>
            <div className="feature-card reveal reveal-delay-3">
              <span className="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="url(#grad-teal)" strokeWidth="2" strokeLinejoin="round"/></svg></span>
              <h3>Vaše kontrola</h3>
              <p>Kdykoli smazat, stáhnout nebo upravit svá data. Anonymní účty se automaticky mažou po 7 dnech.</p>
            </div>
          </div>
          <div className="reveal reveal-delay-4" style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/privacy" className="cta-button"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{display:'inline',verticalAlign:'-2px',marginRight:'6px'}}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2"/><rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2"/></svg> Kompletní zásady soukromí</Link>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section id="download" className="section section-dark">
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="reveal">Začněte svou cestu<br />k&nbsp;lepšímu rodičovství</h2>
          <p className="subtitle reveal reveal-delay-1">
            Stačí pár minut reflexe večer a&nbsp;ráno dostanete inspiraci na celý den.
          </p>
          <div className="reveal reveal-delay-2">
            <Link href="https://play.google.com/store/apps/details?id=com.zosiii.moments" className="cta-button orange" style={{ marginRight: '12px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{display:'inline',verticalAlign:'-3px',marginRight:'6px'}}><path d="M12 3l1.5 3.2 3.5.5-2.5 2.5.6 3.5L12 11l-3.1 1.7.6-3.5-2.5-2.5 3.5-.5z" fill="white"/></svg>
              Stáhnout zdarma
            </Link>
          </div>
          <div className="download-buttons reveal reveal-delay-3">
            <a href="https://play.google.com/store/apps/details?id=com.zosiii.moments" className="download-btn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924L12.073 11.73.258 22.544c-.346-.342-.258-.937-.258-.937V1.862s-.087-.596.258-.938zm.515-.47L12.891 6.87l-3.064 3.044L1.852.454zm0 23.092l7.975-6.016 3.064 3.044L1.852 23.546z"/></svg>
              <span className="dl-text"><span className="dl-small">Stáhnout na</span><span className="dl-store">Google Play</span></span>
            </a>
            <a href="https://apps.apple.com/cz/app/momnts/id6752495827" className="download-btn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span className="dl-text"><span className="dl-small">Stáhnout na</span><span className="dl-store">App Store</span></span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="container">
          <p style={{marginBottom: '1rem'}}>
            <Link href="/privacy">Zásady ochrany soukromí</Link>
            {' • '}
            <a href="mailto:momnts@zosiii.com">Kontakt</a>
          </p>

          <div style={{marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
            <p style={{fontSize: '13px', opacity: 0.5, marginBottom: '8px'}}>
              Za MOMNTS stojí <strong style={{color: 'rgba(255,255,255,0.8)'}}>ZOSIII</strong>
            </p>
            <p style={{fontSize: '13px'}}>
              <a href="https://www.jakodriv.cz" target="_blank" rel="noopener noreferrer">Jako dřív</a>
              {' • '}
              <a href="https://www.z3.studio" target="_blank" rel="noopener noreferrer">Z3.studio</a>
              {' • '}
              <a href="https://www.pouspani.cz" target="_blank" rel="noopener noreferrer">Podcast Po uspání</a>
            </p>
          </div>

          <p style={{marginTop: '2rem', fontSize: '12px', opacity: 0.35}}>
            &copy; 2025 Momnts. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>

      {/* Back to top */}
      <button
        id="backToTop"
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Zpět nahoru"
      >
        ↑
      </button>
    </>
  )
}
