import { useFetchRanking } from '@/hooks/useFetchRanking'

export interface RankingListProps {
  groupName: string
}

export const RankingList: React.FC<RankingListProps> = ({
  groupName,
}: RankingListProps) => {
  const { data } = useFetchRanking({ groupName })

  return (
    <div className="flex items-center justify-center">
      <div
        className="h-96 w-80 bg-gray-200/30 backdrop-blur-lg
    rounded-md border border-gray-200/30 shadow-lg"
      >
        <div className="flex justify-center mt-4">{groupName}</div>
        <div className="flex justify-center mt-5">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Lv</th>
                <th className="px-4 py-2">Name</th>
              </tr>
            </thead>
            <tbody>
              {data?.ranking?.map((user) => (
                <tr key={user.userName}>
                  <>
                    <td className="border px-4 py-2">{user.rank}位</td>
                    <td className="border px-4 py-2">LV.{user.lv}</td>
                    <td className="border px-4 py-2">{user.userName}</td>
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
