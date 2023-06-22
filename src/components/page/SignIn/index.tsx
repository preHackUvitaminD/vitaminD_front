import { useAuthContext } from '@/providers/AuthProvider'
import { useUserDataContext } from '@/providers/UserDataProvider'
import { SignInWithGitHub } from '@/components/model/social/SignInWithGitHub/SignInWithGitHub'
import { login } from '@/firebase/auth'
import { redirect } from 'next/navigation'

export const SignIn: React.FC = () => {
  const { authData } = useAuthContext()
  const { userData } = useUserDataContext()

  console.log({ authData, userData })

  const isLogedIn = Boolean(authData?.idToken)
  const isRegistered = Boolean(userData?.groupName)

  console.log({ isLogedIn, isRegistered })

  if (isLogedIn && isRegistered) return redirect('/mypage')
  if (isLogedIn && !isRegistered) return redirect('/register')

  return (
    <>
      <div className="flex mt-10">
        <div className="flex-1"></div>
        <div className="w-2/3 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg px-32 py-16 text-center">
          <div className="text-3xl py-5">登録・ログイン</div>
          <SignInWithGitHub onClick={login} />
        </div>
        <div className="flex-1"></div>
      </div>
    </>
  )
}
