import { Configuration, UsersApi } from '../generated/'

const conf = new Configuration({
  basePath: process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
})
const api = new UsersApi(conf)

export interface RegisterProps {
  userName: string
}

export const register = ({ userName }: RegisterProps): Promise<void> => {
  return api.registerPost(
    {
      registerPostRequest: {
        userName,
      },
    },
    {
      cache: 'no-store',
    }
  )
}
