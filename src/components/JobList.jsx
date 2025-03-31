import JobCard from "./JobCard";

function JobList({ jobs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {jobs.map((job) => (
        <JobCard job={job} />
      ))}
    </div>
  );
}

export default JobList;
