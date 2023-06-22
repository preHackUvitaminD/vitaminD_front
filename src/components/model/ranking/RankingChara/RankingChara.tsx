// import { useFetchRanking } from '@/hooks/useFetchRanking'
import Image from 'next/image'

export interface RankingCharaProps {
  lv: string
}

export const RankingCharacter: React.FC<RankingCharaProps> = ({
  lv,
}: RankingCharaProps) => {
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <Image src={`/Lv${lv}.gif`} width={100} height={100} alt={''} />
      </div>
    </>
  )
}
