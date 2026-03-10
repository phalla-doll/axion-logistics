import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'AXION | Logistics Solutions',
  description: 'Reliable shipping and logistics solutions for your business.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased text-zinc-900 bg-white selection:bg-zinc-900 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
