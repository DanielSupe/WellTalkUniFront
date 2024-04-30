'use client'

import React, { useEffect } from 'react'
import { useAppDispatch } from '@/Store/hooks'
import CalendarTemplate from '@/modules/Calendar/template/CalendarTemplate'

const page = () => {

  return (
   <>
    <CalendarTemplate/>
   </>
  )
}

export default page