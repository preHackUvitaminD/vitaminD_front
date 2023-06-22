import { useUserDataContext } from '@/providers/UserDataProvider'
import Image from 'next/image'

export const Top: React.FC = () => {
  const { userData } = useUserDataContext()

  const userName = userData?.userName
  const hasUserName = Boolean(userData?.userName)

  return (
    <>
      <div className="flex my-10">
        <div className="flex-1"></div>
        <div className="w-2/3 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg px-32 py-16">
          <h1 className="text-center text-3xl font-bold py-5">
            趣味でプログラミングを始めたら
            <br />
            高レベルエンジニアになっていた件
          </h1>
          <div className="flex justify-center text-center">
            <Image src="/logo.png" width={280} height={280} alt={''} />
          </div>

          <h2 className="text-center text-2xl font-bold py-10">
            でめたらとは？
          </h2>
          <section></section>

          <h2 className="text-center text-2xl font-bold py-10">冒険のヒント</h2>
          <h3 className="text-xl font-bold py-5">
            プライベートなコントリビュートを反映するには
          </h3>
          <section>
            プライベートリポジトリのコントリビューションを経験値に反映するには、
            <a
              className="text-blue-800 visited:text-purple-800"
              href={`https://github.com/${hasUserName ? userName : ''}`}
            >
              GitHub
            </a>
            のトップページから設定する必要があります。
            <div className="py-5">
              <img
                className="py-1"
                src="/howto_apply_private_contribution_1.png"
                alt={''}
              />
              <img
                className="py-1"
                src="/howto_apply_private_contribution_2.png"
                alt={''}
              />
              <img
                className="py-1"
                src="/howto_apply_private_contribution_3.png"
                alt={''}
              />
            </div>
          </section>
        </div>
        <div className="flex-1"></div>
      </div>
    </>
  )
}
