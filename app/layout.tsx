import { type Metadata } from 'next'
import {
  ClerkProvider,
  UserButton,

} from '@clerk/nextjs'
import './globals.css'
import Providers from '@/providers/query.provider'



export const metadata: Metadata = {
  title: 'FinGuard',
  description: 'Created By Bimal Pandey',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>



          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider >
  )
}