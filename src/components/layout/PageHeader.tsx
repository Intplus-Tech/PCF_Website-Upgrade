import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function PageHeader({
  title,
  subtitle,
  eyebrow,
  image,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden  text-cream-50">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image src={image} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
    <Container className="flex min-h-screen flex-col justify-center pt-40 pb-24 text-center">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
            {eyebrow}
          </p>
        )}
        <h1 className="font-body text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-cream-100/90">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}