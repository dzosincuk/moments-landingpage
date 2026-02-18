import Link from 'next/link'
import Image from 'next/image'

export default function Privacy() {
  return (
    <div className="privacy-page">
      {/* Dark hero header */}
      <div className="privacy-hero">
        <div className="container">
          <Link href="/" className="privacy-back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{marginRight:'8px',verticalAlign:'-3px'}}><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Zpět na hlavní stránku
          </Link>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'16px',marginBottom:'24px'}}>
            <Image src="/logo.png" alt="MOMNTS" width={48} height={48} style={{borderRadius:'12px'}} />
            <span style={{fontSize:'20px',fontWeight:700,letterSpacing:'-0.02em'}}>MOMNTS</span>
          </div>
          <h1>Zásady ochrany soukromí</h1>
          <p>Tyto zásady popisují, jak aplikace Momnts shromažďuje, používá a&nbsp;chrání vaše osobní údaje.</p>
        </div>
      </div>

      <div className="container">
        <div className="privacy-content">

          <h2>1. Správce údajů</h2>
          <p>Správcem vašich osobních údajů je:</p>
          <div className="privacy-info-box">
            <strong>Dominik Zosinčuk</strong><br/>
            Na žlábku 456<br/>
            Světice, 251 01<br/>
            DIČ: CZ8904062409<br/>
            Email: <a href="mailto:momnts@zosiii.com">momnts@zosiii.com</a>
          </div>

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
            <li><strong>Denní reflexe:</strong> Vaše odpovědi &ldquo;ano&rdquo;, &ldquo;možná&rdquo;, &ldquo;ne&rdquo; na denní otázky</li>
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
          <p>Vaše osobní údaje nesdílíme s&nbsp;třetími stranami, kromě případů:</p>
          <ul>
            <li>Kdy je to vyžadováno zákonem</li>
            <li>Pro technické poskytování služby (hosting, cloudové služby)</li>
            <li>S&nbsp;vaším výslovným souhlasem</li>
          </ul>

          <h2>5. Doba uchovávání</h2>
          <p>Vaše údaje uchováváme po dobu:</p>
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
            při přenosu i&nbsp;ukládání, pravidelných bezpečnostních auditů
            a&nbsp;omezení přístupu pouze na oprávněné osoby.
          </p>

          <h2>8. Oprávnění aplikace</h2>
          <h3>8.1 Mikrofon (RECORD_AUDIO)</h3>
          <p>
            Vyžadováno pro nahrávání hlasových poznámek. Aplikace nahrává
            pouze když explicitně stisknete tlačítko nahrávání. Nahrávky
            jsou okamžitě přepsány na text a&nbsp;poté smazány – neukládají se.
          </p>

          <h3>8.2 Notifikace</h3>
          <p>
            Používáno pro odesílání denních připomínek a&nbsp;motivačních zpráv.
            Můžete je kdykoli vypnout v&nbsp;nastavení aplikace.
          </p>

          <h3>8.3 Úložiště</h3>
          <p>
            Používáno pro dočasné ukládání dat před jejich odesláním
            na server a&nbsp;pro cache aplikace.
          </p>

          <h3>8.4 Síťový přístup</h3>
          <p>
            Potřebný pro synchronizaci dat, přepis hlasu na text a&nbsp;stahování
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
            O&nbsp;změnách těchto zásad vás budeme informovat prostřednictvím
            aplikace nebo emailu. Pokračování v&nbsp;používání aplikace po
            změnách znamená souhlas s&nbsp;novými zásadami.
          </p>

          <h2>11. Kontakt</h2>
          <p>Pro otázky ohledně ochrany soukromí nás kontaktujte:</p>
          <div className="privacy-info-box">
            <strong>Dominik Zosinčuk</strong><br/>
            Na žlábku 456, Světice, 251 01<br/>
            Email: <a href="mailto:momnts@zosiii.com">momnts@zosiii.com</a><br/>
            Pro urgentní záležitosti: <a href="mailto:momnts@zosiii.com">momnts@zosiii.com</a>
          </div>

          <div className="privacy-meta">
            <strong>Datum účinnosti:</strong> {new Date().toLocaleDateString('cs-CZ')}<br/>
            <strong>Verze:</strong> 1.0
          </div>

          {/* Footer */}
          <div className="privacy-footer">
            <Link href="/" className="cta-button orange">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{display:'inline',verticalAlign:'-3px',marginRight:'6px'}}><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Zpět na hlavní stránku
            </Link>
            <p>&copy; 2025 Momnts. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
