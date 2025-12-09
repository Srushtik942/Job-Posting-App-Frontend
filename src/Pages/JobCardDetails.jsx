import React from "react";
import { useNavigate } from "react-router-dom";

const JobCardDetails = ({ id, title, company, location, type }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-xl shadow-sm p-5 bg-white">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2">
        <span className="font-semibold">Company name:</span> {company}
      </p>

      <p className="mt-1">
        <span className="font-semibold">Location:</span> {location}
      </p>

      <p className="mt-1 mb-3">
        <span className="font-semibold">Job Type:</span>{" "}
        {Array.isArray(type) ? type[0] : type}
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => navigate(`/jobs/details/${id}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default JobCardDetails;
