import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "q49ap6qc",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-07-19",
});
