import { logout } from '@/firebase/auth'
import { useUserDataContext } from '@/providers/UserDataProvider'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export interface UserDataGuardProps {
  children: ReactNode
}

export const UserDataGuard: React.FC<UserDataGuardProps> = ({
  children,
}: UserDataGuardProps) => {
  const { userData } = useUserDataContext()

  if (userData === undefined) {
    return <div>Now Loading...</div>
  }

  if (userData === null || userData?.groupName === undefined) {
    logout()
    return redirect('/signin')
  }

  return <>{children}</>
}
