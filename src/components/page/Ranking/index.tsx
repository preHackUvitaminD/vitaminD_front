import { Suspense } from 'react'
import { RankingList } from '@/components/model/ranking/RankingList/RankingList'
import { useUserDataContext } from '@/providers/UserDataProvider'

export const Ranking: React.FC = () => {
  const { userData } = useUserDataContext()

  return (
    <>
      <Suspense fallback={<div className="text-center">Now Loading...</div>}>
        <RankingList
          groupName={userData?.groupName!}
          userName={userData?.userName!}
        />
      </Suspense>
    </>
  )
}
