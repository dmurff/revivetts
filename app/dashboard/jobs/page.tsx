import "server-only";
import { createClient } from "@/lib/supabase/server";
import JobsDashboard from "@/app/components/JobsDashboard";

async function getJobs() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("jobs").select("*");
  if (error) {
    console.error(error);
  }
  return data;
}
export default async function Jobs() {
  const jobs = await getJobs();

  return <JobsDashboard jobs={jobs} />;
}
