import './globals.css';
import ClientLayoutShell from '@/components/ClientLayoutShell';

export const metadata = {
  title: 'Solid Bath & Kitchen | Luxury Bathroom & Kitchen Renovation Canada',
  description:
    'Solid Bath & Kitchen is Canada’s premier luxury bathroom and kitchen interior design and renovation company. Bespoke custom cabinetry, spa bathrooms, marble islands, and turnkey renovation services in Toronto & Ontario.',
  keywords: [
    'bathroom renovation Canada',
    'luxury bathroom renovation',
    'bathroom remodeling Canada',
    'kitchen renovation Canada',
    'luxury kitchen renovation',
    'modern kitchen design Canada',
    'custom kitchen renovation',
    'bathroom renovation services',
    'kitchen renovation services',
    'luxury interiors Canada',
    'bathroom renovation contractor',
    'kitchen renovation contractor',
    'modern bathroom design',
    'custom cabinetry',
    'luxury kitchen design',
  ],
  metadataBase: new URL('https://solidbathandkitchen.ca'),
  openGraph: {
    title: 'Solid Bath & Kitchen | Luxury Canadian Interior Renovations',
    description:
      'Transform your bathroom & kitchen with Canada’s leading luxury interior design and renovation specialists.',
    url: 'https://solidbathandkitchen.ca',
    siteName: 'Solid Bath & Kitchen',
    images: [
      {
        url: '/images/hero-bathroom.jpg',
        width: 1200,
        height: 630,
        alt: 'Solid Bath & Kitchen Luxury Renovation',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solid Bath & Kitchen | Luxury Bathroom & Kitchen Renovation Canada',
    description:
      'Bespoke Canadian bathroom and kitchen renovations. Modern, elegant, turnkey craftsmanship.',
    images: ['/images/hero-bathroom.jpg'],
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="canonical" href="https://solidbathandkitchen.ca" />
      </head>
      <body className="bg-white text-black antialiased">
        <ClientLayoutShell>{children}</ClientLayoutShell>
      </body>
    </html>
  );
}
