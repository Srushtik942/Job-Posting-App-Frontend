import React, { useState } from "react";
import Navbar from "./Navbar";

const PostJob = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "",
    description: "",
    qualification: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      const result = await response.json();
      

      if (!response.ok) {
        alert(result.error || "Failed to post job");
        setLoading(false);
        return;
      }

      alert("Job posted successfully!");

      // Reset form
      setJobData({
        title: "",
        company: "",
        location: "",
        salary: "",
        type: "",
        description: "",
        qualification: "",
      });

      console.log("Job Posted:", result);
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-black">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-5 p-8">
        <h1 className="text-3xl font-semibold mb-6">Post a Job</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Job Title */}
          <div>
            <label className="block font-medium mb-1">Job Title:</label>
            <input
              type="text"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block font-medium mb-1">Company Name:</label>
            <input
              type="text"
              name="company"
              value={jobData.company}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium mb-1">Location:</label>
            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block font-medium mb-1">Salary:</label>
            <input
              type="text"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block font-medium mb-1">Job Type:</label>
            <select
              name="type"
              value={jobData.type}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="">Select job type</option>
              <option value="Full-time (On-site)">Full-time (On-site)</option>
              <option value="Part-time (On-site)">Part-time (On-site)</option>
              <option value="Full-time (Remote)">Full-time (Remote)</option>
              <option value="Part-time (Remote)">Part-time (Remote)</option>
              <option value="Full-time (Hybrid)">Full-time (Hybrid)</option>
            </select>
          </div>

          {/* Job Description */}
          <div>
            <label className="block font-medium mb-1">Job Description:</label>
            <textarea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded h-24 focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* Qualifications */}
          <div>
            <label className="block font-medium mb-1">Job Qualifications:</label>
            <textarea
              name="qualification"
              value={jobData.qualification}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded h-24 focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Posting..." : "Post Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
