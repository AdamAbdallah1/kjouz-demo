import { SITE } from "../data/site";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Visit() {
  return (
    <section id="visit" className="section-pad bg-cream">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="eyebrow text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              06 / Find us
            </p>
            <h2 className="section-title mt-5">
              Come sit
              <br />
              <span className="serif-italic text-orange">with us.</span>
            </h2>
          </Reveal>

          <Reveal delay={100} className="max-w-sm sm:pb-1">
            <p className="body-copy text-sm sm:text-base">
              On KfarJoz Main Road, in the heart of Nabatieh. Walk in, take a
              seat, and stay for as long as the conversation lasts.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal className="flex flex-col justify-between rounded-[1.75rem] bg-ink p-6 text-cream sm:p-8">
            <div>
              <div className="flex gap-4 border-b border-cream/15 pb-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/20 text-orange">
                  <Icon name="map-pin" size={18} />
                </span>
                <div>
                  <p className="field-label text-cream/65">The address</p>
                  <p className="mt-1.5 text-base font-semibold leading-snug text-cream">
                    KfarJoz Main Road
                    <br />
                    Nabatieh, Lebanon
                  </p>
                  <a
                    href={SITE.directions}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-cream/70 transition-colors hover:text-orange"
                  >
                    Open in maps
                    <Icon name="arrow-up-right" size={12} />
                  </a>
                </div>
              </div>

              <div className="flex gap-4 border-b border-cream/15 py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/20 text-orange">
                  <Icon name="phone" size={18} />
                </span>
                <div>
                  <p className="field-label text-cream/65">Say hello</p>
                  <a
                    href={SITE.phoneHref}
                    className="mt-1.5 inline-block font-display text-2xl font-bold tracking-[-0.035em] text-cream transition-colors hover:text-orange"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/20 text-orange">
                  <Icon name="clock" size={18} />
                </span>
                <div>
                  <p className="field-label text-cream/65">Open daily</p>
                  <p className="mt-1.5 text-base font-semibold leading-snug text-cream">
                    8:00 AM — 12:00 AM
                  </p>
                  <p className="mt-1.5 text-[10px] leading-relaxed text-cream/65">
                    Winter hours. Check Instagram for seasonal updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={SITE.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light !min-h-11"
                >
                  Get directions
                  <Icon name="arrow-up-right" size={15} className="btn-icon" />
                </a>
                <a
                  href={SITE.phoneHref}
                  className="btn btn-outline-light !min-h-11"
                >
                  Call us
                  <Icon name="phone" size={14} />
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-cream/15 pt-4">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-cream/70 transition-colors hover:text-cream"
                >
                  <Icon name="instagram" size={14} />
                  @kjoz.lb
                </a>
                <a
                  href={SITE.menu}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-cream/70 transition-colors hover:text-cream"
                >
                  <Icon name="coffee" size={14} />
                  Digital menu
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="map-frame relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-sand lg:min-h-[560px]">
            <iframe
              title="Map showing KJOZ on KfarJoz Main Road, Nabatieh"
              src={SITE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />

            <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
              <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream/95 p-3.5 shadow-[0_18px_40px_rgba(16,42,51,0.16)] backdrop-blur-md sm:p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange text-ink">
                  <Icon name="map-pin" size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/70">
                    KJOZ · KfarJoz
                  </p>
                  <p className="mt-0.5 truncate text-xs font-semibold text-ink">
                    KfarJoz Main Road, Nabatieh
                  </p>
                </div>
                <a
                  href={SITE.directions}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions to KJOZ"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  <Icon name="arrow-up-right" size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
