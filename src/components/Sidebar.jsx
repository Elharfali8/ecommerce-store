import React from 'react'
import { navLinks } from '../utils/data'
import { NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { FaShoppingCart } from 'react-icons/fa'

const Sidebar = ({isOpen, handleNav}) => {
    
    
  return (
      <aside className={`
        text-white p-6 z-10
      ${isOpen ? 'lg:hidden fixed right-0 left-0 bottom-0 top-[120px] black-bg-color translate-x-0 transition-all ease-in-out duration-150 ' : 'lg:hidden fixed right-0 left-0 bottom-0 top-[120px] black-bg-color translate-x-[-100%] transition-all ease-in-out duration-150 '}
      `}>
          <ul className='mt-4 grid gap-y-6'>
              {navLinks.map((link) => {
                  const { id, path, title } = link
                  return (
                      <li key={id} >
                          <NavLink to={path} className='block py-1 pl-1 rounded-xl transition-all ease-in-out duration-150  hover:pl-4 text-xl poppins-medium tracking-wider' onClick={handleNav}>
                              {title}
                          </NavLink>
                      </li>
                  )
              })}
          </ul>
          <div className='mt-8 flex items-center justify-center'>
              <div className='flex items-center gap-x-3'>
              <button type="button">
                      <CgProfile size={28} />
                  </button>
                  <button type="button">
                      <FaShoppingCart size={28} />
                  </button>
              </div>
          </div>
      </aside>
  )
}

export default Sidebar