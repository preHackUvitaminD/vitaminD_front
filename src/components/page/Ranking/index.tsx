import { Suspense } from 'react'
import { RankingList } from '@/components/model/ranking/RankingList/RankingList'

export const Ranking: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Now Loading...</div>}>
        <RankingList groupName="vitaminD"></RankingList>
      </Suspense>
    </>
  )
}
