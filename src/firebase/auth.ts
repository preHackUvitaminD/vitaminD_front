import {
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  GithubAuthProvider,
  signOut,
  signInWithPopup,
  getAdditionalUserInfo,
  setPersistence,
  browserSessionPersistence,
  signInWithCredential,
} from 'firebase/auth'
import firebaseApp from '@/firebase/firebaseApp'
import { UserData } from '@/models/UserData'

const provider = new GithubAuthProvider()
provider.addScope('repo')

let userData: UserData | undefined = undefined

export const login = async (): Promise<void> => {
  const auth = getAuth(firebaseApp)
  await setPersistence(auth, browserSessionPersistence)
  //   const result = signInWithRedirect(auth, provider)
  const result = await signInWithPopup(auth, provider)
  const credential = GithubAuthProvider.credentialFromResult(result)
  const info = getAdditionalUserInfo(result)

  // 応急処置
  localStorage.setItem('accessToken', credential?.accessToken!)
  localStorage.setItem('userName', info?.username!)
}

export function logout(): Promise<void> {
  return new Promise((resolve, reject) => {
    const auth = getAuth(firebaseApp)
    signOut(auth)
      .then(() => resolve())
      .catch((error) => reject(error))
  })
}

export const onAuthStateChanged = (
  callback: (userData: UserData | undefined) => void
) => {
  const auth = getAuth(firebaseApp)

  return onFirebaseAuthStateChanged(auth, async (user) => {
    // const auth = getAuth(firebaseApp)

    console.log(user)

    if (!user) {
      userData = undefined
    } else {
      // 行けると思ってたけど再認証時はGitHubのトークンが降ってこない
      const { token } = await user.getIdTokenResult(true)
      //   const credential = GithubAuthProvider.credential(token)
      //   const result = await signInWithCredential(auth, credential)
      //   const info = getAdditionalUserInfo(result)

      //   // 応急処置
      //   const userName = localStorage.getItem('userName')!
      //   const accessToken = localStorage.getItem('accessToken')!
      const { token: idToken } = await user.getIdTokenResult()

      //   // ログイン状態チェック (TODO: これ誰がチェックすべき？)
      //   const credential = GithubAuthProvider.credential(accessToken)
      //   const isCredentialValid = await signInWithCredential(
      //     auth,
      //     credential
      //   ).catch(() => undefined)
      //   if (!userName || !accessToken || !isCredentialValid) await login()

      userData = {
        // userName,
        // accessToken,
        idToken: token,
      }
    }
    callback(userData)
  })
}
