import { useQuery } from 'react-query'
import {
  UsersApi,
  RankingApi,
  Configuration,
  RankingUserNameGet201Response,
} from '../api/generated'

const conf = new Configuration({
  basePath: process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
})
const api = new RankingApi(conf)

export interface FetchRankingProps {
  userName: string
}

export const fetchRanking = ({
  userName,
}: FetchRankingProps): Promise<RankingUserNameGet201Response> => {
  return api.rankingUserNameGet(
    { userName },
    {
      cache: 'no-store',
    }
  )
}

export const useFetchRanking = ({ userName }: FetchRankingProps) => {
  return useQuery('rankingData', () => fetchRanking({ userName }))
}
