import React from 'react'
import { NavLink } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import JobCard from './JobCard';

const Home = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const {data,loading, error} = useFetch(`${API_URL}/jobs`);
  console.log(data);
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
      <div>
        <input type='text' placeholder='Search by job title...'
          className="w-1/2 px-4 py-3 my-5 mx-5 border border-gray-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"/>
    </div>
    <div className="px-6">
  <h1 className='text-4xl font-bold mb-5'>All Jobs</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {data?.jobResponse?.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            company={job.company}
            location={job.location}
            type={job.type}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Home
