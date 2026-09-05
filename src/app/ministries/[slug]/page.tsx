import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { MinistriesExplorer } from "@/components/ministries/MinistriesExplorer";
import { getMinistries, getMinistry, getPageHeader } from "@/lib/api";

type Params = { slug: string };

export async function generateStaticParams() {
  const ministries = await getMinistries();
  return ministries.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Ministries" };
}

export default async function MinistryDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const [ministry, ministries, header] = await Promise.all([
    getMinistry(slug),
    getMinistries(),
    getPageHeader("ministries"),
  ]);
  if (!ministry) notFound();

  return (
    <>
      <PageHeader
        title={header?.title ?? "Ministries"}
        subtitle={header?.subtitle ?? "Our ministries gives you the opportunity to get involved and make a difference."}
        image={header?.image ?? "/ministries-bannersnew.jpg"}
      />

      <MinistriesExplorer ministries={ministries} initialSlug={slug} />
    </>
  );
}
