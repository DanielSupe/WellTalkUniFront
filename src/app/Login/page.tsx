import LoginTemplate from '@/modules/Login/template'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Hace tiempo no te vemos!",
};

const page = () => {
  return (
    <LoginTemplate/>
  )
}

export default page