import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from "react-router-dom";
import JobCard from './JobCard';
import Navbar from "./Navbar";

const Home = () => {
  const API_URL = import.meta.env.VITE_API_URL;


  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(`${API_URL}/jobs`);

  useEffect(() => {
    if (data?.jobResponse) {
      setJobs(data.jobResponse);
    }
  }, [data]);

  const handleDeleteJob = (id) => {
    setJobs(prev => prev.filter(job => job._id !== id));
  };

 const handleTitleChange = async (e) => {
  const value = e.target.value;
  setSearchTerm(value);

  if (value.trim().length > 0) {
      navigate(`${API_URL}/jobs/search?title=${value}`);
    return;
  }

  try {
    const res = await fetch(`${API_URL}/jobs/title?title=${value}`);
    const json = await res.json();

    if (json?.jobResponse) {
      setJobs(json.jobResponse);
    }
  } catch (error) {
    console.log("Error fetching title", error);
  }
};


  return (
    <div>
      <Navbar/>

      <div>
        <input
          type='text'
          placeholder='Search by job title...'
          onChange={handleTitleChange}
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
