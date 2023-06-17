import Link from 'next/link'
import Image from 'next/image'

export const Main: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-4">UserName:WMs784</div>
      <div className="flex justify-center items-center mt-5">
        <Image src="/chara_ex.gif" width={240} height={240} alt="Avatar" />
      </div>
      <div className="flex justify-center mt-5">Lv.1</div>
    </>
  )
}
