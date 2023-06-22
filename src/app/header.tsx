'use client'

import Link from 'next/link'
import { logout } from '@/firebase/auth'
import { useAuthContext } from '@/providers/AuthProvider'

export const Header: React.FC = () => {
  const { authData } = useAuthContext()
  const token = authData?.idToken

  return (
    <header>
      <nav className="bg-green-800 w-full">
        <div className="flex justify-between max-w-6xl mx-auto items-center pl-8 h-14">
          <div className="flex space-x-50">
            <div className="text-green-100 px-24 py-2">
              <Link href="/">でめたら</Link>
            </div>
            <div className="flex ml-auto mr-0">
              <Link href="/mypage">
                <div className="text-green-100 hover:bg-green-700 px-3 py-2 rounded ml-auto mr-0">
                  マイページ
                </div>
              </Link>
              <Link href="/ranking">
                <div className="text-green-100 hover:bg-green-700 px-3 py-2 rounded ml-auto mr-0">
                  ランキング
                </div>
              </Link>
              {token && (
                <button
                  onClick={() => logout()}
                  className="text-green-100 hover:bg-green-700 px-3 py-2 rounded ml-auto mr-0"
                >
                  ログアウト
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
