import type { JobListItem } from "@/lib/supabase/types/jobs";

export default function Cards({ job }: { job: JobListItem }) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm mb-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {job.status}
        </h3>
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">
        {job.id}
        {/* <ul className="flex justify-between text-sm text-gray-500">
          <li>
            Job 1:<span className="text-gray-900 ml-2">Active</span>
          </li>
          <li>
            Job 1:<span className="text-gray-900 ml-2">Active</span>
          </li>
          <li>
            Job 1:<span className="text-gray-900 ml-2">Active</span>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
