
import Link from 'next/link'
import DarkMode from './DarkMode'
const NavW = () => {
  return (
    <div className='w-full h-[8vh] flex justify-center md:justify-end items-center'>


        <Link href="/" className=' border-b-4 border-black dark:border-white text-xl md:mr-auto ml-4'><strong>WellTalkUni</strong></Link>

        <div className=' hidden md:block'>
          <div className='flex'>
            <div className='flex justify-around items-center'>
            <Link className='mx-4' href="/">Home</Link>
            <Link className='mx-4' href="Contacto">Contactanos</Link>
            <DarkMode/>
            </div>

          <div className='flex mx-4'>
            <Link href="/Register">Registrarte</Link>
            <p className='mx-2'> | </p>
            <Link href="Login">Iniciar sesion</Link>
          </div>
          </div>
        </div>

    </div>
  )
}

export default NavW