import Link from 'next/link'
import Image from 'next/image'

export default function Privacy() {
  return (
    <div style={{minHeight: '100vh', padding: '2rem 0'}}>
      <div className="container">
        {/* Header with logo and back link */}
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <Link href="/" style={{display: 'inline-block', marginBottom: '1rem'}}>
            <Image
              src="/logo.png"
              alt="MOMNTS Logo"
              width={60}
              height={60}
              style={{borderRadius: '15px'}}
            />
          </Link>
          <div style={{marginBottom: '1rem'}}>
            <Link
              href="/"
              style={{
                color: 'var(--md-sys-color-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              ← Zpět na hlavní stránku
            </Link>
          </div>
        </div>

        <div className="privacy-content">
          <h1 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
            Zásady ochrany soukromí
          </h1>

          <p style={{marginBottom: '2rem', fontSize: '1.1rem'}}>
            Tyto zásady ochrany soukromí popisují, jak aplikace Momnts shromažďuje,
            používá a chrání vaše osobní údaje.
          </p>

          <h2>1. Správce údajů</h2>
          <p>
            Správcem vašich osobních údajů je:
          </p>
          <p>
            <strong>Dominik Zosinčuk</strong><br/>
            Na žlábku 456<br/>
            Světice, 251 01<br/>
            DIČ: CZ8904062409<br/>
            Email: aplikace@momnts.cz
          </p>

          <h2>2. Shromažďované údaje</h2>
          <h3>2.1 Hlasové nahrávky</h3>
          <p>
            <strong>Důležité:</strong> Aplikace hlasové nahrávky <strong>neukládá</strong>.
            Hlasové poznámky jsou použity pouze pro okamžitý přepis na text pomocí AI služby
            a poté jsou ihned smazány. Na našich serverech se neuchovávají žádné audio soubory.
          </p>

          <h3>2.2 Textové poznámky a hodnocení</h3>
          <p>Aplikace ukládá:</p>
          <ul>
            <li><strong>Denní reflexe:</strong> Vaše odpovědi "ano", "možná", "ne" na denní otázky</li>
            <li><strong>Textové poznámky:</strong> Přepsané texty z hlasových nahrávek</li>
            <li><strong>Informace o dětech:</strong> Věk a základní údaje pro personalizaci obsahu</li>
          </ul>

          <h3>2.3 Účet uživatele</h3>
          <p>Pro vytvoření účtu shromažďujeme:</p>
          <ul>
            <li>Emailovou adresu (nebo možnost anonymního použití)</li>
            <li>Heslo (uloženo v šifrované podobě)</li>
            <li>FCM token pro push notifikace</li>
          </ul>

          <h3>2.4 Technické údaje</h3>
          <p>Automaticky shromažďujeme:</p>
          <ul>
            <li>Základní technické informace pro fungování aplikace</li>
            <li>Anonymní statistiky používání</li>
          </ul>

          <h2>3. Účel zpracování</h2>
          <p>Vaše údaje zpracováváme za účelem:</p>
          <ul>
            <li>Generování personalizovaných denních karet a tipů</li>
            <li>Analýza vzorců pro lepší rodičovské poradenství</li>
            <li>Odesílání push notifikací</li>
            <li>Zlepšování funkcionalit aplikace</li>
            <li>Technické podpory</li>
          </ul>

          <h2>4. Sdílení údajů</h2>
          <p>
            Vaše osobní údaje nesdílíme s třetími stranami, kromě případů:
          </p>
          <ul>
            <li>Kdy je to vyžadováno zákonem</li>
            <li>Pro technické poskytování služby (hosting, cloudové služby)</li>
            <li>S vaším výslovným souhlasem</li>
          </ul>

          <h2>5. Doba uchovávání</h2>
          <p>
            Vaše údaje uchováváme po dobu:
          </p>
          <ul>
            <li>Textové poznámky a reflexe: dokud je neodstraníte nebo nezrušíte účet</li>
            <li>Údaje o účtu: dokud nezrušíte účet</li>
            <li>Anonymní uživatelé bez aktivity: automaticky mazáni po 7 dnech</li>
            <li>Technické logy: maximálně 12 měsíců</li>
          </ul>

          <h2>6. Vaše práva</h2>
          <p>Máte právo:</p>
          <ul>
            <li>Na přístup ke svým údajům</li>
            <li>Na opravu nesprávných údajů</li>
            <li>Na výmaz údajů</li>
            <li>Na přenositelnost údajů</li>
            <li>Vznést námitku proti zpracování</li>
            <li>Podat stížnost u dozorového úřadu</li>
          </ul>

          <h2>7. Zabezpečení</h2>
          <p>
            Používáme moderní bezpečnostní opatření včetně šifrování dat 
            při přenosu i ukládání, pravidelných bezpečnostních auditů 
            a omezení přístupu pouze na oprávněné osoby.
          </p>

          <h2>8. Oprávnění aplikace</h2>
          <h3>8.1 Mikrofon (RECORD_AUDIO)</h3>
          <p>
            Vyžadováno pro nahrávání hlasových poznámek. Aplikace nahrává
            pouze když explicitně stisknete tlačítko nahrávání. Nahrávky
            jsou okamžitě přepsány na text a poté smazány - neukládají se.
          </p>

          <h3>8.2 Notifikace</h3>
          <p>
            Používáno pro odesílání denních připomínek a motivačních zpráv.
            Můžete je kdykoli vypnout v nastavení aplikace.
          </p>

          <h3>8.3 Úložiště</h3>
          <p>
            Používáno pro dočasné ukládání dat před jejich odesláním
            na server a pro cache aplikace.
          </p>

          <h3>8.4 Síťový přístup</h3>
          <p>
            Potřebný pro synchronizaci dat, přepis hlasu na text a stahování
            personalizovaných karet.
          </p>

          <h2>9. Cookies a sledování</h2>
          <p>
            Webová stránka používá pouze nezbytné cookies pro fungování. 
            Mobilní aplikace nepoužívá cookies ani sledovací technologie 
            třetích stran.
          </p>

          <h2>10. Změny zásad</h2>
          <p>
            O změnách těchto zásad vás budeme informovat prostřednictvím 
            aplikace nebo emailu. Pokračování v používání aplikace po 
            změnách znamená souhlas s novými zásadami.
          </p>

          <h2>11. Kontakt</h2>
          <p>
            Pro otázky ohledně ochrany soukromí nás kontaktujte:
          </p>
          <p>
            <strong>Dominik Zosinčuk</strong><br/>
            Na žlábku 456, Světice, 251 01<br/>
            Email: aplikace@momnts.cz<br/>
            Pro urgentní záležitosti: aplikace@momnts.cz
          </p>

          <p style={{marginTop: '3rem', padding: '1rem', background: '#f8f9fa', borderRadius: '5px'}}>
            <strong>Datum účinnosti:</strong> {new Date().toLocaleDateString('cs-CZ')}<br/>
            <strong>Verze:</strong> 1.0
          </p>

          {/* Footer with back link */}
          <div style={{textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e0e0e0'}}>
            <Link
              href="/"
              className="cta-button"
              style={{display: 'inline-flex'}}
            >
              ← Zpět na hlavní stránku
            </Link>
            <p style={{marginTop: '1rem', color: '#666', fontSize: '0.9rem'}}>
              &copy; 2024 Momnts. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
