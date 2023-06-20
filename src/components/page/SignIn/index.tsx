import { useAuthContext } from '@/app/providers/AuthProvider'
import { useUserDataContext } from '@/app/providers/UserDataProvider'
import { login } from '@/firebase/auth'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export const SignIn: React.FC = () => {
  const { authData } = useAuthContext()
  const { userData, setUserData } = useUserDataContext()

  console.log({ authData, userData })

  const isLogedIn = Boolean(authData?.idToken)
  const isRegistered = Boolean(userData?.groupName)

  console.log({ isLogedIn, isRegistered })

  if (!isLogedIn) {
    return (
      <>
        <div onClick={() => login()}>Login with GitHub</div>
        <div>Waiting for user login...</div>
      </>
    )
  }

  if (!isRegistered)
    return (
      <>
        <form
          onSubmit={(e) => {
            // 応急処置
            e.preventDefault()
            setUserData?.({ userName: 'WMs784', groupName: 'vitaminD' })
          }}
        >
          <div>加入するグループ名を入力してください</div>
          <input type="text" />
          <input type="submit" value="Register" />
        </form>
      </>
    )

  redirect('/')
  return <div>Login successfull</div>
}
