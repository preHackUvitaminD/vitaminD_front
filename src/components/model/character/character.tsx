import { useFetchRanking } from '@/hooks/useFetchRanking'
import Image from 'next/image'
import { Suspense } from 'react'
import { useQuery } from '@chakra-ui/react'

export interface RankingListProps {
  groupName: string
}

export const Character: React.FC<RankingListProps> = ({
  groupName,
}: RankingListProps) => {
  const { data } = useFetchRanking({ groupName })
  const userName = localStorage.getItem('userName')
  const lv = data?.ranking?.find((user) => user.userName === userName)?.lv

  return (
    <Suspense fallback={<div>Now Loading...</div>}>
      <div className="flex justify-center mt-5">
        <Image src={`/lv${lv}`} width={200} height={200} alt={''} />
      </div>
    </Suspense>
  )
}
