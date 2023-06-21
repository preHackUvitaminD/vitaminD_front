import { useAuthContext } from '@/providers/AuthProvider'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export interface AuthGuardProps {
  children: ReactNode
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
}: AuthGuardProps) => {
  const { authData } = useAuthContext()

  if (authData === undefined) {
    return (
      <>
        <div>Now Loading...</div>
      </>
    )
  }

  if (authData === null) {
    redirect('/signin')
    return null
  }

  return <>{children}</>
}
