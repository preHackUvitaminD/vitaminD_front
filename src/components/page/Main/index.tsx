import Link from 'next/link'
import Image from 'next/image'

export const Main: React.FC = () => {
  return (
    <>
      <div>UserName:WMs784</div>
      <div className="flex justify-center mt-4">
        <Image src="/chara_ex.gif" width={240} height={240} alt="Avatar" />
      </div>
    </>
  )
}
