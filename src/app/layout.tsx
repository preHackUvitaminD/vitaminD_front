import './globals.css'
import { Header } from './header'
import { Inter } from 'next/font/google'
import { AuthProvider } from './providers/AuthProvider'
import { UserDataProvider } from './providers/UserDataProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'でめたら',
  description: 'githubの進捗でキャラを育成RPG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <AuthProvider>
          <UserDataProvider>
            <Header />
            {children}
          </UserDataProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
