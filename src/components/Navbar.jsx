import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SITE } from "../data/site";
import Icon from "./Icon";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-38% 0px -52% 0px" },
    );

    NAV_LINKS.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus?.();
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-ink/10 transition-colors duration-500 ${
          scrolled
            ? "bg-cream/92 shadow-[0_8px_30px_rgba(16,42,51,0.06)] backdrop-blur-xl"
            : "bg-cream"
        }`}
      >
        <div className="shell flex h-[74px] items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <Logo />
            <span className="hidden text-[8px] font-bold uppercase leading-[1.5] tracking-[0.22em] text-ink/70 sm:block">
              Café
              <br />
              Social club
            </span>
          </div>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link text-[0.8125rem] font-semibold text-ink/80 transition-colors hover:text-ink"
                    aria-current={active === link.href ? "true" : undefined}
                  >
                    <span className="mr-1.5 align-super text-[8px] font-bold tracking-normal text-ink/70">
                      0{index + 1}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <span className="hidden items-center gap-2 pr-2 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/70 xl:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
              </span>
              Open daily · 8am–12am
            </span>

            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="KJOZ on Instagram"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream md:flex"
            >
              <Icon name="instagram" size={17} />
            </a>

            <a href="#visit" className="btn btn-primary hidden sm:inline-flex">
              Find us
              <Icon name="arrow-up-right" size={15} className="btn-icon" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-10 items-center gap-2 rounded-full border border-ink/20 px-4 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-cream lg:hidden"
            >
              Menu
              <Icon name="menu" size={16} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[70] flex flex-col bg-ink text-cream"
        >
          <div className="shell flex h-[74px] shrink-0 items-center justify-between border-b border-cream/15">
            <Logo light />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-ink"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <div className="shell flex flex-1 flex-col justify-between overflow-y-auto py-8">
            <nav aria-label="Mobile navigation">
              <ul>
                {NAV_LINKS.map((link, index) => (
                  <li key={link.href} className="border-b border-cream/15">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-4"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="text-[9px] font-bold tracking-[0.16em] text-cream/65">
                          0{index + 1}
                        </span>
                        <span className="font-display text-[2rem] font-semibold leading-none tracking-[-0.04em] sm:text-4xl">
                          {link.label}
                        </span>
                      </span>
                      <Icon
                        name="arrow-up-right"
                        size={22}
                        className="text-orange transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 grid gap-6 pb-4 sm:grid-cols-2">
              <div>
                <p className="field-label text-cream/65">Come by</p>
                <p className="mt-2 text-sm leading-relaxed text-cream/85">
                  KfarJoz Main Road
                  <br />
                  Nabatieh, Lebanon
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-3 inline-block text-sm font-semibold text-cream underline decoration-cream/25 underline-offset-4 transition-colors hover:text-orange"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <p className="field-label text-cream/65">Follow along</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light !min-h-10 !px-4 !text-[11px]"
                  >
                    <Icon name="instagram" size={15} />
                    @kjoz.lb
                  </a>
                  <a
                    href={SITE.menu}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light !min-h-10 !px-4 !text-[11px]"
                  >
                    Full menu
                    <Icon name="arrow-up-right" size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
