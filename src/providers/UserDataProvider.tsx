'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'
import { UserData } from '@/models/UserData'

interface UserContextProps {
  children?: React.ReactNode
}

interface UserContextValues {
  userData?: UserData | null
  setUserData?: (data: UserData) => void //応急処置
}

const UserDataContext = createContext<UserContextValues>({
  userData: undefined,
})

// デモ用のゴミ実装なので早急に何とかする
export const UserDataProvider: React.FC<UserContextProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | undefined | null>(
    undefined
  )

  useEffect(() => {
    const callback = () => {
      const userName = localStorage.getItem('userName') ?? undefined
      const groupName = localStorage.getItem('groupName') ?? undefined
      setUserData(userName ? { userName, groupName } : null)
    }
    window.addEventListener('storage', callback)
    callback()

    return () => window.removeEventListener('storage', callback)
  }, [])

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData: (data) => {
          localStorage.setItem('userName', data.userName)
          data.groupName && localStorage.setItem('groupName', data.groupName)
          setUserData(data)
        },
      }}
    >
      {children}
    </UserDataContext.Provider>
  )
}

export const useUserDataContext = () => useContext(UserDataContext)
