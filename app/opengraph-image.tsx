import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MOMNTS – Každý den jeden jasný krok blíž k dětem'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          padding: '68px 78px',
          background: '#f7f1e7',
          color: '#004e52',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ position: 'absolute', width: 560, height: 560, right: -180, top: -150, border: '3px solid #ff9500', borderRadius: '50%', opacity: .55, display: 'flex' }} />
        <div style={{ position: 'absolute', width: 520, height: 590, right: -130, top: -120, border: '2px solid #ff9500', borderRadius: '50%', opacity: .24, display: 'flex' }} />

        <div style={{ width: '58%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 48 }}>
            <div style={{ width: 62, height: 62, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 16, background: '#ff9500', color: 'white', fontSize: 31, fontWeight: 800 }}>M</div>
            <div style={{ marginLeft: 17, fontSize: 22, fontWeight: 800, letterSpacing: '.16em' }}>MOMNTS</div>
          </div>
          <div style={{ marginBottom: 16, color: '#ff9500', fontSize: 14, fontWeight: 800, letterSpacing: '.18em', textTransform: 'uppercase', display: 'flex' }}>Klidný denní rytmus pro rodiče</div>
          <div style={{ maxWidth: 660, fontFamily: 'serif', fontSize: 63, lineHeight: 1.02, letterSpacing: '-.035em', display: 'flex' }}>
            Každý den jeden jasný krok blíž k dětem.
          </div>
          <div style={{ marginTop: 25, color: '#678587', fontSize: 20, display: 'flex' }}>Dvě minuty reflexe. Jedno osobní doporučení.</div>
        </div>

        <div style={{ position: 'relative', width: 350, minHeight: 390, marginLeft: 'auto', padding: '34px 30px', display: 'flex', flexDirection: 'column', background: '#fffdf9', borderTop: '4px solid #ff9500', boxShadow: '0 30px 70px rgba(18,63,67,.14)' }}>
          <div style={{ marginBottom: 25, color: '#ff9500', fontSize: 12, fontWeight: 800, letterSpacing: '.15em', textTransform: 'uppercase', display: 'flex' }}>Dnešní osobní karta</div>
          <div style={{ fontFamily: 'serif', fontSize: 35, lineHeight: 1.05, display: 'flex' }}>Klid, který už doma umíte vytvořit</div>
          <div style={{ marginTop: 19, color: '#678587', fontSize: 16, lineHeight: 1.55, display: 'flex' }}>MOMNTS propojí vaše poznámky a doporučí, co konkrétně zkusit dál.</div>
          <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid #ded5c8', color: '#004e52', fontSize: 16, fontWeight: 700, display: 'flex' }}>Jedno malé doporučení na dnešek →</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
