import { useRef } from 'react'
import { useAuthContext } from '@/providers/AuthProvider'
import { useUserDataContext } from '@/providers/UserDataProvider'
import { redirect } from 'next/navigation'
import { useMutation } from 'react-query'
import { register, RegisterProps } from '@/api/backend/register'

export const Register: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { authData } = useAuthContext()
  const { setUserData, userData } = useUserDataContext()

  const { mutate, isLoading, isError } = useMutation(
    (prop: RegisterProps) => register(prop),
    {
      onSuccess: (data, userData) => {
        console.log(data)
        setUserData?.(userData)
      },
      onError: (error) => {
        console.error(error)
      },
    }
  )

  const isLogedIn = Boolean(authData?.idToken)
  const isRegistered = Boolean(userData?.groupName)

  console.log({ isRegistered, isLogedIn })
  console.log(userData)

  if (!isLogedIn) redirect('/signin')
  if (isRegistered) redirect('/')

  if (isLoading) {
    return <div>Now Loading...</div>
  }

  return (
    <>
      <div className="flex mt-10">
        <div className="flex-1"></div>
        <div className="w-2/3 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg px-32 py-16 text-center">
          <div className="text-3xl py-5">登録・ログイン</div>
          {isError && <div>An error occured. Please retry.</div>}
          <form
            onSubmit={(e) => {
              // 応急処置
              e.preventDefault()

              if (!inputRef.current?.value) return

              mutate({
                userName: userData?.userName!,
                groupName: inputRef.current!.value,
              })
            }}
          >
            <div>加入するグループ名を入力してください</div>
            <div className="py-4">
              <input ref={inputRef} type="text" />
            </div>
            <div>
              <button
                type="submit"
                className="px-6 py-2 border bg-black text-white rounded-md"
              >
                登録
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1"></div>
      </div>
    </>
  )
}
