'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const backToTopButton = document.getElementById('backToTop')

    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTopButton?.classList.add('visible')
      } else {
        backToTopButton?.classList.remove('visible')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="brand-bar">
            <Image
              src="/logo.png"
              alt="MOMNTS Logo"
              width={56}
              height={56}
              className="brand-logo"
            />
            <span className="brand-title">MOMNTS</span>
          </div>

          <h1>Každý den je příležitost být lepším rodičem</h1>
          <p className="description">
            Mindful parenting s denní reflexí. Sledujte své momenty,
            získejte personalizované tipy a budujte hlubší vztah se svými dětmi.
          </p>

          <div className="preview">
            <div className="ui-card">
              <h3 style={{marginBottom: '12px'}}>Měl(a) jste dnes hluboký čas s dítětem?</h3>
              <div className="pill-group">
                <button className="pill primary">✓ Ano</button>
                <button className="pill">😊 Možná trochu</button>
                <button className="pill">✕ Ne</button>
              </div>
            </div>

            <div className="idea-card">
              <div className="idea-heading">💡 Nápad na dnešek</div>
              <div className="idea-title">Kreativní tvoření s dětmi doma</div>
              <p>Vytvořte spolu něco jednoduchého z toho, co máte doma</p>
            </div>
          </div>

          <Link href="#psychology" className="cta-button orange">
            ✨ Začít reflektovat
          </Link>
        </div>
      </section>

      {/* Psychology Section */}
      <section id="psychology" className="section psychology-section">
        <div className="container">
          <h2>Proč denní reflexe mění rodičovství?</h2>
          <p className="subtitle">
            Vědecky podložené benefity mindful parentingu pro vás i vaše děti
          </p>

          <div className="psychology-grid">
            <div className="psychology-card">
              <h3>🧠 Emoční regulace</h3>
              <p>
                Denní reflexe posiluje vaši schopnost rozpoznat a regulovat emoce.
                Výzkumy ukazují, že rodiče praktikující mindfulness mají o 23%
                lepší emoční stabilitu a jejich děti vykazují méně problémového chování.
              </p>
              <div className="quote">
                "Když rodiče lépe regulují své emoce, vytváří bezpečnější prostředí pro emoční vývoj dětí."
              </div>
            </div>

            <div className="psychology-card">
              <h3>🎯 Vědomé rodičovství</h3>
              <p>
                Pravidelná reflexe vás učí být přítomní v momentech s dětmi.
                Studie prokázaly, že mindful parenting snižuje rodičovský stres
                o 30% a zlepšuje kvalitu vztahu mezi rodiči a dětmi.
              </p>
              <div className="quote">
                "Přítomnost je největší dar, který můžete svému dítěti dát."
              </div>
            </div>

            <div className="psychology-card">
              <h3>📈 Pozitivní vzorce</h3>
              <p>
                Sledování denních úspěchů pomáhá budovat pozitivní návyky.
                Neuroplasticita mozku umožňuje vytvářet nové neuronové dráhy,
                které podporují trpělivost, empatii a radost z rodičovství.
              </p>
              <div className="quote">
                "Co sledujeme, to roste. Zaměření na pozitivní momenty je mění na návyk."
              </div>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="#download" className="cta-button">
              📱 Stáhnout aplikaci
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="parallax-section">
        <div className="parallax-content">
          <h2>Každý moment počítá</h2>
          <p>
            Rodičovství není o dokonalosti, ale o přítomnosti.
            Momnts vám pomůže najít radost v každodenních okamžicích s vašimi dětmi.
          </p>
        </div>
      </section>

      {/* Activity Suggestions Section */}
      <section className="section">
        <div className="container">
          <h2>Nápad na dnešek</h2>
          <p className="subtitle">
            Kreativní aktivity inspirované vaší reflexí
          </p>
          <div className="features-grid">
            <div className="activity-card">
              <h3>🎨 Kreativní tvoření s dětmi doma</h3>
              <p>
                Vytvořte spolu něco jednoduchého z toho, co máte doma.
                Může to být koláž z časopisů, malování prsty nebo stavění z krabic.
              </p>
            </div>
            <div className="activity-card">
              <h3>🌳 Objevování přírody</h3>
              <p>
                Vydejte se na procházku a hledejte zajímavé kameny, listy nebo květiny.
                Můžete si vytvořit přírodní sbírku nebo herbář.
              </p>
            </div>
            <div className="activity-card">
              <h3>📚 Společné čtení a vyprávění</h3>
              <p>
                Přečtěte si pohádku a pak si společně vymyslete vlastní konec.
                Nebo si vyprávějte příběhy o tom, co jste dnes zažili.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <h2>Jak Momnts funguje</h2>
          <p className="subtitle">
            Jednoduchý nástroj pro každodenní růst ve vašem rodičovství
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎤</span>
              <h3>Hlasové nebo textové reflexe</h3>
              <p>
                Každý večer si rychle nahrajte nebo napište, jak se vám dařilo být trpělivým rodičem.
                Hlasové poznámky se automaticky přepíší na text - není potřeba diktovat, každý to má rád jinak.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌅</span>
              <h3>Ranní inspirace</h3>
              <p>
                Každé ráno dostanete personalizovanou kartu s tipy založenými na vašich reflexích.
                AI analyzuje vaše vzorce a navrhuje konkrétní strategie pro lepší den.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📊</span>
              <h3>Sledování pokroku</h3>
              <p>
                Jednoduché hodnocení "ano", "možná", "ne" vám ukáže trendy ve vašem rodičovství.
                Vidíte, co funguje a kde máte prostor pro růst.
              </p>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="#download" className="cta-button">
              📱 Stáhnout aplikaci
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-alt">
        <div className="container">
          <h2>Pro rodiče, kteří chtějí růst</h2>
          <p className="subtitle">
            Momnts není jen aplikace - je to váš denní společník na cestě k lepšímu rodičovství
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">👶</span>
              <h3>Pro rodiče malých dětí</h3>
              <p>
                Zvládáte náročné období? Momnts vám pomůže najít radost i v těžkých dnech
                a budovat trpělivost pro ty nejnáročnější momenty.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🧒</span>
              <h3>Pro rodiče školáků</h3>
              <p>
                Navigujte výzvy školního věku s větší jistotou. Získejte tipy na komunikaci,
                stanovování hranic a podporu samostatnosti vašich dětí.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">👨‍👩‍👧‍👦</span>
              <h3>Pro celou rodinu</h3>
              <p>
                Budujte rodinné tradice a posilujte vztahy. Momnts vám ukáže,
                jak vytvořit prostředí plné lásky, porozumění a vzájemné podpory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Summary */}
      <section className="section">
        <div className="container">
          <h2>Vaše soukromí je priorita</h2>
          <p className="subtitle">
            Transparentní přístup k ochraně vašich dat
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🔒</span>
              <h3>Žádné ukládání hlasu</h3>
              <p>
                Hlasové nahrávky se okamžitě přepíší na text a poté se smažou.
                Na našich serverech se neuchovávají žádné audio soubory.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📝</span>
              <h3>Pouze potřebná data</h3>
              <p>
                Ukládáme jen vaše textové poznámky, hodnocení a základní informace o dětech
                pro personalizaci tipů. Nic víc.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🛡️</span>
              <h3>Vaše kontrola</h3>
              <p>
                Můžete kdykoli smazat svá data, stáhnout je nebo upravit.
                Anonymní účty bez aktivity se automaticky mažou po 7 dnech.
              </p>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/privacy" className="cta-button">
              📋 Kompletní zásady ochrany soukromí
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="section psychology-section">
        <div className="container" style={{textAlign: 'center'}}>
          <h2>Začněte svou cestu k lepšímu rodičovství</h2>
          <p className="subtitle">
            Každý den je nová příležitost. Stačí pár minut reflexe večer
            a ráno dostanete inspiraci na celý den.
          </p>
          <div className="download-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=cz.momnts.app"
              className="download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">📱</span>
              <div className="text">
                <span className="small">Stáhnout z</span>
                <span className="large">Google Play</span>
              </div>
            </a>
            <div className="download-button disabled">
              <span className="icon">🍎</span>
              <div className="text">
                <span className="small">App Store</span>
                <span className="large">Listopad 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Momnts. Všechna práva vyhrazena.</p>
          <p style={{marginTop: '1rem'}}>
            <Link href="/privacy" style={{color: 'var(--md-sys-color-primary)', textDecoration: 'none'}}>
              Zásady ochrany soukromí
            </Link>
            {' • '}
            <a href="mailto:aplikace@momnts.cz" style={{color: 'var(--md-sys-color-primary)', textDecoration: 'none'}}>
              Kontakt
            </a>
          </p>

          <div style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(83, 108, 121, 0.2)'}}>
            <p style={{fontSize: '14px', opacity: 0.8}}>
              Za MOMNTS stojí <strong>ZOSIII</strong> - naše další projekty:
            </p>
            <p style={{marginTop: '0.5rem', fontSize: '14px'}}>
              <a href="https://www.jakodriv.cz" target="_blank" rel="noopener noreferrer" style={{color: 'var(--md-sys-color-primary)', textDecoration: 'none'}}>
                Jako dřív
              </a>
              {' • '}
              <a href="https://www.z3.studio" target="_blank" rel="noopener noreferrer" style={{color: 'var(--md-sys-color-primary)', textDecoration: 'none'}}>
                Z3.studio
              </a>
              {' • '}
              <a href="https://www.pouspani.cz" target="_blank" rel="noopener noreferrer" style={{color: 'var(--md-sys-color-primary)', textDecoration: 'none'}}>
                Podcast Po uspání
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top tlačítko */}
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
