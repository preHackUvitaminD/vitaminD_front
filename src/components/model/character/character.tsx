import { useFetchRanking } from '@/hooks/useFetchRanking'
import Image from 'next/image'

export interface RankingListProps {
  groupName: string
}

export const Character: React.FC<RankingListProps> = ({
  groupName,
}: RankingListProps) => {
  const { data } = useFetchRanking({ groupName })
  const userName = localStorage.getItem('userName')
  const lv = data?.ranking?.map.get(userName)?.lv

  return (
    <div className="flex justify-center mt-5">
      <Image src="/character_${lv}" width={200} height={200} alt={''} />
    </div>
  )
}
