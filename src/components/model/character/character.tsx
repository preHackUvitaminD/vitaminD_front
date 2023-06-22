import { useFetchRanking } from '@/hooks/useFetchRanking'
import Image from 'next/image'
import { Suspense } from 'react'

export interface CharactorProps {
  groupName: string
}

export const Character: React.FC<CharactorProps> = ({
  groupName,
}: CharactorProps) => {
  const { data } = useFetchRanking({ groupName })
  const userName = localStorage.getItem('userName')
  // const lv = data?.ranking?.find((user) => user.userName === userName)?.lv
  const lv = 2

  return (
    <Suspense fallback={<div>Now Loading...</div>}>
      <div className="flex justify-center mt-5">
        <Image src={`/lv${lv}.gif`} width={280} height={280} alt={''} />
      </div>
    </Suspense>
  )
}
