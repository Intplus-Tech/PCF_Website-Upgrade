import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we handle and protect your information"
        image="/contact-pics.png"
      />
      <section className="py-20 lg:py-24">
        <Container size="narrow">
          <div className="prose max-w-none text-ink">
            <p className="text-lg leading-relaxed text-muted">
              Our Privacy Policy is being finalised and will be available here shortly.
              If you have any questions about how we handle your information in the
              meantime, please contact us at{" "}
              <a href="mailto:office@pcfministries.org" className="text-wine-700 hover:underline">
                office@pcfministries.org
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}