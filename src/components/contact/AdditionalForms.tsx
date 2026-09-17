"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { OtherEnquiryForm } from "@/components/forms/RequestForms";
import { GIFT_AID, JOIN_MINISTRY } from "@/components/forms/formStyles";

// Card artwork — file lives in /public.
const CARD_IMAGE = "/church-exterior.jpeg";

export function AdditionalForms() {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState("");
  const [presetMinistry, setPresetMinistry] = useState("");
  const searchParams = useSearchParams();

  // /contact?enquiry=gift-aid           → Gift Aid preselected
  // /contact?enquiry=join-ministry&ministry=X → Join a Ministry, ministry X
  useEffect(() => {
    const enquiry = searchParams.get("enquiry");
    if (enquiry === "gift-aid") {
      setPreset(GIFT_AID);
      setOpen(true);
    } else if (enquiry === "join-ministry") {
      setPreset(JOIN_MINISTRY);
      setPresetMinistry(searchParams.get("ministry") ?? "");
      setOpen(true);
    }
  }, [searchParams]);

  // Close on Escape, and stop the page scrolling behind the modal.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    setPreset("");
    setPresetMinistry("");
  }

  return (
    <>
      <div id="enquiry" className="mt-6 grid scroll-mt-28 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal className="overflow-hidden rounded-xl">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative block h-40 w-full appearance-none overflow-hidden rounded-xl border-0 bg-transparent p-0 leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-700 focus-visible:ring-offset-2 sm:h-48"
          >
           <Image
                src={CARD_IMAGE}
                alt=""
                fill
                className="rounded-xl object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center rounded-xl bg-gradient-to-t from-wine-900/55 via-wine-900/25 to-wine-900/10 ">
              <span className="font-display text-xl font-bold text-cream-50 sm:text-2xl">
                Other Requests
              </span>
              <span className="text-[11px] font-semibold text-cream-50/90">
                Click to see the form
              </span>
            </span>
          </button>
        </Reveal>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 py-10"
          onClick={close}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>

            <OtherEnquiryForm
              initialEnquiryType={preset}
              initialMinistry={presetMinistry}
            />
          </div>
        </div>
      )}
    </>
  );
}
