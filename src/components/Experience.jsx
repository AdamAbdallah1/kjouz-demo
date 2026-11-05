import { useRef, useState } from "react";
import { EXPERIENCES } from "../data/site";
import Icon from "./Icon";
import Reveal from "./Reveal";

const VALUES = [
  {
    title: "Good coffee",
    copy: "From a quick espresso to a slow frappe — the excuse to sit down.",
  },
  {
    title: "Good games",
    copy: "Monopoly, Jackaroo, Risk and cards, right there on the shelf.",
  },
  {
    title: "Good company",
    copy: "The reason one coffee turns into four and the afternoon disappears.",
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const current = EXPERIENCES[active];

  const onTabKeyDown = (event, index) => {
    let nextIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % EXPERIENCES.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + EXPERIENCES.length) % EXPERIENCES.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = EXPERIENCES.length - 1;
    }

    if (nextIndex !== undefined) {
      event.preventDefault();
      setActive(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  const go = (direction) => {
    setActive(
      (index) =>
        (index + direction + EXPERIENCES.length) % EXPERIENCES.length,
    );
  };

  return (
    <section id="experience" className="section-pad relative bg-paper">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              01 / The space
            </p>
            <h2 className="section-title mt-5">
              More than a
              <br />
              <span className="serif-italic text-orange">coffee stop.</span>
            </h2>
          </Reveal>

          <Reveal delay={100} className="lg:pb-1">
            <p className="body-lg max-w-md text-ink/70">
              Some people come for the coffee. Some come for the quiet corner
              and a laptop. Most stay because the table is full, the game is
              close, and nobody is in a hurry.
            </p>
            <a
              href="#games"
              className="group mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-orange-deep"
            >
              Meet the game shelf
              <Icon
                name="arrow-right"
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-11 lg:mt-16">
          <div className="overflow-hidden rounded-[1.75rem] border border-ink/12 bg-cream">
            <div
              role="tablist"
              aria-label="Choose a time of day at KJOZ"
              className="no-scrollbar flex gap-1.5 overflow-x-auto border-b border-ink/10 p-2.5 sm:gap-2 sm:p-3"
            >
              {EXPERIENCES.map((item, index) => (
                <button
                  key={item.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  id={`experience-tab-${item.id}`}
                  role="tab"
                  type="button"
                  aria-selected={active === index}
                  aria-controls="experience-panel"
                  tabIndex={active === index ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors sm:px-5 ${
                    active === index
                      ? "bg-ink text-cream"
                      : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                  }`}
                >
                  <span
                    className={`text-[8px] ${
                      active === index ? "text-orange-light" : "text-ink/70"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>

            <div
              id="experience-panel"
              role="tabpanel"
              aria-labelledby={`experience-tab-${current.id}`}
              className="grid lg:grid-cols-[1.04fr_0.96fr]"
            >
              <div className="relative min-h-[330px] overflow-hidden sm:min-h-[440px] lg:min-h-[540px]">
                {EXPERIENCES.map((item, index) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.alt}
                    width="1080"
                    height="1080"
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out ${
                      active === index
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  />
                ))}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 text-[9px] font-bold uppercase tracking-[0.18em] text-cream/85">
                  {current.label} at KJOZ
                </p>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12">
                <div key={current.id} className="fade-up">
                  <p className="eyebrow text-ink/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    0{active + 1} · {current.label}
                  </p>
                  <h3 className="mt-5 max-w-md font-display text-[2.2rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[2.8rem]">
                    {current.title}
                  </h3>
                  <p className="body-copy mt-4 max-w-md text-sm sm:text-base">
                    {current.copy}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-ink/12 pt-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/70">
                    A day at KJOZ
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label="Previous time of day"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-cream"
                    >
                      <Icon name="chevron-left" size={17} />
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label="Next time of day"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-cream"
                    >
                      <Icon name="chevron-right" size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-3 lg:mt-10">
          {VALUES.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 70}
              className="bg-paper p-5 sm:p-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[9px] font-bold tracking-[0.16em] text-orange-deep">
                  0{index + 1}
                </span>
                <h3 className="font-display text-lg font-bold tracking-[-0.03em]">
                  {value.title}
                </h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink/70">
                {value.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
