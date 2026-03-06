import Cards from "./Cards";
import type { JobListItem } from "@/lib/supabase/types/jobs";

export default function JobsDashboard({ jobs }: {jobs: JobListItem[]}) {
  return (
    <div>
      <p className="text-4xl text-center text-black mr-[25%]">Jobs</p>
      {jobs.map((j) => (
        <Cards job={j} key={j.id}/>
      ))}
    </div>
  );
}
