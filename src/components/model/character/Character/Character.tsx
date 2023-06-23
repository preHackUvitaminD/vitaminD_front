import { useFetchRanking } from '@/hooks/useFetchRanking'
import Image from 'next/image'
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
      <div className="flex justify-center mt-32">
        <Image src={`/Lv${lv_m}.gif`} width={280} height={280} alt={''} />
      </div>
      <div
        className="flex flex-col justify-center mx-96 my-6 py-2 bg-gray-200/30 backdrop-blur-lg
    rounded-md border border-gray-200/30 shadow-lg"
      >
        <div className="text-3xl flex justify-center">Lv.{lv}</div>
        <div className="flex justify-center">
          <ProgressBar
            percentWidth={percentage}
            flag={true}
            percent={`${percentage / 10}/10`}
          />
        </div>
        <div className="text-xl flex justify-center mt-2">
          LvUPまであと
          <span className="font-bold text-xl mx-1">
            {(100 - percentage) / 10}
          </span>
          コントリビュート
        </div>
      </div>
    </>
  )
}
