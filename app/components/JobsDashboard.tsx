import Cards from "./Cards";

export default function JobsDashboard({ jobs }: { jobs: job: [] }) {
  return (
    <div>
      <p className="text-4xl text-center text-black mr-[25%]">Jobs</p>
      {jobs.map((j) => (
        <Cards key={j.id}>{j.status}</Cards>
      ))}
    </div>
  );
}
