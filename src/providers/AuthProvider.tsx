'use client'
import React, { createContext, useEffect, useState, useContext } from 'react'
import { AuthData } from '@/models/AuthData'
import { onAuthStateChanged } from '@/firebase/auth'

interface AuthContextProps {
  children?: React.ReactNode
  authData?: AuthData | undefined | null
}

const AuthContext = createContext<AuthContextProps>({ authData: undefined })

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData | undefined | null>(
    undefined
  )

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authData) => {
      // console.log(authData)
      setAuthData(authData)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ authData }}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
