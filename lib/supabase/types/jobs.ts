import type { Database } from "./database";

export type JobRow = Database["public"]["Tables"]["jobs"]["Row"];
export type JobInsert = Database["public"]["Tables"]["jobs"]["Insert"];
export type JobUpdate = Database["public"]["Tables"]["jobs"]["Update"];
// For dashboard list UI (only fields you render)
export type JobListItem = Pick<JobRow, "id" | "status">;
