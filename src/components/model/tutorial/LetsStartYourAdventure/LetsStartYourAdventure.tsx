import Link from 'next/link'

export const LetsStartYourAdventure: React.FC = () => {
  return (
    <Link href="/signin">
      <div className=" px-16 py-3 bg-orange-900 text-white text-bold text-2xl rounded-md hover:bg-orange-800 duration-100 ease-linear">
        さあ、冒険をはじめよう！
      </div>
    </Link>
  )
}
