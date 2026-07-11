import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl text-wine-700">404</p>
      <h1 className="mt-4 text-3xl">This page wandered off</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you're looking for doesn't exist or has moved. Let's get you
        back home.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Back Home</Button>
        <Button href="/contact" variant="outline">
          Contact Us
        </Button>
      </div>
    </Container>
  );
}
