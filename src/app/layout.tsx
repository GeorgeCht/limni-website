import { ReactLenis } from '@/lib/lenis'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}
