import { useFetchRanking } from '@/hooks/useFetchRanking'
import Image from 'next/image'
import { Suspense } from 'react'
import NextNProgress from 'nextjs-progressbar'
import { ProgressBar } from '@/components/model/character/ExpProgress/ProgressBar'

export interface CharacterProps {
  userName: string
}

export const Character: React.FC<CharacterProps> = ({
  userName,
}: CharacterProps) => {
  const { data } = useFetchRanking({ userName })
  const lv = data?.ranking?.find((user) => user.userName === userName)?.lv
  const exp = data?.ranking?.find((user) => user.userName === userName)?.exp
  const percentage = exp! * 10 - lv! * 100
  // const percentage = 60
  const lv_m = lv! > 10 ? 10 : lv

  return (
    <>
      <div className="flex justify-center items-center mt-32">
        <Image src={`/Lv${lv_m}.gif`} width={280} height={280} alt={''} />
      </div>
      <div className="text-3xl flex justify-center mt-10">Lv.{lv}</div>
      <div className="flex justify-center mt-6">
        <ProgressBar
          percentWidth={Math.floor(percentage / 20)}
          percent={`${percentage / 10}/10`}
        />
      </div>
      <div className="text-xl flex justify-center mt-6">
        LvUPまであと{(100 - percentage) / 10}
      </div>
    </>
  )
}
