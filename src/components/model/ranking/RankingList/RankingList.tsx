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
      <div>{groupName}</div>
      <ul>
        {data?.ranking?.map((user) => (
          <li key={user.userName}>
            <div>
              <span>{user.rank}位</span>
              <span>レベル{user.lv}</span>
              <span>{user.userName}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
