'use client'
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation"
import { useAppDispatch,useAppSelector } from '@/Store/hooks'
import { LogoutUser } from '@/Store/Slices/Authentication/Login/LoginSlice'

const Page = () => {
    const history = useRouter();
    const dispatch = useAppDispatch();

    useEffect(()=>{
    dispatch(LogoutUser())
    history.push("/")
    },[dispatch, history])

  return (
    <></>
  )
}

export default Page;