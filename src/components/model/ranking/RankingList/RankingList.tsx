import { useFetchRanking } from '@/hooks/useFetchRanking'

export interface RankingListProps {
  groupName: string
}

export const RankingList: React.FC<RankingListProps> = ({
  groupName,
}: RankingListProps) => {
  const { data } = useFetchRanking({ groupName })

  return (
    <>
      <div className="flex justify-center mt-4">{groupName}</div>
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
          {/* <td className="border px-4 py-2">Intro to CSS</td>
            <td className="border px-4 py-2">Adam</td>
            <td className="border px-4 py-2">858</td> */}
        </tbody>
        {/* <div>{groupName}</div>
      <ul>
        {data?.ranking?.map((user) => (
          <li key={user.userName}>
            <div>
              <span>{user.rank}位</span>
              <span>LV.{user.lv}</span>
              <span>{user.userName}</span>
            </div>
          </li>
        ))}
      </ul> */}
      </table>
    </>
  )
}
