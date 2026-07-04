"use client"
import { SessionProvider } from "next-auth/react" //Kaha kaha pe mei apne useSession hook ka use karunga uske liye import kara

const SessionWrapper = ({children}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default SessionWrapper