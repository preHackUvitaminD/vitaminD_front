import { Suspense } from 'react'
import Image from 'next/image'
import { useUserDataContext } from '@/providers/UserDataProvider'
import { Character } from '@/components/model/character/Character/Character'
import { usePollingRanking } from '@/hooks/usePollingRanking'
import { TimeoutView } from '@/components/functional/TimeoutView'

export const MyPage: React.FC = () => {
  const { userData } = useUserDataContext()
  const userName = userData?.userName

  const { ranking } = usePollingRanking({
    interval: 30 * 1000,
    userName: userName!,
    initRanking: { ranking: [] },
  })

  const status = ranking.ranking?.find((user) => user.userName === userName)
  const isLevelUpped = status?.lv! > 0 && `${status?.exp}`.slice(-1) === '0'

  return (
    <div>
      <div
        className="text-4xl flex h-24 justify-center my-10 mx-96 py-7 bg-gray-200/30 backdrop-blur-lg
    rounded-md border border-gray-200/30 shadow-lg"
      >
        {userData?.userName}
      </div>
      <div className="flex justify-center">
        {isLevelUpped && (
          <TimeoutView timeout={2000}>
            <Image
              className="absolute"
              src={`/LevelUp.gif`}
              width={280}
              height={280}
              alt=""
            />
          </TimeoutView>
        )}
      </div>
      <Suspense fallback={<div className="text-center">Now Loading...</div>}>
        <Character userName={userName!} />
      </Suspense>
    </div>
  )
}
