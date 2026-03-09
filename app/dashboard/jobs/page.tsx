import "server-only";
import { createClient } from "@/lib/supabase/server";
import JobsDashboard from "@/app/components/JobsDashboard";
import { redirect } from "next/navigation";

async function getJobs() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    redirect("/");
  }

  const { data, error } = await supabase.from("jobs").select("*");
  if (error) {
    console.error(error);
  }
  return data;
}
export default async function Jobs() {
  const jobs = await getJobs();
  console.log(jobs);
  return <JobsDashboard jobs={jobs} />;
}
