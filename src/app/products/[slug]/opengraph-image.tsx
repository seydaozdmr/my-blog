import { ImageResponse } from 'next/og'
import { getServiceBySlug } from '@/lib/mdUtils'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params

  let title = 'Hizmetlerimiz'
  let description = 'CrownPro - Antalya Ağaç Budama'

  try {
    const service = await getServiceBySlug(slug)
    title = service.title
    description = service.description || description
  } catch {
    // fallback değerler kullanılır
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a2e1a 0%, #2d5a27 60%, #1a3a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #22c55e, #16a34a)',
          }}
        />

        {/* Decorative circle */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)',
          }}
        />

        {/* Top: logo + breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: '#86efac',
              letterSpacing: '-0.5px',
            }}
          >
            CrownPro
          </div>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 18 }}>›</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18 }}>Hizmetlerimiz</span>
        </div>

        {/* Middle: service title + description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                width: 6,
                height: 80,
                borderRadius: 4,
                background: 'linear-gradient(180deg, #22c55e, #16a34a)',
                flexShrink: 0,
              }}
            />
            <div
              style={{
                fontSize: title.length > 30 ? 52 : 62,
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-1px',
              }}
            >
              {title}
            </div>
          </div>

          {description && (
            <div
              style={{
                fontSize: 24,
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.5,
                maxWidth: 900,
                paddingLeft: 22,
              }}
            >
              {description.length > 120 ? description.slice(0, 120) + '…' : description}
            </div>
          )}
        </div>

        {/* Bottom: badges + URL */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            {['Antalya', 'Profesyonel Hizmet', '7/24'].map((badge) => (
              <div
                key={badge}
                style={{
                  background: 'rgba(34,197,94,0.15)',
                  border: '1px solid rgba(34,197,94,0.35)',
                  borderRadius: 40,
                  padding: '8px 20px',
                  fontSize: 17,
                  color: '#86efac',
                  fontWeight: 600,
                }}
              >
                {badge}
              </div>
            ))}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 16 }}>
            antalyaagacbudama.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
