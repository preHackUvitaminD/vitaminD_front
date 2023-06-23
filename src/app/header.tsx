'use client'

import Link from 'next/link'
import { logout } from '@/firebase/auth'
import { useAuthContext } from '@/providers/AuthProvider'

export const Header: React.FC = () => {
  const { authData } = useAuthContext()
  const isLoggedIn = Boolean(authData?.idToken)

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-3 bg-green-800">
        <div className="flex items-center flex-shrink-0 text-white mx-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/">でめたら</Link>
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              {isLoggedIn && (
                <Link href="/mypage">
                  <div className="text-green-100 hover:bg-green-700 px-3 py-2 rounded ml-auto mr-0">
                    マイページ
                  </div>
                </Link>
              )}
            </div>
            <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              {isLoggedIn && (
                <Link href="/ranking">
                  <div className="text-green-100 hover:bg-green-700 px-3 py-2 rounded ml-auto mr-0">
                    ランキング
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div>
            <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:text-teal-500  mt-4 lg:mt-0">
              {isLoggedIn ? (
                <button
                  onClick={() => logout()}
                  className="text-green-100 hover:bg-green-700 px-3 py-2 rounded ml-auto mr-0"
                >
                  ログアウト
                </button>
              ) : (
                <Link href="/signin">
                  <div className="text-green-100 hover:bg-green-700 px-3 py-2 rounded ml-auto mr-0">
                    ログイン
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
