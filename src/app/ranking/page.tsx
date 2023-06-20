'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Ranking } from '@/components/page/Ranking'
import { AuthGuard } from '@/components/functional/AuthGuard'

const queryClient = new QueryClient()

const Page: React.FC = () => {
  return (
    <>
      <AuthGuard>
        <QueryClientProvider client={queryClient}>
          {/* <Link href="/">Main</Link> */}
          <Ranking />
        </QueryClientProvider>
      </AuthGuard>
    </>
  )
}

export default Page
