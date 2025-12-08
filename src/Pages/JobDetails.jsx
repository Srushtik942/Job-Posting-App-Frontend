import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function JobDetails() {
  const { id } = useParams();            
  const [job, setJob] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await fetch(
          `${API_URL}/jobs/details/${id}`
        );

        const data = await res.json();
        console.log("JOB DETAILS:", data);

        setJob(data.jobDetails);

      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!job) return <h1 className="text-black">Loading...</h1>;

  return (
    <div className="text-white">
      <Navbar />

      <h1 className="text-3xl font-bold text-black mt-10 mx-5">Job Details</h1>

      <div className="bg-white text-black p-6 rounded-b-xl mt-4">
        <h2 className="text-2xl font-semibold mb-4">{job.title}</h2>

        <div className="border border-gray-300 rounded-lg p-6 bg-white text-black">
          <p><strong>Company Name:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Job Type:</strong> {job.type?.[0]}</p>

          <p className="mt-4">
            <strong>Description:</strong> {job.description}
          </p>

          <p className="mt-4 font-semibold">Qualifications:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>{job.qualification}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
