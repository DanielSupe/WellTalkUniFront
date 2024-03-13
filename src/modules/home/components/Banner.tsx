import React from 'react'

type Props = {
  items: {}[];
}

const BannerHome = ({items}:Props) => {
  return (
    <div className="sm:h-[20vh] w-full grid grid-cols-2 gap-y-1 sm:grid-cols-4 sm:gap-y-0 gap-x-1">
      {items.map((x:any)=>{
        return(<div key={x.title} className={` dark:bg-darkBG  flex flex-col justify-center items-center md:border-black md:border-r-2 last:border-r-0`}>
          <div className='w-11 h-11 m-4 flex justify-center items-center  dark:text-white'>
            {x.icon}
          </div>
          <p className=' dark:text-white'>{x?.title}</p>
        </div>)
      })}
    </div>
  )
}

export default BannerHome;