'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Register } from '@/components/page/Register'

const queryClient = new QueryClient()

const Page: React.FC = () => {
  return (
    <>
      {/* <UserDataProvider> */}
      <QueryClientProvider client={queryClient}>
        <Register />
      </QueryClientProvider>
      {/* </UserDataProvider> */}
    </>
  )
}

export default Page
