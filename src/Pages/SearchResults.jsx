import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import JobCard from "./JobCard";
import Navbar from "./Navbar";

const SearchResults = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const title = query.get("title");

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch(`${API_URL}/jobs/title?title=${title}`);
      const json = await res.json();
      setJobs(json.jobDetailsResponse || []);
    };
    fetchJobs();
  }, [title]);

  return (
    <div>
    <Navbar/>
    <div className="p-5">
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard
            key={job._id}
            id={job._id}
            title={job.title}
            company={job.company}
            location={job.location}
            type={job.type}
           showDelete={false}
           showUpdate={false}  
            />
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default SearchResults;
