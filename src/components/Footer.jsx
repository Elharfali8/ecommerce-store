import React from 'react'
import { footerIcon } from '../utils/data'

const Footer = () => {
  return (
      <footer className='bg-[#F0F0F0]'>
          <div className="container mx-auto px-4 lg:px-2 xl:px-1 py-6 lg:py-8">
              <div className='h-[2px] w-full bg-gray-400' />
              <div className='flex flex-col lg:flex-row justify-between items-center mt-3'>
                  <p className='text-lg lg:text-xl text-color'>
                      <span className='poppins-medium black-color tracking-wider'>PrimeStore</span> {' '}
                      &copy; {new Date().getFullYear()}, All Rights Reserved
                  </p>
                  <div className='flex flex-wrap gap-1'>
                      {footerIcon.map((ic) => {
                          const { id, icon } = ic
                          return (
                              <img src={icon} key={id} alt='icons' />
                          )
                      })}
                  </div>
              </div>
          </div>
    </footer>
  )
}

export default Footer