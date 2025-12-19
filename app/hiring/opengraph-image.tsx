import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'FanCoach is hiring!'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                    padding: '40px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    {/* Logo / Brand Name */}
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            marginBottom: 40,
                            display: 'flex',
                        }}
                    >
                        Fan<span style={{ color: '#2dd4bf' }}>Coach</span>
                    </div>

                    {/* Heading */}
                    <div
                        style={{
                            fontSize: 70,
                            fontWeight: 'bold',
                            marginBottom: 20,
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        Technical Co-Founder /
                    </div>
                    <div
                        style={{
                            fontSize: 70,
                            fontWeight: 'bold',
                            background: 'linear-gradient(to right, #2dd4bf, #3b82f6)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: 'flex',
                        }}
                    >
                        Founding CTO
                    </div>

                    {/* Subheading / Tagline */}
                    <div
                        style={{
                            fontSize: 30,
                            color: '#d1d5db',
                            marginTop: 40,
                            maxWidth: 900,
                            textAlign: 'center',
                            display: 'flex',
                        }}
                    >
                        Seed-Funded AI Sports Tech Startup · United States · Remote OK
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
