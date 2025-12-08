import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import JobCard from './JobCard';
import Navbar from "./Navbar";

const Home = () => {
  const API_URL = import.meta.env.VITE_API_URL;


  const [jobs, setJobs] = useState([]);

  const { data, loading, error } = useFetch(`${API_URL}/jobs`);

  useEffect(() => {
    if (data?.jobResponse) {
      setJobs(data.jobResponse);
    }
  }, [data]);

  const handleDeleteJob = (id) => {
    setJobs(prev => prev.filter(job => job._id !== id));
  };

  return (
    <div>
      <Navbar/>

      <div>
        <input
          type='text'
          placeholder='Search by job title...'
          className="w-1/2 px-4 py-3 my-5 mx-5 border border-gray-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="px-6">
        <h1 className='text-4xl font-bold mb-5'>All Jobs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              id={job._id}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              onDelete={handleDeleteJob}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
