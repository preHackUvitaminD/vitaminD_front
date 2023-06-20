'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Ranking } from '@/components/page/Ranking'
import { AuthGuard } from '@/components/functional/AuthGuard'
import { UserDataGuard } from '@/components/functional/UserDataGuard'

const queryClient = new QueryClient()

const Page: React.FC = () => {
  return (
    <>
      <AuthGuard>
        <UserDataGuard>
          <QueryClientProvider client={queryClient}>
            {/* <Link href="/">Main</Link> */}
            <Ranking />
          </QueryClientProvider>
        </UserDataGuard>
      </AuthGuard>
    </>
  )
}

export default Page
