import { useUserDataContext } from '@/app/providers/UserDataProvider'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export interface UserDataGuardProps {
  children: ReactNode
}

export const UserDataGuard: React.FC<UserDataGuardProps> = ({
  children,
}: UserDataGuardProps) => {
  const { userData } = useUserDataContext()

  if (!userData || userData?.groupName === undefined) return redirect('/signin')

  return <>{children}</>
}
