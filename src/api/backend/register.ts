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
  groupName: string
}

export const register = ({
  userName,
  groupName,
}: RegisterProps): Promise<void> => {
  return api.registerPost(
    {
      registerPostRequest: {
        userName,
        groupName,
      },
    },
    {
      cache: 'no-store',
    }
  )
}
