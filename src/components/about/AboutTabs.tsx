"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import {
  aboutImages,
  aboutTabs,
  beliefs,
  coreValues,
  destiny,
  ourValues,
  storyChapters,
  workOfChurch,
  type AboutTabId,
} from "@/lib/config/about";

/* -------------------------------------------------------------------------- */
/*  Sidebar                                                                   */
/* -------------------------------------------------------------------------- */

function AboutSidebar({
  active,
  onSelect,
}: {
  active: AboutTabId;
  onSelect: (id: AboutTabId) => void;
}) {
  return (
    <aside
      className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:flex-col lg:gap-4 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="About sections"
    >
      {aboutTabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelect(tab.id)}
            aria-current={isActive ? "true" : undefined}
            className={`group relative w-44 shrink-0 overflow-hidden rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-700 focus-visible:ring-offset-2 sm:w-56 lg:w-full ${
              isActive ? "h-24 lg:h-44" : "h-20 lg:h-28"
            }`}
          >
            <Image
              src={tab.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 224px, 420px"
            />
            <div
              className={`absolute inset-0 transition-colors ${
                isActive
                  ? "bg-wine-900/25"
                  : "bg-wine-900/70 group-hover:bg-wine-900/55"
              }`}
            />
            <span className="absolute inset-0 flex items-center justify-center px-3 text-center text-sm font-semibold uppercase tracking-wide text-cream-50 sm:text-base lg:text-lg">
              {tab.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/*  View: Work of the Church                                                  */
/* -------------------------------------------------------------------------- */

function WorkView() {
  return (
    <div>
      <Reveal>
        <div className="shine relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-[16/10]">
          <Image
            src={aboutImages.workFeature}
            alt="Pastor David and Elaine Morrison"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <blockquote className="bg-[#0f0f0f] p-5 text-cream-50 sm:p-7">
          <p className="font-body text-lg font-medium leading-snug sm:text-2xl">
            &ldquo;{workOfChurch.quote}&rdquo;
          </p>
        </blockquote>
      </Reveal>

      <Reveal delay={0.15}>
        <h3 className="mt-8 font-body text-2xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {workOfChurch.heading}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
          {workOfChurch.lead}
        </p>
        <p className="mt-4 border-l-2 border-ink/15 pl-4 text-sm leading-relaxed text-muted sm:text-base">
          {workOfChurch.body}
        </p>
      </Reveal>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  View: Step Into Your Destiny                                              */
/* -------------------------------------------------------------------------- */

function DestinyView() {
  return (
    <div>
      <Reveal>
        <div className="shine relative aspect-[16/9] w-full overflow-hidden rounded-xl">
          <Image
            src={aboutImages.destinyLadder}
            alt="A ladder ascending into a bright sky"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="rounded-xl bg-wine-700 p-6 text-cream-50 sm:p-8">
            <h3 className="font-body text-2xl font-extrabold tracking-tight">
              {destiny.title}
            </h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <ul className="space-y-2 text-sm font-semibold uppercase tracking-wide">
                {destiny.steps.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cream-50" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold leading-relaxed">
                {destiny.callout}
              </p>
            </div>
          </div>

          <p className="mt-6 border-l-2 border-ink/20 pl-4 text-sm leading-relaxed text-muted sm:text-base">
            {destiny.mission}
          </p>
        </Reveal>

        <Reveal direction="right">
          <ul className="space-y-5">
            {coreValues.map((v, i) => (
              <li
                key={v.title}
                className={i > 0 ? "border-t border-ink/10 pt-5" : ""}
              >
                <p className="flex items-center gap-2 text-base font-bold text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-wine-700" />
                  {v.title}
                </p>
                <p className="mt-1 pl-4 text-sm leading-relaxed text-muted">
                  {v.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  View: Our Values                                                          */
/* -------------------------------------------------------------------------- */

function ValuesView() {
  return (
    <div>
      <Reveal>
        <div className="shine relative aspect-[16/9] w-full overflow-hidden rounded-xl">
          <Image
            src={aboutImages.valuesFeature}
            alt="An open Bible"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 border-t border-ink/10 pt-8">
          <h3 className="font-body text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {ourValues.heading}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink sm:text-lg">
            {ourValues.text}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {coreValues.map((v) => (
            <li key={v.title} className="rounded-xl bg-cream-50 p-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-wine-700">
                {v.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  View: Our Beliefs                                                         */
/* -------------------------------------------------------------------------- */

function BeliefsView() {
  // "Jesus Christ" is featured first, matching the Figma.
  const [selected, setSelected] = useState(1);
  const belief = beliefs[selected];

  return (
    <div>
      <Reveal>
        <div className="text-center">
          <h3 className="font-body text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Our Beliefs
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            What we hold true
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Featured belief */}
        <Reveal direction="left">
          <div className="rounded-xl bg-cream-50 p-6 text-center shadow-sm sm:p-8">
            <h4 className="font-display text-2xl font-bold text-wine-700 sm:text-3xl">
              {belief.title}
            </h4>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink sm:text-xl">
              &ldquo;{belief.verse}&rdquo;
            </p>
            <p className="mt-2 text-sm italic text-muted">{belief.reference}</p>
            <p className="mt-6 rounded-lg bg-wine-700 p-5 text-left text-sm leading-relaxed text-cream-50">
              {belief.body}
            </p>
          </div>
        </Reveal>

        {/* Selectable list */}
        <Reveal direction="right">
          <div className="max-h-[560px] overflow-y-auto rounded-xl bg-cream-50 p-2 shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {beliefs.map((b, i) => {
              const isActive = i === selected;
              return (
                <button
                  key={b.title}
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-current={isActive ? "true" : undefined}
                  className={`grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-start gap-4 rounded-lg p-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-700 ${
                    isActive
                      ? "bg-wine-700 text-cream-50"
                      : "hover:bg-wine-700/8"
                  } ${i > 0 && !isActive ? "border-t border-ink/10" : ""}`}
                >
                  <span>
                    <span
                      className={`block text-base font-bold ${
                        isActive ? "text-cream-50" : "text-ink"
                      }`}
                    >
                      {b.title}
                    </span>
                    <span
                      className={`mt-0.5 block text-[11px] font-semibold uppercase tracking-wide ${
                        isActive ? "text-cream-100/80" : "text-wine-700"
                      }`}
                    >
                      {b.reference}
                    </span>
                  </span>
                  <span
                    className={`text-xs leading-relaxed ${
                      isActive ? "text-cream-100/90" : "text-muted"
                    }`}
                  >
                    &ldquo;{b.verse}&rdquo;
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  View: Our Story                                                           */
/* -------------------------------------------------------------------------- */

function StoryView() {
  return (
    <div>
      <Reveal>
        <div className="text-center">
          <h3 className="font-body text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Our Story
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            A legacy of faith
          </p>
        </div>
      </Reveal>

      <ol className="mt-10 space-y-10">
        {storyChapters.map((c, i) => (
          <li key={c.year}>
            <Reveal delay={i * 0.08}>
              <div className="grid items-center gap-6 sm:grid-cols-2">
                <div
                  className={`shine relative aspect-[16/10] w-full overflow-hidden rounded-xl ${
                    i % 2 === 1 ? "sm:order-2" : ""
                  }`}
                >
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />
                </div>
                <div>
                  <span className="inline-flex rounded-full border border-wine-700/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-wine-700">
                    {c.year}
                  </span>
                  <h4 className="mt-3 font-display text-xl font-bold text-wine-700 sm:text-2xl">
                    {c.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.text}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shell                                                                     */
/* -------------------------------------------------------------------------- */

export function AboutTabs() {
  const [active, setActive] = useState<AboutTabId>("beliefs");

  return (
    <section id="about-content" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <Container
        size="wide"
        className="grid max-w-[95rem] items-start gap-8 px-4 sm:px-6 lg:grid-cols-[420px_1fr] lg:px-8"
      >
        <div className="min-w-0 lg:sticky lg:top-24 lg:max-h-[820px] lg:overflow-y-auto lg:pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <AboutSidebar active={active} onSelect={setActive} />
        </div>

       <div className="flex min-w-0 min-h-[600px] flex-col rounded-2xl bg-[#F5F5F5] p-5 sm:p-8 lg:min-h-[820px] lg:p-12">
          {active === "work" && <WorkView />}
          {active === "destiny" && <DestinyView />}
          {active === "values" && <ValuesView />}
          {active === "beliefs" && <BeliefsView />}
          {active === "story" && <StoryView />}
        </div>
      </Container>
    </section>
  );
}
