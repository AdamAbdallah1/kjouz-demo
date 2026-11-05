import { NAV_LINKS, SITE } from "../data/site";
import Icon from "./Icon";
import Reveal from "./Reveal";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="board-lines absolute inset-0 opacity-30" />

      <div className="shell relative z-10">
        <div className="flex flex-col justify-between gap-8 border-b border-cream/15 pb-10 pt-16 sm:flex-row sm:items-end lg:pt-20">
          <Reveal>
            <p className="eyebrow text-cream/65">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Ready when you are
            </p>
            <p className="mt-4 font-display text-[2.8rem] font-semibold leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              See you
              <br />
              <span className="serif-italic text-orange">at the table.</span>
            </p>
          </Reveal>

          <Reveal delay={100} className="flex flex-wrap gap-2.5 sm:pb-1">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light !min-h-11"
            >
              <Icon name="instagram" size={15} />
              Instagram
              <Icon name="arrow-up-right" size={14} className="btn-icon" />
            </a>
            <a
              href={SITE.directions}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light !min-h-11"
            >
              Get directions
              <Icon name="arrow-up-right" size={14} className="btn-icon" />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="font-display text-xl font-bold tracking-[-0.03em]">
              KJOZ<span className="text-orange">.</span>
            </p>
            <p className="mt-3 max-w-[18rem] text-xs leading-relaxed text-cream/70">
              A café and social club in KfarJoz, Nabatieh. Coffee, games,
              shisha, and a table that&apos;s always ready for good company.
            </p>
            <p className="serif-italic mt-5 text-xl text-cream/70">
              Taste the Moment.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="field-label text-cream/65">Explore</p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-cream/65 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="field-label text-cream/65">Find us</p>
            <a
              href={SITE.directions}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block max-w-[12rem] text-xs leading-relaxed text-cream/65 transition-colors hover:text-cream"
            >
              KfarJoz Main Road
              <br />
              Nabatieh, Lebanon
            </a>
            <a
              href={SITE.phoneHref}
              className="mt-3 inline-block text-xs font-semibold text-cream/85 transition-colors hover:text-orange"
            >
              {SITE.phone}
            </a>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.1em] text-cream/65">
              Open daily · 8am–12am
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="KJOZ on Instagram"
                className="text-cream/65 transition-colors hover:text-cream"
              >
                <Icon name="instagram" size={16} />
              </a>
              <a
                href={SITE.menu}
                target="_blank"
                rel="noreferrer"
                aria-label="KJOZ digital menu"
                className="text-cream/65 transition-colors hover:text-cream"
              >
                <Icon name="coffee" size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-cream/15 py-5 text-[9px] font-bold uppercase tracking-[0.14em] text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} KJOZ · KfarJoz, Nabatieh</p>
          <div className="flex items-center gap-5">
            <span className="hidden sm:inline">Taste the moment</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-cream/70 transition-colors hover:text-cream"
            >
              Back to top
              <Icon name="arrow-up" size={12} />
            </a>
          </div>
        </div>

        <a
          href="#top"
          aria-label="KJOZ. — back to top"
          className="footer-wordmark block select-none text-center text-cream transition-colors hover:text-cream/90"
        >
          KJOZ<span className="text-orange">.</span>
        </a>
      </div>
    </footer>
  );
}
