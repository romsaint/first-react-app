import { createContext, useState } from "react";

export const LoginContext = createContext({
    user: false,
    setUser: null
})

export function LoginProvider({children}){
    const [user, setUser]= useState(null)

    return (
        <LoginContext.Provider value={{ user, setUser }}>
            {children}
        </LoginContext.Provider>
    )
}