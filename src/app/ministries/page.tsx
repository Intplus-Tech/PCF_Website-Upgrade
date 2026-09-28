import { redirect } from "next/navigation";
import { getMinistries } from "@/lib/api";

// Refetch Sanity content at most once a minute, so published changes
// appear without waiting for a redeploy.
export const revalidate = 60;

export const dynamic = "force-dynamic"; // don't pre-render at build time

export default async function MinistriesPage() {
  // const ministries = await getMinistries();
  const ministries = await getMinistries();
  if (!ministries.length) redirect("/"); // safety fallback
  
  redirect(`/ministries/${ministries[0].slug}`);
}