// import { useFetchRanking } from '@/hooks/useFetchRanking'
import Image from 'next/image'

export interface RankingCharaProps {
  lv: number
}

export const RankingCharacter: React.FC<RankingCharaProps> = ({
  lv,
}: RankingCharaProps) => {
  const lv_m = lv > 10 ? 10 : lv
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <Image src={`/Lv${lv_m}.gif`} width={100} height={100} alt={''} />
      </div>
    </>
  )
}
