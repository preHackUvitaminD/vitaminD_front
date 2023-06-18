import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuthContext } from '@/app/providers/AuthProvider'
import { login } from '@/firebase/auth'

const OWNER = '<OWNER>'
const REPO = '<REPO>'

export const Main: React.FC = () => {
  const { userData } = useAuthContext()
  const token = userData?.idToken
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
    <>
      <div className="flex justify-center mt-4">UserName:WMs784</div>
      <div className="flex justify-center items-center mt-5">
        <Image
          style={{ imageRendering: 'pixelated' }}
          src="/chara_ex.gif"
          width={240}
          height={240}
          alt="Avatar"
        />
      </div>
      <div className="flex justify-center mt-5">Lv.1</div>

      <div>
        {token ? (
          <span></span>
        ) : (
          <div>
            <button onClick={() => login()}>login</button>
          </div>
        )}
        {/* <Link href="/ranking">Ranking</Link> */}
      </div>
    </>
  )
}
