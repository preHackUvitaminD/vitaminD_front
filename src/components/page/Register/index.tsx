import { useRef } from 'react'
import { useAuthContext } from '@/app/providers/AuthProvider'
import { useUserDataContext } from '@/app/providers/UserDataProvider'
import { redirect } from 'next/navigation'

export const Register: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { authData } = useAuthContext()
  const { setUserData, userData } = useUserDataContext()

  const isLogedIn = Boolean(authData?.idToken)
  const isRegistered = Boolean(userData?.groupName)

  console.log({ isRegistered, isLogedIn })
  console.log(userData)

  if (!isLogedIn) redirect('/signin')
  if (isRegistered) redirect('/')

  return (
    <>
      <form
        onSubmit={(e) => {
          // 応急処置
          e.preventDefault()

          if (!inputRef.current?.value) return

          if (!userData) throw 0

          setUserData?.({
            userName: userData?.userName!,
            groupName: inputRef.current!.value,
          })
        }}
      >
        <div>加入するグループ名を入力してください</div>
        <input ref={inputRef} type="text" />
        <input type="submit" value="Register" />
      </form>
    </>
  )
}
