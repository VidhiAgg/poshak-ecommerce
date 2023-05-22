import React, { useState } from 'react'

export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {
    const [logged, setLoggedSatus] = useState(false)
  return (
    <AuthContextProvider value={
        {}
    }>
        {children}
    </AuthContextProvider>
  )
}

export default AuthContext