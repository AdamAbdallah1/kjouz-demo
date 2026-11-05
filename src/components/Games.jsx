import { useEffect, useRef, useState } from "react";
import { GAMES, SITE } from "../data/site";
import Dice from "./Dice";
import Icon from "./Icon";
import Reveal from "./Reveal";

const HOUSE_RULES = [
  {
    title: "Order something good",
    copy: "Coffee, dessert, shisha — start the table the right way.",
  },
  {
    title: "Pick a box",
    copy: "Monopoly, Jackaroo, Risk or cards. There is no wrong answer.",
  },
  {
    title: "Stay until the game ends",
    copy: "The table is yours. Nobody here is rushing you.",
  },
];

export default function Games() {
  const [value, setValue] = useState(5);
  const [rolling, setRolling] = useState(false);
  const [picked, setPicked] = useState(null);
  const intervalRef = useRef(null);

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    [],
  );

  const roll = () => {
    if (rolling) return;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const finish = () => {
      const finalValue = 1 + Math.floor(Math.random() * 6);
      setValue(finalValue);
      setPicked(GAMES[(finalValue - 1) % GAMES.length]);
      setRolling(false);
    };

    if (reduceMotion) {
      finish();
      return;
    }

    setRolling(true);
    setPicked(null);
    let ticks = 0;

    intervalRef.current = setInterval(() => {
      setValue(1 + Math.floor(Math.random() * 6));
      ticks += 1;

      if (ticks >= 9) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        finish();
      }
    }, 70);
  };

  return (
    <section
      id="games"
      className="section-pad relative overflow-hidden bg-ink text-cream"
    >
      <div className="board-lines absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -right-24 top-10 hidden select-none font-display text-[19rem] font-extrabold leading-none tracking-[-0.08em] text-cream/[0.035] xl:block">
        PLAY
      </div>

      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <Reveal>
            <p className="eyebrow text-cream/65">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              02 / Game night
            </p>
            <h2 className="section-title mt-5">
              The table is
              <br />
              <span className="serif-italic text-orange">the point.</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="max-w-md text-sm leading-relaxed text-cream/65 sm:text-base">
              Monopoly, Jackaroo, Risk, cards. The shelf is open, the chairs are
              comfy, and the next game is always one roll away.
            </p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-cream/75 transition-colors hover:text-orange"
            >
              Planning a game night?
              <Icon
                name="arrow-up-right"
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1fr_19rem] lg:items-start">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {GAMES.map((game, index) => {
              const isPicked = picked?.id === game.id;

              return (
                <Reveal
                  key={game.id}
                  delay={index * 70}
                  as="article"
                  style={{ backgroundColor: game.colour }}
                  className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl p-5 text-ink transition-[transform,box-shadow] duration-500 sm:min-h-[340px] sm:p-6 xl:min-h-[390px] ${
                    isPicked
                      ? "-translate-y-1.5 shadow-[0_0_0_2px_#f4eee4,0_24px_60px_rgba(0,0,0,0.3)]"
                      : "hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink">
                      On the shelf
                    </span>
                    <span className="font-display text-[11px] font-bold tracking-[0.08em] text-ink">
                      0{index + 1}
                    </span>
                  </div>

                  <Icon
                    name={game.icon}
                    size={150}
                    strokeWidth={0.9}
                    className="pointer-events-none absolute -bottom-7 -right-7 text-ink/10 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105"
                  />

                  <div className="relative mt-auto pt-20">
                    {isPicked && (
                      <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-cream">
                        <span className="h-1 w-1 rounded-full bg-orange" />
                        Tonight&apos;s pick
                      </span>
                    )}
                    <h3 className="font-display text-[2.05rem] font-extrabold leading-[0.92] tracking-[-0.055em] sm:text-[2.35rem] xl:text-[2.65rem]">
                      {game.name}
                    </h3>
                    <p className="mt-3 max-w-[13rem] text-[11px] font-semibold leading-snug text-ink sm:text-xs">
                      {game.tagline}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal
            delay={150}
            className="rounded-2xl border border-cream/15 bg-cream/[0.045] p-5 sm:p-6 lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-4">
              <Dice value={value} rolling={rolling} size="lg" />
              <div>
                <p className="eyebrow text-cream/65">Can&apos;t decide?</p>
                <p className="mt-2 font-display text-xl font-bold leading-tight tracking-[-0.035em]">
                  Leave it to chance.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={roll}
              disabled={rolling}
              className="btn btn-light mt-5 w-full !min-h-11 !text-[11px] disabled:cursor-wait disabled:opacity-60"
            >
              {rolling ? "Rolling..." : "Roll the die"}
              <Icon
                name={rolling ? "spark" : "arrow-right"}
                size={15}
                className={rolling ? "animate-spin" : "btn-icon"}
              />
            </button>

            <p
              aria-live="polite"
              className="mt-3 min-h-[2.5rem] text-[11px] leading-relaxed text-cream/70"
            >
              {picked ? (
                <>
                  Tonight&apos;s pick:{" "}
                  <span className="font-bold text-cream">{picked.name}</span>.
                  Now find a table.
                </>
              ) : rolling ? (
                "The die is thinking..."
              ) : (
                "A six-sided answer to “what should we play?”"
              )}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-cream/15 pt-8 lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr]">
            <Reveal>
              <p className="serif-italic text-4xl leading-none text-cream">
                House rules.
              </p>
              <p className="mt-3 max-w-[15rem] text-xs leading-relaxed text-cream/65">
                Three small things that make a good night at KJOZ.
              </p>
            </Reveal>

            <ol className="grid gap-6 sm:grid-cols-3">
              {HOUSE_RULES.map((rule, index) => (
                <Reveal
                  key={rule.title}
                  as="li"
                  delay={index * 70}
                  className="border-t border-cream/20 pt-4"
                >
                  <span className="text-[9px] font-bold tracking-[0.16em] text-orange-light">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold leading-tight tracking-[-0.025em]">
                    {rule.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-cream/65">
                    {rule.copy}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
