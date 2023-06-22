import { useQuery } from 'react-query'
import {
  UsersApi,
  RankingApi,
  Configuration,
  RankingGroupNameGet201Response,
} from '../api/generated'

const conf = new Configuration({
  basePath: process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT,
})
const api = new RankingApi(conf)

export interface FetchRankingProps {
  groupName: string
}

export const fetchRanking = ({
  groupName,
}: FetchRankingProps): Promise<RankingGroupNameGet201Response> => {
  return api.rankingGroupNameGet(
    { groupName },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    }
  )
}

export const useFetchRanking = ({ groupName }: FetchRankingProps) => {
  return useQuery('rankingData', () => fetchRanking({ groupName }))
}
