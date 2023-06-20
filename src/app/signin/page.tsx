'use client'

import Link from 'next/link'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SignIn } from '@/components/page/SignIn'
import { AuthProvider } from '../providers/AuthProvider'
import { UserDataProvider } from '../providers/UserDataProvider'

const queryClient = new QueryClient()

const Page: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <UserDataProvider>
            <SignIn />
          </UserDataProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default Page
