import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "7y3yobqx", // your actual project ID
  dataset: "production",
  apiVersion: "2025-01-01", // any valid date (use current)
  useCdn: true, // `false` if you want fresh data every time
});
