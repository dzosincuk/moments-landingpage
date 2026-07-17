'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.zosiii.moments'
const appStoreUrl = 'https://apps.apple.com/cz/app/momnts/id6752495827'

function StoreButtons({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`store-buttons${inverse ? ' store-buttons--inverse' : ''}`}>
      <a href={googlePlayUrl} className="store-button" target="_blank" rel="noopener noreferrer" aria-label="Stáhnout MOMNTS na Google Play">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924L12.073 11.73.258 22.544C-.088 22.202 0 21.607 0 21.607V1.862S-.087 1.266.258.924zm.515-.47L12.891 6.87 9.827 9.914 1.852.454zm0 23.092 7.975-6.016 3.064 3.044-11.039 2.972z" /></svg>
        <span><small>Stáhnout na</small><strong>Google Play</strong></span>
      </a>
      <a href={appStoreUrl} className="store-button" target="_blank" rel="noopener noreferrer" aria-label="Stáhnout MOMNTS v App Store">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
        <span><small>Stáhnout v</small><strong>App Store</strong></span>
      </a>
    </div>
  )
}

function CheckIcon() {
  return (
    <span className="check-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6" /></svg>
    </span>
  )
}

export default function Home() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )
    reveals.forEach((element) => observer.observe(element))

    const handleScroll = () => navRef.current?.classList.toggle('scrolled', window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav ref={navRef} className="navbar" aria-label="Hlavní navigace">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="MOMNTS – domů">
            <Image src="/logo.png" alt="" width={42} height={42} priority />
            <span>MOMNTS</span>
          </Link>
          <div className="nav-links">
            <Link href="#jak-to-funguje">Jak funguje</Link>
            <Link href="#premium">Premium</Link>
            <Link href="#soukromi">Soukromí</Link>
          </div>
          <Link href="#stahnout" className="nav-cta">Stáhnout zdarma</Link>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="paper-noise" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">Klidný denní rytmus pro rodiče</p>
              <h1>Každý den jeden jasný krok <em>blíž k&nbsp;dětem.</em></h1>
              <p className="hero-lead">
                Večer zachytíte, co se opravdu stalo. MOMNTS propojí vaše odpovědi a poznámky
                a ráno nabídne konkrétní doporučení pro vaši rodinu.
              </p>
              <StoreButtons />
              <p className="hero-note"><span /> Denní reflexe zůstává zdarma. Stačí dvě minuty.</p>
            </div>

            <div className="hero-visual" aria-label="Ukázka aplikace MOMNTS">
              <div className="halo halo--one" aria-hidden="true" />
              <div className="halo halo--two" aria-hidden="true" />
              <Image className="hero-illustration" src="/illustration-teddy.png" alt="" width={1280} height={1280} priority />
              <div className="phone-shell">
                <div className="phone-speaker" />
                <div className="phone-screen">
                  <Image src="/app-home.png" alt="Domovská obrazovka aplikace MOMNTS" width={850} height={2560} priority />
                </div>
              </div>
              <div className="floating-card floating-card--tip">
                <span className="floating-label">Dnešní tip</span>
                <strong>Společná ochutnávka tří chutí</strong>
                <span>Podle vaší včerejší reflexe</span>
              </div>
              <div className="floating-card floating-card--progress">
                <span className="progress-ring">75</span>
                <span><strong>Tento týden</strong><small>3 ze 4 reflexí</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Hlavní výhody">
          <div className="container proof-grid">
            <div><strong>2 min</strong><span>krátká večerní reflexe</span></div>
            <div><strong>1 krok</strong><span>osobní doporučení na den</span></div>
            <div><strong>iOS + Android</strong><span>stejný klidný zážitek</span></div>
          </div>
        </section>

        <section id="jak-to-funguje" className="section ritual-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Každodenní rituál</p>
              <h2>Méně analyzování.<br />Více všímavosti.</h2>
              <p>MOMNTS vás nezahltí dalšími úkoly. Pomůže zachytit podstatné a druhý den na to navázat.</p>
            </div>

            <div className="steps-grid">
              <article className="step reveal">
                <span className="step-number">01</span>
                <div className="step-copy">
                  <h3>Zastavíte se</h3>
                  <p>Jednou otázkou zhodnotíte den a krátce si zapíšete, co chcete uchovat.</p>
                </div>
                <div className="mini-reflection" aria-hidden="true">
                  <span>Byli jste dnes spolu doopravdy?</span>
                  <div><b>✓ Ano</b><b>– Skoro</b><b>× Ne</b></div>
                </div>
              </article>

              <article className="step reveal reveal-delay-1">
                <span className="step-number">02</span>
                <div className="step-copy">
                  <h3>MOMNTS najde souvislosti</h3>
                  <p>AI propojí odpovědi a poznámky napříč dny. Všímá si toho, co se daří i co se opakuje.</p>
                </div>
                <Image className="step-illustration" src="/illustration-baking.png" alt="Linková ilustrace společného pečení" width={1280} height={1280} />
              </article>

              <article className="step reveal reveal-delay-2">
                <span className="step-number">03</span>
                <div className="step-copy">
                  <h3>Dostanete další krok</h3>
                  <p>Každé ráno jedno malé, konkrétní doporučení vycházející z vašeho skutečného dne.</p>
                </div>
                <div className="mini-tip" aria-hidden="true">
                  <span>Dnešní doporučení</span>
                  <strong>Vraťte se k chvíli, kdy doma zavládl klid.</strong>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="premium" className="section premium-section">
          <div className="container premium-grid">
            <div className="premium-copy reveal">
              <p className="eyebrow">MOMNTS Premium</p>
              <h2>Ne obecné rady. Doporučení z&nbsp;vašeho skutečného dne.</h2>
              <p className="premium-lead">
                Nemusíte zpětně pročítat poznámky ani sami hledat vzorce. MOMNTS udělá souvislosti viditelné
                a promění je v jeden proveditelný krok.
              </p>
              <ul className="benefit-list">
                <li><CheckIcon /><span><strong>Osobní doporučení každý den</strong>Vytvořené z vašich odpovědí a poznámek.</span></li>
                <li><CheckIcon /><span><strong>Souvislosti napříč záznamy</strong>Všimnete si opakujících se situací i drobných posunů.</span></li>
                <li><CheckIcon /><span><strong>Historie a týdenní přehled</strong>Ke kartám se můžete vrátit a sledovat vývoj v čase.</span></li>
              </ul>
              <Link href="#stahnout" className="text-link">Vyzkoušet všechny funkce <span>→</span></Link>
            </div>

            <div className="recommendation-wrap reveal reveal-delay-1">
              <div className="recommendation-halo" aria-hidden="true" />
              <article className="recommendation-card">
                <div className="recommendation-topline">
                  <span>Dnešní osobní karta</span>
                  <span>4 min čtení</span>
                </div>
                <h3>Klid, který už doma umíte vytvořit</h3>
                <p>
                  Včera jste si všimli, že společné chystání večeře zklidnilo napjatou chvíli.
                  Dnes na tenhle fungující moment krátce navažte.
                </p>
                <div className="recommendation-action">
                  <span>Co zkusit dnes</span>
                  <strong>Dejte dítěti jednu malou roli při přípravě jídla.</strong>
                </div>
                <Image src="/illustration-baking.png" alt="Jemná linková ilustrace rodiče a dítěte při pečení" width={1280} height={1280} />
              </article>
            </div>
          </div>
        </section>

        <section className="section progress-section">
          <div className="container progress-grid">
            <div className="calendar-card reveal" aria-label="Ukázka týdenního přehledu">
              <div className="calendar-head">
                <span>Posledních 7 týdnů</span>
                <strong>75 %</strong>
              </div>
              <div className="week-rings">
                {[25, 50, 75, 50, 100, 75, 75].map((value, index) => (
                  <div key={index} className={index === 6 ? 'current' : ''}>
                    <span style={{ '--progress': `${value * 3.6}deg` } as React.CSSProperties}><b>{value}</b></span>
                    <small>T{23 + index}{index === 6 ? '*' : ''}</small>
                  </div>
                ))}
              </div>
              <div className="calendar-note"><span /> Nejde o dokonalou sérii. Jde o návrat k tomu, na čem vám záleží.</div>
            </div>

            <div className="progress-copy reveal reveal-delay-1">
              <p className="eyebrow">Pokrok bez tlaku</p>
              <h2>Uvidíte rytmus, ne skóre dobrého rodiče.</h2>
              <p>Přehled ukazuje aktuální týden v kontextu těch předchozích. Bez soutěžení a bez pocitu selhání, když některý den vynecháte.</p>
              <div className="quiet-quote">„Malá pravidelná zastavení mění způsob, jakým si všímáme společných chvil.“</div>
            </div>
          </div>
        </section>

        <section id="soukromi" className="section privacy-teaser">
          <div className="container privacy-teaser-inner reveal">
            <div className="privacy-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></svg>
            </div>
            <div>
              <p className="eyebrow">Vaše rodinné momenty</p>
              <h2>Zůstávají vaše.</h2>
            </div>
            <p>Hlasové nahrávky se po přepisu neukládají. Data můžete kdykoli upravit nebo smazat.</p>
            <Link href="/privacy" className="outline-button">Jak chráníme soukromí</Link>
          </div>
        </section>

        <section id="stahnout" className="final-cta">
          <div className="final-orbit final-orbit--one" aria-hidden="true" />
          <div className="final-orbit final-orbit--two" aria-hidden="true" />
          <Image className="final-illustration" src="/illustration-fort.png" alt="" width={1280} height={1280} />
          <div className="container final-content reveal">
            <p className="eyebrow">Začněte dnes večer</p>
            <h2>Dvě minuty pro chvíle,<br />na kterých záleží.</h2>
            <p>První reflexi můžete zaznamenat zdarma. Bez tlaku, vlastním tempem.</p>
            <StoreButtons inverse />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="brand footer-brand">
              <Image src="/logo.png" alt="" width={38} height={38} />
              <span>MOMNTS</span>
            </Link>
            <p>Od rodičů pro rodiče.</p>
          </div>
          <div className="footer-links">
            <Link href="/privacy">Ochrana soukromí</Link>
            <Link href="/delete-account">Smazat účet</Link>
            <a href="mailto:momnts@zosiii.com">Kontakt</a>
            <a href="https://www.z3.studio" target="_blank" rel="noopener noreferrer">Z3.studio</a>
          </div>
          <p className="copyright">© 2026 MOMNTS. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </>
  )
}
