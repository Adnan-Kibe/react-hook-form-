import React from 'react'

interface AuthLayoutProps{
    children : React.ReactNode
}

const AuthLayout = ( { children } : AuthLayoutProps ) => {
  return (
    <section className='w-full'>
        <div className='h-screen flex items-center justify-center'>
            {children}
        </div>
    </section>
  )
}

export default AuthLayout