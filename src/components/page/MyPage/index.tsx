import { Suspense } from 'react'
import { useUserDataContext } from '@/providers/UserDataProvider'
import { Character } from '@/components/model/character/Character/Character'

export const MyPage: React.FC = () => {
  const { userData } = useUserDataContext()
  const userName = userData?.userName

  return (
    <div>
      <div
        className="text-4xl flex h-24 justify-center my-10 mx-96 py-7 bg-gray-200/30 backdrop-blur-lg
    rounded-md border border-gray-200/30 shadow-lg"
      >
        {userData?.userName}
      </div>
      <Suspense fallback={<div className="text-center">Now Loading...</div>}>
        <Character userName={userName!} />
      </Suspense>
    </div>
  )
}
