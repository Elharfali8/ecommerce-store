import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
      <div className='min-h-[100vh] hero-bg '>
          <div className="container mx-auto px-4 lg:px-2 xl:px-1 grid lg:grid-cols-2 h-full">
              <div></div>
              <div className='min-h-[100vh] flex  items-center text-white '>
                  <div className='bg-gray-400 bg-opacity-25 p-4 rounded-2xl'>
                  <h1 className='text-sh text-5xl lg:text-6xl xl:text-7xl mb-2 tracking-wider'>Welcome to <span>PrimeStore</span></h1>
                      <h3 className='text-sh text-2xl lg:text-3xl xl:text-4xl text-[#F2F0F1]'>Your one-stop shop for the latest and greatest products.</h3>
                      <div className='mt-6 text-black'>
                          <Link to='/products'  className='px-10 py-2 rounded-xl bg-[#F2F0F1] text-lg lg:text-xl poppins-medium tracking-wider'>
                              Shop now
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Hero