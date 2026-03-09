import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function HomeCenter() {
  // Make this logout button a standalone component soon and nest it
  async function logout() {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/");
  }
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-gray-900 text-4xl text-center mt-8">Revive TTS</h1>
      {/* <div className="flex gap-x-4 justify-center items-center h-screen"> */}
      <div className="flex gap-4 justify-center mt-16">
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Link href="/dashboard">Dashboard</Link>
        </button>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-6.5 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
