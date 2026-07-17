'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.zosiii.moments'
const appStoreUrl = 'https://apps.apple.com/cz/app/momnts/id6752495827'

function StoreButtons({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`store-buttons${inverse ? ' store-buttons--inverse' : ''}`}>
      <a href={googlePlayUrl} className="store-badge-link" target="_blank" rel="noopener noreferrer" aria-label="Stáhnout MOMNTS na Google Play">
        <Image src="/google-play-badge.svg" alt="Stáhnout na Google Play" width={169} height={50} />
      </a>
      <a href={appStoreUrl} className="store-badge-link" target="_blank" rel="noopener noreferrer" aria-label="Stáhnout MOMNTS v App Store">
        <Image src="/app-store-badge.svg" alt="Stáhnout v App Store" width={169} height={50} />
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
          <div className="hero-aurora" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">Jedna otázka každý večer</p>
              <h1>Byli jste dnes <em>spolu<span className="mobile-break"><br /></span> doopravdy?</em></h1>
              <p className="hero-lead">
                Nejde jen být spolu. Hluboký čas je chvíle s plnou pozorností.
                Večer ji zachytíte, ráno na ni naváže osobní zpětná vazba.
              </p>
              <StoreButtons />
              <p className="hero-note"><span /> Dnešní reflexe a jedna aktuální karta jsou zdarma.</p>
              <div className="hero-trust">
                <span>Od autorů <a href="https://jakodriv.cz" target="_blank" rel="noopener noreferrer">Jako Dřív.cz</a></span>
                <span>Premium <strong>29 Kč / měsíc</strong></span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Ukázka aplikace MOMNTS">
              <div className="halo halo--one" aria-hidden="true" />
              <div className="halo halo--two" aria-hidden="true" />
              <div className="halo halo--three" aria-hidden="true" />
              <div className="hero-question" aria-hidden="true">
                <span>Dnešní moment</span>
                <strong>Všimnout si.<br />Zachytit.<br />Navázat.</strong>
              </div>
              <div className="phone-shell phone-shell--main">
                <div className="phone-speaker" />
                <div className="phone-screen">
                  <Image src="/ui-home.png" alt="Domovská obrazovka aplikace MOMNTS" width={1080} height={2400} priority />
                </div>
              </div>
              <div className="phone-shell phone-shell--second" aria-hidden="true">
                <div className="phone-screen">
                  <Image src="/ui-moments.png" alt="" width={1080} height={2400} priority />
                </div>
              </div>
              <div className="floating-card floating-card--evening">
                <span className="floating-index">01</span>
                <span><strong>Večer</strong><small>Zachytíte den</small></span>
              </div>
              <div className="floating-card floating-card--morning">
                <span className="floating-index">02</span>
                <span><strong>Ráno</strong><small>Dostanete další krok</small></span>
              </div>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true"><span /> Podívejte se dovnitř</div>
        </section>

        <section className="proof-strip" aria-label="Jak MOMNTS funguje">
          <div className="container proof-grid">
            <div><strong>Večer</strong><span>odpověď a pár vět</span></div>
            <div><strong>MOMNTS</strong><span>propojí vaše zápisy</span></div>
            <div><strong>Ráno</strong><span>jedna konkrétní zpětná vazba</span></div>
          </div>
        </section>

        <section className="section ui-showcase">
          <div className="container">
            <div className="showcase-heading reveal">
              <div>
                <p className="eyebrow">Skutečná aplikace</p>
                <h2>Klidný prostor.<br />Žádný další rodičovský hluk.</h2>
              </div>
              <p>Jednoduchý večerní check-in, osobní karty a přehled, ke kterému se vracíte bez pocitu hodnocení.</p>
            </div>

            <div className="screen-gallery">
              <article className="screen-story screen-story--home reveal">
                <div className="screen-frame">
                  <Image src="/ui-home.png" alt="Večerní reflexe a týdenní přehled v MOMNTS" width={1080} height={2400} />
                </div>
                <span>01 · Zachytit den</span>
                <h3>Jedna otázka. Tolik prostoru, kolik potřebujete.</h3>
              </article>
              <article className="screen-story screen-story--moments reveal reveal-delay-1">
                <div className="screen-frame">
                  <Image src="/ui-moments.png" alt="Osobní MOMNTS karty" width={1080} height={2400} />
                </div>
                <span>02 · Uvidět souvislosti</span>
                <h3>Zpětná vazba vychází z toho, co jste opravdu prožili.</h3>
              </article>
              <article className="screen-story screen-story--calendar reveal reveal-delay-2">
                <div className="screen-frame">
                  <Image src="/ui-calendar.png" alt="Kalendář a přehled reflexí v MOMNTS" width={1080} height={2400} />
                </div>
                <span>03 · Vnímat rytmus</span>
                <h3>Pokrok bez tlaku na dokonalou sérii.</h3>
              </article>
            </div>
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
                  <p>Zachytíte, jestli jste spolu měli hluboký čas — chvíli s plnou pozorností.</p>
                </div>
                <div className="mini-reflection" aria-hidden="true">
                  <span>Byli jste dnes spolu doopravdy?</span>
                  <div><b>✓ Ano</b><b>– Možná</b><b>× Ne</b></div>
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
              <p className="eyebrow">Zdarma nebo Premium</p>
              <h2>Začněte zdarma. Historii si odemknete za&nbsp;29&nbsp;Kč.</h2>
              <p className="premium-lead">
                Základní MOMNTS je schválně štědrý. Každý den dostanete užitečný tip i aktuální zpětnou vazbu.
                Premium přidá historii, takže se ke všem kartám můžete vracet a vnímat souvislosti v čase.
              </p>
              <ul className="benefit-list">
                <li><CheckIcon /><span><strong>Personalizované denní tipy</strong>Co můžete dělat s dětmi podle jejich věku a vašich preferencí.</span></li>
                <li><CheckIcon /><span><strong>Denní zpětná vazba</strong>Jedna konkrétní karta navázaná na vaše poznámky ze skutečného dne.</span></li>
                <li><CheckIcon /><span><strong>Historie v Premium</strong>Všechny karty zpětně, jejich hodnocení a poslech jako audio.</span></li>
              </ul>
              <Link href="#stahnout" className="text-link">Začít zdarma <span>→</span></Link>
            </div>

            <div className="pricing-card reveal reveal-delay-1">
              <div className="pricing-head">
                <span>MOMNTS Premium</span>
                <div><strong>29 Kč</strong><small>/ měsíc</small></div>
                <p>Méně než jedna káva za celou historii vašich MOMNTS karet.</p>
              </div>
              <div className="plan plan--free">
                <div className="plan-title"><span>Zdarma</span><strong>0 Kč</strong></div>
                <ul>
                  <li><CheckIcon />Denní reflexe a poznámky</li>
                  <li><CheckIcon />Tipy podle věku a preferencí</li>
                  <li><CheckIcon />Jedna aktuální zpětná vazba</li>
                </ul>
              </div>
              <div className="plan plan--premium">
                <div className="plan-title"><span>Premium</span><strong>29 Kč / měsíc</strong></div>
                <ul>
                  <li><CheckIcon />Všechno z verze zdarma</li>
                  <li><CheckIcon />Historie všech zpětných vazeb</li>
                  <li><CheckIcon />Hodnocení a audio karet</li>
                </ul>
                <Link href="#stahnout" className="pricing-cta">Odemknout celou historii</Link>
                <div className="pricing-note">Přesnou cenu a podmínky uvidíte před potvrzením v App Store nebo Google Play.</div>
              </div>
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
          </div>
          <p className="copyright">© 2026 MOMNTS. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </>
  )
}
