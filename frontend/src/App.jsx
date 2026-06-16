
import React from 'react'
import { useUser, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import './App.css'

function App() {
  const { isSignedIn } = useUser()

  return (
    <>
      <header >
        <h1>VC Interview App</h1>
        <nav>
          {!isSignedIn ? (
            <>
              <SignInButton mode="modal">Sign In</SignInButton>
              
            </>
          ) : (
            <UserButton />
          )}
        </nav>
      </header>

      
    </>
  )
}

export default App
