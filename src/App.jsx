import { useState } from "react";
import { Button } from "@/components/ui/button";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";

const dummyJobs = [
  {
    id: 1,
    company: "Google",
    position: "Frontend Engineer",
    location: "Remote",
    status: "Applied",
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Backend Developer",
    location: "Bangalore",
    status: "Interviewing",
  },
  {
    id: 3,
    company: "Netflix",
    position: "UI Designer",
    location: "Mumbai",
    status: "Offer",
  },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState(dummyJobs);
  const [filter, setFilter] = useState("All");

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.status === filter);

  return (
    <div className="min-h-screen bg-zinc-100 p-10">
      <div className="flex justify-between items-center max-w-4xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-zinc-800">JobTrackr</h1>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "Add New Job"}
        </Button>
      </div>

      {showForm && <JobForm setShowForm={setShowForm} setJobs={setJobs} />}

      <FilterBar current={filter} setFilter={setFilter} />
      <JobList jobs={filteredJobs} />
    </div>
  );
}

export default App;
