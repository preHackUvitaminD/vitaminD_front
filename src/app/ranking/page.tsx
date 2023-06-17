'use client'

import Link from 'next/link'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Ranking } from '@/components/page/Ranking'

const queryClient = new QueryClient()

const Page: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Link href="/">Main</Link> */}
        <Ranking />
      </QueryClientProvider>
    </>
  )
}

export default Page
