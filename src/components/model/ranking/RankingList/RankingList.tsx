import { useFetchRanking } from '@/hooks/useFetchRanking'
import { RankingCharacter } from '@/components/model/ranking/RankingChara/RankingChara'
import { Suspense } from 'react'
import { ProgressBar } from '../../character/ExpProgress/ProgressBar'

export interface RankingListProps {
  groupName: string
  userName: string
}

export const RankingList: React.FC<RankingListProps> = ({
  groupName,
  userName,
}: RankingListProps) => {
  const { data } = useFetchRanking({ userName })

  return (
    <div className="flex items-center justify-center">
      <div
        className="h-auto w-auto bg-gray-200/30 backdrop-blur-lg
    rounded-md border border-gray-200/30 shadow-lg my-10 py-10 px-10"
      >
        <div className="flex justify-center mt-4 text-3xl">{groupName}</div>
        <div className="flex justify-center mt-5">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Character</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Lv</th>
              </tr>
            </thead>
            <tbody>
              {data?.ranking?.map((user) => (
                <tr key={user.userName}>
                  <>
                    <td className="border px-4 py-2">{user.rank}位</td>
                    <td className="border px-4 py-2">
                      <Suspense fallback={<div>Now Loading...</div>}>
                        <RankingCharacter lv={user.lv!} />
                      </Suspense>
                    </td>
                    <td className="border px-4 py-2">{user.userName}</td>
                    <td className="border px-4 py-2">
                      <div className="flex flex-col justify-center">
                        <div className="flex justify-center">Lv.{user.lv}</div>
                        <div className="flex w-32 justify-center">
                          <ProgressBar
                            percentWidth={user.exp! * 10 - user.lv! * 100}
                            flag={false}
                            percent={`${user.exp! * 10 - user.lv! * 100}/10`}
                          />
                        </div>
                      </div>
                    </td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
