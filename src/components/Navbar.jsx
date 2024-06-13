import logo from '../assets/main-logo.png'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../utils/data'
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ isOpen, handleNav, setIsOpen }) => {
    
  return (
      <nav className=' top-0 h-20 bg-white relative w-full'>
          <div className="container mx-auto h-full flex items-center justify-between px-4 lg:px-2 xl:px-1">
              <Link to='/' onClick={() => setIsOpen(false)}>
                  <img src={logo} alt="main-logo" className='w-[110px]' />
              </Link>
              <ul className='hidden lg:flex items-center gap-x-1'>
                  {navLinks.map((link) => {
                      const { id, title, path } = link
                      return (
                          <li key={id}>
                              <NavLink to={path} className='text-lg poppins-medium tracking-widest px-5 py-2 rounded-xl'>
                                {title}
                              </NavLink>
                          </li>
                      )
                  })}
              </ul>
              <div className='hidden lg:flex items-center justify-center'>
                  <input type="text" className='h-[40px] bg-[#F2F0F1] rounded-xl pl-2 focus:outline-none text-lg tracking-wider' placeholder='Search...' />
              </div>
              <div className='hidden lg:flex items-center gap-x-3'>
                  <button type="button">
                      <CgProfile size={28} />
                  </button>
                  <button type="button">
                      <FaShoppingCart size={28} />
                  </button>
              </div>
              <div className='lg:hidden flex items-center justify-center'>
                  {isOpen ? (
                      <button type="button" onClick={handleNav}>
                          <FaTimes size={28} />
                    </button>
                  ) : (
                    <button type="button" onClick={handleNav}>
                        <FaBars size={28} />
                    </button>
                  )}
              </div>
          </div>
    </nav>
  )
}

export default Navbar