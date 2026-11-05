import Icon from "./Icon";
import Reveal from "./Reveal";

const PILLARS = [
  {
    title: "A proper coffee",
    copy: "Espresso, frappe, or a slow latte — made for the table.",
  },
  {
    title: "A game within reach",
    copy: "Monopoly, Jackaroo, Risk and a deck of cards on the shelf.",
  },
  {
    title: "No reason to rush",
    copy: "Sit for one coffee or stay until midnight. Your call.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-pad relative overflow-hidden bg-ink text-cream"
    >
      <div className="board-lines absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="text-outline-cream pointer-events-none absolute -bottom-[4vw] left-1/2 w-full -translate-x-1/2 select-none whitespace-nowrap text-center font-display text-[30vw] font-extrabold leading-[0.7] tracking-[-0.08em]"
      >
        KJOZ
      </div>

      <div className="shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-cream/65">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              05 / About KJOZ
            </p>
            <h2 className="section-title mt-5">
              A place to
              <br />
              <span className="serif-italic text-orange">stay a while.</span>
            </h2>
            <p className="serif-italic mt-7 text-2xl leading-none text-cream/70 sm:text-3xl">
              Taste the Moment.
            </p>
          </Reveal>

          <Reveal delay={100} className="space-y-5 lg:pt-2">
            <p className="text-base leading-relaxed text-cream/70 sm:text-lg">
              KJOZ is a café and social destination on KfarJoz Main Road in
              Nabatieh. It&apos;s built around a simple idea: the best part of a
              coffee is who you&apos;re sitting with.
            </p>
            <p className="text-sm leading-relaxed text-cream/70 sm:text-base">
              Come for breakfast, a laptop session, a board game or shisha. Stay
              because the table got full, the next round is already being
              ordered, and nobody is in a hurry to leave.
            </p>
            <p className="text-sm font-semibold leading-relaxed text-cream/80">
              Good coffee. Good games. Good company.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 border-t border-cream/15 pt-10 lg:mt-20 lg:grid-cols-[1fr_19rem] lg:items-start lg:gap-16 lg:pt-12">
          <div className="grid gap-7 sm:grid-cols-3">
            {PILLARS.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 80}>
                <span className="text-[9px] font-bold tracking-[0.16em] text-orange-light">
                  0{index + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold leading-tight tracking-[-0.03em]">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-[15rem] text-[11px] leading-relaxed text-cream/65">
                  {pillar.copy}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={120}
            className="relative mx-auto w-full max-w-[19rem] rotate-2 rounded-2xl bg-cream p-6 text-ink shadow-[0_24px_70px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:rotate-0 lg:mx-0"
          >
            <span className="absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange text-ink shadow-lg">
              <Icon name="spark" size={22} />
            </span>
            <p className="field-label">The short version</p>
            <p className="serif-italic mt-3 text-[2.45rem] leading-[0.88] tracking-[-0.03em]">
              Coffee.
              <br />
              Games.
              <br />
              Good company.
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-dashed border-ink/25 pt-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                KJOZ
              </span>
              <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-ink/70">
                KfarJoz · Nabatieh
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
