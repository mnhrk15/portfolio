import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = '峯陽楽（Mine Hiraku）| ポートフォリオ'
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
          fontSize: 60,
          background: 'linear-gradient(to bottom, #F9FAFB, #E5E7EB)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '20px',
            }}
          >
            峯陽楽
          </div>
          <div
            style={{
              fontSize: 48,
              color: '#374151',
              marginBottom: '10px',
            }}
          >
            Mine Hiraku
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 'bold',
              color: '#2563EB',
              marginTop: '20px',
            }}
          >
            AI-Driven Problem Solving
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#6B7280',
              marginTop: '30px',
            }}
          >
            九州工業大学
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

