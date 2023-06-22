import { useFetchRanking } from '@/hooks/useFetchRanking'
import Image from 'next/image'
import { Suspense } from 'react'

export interface CharacterProps {
  groupName: string
}

export const Character: React.FC<CharacterProps> = ({
  groupName,
}: CharacterProps) => {
  const { data } = useFetchRanking({ groupName })
  const userName = localStorage.getItem('userName')
  // const lv = data?.ranking?.find((user) => user.userName === userName)?.lv
  const lv = 2

  return (
    <Suspense fallback={<div>Now Loading...</div>}>
      <div className="flex justify-center mt-5">
        <Image src={`/Lv${lv}.gif`} width={280} height={280} alt={''} />
      </div>
    </Suspense>
  )
}
