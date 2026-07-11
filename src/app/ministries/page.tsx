import { redirect } from "next/navigation";
import { getMinistries } from "@/lib/api";

export default async function MinistriesPage() {
  const ministries = await getMinistries();
  // Land on the first ministry (Crèche) — the Figma has no separate grid page.
  redirect(`/ministries/${ministries[0].slug}`);
}