import { useEffect } from 'react'
import Image from 'next/image'
import { useAuthContext } from '@/providers/AuthProvider'
import { useUserDataContext } from '@/providers/UserDataProvider'
import { Character } from '@/components/model/character/Character'

const OWNER = '<OWNER>'
const REPO = '<REPO>'

export const Main: React.FC = () => {
  const { authData } = useAuthContext()
  const { userData } = useUserDataContext()
  const token = authData?.idToken
  const groupName = userData?.groupName
  // const token = userData?.accessToken

  // // アクセストークンを使用してGitHub API（GET /Issues）へリクエストする
  // useEffect(() => {
  //   if (token) {
  //     fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
  //       headers: {
  //         Authorization: `token ${token}`,
  //         Accept: 'application / vnd.github.v3 + json',
  //       },
  //     }).then((result) => {
  //       result.json().then((result) => {
  //         console.log(result)
  //       })
  //     })
  //   }
  // }, [token])

  return (
    <div>
      <div
        className="text-4xl flex h-24 justify-center my-10 mx-96 py-7 bg-gray-200/30 backdrop-blur-lg
    rounded-md border border-gray-200/30 shadow-lg"
      >
        {userData?.userName}
      </div>
      <div className="flex justify-center items-center mt-32">
        {/* <Image
          style={{ imageRendering: 'pixelated' }}
          src="/chara_ex.gif"
          width={280}
          height={280}
          alt="Avatar"
        /> */}
        <Character groupName={groupName!} />
      </div>
      <div className="text-3xl flex justify-center mt-5">Lv.1</div>
    </div>
  )
}
