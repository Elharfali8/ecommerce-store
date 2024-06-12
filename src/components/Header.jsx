import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
      <header>
          <div className='h-[40px] w-full flex items-center justify-center black-bg-color text-white'>
              <div className='flex items-center gap-x-4 lg:text-lg poppins-medium'>
                  <Link className=' border-b border-white transition ease-in-out duration-150 hover:text-gray-400'>
                      Sign up
                  </Link>
                  <span>or</span>
                  <Link  className=' border-b border-white transition ease-in-out duration-150 hover:text-gray-400'>
                      Sign in
                  </Link>
              </div>
          </div>
            <Navbar />
    </header>
  )
}

export default Header