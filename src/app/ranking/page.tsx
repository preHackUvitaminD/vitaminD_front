'use client'

import Link from 'next/link'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Ranking } from '@/components/page/Ranking'
import { AuthGuard } from '@/components/functional/AuthGuard'
import { AuthProvider } from '../providers/AuthProvider'

const queryClient = new QueryClient()

const Page: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <AuthGuard>
          <QueryClientProvider client={queryClient}>
            {/* <Link href="/">Main</Link> */}
            <Ranking />
          </QueryClientProvider>
        </AuthGuard>
      </AuthProvider>
    </>
  )
}

export default Page
