import { SITE } from "../data/site";
import Dice from "./Dice";
import Icon from "./Icon";

function RoundBadge() {
  return (
    <div className="absolute -left-6 top-8 z-20 hidden h-24 w-24 items-center justify-center rounded-full bg-ink text-cream shadow-[0_18px_40px_rgba(16,42,51,0.25)] lg:flex xl:-left-9">
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path
            id="hero-badge-path"
            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="7.1"
          fontWeight="700"
          letterSpacing="2.3"
        >
          <textPath href="#hero-badge-path">
            TASTE THE MOMENT · KJOZ · KFARJOZ ·
          </textPath>
        </text>
      </svg>
      <Icon name="spark" size={26} className="relative text-orange" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-[74px]">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="flex flex-col justify-center pb-3 pt-10 sm:pt-14 lg:py-16 xl:py-20">
            <p className="eyebrow text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              KfarJoz · Nabatieh · Lebanon
            </p>

            <h1 className="hero-title mt-5 sm:mt-7">
              <span className="block">Good coffee.</span>
              <span className="block">Better</span>
              <span className="serif-italic block pb-1 text-[1.06em] leading-[0.92] text-orange">
                company.
              </span>
            </h1>

            <p className="body-lg mt-7 max-w-[32rem] text-ink/70">
              A café and social club built for long chats, board games, laptop
              mornings and one more round. Pull up a chair — KJOZ is your table
              in KfarJoz.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#experience" className="btn btn-primary">
                Explore the space
                <Icon name="arrow-down" size={16} className="btn-icon" />
              </a>
              <a
                href={SITE.menu}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                View the menu
                <Icon name="arrow-up-right" size={15} className="btn-icon" />
              </a>
            </div>

            <div className="mt-11 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-ink/15 pt-5 sm:grid-cols-3">
              <div>
                <p className="field-label">Open daily</p>
                <p className="mt-1.5 text-xs font-semibold leading-snug">
                  8:00 AM — 12:00 AM
                </p>
              </div>
              <div>
                <p className="field-label">Find us</p>
                <p className="mt-1.5 text-xs font-semibold leading-snug">
                  KfarJoz Main Road
                  <br className="hidden sm:block" /> Nabatieh
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="field-label">Say hello</p>
                <a
                  href={SITE.phoneHref}
                  className="mt-1.5 inline-block text-xs font-semibold underline decoration-ink/20 underline-offset-4 transition-colors hover:text-orange-deep"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex pb-10 pt-2 lg:py-10">
            <div className="relative h-[480px] w-full overflow-hidden rounded-[1.75rem] bg-ink sm:h-[580px] lg:h-[calc(100svh-8.5rem)] lg:max-h-[810px] lg:min-h-[610px] lg:rounded-[2.25rem]">
              <img
                src="/images/opt/interior.webp"
                alt="Inside KJOZ, KfarJoz"
                width="1080"
                height="1080"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/25 via-transparent to-transparent" />

              <div className="absolute right-4 top-4 rounded-full border border-cream/25 bg-ink/25 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-cream backdrop-blur-md">
                Taste the moment
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.16em] text-cream/85">
                  Inside KJOZ
                  <br />
                  <span className="text-cream/70">KfarJoz · Nabatieh</span>
                </p>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/25 text-cream/80">
                  <Icon name="spark" size={15} />
                </span>
              </div>
            </div>

            <RoundBadge />

            <div className="absolute bottom-3 left-3 z-20 w-[15.5rem] rotate-[-3deg] rounded-2xl border border-ink/10 bg-paper p-4 shadow-[0_18px_50px_rgba(16,42,51,0.22)] transition-transform duration-500 hover:rotate-0 sm:bottom-4 sm:left-5 lg:-left-8 lg:bottom-12">
              <div className="flex items-center gap-3">
                <Dice value={5} size="sm" />
                <div>
                  <p className="field-label">On the shelf</p>
                  <p className="mt-1 font-display text-lg font-bold leading-none tracking-[-0.04em]">
                    Your move.
                  </p>
                </div>
              </div>
              <p className="mt-3 border-t border-dashed border-ink/15 pt-2.5 text-[10px] font-semibold leading-relaxed text-ink/70">
                Monopoly · Jackaroo · Risk · Cards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
