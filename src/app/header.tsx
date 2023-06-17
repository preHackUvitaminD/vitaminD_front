import Link from 'next/link'

export const Header: React.FC = () => {
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
          </div>
        </div>
      </nav>
    </header>
  )
}
