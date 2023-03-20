import Login from '@components/Signup/Login'
import dynamic from 'next/dynamic'
import React from 'react'

function logIn() {
  const DynamicLogin = dynamic(() => import("@components/Signup/Login"), {
    ssr: false,
  })
  return (
    <DynamicLogin />
  )
}

export default logIn