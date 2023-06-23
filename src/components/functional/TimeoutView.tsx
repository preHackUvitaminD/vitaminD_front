import { useEffect, useState } from 'react'

export interface TimeoutViewProps {
  children: React.ReactNode
  timeout: number
}

export const TimeoutView = ({ timeout, children }: TimeoutViewProps) => {
  const [isTimedOut, setIsTimedout] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimedout(true)
    }, timeout)

    return () => clearTimeout(timer)
  }, [timeout])

  if (!isTimedOut) {
    return <>{children}</>
  } else {
    return <></>
  }
}
