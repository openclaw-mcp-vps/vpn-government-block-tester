import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VPN Block Tester — Test VPN Effectiveness Against Censorship',
  description: 'Real-time VPN testing against government censorship techniques. Find working servers instantly.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="14d70edd-dfea-48ea-b456-1a092b946b55"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
