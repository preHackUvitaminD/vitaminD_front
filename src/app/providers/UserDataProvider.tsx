'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'
import { UserData } from '@/models/UserData'

interface UserContextProps {
  children?: React.ReactNode
  userData?: UserData
  setUserData?: (data: UserData) => void //応急処置
}

const UserDataContext = createContext<UserContextProps>({ userData: undefined })

// デモ用のゴミ実装なので早急に何とかする
export const UserDataProvider: React.FC<UserContextProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | undefined>(undefined)

  useEffect(() => {
    const _userName = localStorage.getItem('userName') as string
    const _groupName = localStorage.getItem('groupName')!
    console.log({ _userName })

    setUserData(
      _userName
        ? { userName: _userName, groupName: _groupName ?? undefined }
        : undefined
    )
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
