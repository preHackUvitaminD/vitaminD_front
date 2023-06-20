'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { SignIn } from '@/components/page/SignIn'

const queryClient = new QueryClient()

const Page: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SignIn />
      </QueryClientProvider>
    </>
  )
}

export default Page
