'use client'
import Link from 'next/link'
import { login } from '@/firebase/auth'
import { useAuthContext } from '@/app/providers/AuthProvider'

export const Header: React.FC = () => {
  const { userData } = useAuthContext()
  const token = userData?.idToken

  return (
    <header>
      <nav className="bg-green-800 w-full">
        <div className="flex items-center pl-8 h-14">
          <div className="flex space-x-4">
            <div className="text-green-100 px-3 py-2">でめたら</div>
            <Link href="/">
              <div className="text-green-100 hover:bg-green-700 px-3 py-2 rounded">
                マイページ
              </div>
            </Link>
            <Link href="/ranking">
              <div className="text-green-100 hover:bg-green-700 px-3 py-2 rounded">
                ランキング
              </div>
            </Link>
            <div className="text-green-100 hover:bg-green-700 px-3 py-2 rounded">
              {token ? (
                <span></span>
              ) : (
                <div>
                  <button onClick={() => login()}>login</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
