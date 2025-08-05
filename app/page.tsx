import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="logo-container">
            <Image
              src="/logo.png"
              alt="MOMNTS Logo"
              width={80}
              height={80}
              style={{borderRadius: '20px'}}
            />
          </div>
          <h1>Momnts</h1>
          <p className="subtitle">Každý den je příležitost být lepším rodičem</p>
          <p className="description">
            Objevte sílu denní reflexe. Sledujte své rodičovské momenty,
            získejte personalizované tipy a budujte hlubší vztah se svými dětmi.
          </p>
          <Link href="#psychology" className="cta-button">
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
              <h3>Hlasové reflexe</h3>
              <p>
                Každý večer si rychle nahrajte, jak se vám dařilo být trpělivým rodičem.
                Hlasové poznámky se automaticky přepíší na text - žádné audio soubory se neukládají.
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
      <section className="section psychology-section">
        <div className="container" style={{textAlign: 'center'}}>
          <h2>Začněte svou cestu k lepšímu rodičovství</h2>
          <p className="subtitle">
            Každý den je nová příležitost. Stačí pár minut reflexe večer
            a ráno dostanete inspiraci na celý den.
          </p>
          <div style={{marginTop: '2rem'}}>
            <Link href="#download" className="cta-button">
              📱 Stáhnout aplikaci
            </Link>
          </div>
          <p style={{marginTop: '1.5rem', opacity: 0.8}}>
            Dostupné na Android • iOS verze připravujeme
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Momnts. Všechna práva vyhrazena.</p>
          <p style={{marginTop: '1rem'}}>
            <Link href="/privacy" style={{color: 'var(--md-sys-color-primary)', textDecoration: 'none'}}>
              Zásady ochrany soukromí
            </Link>
            {' • '}
            <a href="mailto:aplikace@momnts.cz" style={{color: 'var(--md-sys-color-primary)', textDecoration: 'none'}}>
              Kontakt
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
