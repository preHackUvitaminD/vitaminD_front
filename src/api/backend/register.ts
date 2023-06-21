import { Configuration, UsersApi } from '../generated/'

const conf = new Configuration({
  basePath: 'http://localhost:3001',
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
  return api.registerPost({
    registerPostRequest: {
      userName,
      groupName,
    },
  })
}
