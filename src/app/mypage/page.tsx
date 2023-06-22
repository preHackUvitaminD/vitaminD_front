'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MyPage } from '@/components/page/MyPage'
import { AuthGuard } from '@/components/functional/AuthGuard'
import { UserDataGuard } from '@/components/functional/UserDataGuard'

const queryClient = new QueryClient()

const Page: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthGuard>
        <UserDataGuard>
          <MyPage />
        </UserDataGuard>
      </AuthGuard>
    </QueryClientProvider>
  )
}

export default Page
