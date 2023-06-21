export interface SignInWithGitHubProps {
  onClick?: () => void
}

export const SignInWithGitHub: React.FC<SignInWithGitHubProps> = ({
  onClick = () => undefined,
}: SignInWithGitHubProps) => {
  return (
    <button
      className="bg-black px-16 py-3 text-white text-lg rounded-md"
      onClick={onClick}
    >
      GitHubでログイン
    </button>
  )
}
