import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-400 text-white text-2xl py-5'>
        <ul className='flex gap-10'>
          <li className='mx-10'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "opacity-100" : "opacity-50"
              }
            >
              InternShala
            </NavLink>
          </li>

          <div className='flex items-center gap-5'>
            <li>
              <NavLink
                to="/job-posting"
                className={({ isActive }) =>
                  isActive ? "opacity-100" : "opacity-50"
                }
              >
                Job Posting
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/post-job"
                className={({ isActive }) =>
                  isActive ? "opacity-100" : "opacity-50"
                }
              >
                Post a job
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
