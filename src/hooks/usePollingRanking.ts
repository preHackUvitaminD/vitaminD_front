import { useEffect, useState } from 'react'
import { RankingUserNameGet201Response } from '@/api/generated'
import { fetchRanking } from './useFetchRanking'

export interface UsePollingRankingProps {
  interval?: number
  userName: string
  initRanking: RankingUserNameGet201Response
  onRankingUpdated?: (ranking: RankingUserNameGet201Response) => void
  onUserStatusUpdated?: (ranking: RankingUserNameGet201Response) => void
}

export const usePollingRanking = ({
  interval = 60 * 1000,
  userName,
  initRanking,
  onRankingUpdated = () => undefined,
  onUserStatusUpdated = () => undefined,
}: UsePollingRankingProps) => {
  const [ranking, setRanking] =
    useState<RankingUserNameGet201Response>(initRanking)
  const [isRankingUpdated, setIsRankingUpdated] = useState(false)
  const [isUserStatusUpdated, setIsUserStatusUpdated] = useState(false)

  useEffect(() => {
    const callback = async () => {
      const nextRanking = await fetchRanking({ userName })

      if (JSON.stringify(ranking) !== JSON.stringify(nextRanking)) {
        if (
          JSON.stringify(
            ranking.ranking?.find((u) => u.userName !== userName)
          ) ===
          JSON.stringify(
            nextRanking.ranking?.find((u) => u.userName !== userName)
          )
        ) {
          onUserStatusUpdated(nextRanking)
          setIsUserStatusUpdated(true)
        } else {
          setIsUserStatusUpdated(false)
        }
        onRankingUpdated(nextRanking)
        setRanking(nextRanking)
        setIsRankingUpdated(true)
      } else {
        setIsUserStatusUpdated(false)
      }
    }
    callback()
    const timer = setInterval(callback, interval)

    return () => clearInterval(timer)
  }, [interval, ranking, userName, onRankingUpdated, onUserStatusUpdated])

  //   if (isRankingUpdated) setIsRankingUpdated(false)
  //   if (isUserStatusUpdated) setIsUserStatusUpdated(false)

  return { ranking, isRankingUpdated, isUserStatusUpdated }
}
