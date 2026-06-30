import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'FanCoach — Watch sports like you actually get it.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const logoData = await fetch(new URL('./og-logo.png', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(120% 120% at 18% 0%, #0F2A22 0%, #0A1612 48%, #07120E 100%)',
          padding: '76px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* soft green glow */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: '50%',
            background:
              'radial-gradient(closest-side, rgba(7,178,126,0.42), rgba(7,178,126,0) 72%)',
            display: 'flex',
          }}
        />

        {/* top row: mark + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            width={104}
            height={107}
            src={logoData as unknown as string}
            alt="FanCoach"
            style={{ marginRight: 28 }}
          />
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              display: 'flex',
              color: '#FFFFFF',
            }}
          >
            Fan<span style={{ color: '#02BA89' }}>Coach</span>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1.04,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              maxWidth: 980,
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            Watch sports like you actually get it.
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 34,
              lineHeight: 1.3,
              color: '#A9BCB3',
              maxWidth: 940,
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            Real-time play explanations, an AI you can ask anything, and
            predictions with friends.
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              fontWeight: 700,
              color: '#02BA89',
            }}
          >
            fancoach.ai
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 26,
              fontWeight: 600,
              color: '#0A1612',
              background: '#FFFFFF',
              padding: '14px 26px',
              borderRadius: 999,
            }}
          >
            Free on the App Store
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
