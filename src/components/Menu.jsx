import { useState } from "react";
import { MENU_CATEGORIES, MENU_ITEMS, SITE } from "../data/site";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Menu() {
  const [category, setCategory] = useState("All");

  const items =
    category === "All"
      ? MENU_ITEMS.filter((item) => item.featured)
      : MENU_ITEMS.filter((item) => item.category === category);

  return (
    <section id="menu" className="section-pad relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -right-16 top-0 select-none font-display text-[15rem] font-extrabold leading-none tracking-[-0.08em] text-ink/[0.025] lg:text-[22rem]">
        MENU
      </div>

      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 xl:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              03 / From the kitchen
            </p>
            <h2 className="section-title mt-5">
              Good things,
              <br />
              <span className="serif-italic text-orange">all day.</span>
            </h2>

            <p className="body-lg mt-6 max-w-sm text-ink/68">
              Breakfast, coffee, cold drinks, something sweet and shisha for the
              table. This is the short list — the full menu lives online.
            </p>

            <div
              className="no-scrollbar mt-8 flex flex-wrap gap-2"
              aria-label="Filter the menu"
            >
              {MENU_CATEGORIES.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="menu-filter"
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={SITE.menu}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View the full menu
                <Icon name="arrow-up-right" size={15} className="btn-icon" />
              </a>
              <p className="mt-3 max-w-[17rem] text-[10px] leading-relaxed text-ink/70">
                Full menu and current prices are on the KJOZ digital menu.
              </p>
            </div>

            <div className="mt-10 hidden max-w-[17rem] rotate-[-2deg] items-center gap-3 rounded-xl border border-dashed border-ink/20 bg-paper/60 p-3.5 lg:flex">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-cream">
                <Icon name="coffee" size={17} />
              </span>
              <p className="text-[10px] font-semibold leading-relaxed text-ink/70">
                Breakfast until late?
                <br />
                <span className="text-ink">There&apos;s always time for coffee.</span>
              </p>
            </div>
          </Reveal>

          <div>
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-ink/12 pb-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/70">
                {category === "All" ? "KJOZ favourites" : category}
              </p>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/70">
                {String(items.length).padStart(2, "0")} items
              </p>
            </div>

            <p className="sr-only" aria-live="polite">
              Showing {items.length} menu items in {category}.
            </p>

            <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10">
              {items.map((item, index) => (
                <a
                  key={`${category}-${item.name}`}
                  href={SITE.menu}
                  target="_blank"
                  rel="noreferrer"
                  className="fade-up group block"
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <div className="img-zoom relative aspect-square overflow-hidden rounded-2xl bg-sand">
                    <img
                      src={item.image}
                      alt={`${item.name} at KJOZ`}
                      width="700"
                      height="700"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-ink/65 backdrop-blur-sm">
                      {item.category}
                    </span>
                    <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-ink text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Icon name="arrow-up-right" size={14} />
                    </span>
                    <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-ink/10" />
                  </div>

                  <div className="pt-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-[1.15rem] font-bold leading-tight tracking-[-0.03em]">
                        {item.name}
                      </h3>
                      <Icon
                        name="arrow-up-right"
                        size={14}
                        className="mt-1 shrink-0 text-ink/30 transition-colors group-hover:text-orange-deep"
                      />
                    </div>
                    {item.note && (
                      <p className="mt-1.5 max-w-[19rem] text-[11px] leading-relaxed text-ink/70">
                        {item.note}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
