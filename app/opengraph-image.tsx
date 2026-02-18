import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MOMNTS – Každý den lepší rodič'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a1628 0%, #142236 50%, #0a1628 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Decorative orbs */}
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(78,205,196,0.15) 0%, transparent 70%)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: -60,
          width: 300, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Logo */}
        <div style={{
          width: 100, height: 100,
          borderRadius: 24,
          background: 'linear-gradient(135deg, #4ecdc4, #667eea)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 32,
          fontSize: 48,
          color: 'white',
          fontWeight: 800,
        }}>
          M
        </div>

        {/* Title */}
        <div style={{
          fontSize: 64,
          fontWeight: 800,
          letterSpacing: '-0.03em',
          background: 'linear-gradient(135deg, #ffffff 0%, #a8edea 50%, #ff8c5a 100%)',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: 16,
          display: 'flex',
        }}>
          MOMNTS
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 28,
          color: 'rgba(255,255,255,0.75)',
          fontWeight: 500,
          display: 'flex',
        }}>
          Každý den lepší rodič
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: 20,
          color: 'rgba(255,255,255,0.45)',
          marginTop: 12,
          display: 'flex',
        }}>
          Mindful parenting s denní reflexí
        </div>
      </div>
    ),
    { ...size }
  )
}

