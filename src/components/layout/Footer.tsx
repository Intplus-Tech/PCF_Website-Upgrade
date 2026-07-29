import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { mainNav, site } from "@/lib/config/site";

// Weekly services as shown in the Figma (label + time)
const weeklyServices = [
  { name: "Sundays Morning", time: "11:00 AM" },
  { name: "Sundays Evening", time: "6:45 PM" },
  { name: "Tuesday", time: "7:30 PM" },
  { name: "Thursday", time: "7:30 PM" },
];

  
export function Footer() {
  return (
    <footer style={{ backgroundColor: "#E9E9E9" }} className="mt-24 text-ink">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:-ml-32 lg:grid-cols-[auto_1fr_1fr_1fr_1fr] lg:gap-8">
         {/* Logo */}
          <div className="flex justify-center sm:col-span-2 lg:col-span-1 lg:block">
            <Image
              src="/Footerlogo-pics.jpg"
              alt={`${site.name} logo`}
              width={220}
              height={220}
              className="h-32 w-32 rounded-full object-contain sm:h-40 sm:w-40 lg:h-44 lg:w-44"
            />
          </div>

          {/* Weekly Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-ink">Weekly Services:</h3>
            <ul className="space-y-2 text-sm text-ink/80">
              {weeklyServices.map((s) => (
                <li key={s.name} className="flex justify-between gap-3">
                  <span>{s.name}</span>
                  <span>– {s.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Office & Service Times */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-ink">Office &amp; Service Times:</h3>
            <div className="space-y-3 text-sm text-ink/80">
              <p>
                <a href={`tel:${site.phone}`} className="hover:text-wine-700">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-wine-700">
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-ink">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {mainNav.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink/80 transition-colors hover:text-wine-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay In Touch */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-ink">Stay In Touch</h3>
            <p className="text-sm text-ink/80">Like, follow and Share content from our website?</p>
              <div className="mt-4 flex items-center gap-3">
  <a href={site.socials.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70" style={{ color: "#FF0000" }}>
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.5-.4-5.2a2.7 2.7 0 0 0-1.9-1.9C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.7.4a2.7 2.7 0 0 0-1.9 1.9C1 8.5 1 12 1 12s0 3.5.4 5.2a2.7 2.7 0 0 0 1.9 1.9c1.8.4 8.7.4 8.7.4s6.9 0 8.7-.4a2.7 2.7 0 0 0 1.9-1.9C23 15.5 23 12 23 12zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z"/></svg>
  </a>

  <a href="#" aria-label="Telegram" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70" style={{ color: "#26A5E4" }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3l-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.3-8.4c.4-.4-.1-.6-.6-.2L6.2 13.2l-4.9-1.5c-1.1-.3-1.1-1 .2-1.5l19.2-7.4c.9-.3 1.7.2 1.4 1.5z"/></svg>
  </a>

  <a href={site.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70" style={{ color: "#E4405F" }}>
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"/></svg>
  </a>

  <a href={site.socials.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70" style={{ color: "#1877F2" }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
  </a>
</div>
            <a href="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-wine-700 hover:text-wine-800">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2"/></svg>
              Get Direction
            </a>
          </div>
        </div>
      </Container>

      {/* Copyright bar */}
      <div style={{ backgroundColor: "#9E9E9E" }} className="py-5 text-center text-sm text-ink/90">
        @Copyright PCFministries {new Date().getFullYear()}
      </div>
    </footer>
  );
}