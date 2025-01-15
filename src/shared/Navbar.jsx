import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/Screenshot 2024-11-19 141752.png'
import { AuthContext } from '../provider/AuthProvider'
import { RiMenuAddFill } from 'react-icons/ri'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full bg-white'>
      <div className='py-4 border-b-[1px]'>
          <div className='flex items-center justify-between gap-3 md:gap-0'>
            <div className='flex gap-2 items-center'>
              <img src="https://i.ibb.co.com/n0CqRT3/freestocks-nss2e-Rz-Qwgw-unsplash.jpg" alt='logo' width='100' height='100' className='rounded-full' />
              <p className='font-extrabold text-2xl text-blue-500'>Good Health</p>
            </div>
            <div className='lg:flex lg:gap-9 font-semibold'>
              <Link to="/">Home</Link>
              <p>Available Camps</p>
            </div>
            <div className='relative'>
              <div className='flex flex-row items-center gap-3'>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                  <RiMenuAddFill />
                  <div className='hidden md:block'>
                    <img
                      className='rounded-full'
                      referrerPolicy='no-referrer'
                      src={user && user.photoURL ? user.photoURL : img}
                      alt='profile'
                      height='30'
                      width='30'
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                  <div className='flex flex-col cursor-pointer'>

                    {user ? (
                      <>
                        <div className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>{user && user.displayName ? user.displayName : <p>User Name</p>}</div>
                        <Link
                          to='/dashboard'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to='/login'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Join Now
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Navbar
