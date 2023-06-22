import { useFetchRanking } from '@/hooks/useFetchRanking'
import Image from 'next/image'
import { Suspense } from 'react'

export interface CharacterProps {
  userName: string
}

export const Character: React.FC<CharacterProps> = ({
  userName,
}: CharacterProps) => {
  const { data } = useFetchRanking({ userName })
  const lv = data?.ranking?.find((user) => user.userName === userName)?.lv

  return (
    <Suspense fallback={<div>Now Loading...</div>}>
      <div className="flex justify-center items-center mt-32">
        <Image src={`/Lv${lv}.gif`} width={280} height={280} alt={''} />
      </div>
      <div className="text-3xl flex justify-center mt-5">Lv.{lv}</div>
    </Suspense>
  )
}
