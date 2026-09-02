import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { mainNav, site } from "@/lib/config/site";
import { PrivacyPolicyModal } from "@/components/legal/PrivacyPolicyModal";

// Weekly services (event names + days per client request)
// const weeklyServices = [
//   { name: "Sunday Morning", time: "11:00 AM" },
//   { name: "Sunday Evening", time: "6:45 PM" },
//   { name: "Bible Study (Tuesday)", time: "7:30 PM" },
//   { name: "Prayer Meeting (Thursday)", time: "6:30 PM" },
// ];


const weeklyServices = [
  "Sunday Morning at 11:00 AM",
  "Sunday Evening at 6:45 PM",
  "Tuesday Bible Study at 7:30 PM",
  "Thursday Prayer Meeting at 6:30 PM",
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#E9E9E9" }} className="mt-24 text-ink">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_1fr_1fr] lg:gap-10">
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
                  <li key={s} className="whitespace-nowrap">{s}</li>
                ))}
              </ul>
            </div>

          {/* Address */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-ink">Address:</h3>
            <address className="space-y-1 text-sm not-italic text-ink/80">
              <p>West Bridge St,</p>
              <p>Falkirk</p>
              <p>Scotland</p>
              <p>FK1 5RJ</p>
              <p className="pt-2">
                <a href="tel:01324633100" className="hover:text-wine-700">Tel: 01324 633100</a>
              </p>
              <p>
                <a href="mailto:office@pcfministries.org" className="hover:text-wine-700">office@pcfministries.org</a>
              </p>
            </address>
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

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-ink">Social</h3>
            <div className="flex flex-col gap-3">
              <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-ink/80 transition-colors hover:text-wine-700">
                <span style={{ color: "#1877F2" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
                </span>
                Facebook
              </a>
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-ink/80 transition-colors hover:text-wine-700">
                <span style={{ color: "#E4405F" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"/></svg>
                </span>
                Instagram
              </a>
              <a href={site.socials.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-ink/80 transition-colors hover:text-wine-700">
                <span style={{ color: "#FF0000" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.5-.4-5.2a2.7 2.7 0 0 0-1.9-1.9C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.7.4a2.7 2.7 0 0 0-1.9 1.9C1 8.5 1 12 1 12s0 3.5.4 5.2a2.7 2.7 0 0 0 1.9 1.9c1.8.4 8.7.4 8.7.4s6.9 0 8.7-.4a2.7 2.7 0 0 0 1.9-1.9C23 15.5 23 12 23 12zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z"/></svg>
                </span>
                YouTube
              </a>
              {/* <a href={site.socials.telegram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-ink/80 transition-colors hover:text-wine-700">
  <span style={{ color: "#26A5E4" }}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3l-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.3-8.4c.4-.4-.1-.6-.6-.2L6.2 13.2l-4.9-1.5c-1.1-.3-1.1-1 .2-1.5l19.2-7.4c.9-.3 1.7.2 1.4 1.5z"/></svg>
  </span>
  Telegram
</a> */}
            </div>
          </div>
        </div>
      </Container>

         {/* Copyright bar */}
          <div style={{ backgroundColor: "#9E9E9E" }} className="py-5 text-center text-sm text-ink/90">
            <p>
              @Copyright PCFministries {new Date().getFullYear()}
              {" · "}
               <PrivacyPolicyModal />
            </p>
          </div>
    </footer>
  );
}