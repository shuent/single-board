import React, { createContext, useContext, useState, useEffect } from 'react'
import { firebase } from '../firebase'

type AuthContextProps = {
  user: firebase.User | null
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<firebase.User | any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
