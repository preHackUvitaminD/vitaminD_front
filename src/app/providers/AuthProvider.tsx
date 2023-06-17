import React, { createContext, useEffect, useState, useContext } from 'react'
import { UserData } from '@/models/UserData'
import { onAuthStateChanged } from '@/firebase/auth'

interface AuthContextProps {
  children?: React.ReactNode
  userData?: UserData
}

const AuthContext = createContext<AuthContextProps>({ userData: undefined })

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | undefined>(undefined)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((userData) => {
      console.log(userData)
      setUserData(userData)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ userData }}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
