import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Smazání účtu a dat | MOMNTS',
  description: 'Jak požádat o smazání účtu MOMNTS a souvisejících osobních údajů.',
}

const deletionEmail = 'mailto:momnts@zosiii.com?subject=%C5%BD%C3%A1dost%20o%20smaz%C3%A1n%C3%AD%20%C3%BA%C4%8Dtu%20MOMNTS&body=Pros%C3%ADm%20o%20smaz%C3%A1n%C3%AD%20m%C3%A9ho%20%C3%BA%C4%8Dtu%20MOMNTS.%0A%0AE-mail%20pou%C5%BEit%C3%BD%20v%20aplikaci%3A%20%0APlatforma%20(iOS%2FAndroid)%3A%20%0A%0ACh%C3%A1pu%2C%20%C5%BEe%20p%C5%99ed%20smaz%C3%A1n%C3%ADm%20m%C5%AF%C5%BEe%20b%C3%BDt%20nutn%C3%A9%20ov%C4%9B%C5%99it%20moji%20toto%C5%BEnost.'

export default function DeleteAccount() {
  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <div className="container">
          <Link href="/" className="privacy-back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginRight: '8px', verticalAlign: '-3px' }}>
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Zpět na hlavní stránku
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <Image src="/logo.png" alt="MOMNTS" width={48} height={48} style={{ borderRadius: '12px' }} />
            <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>MOMNTS</span>
          </div>
          <h1>Smazání účtu a dat</h1>
          <p>Účet můžete odstranit přímo v aplikaci nebo nám poslat ověřenou žádost.</p>
        </div>
      </div>

      <div className="container">
        <main className="privacy-content">
          <h2>Nejrychleji přímo v aplikaci</h2>
          <ol>
            <li>Otevřete MOMNTS a přejděte do <strong>Profilu</strong>.</li>
            <li>Otevřete správu účtu a zvolte <strong>Smazat účet</strong>.</li>
            <li>Potvrďte nevratné smazání.</li>
          </ol>
          <p>Tato cesta je dostupná přihlášeným i anonymním uživatelům a umožní bezpečně přiřadit žádost ke správnému účtu.</p>

          <h2>Žádost přes web</h2>
          <p>
            Pokud už aplikaci nemáte nebo se nemůžete přihlásit, pošlete žádost z e-mailové adresy spojené s účtem.
            Do zprávy uveďte platformu, na které jste MOMNTS používali. Nikdy nám neposílejte heslo ani nákupní token.
          </p>
          <div className="privacy-info-box">
            E-mail: <a href="mailto:momnts@zosiii.com">momnts@zosiii.com</a><br />
            Předmět: Žádost o smazání účtu MOMNTS
          </div>
          <p><a href={deletionEmail} className="privacy-action">Připravit žádost e-mailem</a></p>
          <p>
            Kvůli ochraně vašich údajů můžeme požádat o přiměřené ověření totožnosti. Žádost vyřídíme bez zbytečného
            odkladu, nejpozději ve lhůtě vyžadované právními předpisy. U anonymního účtu bez ověřitelného e-mailu může
            být jedinou bezpečnou možností smazání přímo z přihlášené aplikace.
          </p>

          <h2>Co bude odstraněno</h2>
          <ul>
            <li>účet a profilové údaje,</li>
            <li>reflexe, poznámky a informace o dětech,</li>
            <li>personalizované karty a související historie,</li>
            <li>nastavení notifikací a registrované push tokeny,</li>
            <li>stav předplatného uložený u MOMNTS.</li>
          </ul>
          <p>
            Omezené údaje můžeme uchovat pouze tam, kde nám to ukládá zákon nebo je to nezbytné pro bezpečnost a
            řešení sporů. Takové údaje oddělíme a nepoužíváme je pro běžný provoz ani personalizaci.
          </p>

          <h2>Předplatné je potřeba zrušit zvlášť</h2>
          <p>
            Smazání účtu MOMNTS automaticky nezruší předplatné spravované App Storem nebo Google Play. Pokud nechcete,
            aby se předplatné obnovilo, zrušte jej také v nastavení svého Apple ID nebo účtu Google Play.
          </p>

          <h2>Více informací</h2>
          <p>Podrobnosti o zpracování a vašich právech najdete v <Link href="/privacy">Zásadách ochrany soukromí</Link>.</p>

          <div className="privacy-footer">
            <Link href="/" className="cta-button orange">Zpět na hlavní stránku</Link>
            <p>&copy; 2026 MOMNTS. Všechna práva vyhrazena.</p>
          </div>
        </main>
      </div>
    </div>
  )
}
