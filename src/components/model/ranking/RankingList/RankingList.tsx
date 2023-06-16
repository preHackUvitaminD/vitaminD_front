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
      <ul>
        {data?.ranking?.map((user) => (
          <li key={user.userName}>
            <div>
              <span>{user.rank}位</span>
              <span>{user.userName}</span>
              <span>レベル{user.lv}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
