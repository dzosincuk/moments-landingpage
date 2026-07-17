import Image from 'next/image'
import Link from 'next/link'

const EFFECTIVE_DATE = '17. července 2026'

export const metadata = {
  title: 'Zásady ochrany soukromí | MOMNTS',
  description: 'Jak MOMNTS zpracovává a chrání osobní údaje uživatelů.',
}

export default function Privacy() {
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
          <h1>Zásady ochrany soukromí</h1>
          <p>Jasně popisujeme, která data MOMNTS potřebuje, proč je používá a jak nad nimi máte kontrolu.</p>
        </div>
      </div>

      <div className="container">
        <main className="privacy-content">
          <div className="privacy-meta">
            <strong>Datum účinnosti:</strong> {EFFECTIVE_DATE}<br />
            <strong>Verze:</strong> 2.0
          </div>

          <h2>1. Kdo údaje zpracovává</h2>
          <p>Správcem osobních údajů zpracovávaných službou MOMNTS je:</p>
          <div className="privacy-info-box">
            <strong>Dominik Zosinčuk</strong><br />
            Na žlábku 456<br />
            251 01 Světice<br />
            DIČ: CZ8904062409<br />
            E-mail: <a href="mailto:momnts@zosiii.com">momnts@zosiii.com</a>
          </div>
          <p>
            Tyto zásady se vztahují na mobilní aplikaci MOMNTS pro iOS a Android a na web momnts.cz.
            MOMNTS je určen rodičům a pečujícím osobám, nikoli dětem k samostatnému používání.
          </p>

          <h2>2. Jaké údaje používáme</h2>
          <h3>Účet a identita</h3>
          <ul>
            <li>interní identifikátor uživatele a informace o typu účtu,</li>
            <li>e-mail a zobrazované jméno, pokud si vytvoříte účet nebo použijete Apple či Google přihlášení,</li>
            <li>přihlašovací údaje zpracované poskytovatelem autentizace; vaše heslo nemáme v čitelné podobě.</li>
          </ul>

          <h3>Reflexe a personalizační údaje</h3>
          <ul>
            <li>denní odpovědi, volitelné poznámky a historie reflexí,</li>
            <li>volitelně zadané jméno nebo věk dítěte,</li>
            <li>vygenerované karty, doporučení a informace o jejich přečtení.</li>
          </ul>
          <p>
            Do volných poznámek nevkládejte údaje, které pro používání služby nejsou potřeba, zejména
            zdravotní nebo jiné zvlášť citlivé informace o vás či dítěti.
          </p>

          <h3>Hlasový přepis</h3>
          <p>
            Mikrofon se aktivuje jen po vašem stisknutí tlačítka nahrávání. Zvuk se dočasně uloží v zařízení,
            odešle šifrovaným spojením našemu backendu a poskytovateli AI za účelem přepisu a lokální soubor se
            po odeslání odstraní. MOMNTS zvukové nahrávky záměrně neukládá do uživatelské databáze; ukládá se až
            výsledný text, pokud reflexi potvrdíte.
          </p>

          <h3>Zařízení, notifikace a předplatné</h3>
          <ul>
            <li>push token, platforma, model zařízení, jazyk, časové pásmo a nastavení připomínek,</li>
            <li>stav předplatného a identifikátory transakce potřebné pro ověření a obnovu nákupu,</li>
            <li>identifikátory instalace a zařízení potřebné pro push notifikace a diagnostiku pádů.</li>
          </ul>
          <p>Platební kartu ani jiné platební údaje MOMNTS nezískává; nákup zpracovává Apple nebo Google.</p>

          <h3>Provozní a diagnostické údaje</h3>
          <ul>
            <li>informace o pádech, chybách, výkonu a verzi aplikace,</li>
            <li>na Androidu diagnostické údaje prostřednictvím Firebase Crashlytics,</li>
            <li>bezpečnostní a serverové logy, například čas požadavku, stav odpovědi a IP adresa.</li>
          </ul>
          <p>MOMNTS nepoužívá tato data pro behaviorální reklamu ani pro sledování napříč aplikacemi jiných provozovatelů.</p>

          <h2>3. Proč údaje zpracováváme</h2>
          <ul>
            <li><strong>Poskytnutí služby:</strong> účet, synchronizace reflexí, personalizované karty, přepis hlasu, předplatné a notifikace.</li>
            <li><strong>Plnění smlouvy:</strong> zpřístupnění funkcí, které si vyžádáte, a správa placené služby.</li>
            <li><strong>Oprávněný zájem:</strong> bezpečnost, prevence zneužití, diagnostika chyb a spolehlivý provoz.</li>
            <li><strong>Souhlas nebo volba uživatele:</strong> volitelné údaje, mikrofon a notifikace, pokud jej právní předpisy vyžadují.</li>
            <li><strong>Právní povinnost:</strong> nezbytná účetní, daňová nebo bezpečnostní evidence.</li>
          </ul>

          <h2>4. Poskytovatelé a předávání údajů</h2>
          <p>Údaje neprodáváme. Pro provoz služby využíváme tyto kategorie zpracovatelů:</p>
          <ul>
            <li><strong>Supabase:</strong> autentizace, databáze a správa uživatelských relací.</li>
            <li><strong>OpenAI:</strong> přepis hlasu a generování personalizovaných textových doporučení.</li>
            <li><strong>Google Firebase:</strong> push notifikace a diagnostika pádů Android aplikace.</li>
            <li><strong>Apple:</strong> přihlášení, push notifikace a zpracování nákupů na iOS.</li>
            <li><strong>Google Play:</strong> přihlášení a zpracování nákupů na Androidu.</li>
            <li><strong>Poskytovatel infrastruktury:</strong> bezpečný hosting backendu a veřejného webu.</li>
          </ul>
          <p>
            Někteří poskytovatelé mohou údaje zpracovávat mimo Evropský hospodářský prostor. V takovém případě
            používáme odpovídající právní mechanismus, například rozhodnutí o odpovídající ochraně nebo standardní
            smluvní doložky, podle podmínek konkrétního poskytovatele.
          </p>

          <h2>5. Uchovávání a mazání</h2>
          <ul>
            <li>Účet, profil, reflexe a personalizační údaje uchováváme po dobu existence účtu nebo do jejich dřívějšího výmazu.</li>
            <li>Dočasný zvukový soubor v aplikaci se odstraní po odeslání k přepisu; do uživatelské databáze se neukládá.</li>
            <li>Push token se odstraní při zrušení registrace zařízení nebo smazání účtu.</li>
            <li>Provozní a bezpečnostní logy uchováváme jen po dobu potřebnou k diagnostice, ochraně služby a splnění právních povinností.</li>
            <li>Údaje, které musíme uchovat z právních důvodů, oddělíme a nepoužíváme je k jiným účelům.</li>
          </ul>
          <p>
            Účet a související data můžete smazat přímo v aplikaci nebo požádat přes naši stránku{' '}
            <Link href="/delete-account">Smazání účtu a dat</Link>. Smazání účtu samo o sobě neruší aktivní
            předplatné spravované App Storem nebo Google Play.
          </p>

          <h2>6. Vaše práva</h2>
          <p>Podle okolností můžete požádat o přístup, opravu, výmaz, omezení zpracování nebo přenos údajů a vznést námitku.</p>
          <p>
            Žádost pošlete na <a href="mailto:momnts@zosiii.com">momnts@zosiii.com</a>. Před vyřízením můžeme
            přiměřeně ověřit vaši totožnost. Máte také právo podat stížnost u Úřadu pro ochranu osobních údajů,
            Pplk. Sochora 27, 170 00 Praha 7, <a href="https://uoou.gov.cz">uoou.gov.cz</a>.
          </p>

          <h2>7. Zabezpečení</h2>
          <p>
            Používáme šifrování při přenosu, oddělení produkčních přístupů, řízení oprávnění a omezení přístupu
            k osobním údajům. Žádná internetová služba však nemůže zaručit absolutní bezpečnost.
          </p>

          <h2>8. Oprávnění aplikace</h2>
          <ul>
            <li><strong>Mikrofon:</strong> pouze pro vámi spuštěný hlasový přepis.</li>
            <li><strong>Notifikace:</strong> pro volitelné připomínky, které lze vypnout v aplikaci nebo systému.</li>
            <li><strong>Síť:</strong> pro přihlášení, synchronizaci, AI funkce, nákupy a notifikace.</li>
          </ul>

          <h2>9. Web a cookies</h2>
          <p>
            Veřejný web MOMNTS nepoužívá reklamní cookies ani reklamní trackery. Provozovatel hostingu může zpracovat
            nezbytné síťové a bezpečnostní logy pro doručení a ochranu webu.
          </p>

          <h2>10. Změny zásad</h2>
          <p>
            Při významné změně zpracování upravíme datum účinnosti a uživatele informujeme přiměřeným způsobem,
            například v aplikaci nebo e-mailem. Aktuální verze je vždy dostupná na této stránce.
          </p>

          <h2>11. Kontakt</h2>
          <div className="privacy-info-box">
            Otázky k soukromí: <a href="mailto:momnts@zosiii.com">momnts@zosiii.com</a><br />
            Smazání účtu a dat: <Link href="/delete-account">momnts.cz/delete-account</Link>
          </div>

          <div className="privacy-footer">
            <Link href="/" className="cta-button orange">Zpět na hlavní stránku</Link>
            <p>&copy; 2026 MOMNTS. Všechna práva vyhrazena.</p>
          </div>
        </main>
      </div>
    </div>
  )
}
