import { useCallback, useState } from "react";
import { GALLERY, SITE } from "../data/site";
import Icon from "./Icon";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const changePhoto = useCallback((direction) => {
    setLightboxIndex((current) => {
      if (current === null) return current;
      return (current + direction + GALLERY.length) % GALLERY.length;
    });
  }, []);

  return (
    <section id="gallery" className="section-pad bg-paper">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="eyebrow text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              04 / Around KJOZ
            </p>
            <h2 className="section-title mt-5">
              A look
              <br />
              <span className="serif-italic text-orange">around.</span>
            </h2>
          </Reveal>

          <Reveal delay={100} className="max-w-sm sm:pb-1">
            <p className="body-copy text-sm sm:text-base">
              A few corners, cups and sweet things from the KJOZ table. The rest
              is better in person.
            </p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:text-orange-deep"
            >
              Follow @kjoz.lb
              <Icon
                name="arrow-up-right"
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:auto-rows-[13.5rem] lg:grid-cols-12 xl:auto-rows-[15.5rem]">
          {GALLERY.map((item, index) => (
            <Reveal
              key={item.src + item.caption}
              delay={(index % 3) * 60}
              className={`${item.className} overflow-hidden rounded-2xl`}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Open photo: ${item.caption}`}
                className="group relative block h-full w-full overflow-hidden rounded-2xl bg-sand text-left"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width="1080"
                  height="1080"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-4">
                  <span className="text-[9px] font-bold uppercase leading-tight tracking-[0.16em] text-cream sm:text-[10px]">
                    {item.caption}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 translate-y-1 items-center justify-center rounded-full border border-cream/30 text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Icon name="arrow-up-right" size={14} />
                  </span>
                </span>

                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-ink/10" />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-ink/12 bg-cream p-5 sm:flex-row sm:items-center sm:p-6">
          <p className="font-display text-lg font-semibold leading-tight tracking-[-0.035em]">
            More moments, every week.
            <span className="ml-2 hidden text-ink/70 sm:inline">—</span>
            <span className="mt-1 block text-xs font-medium tracking-normal text-ink/70 sm:mt-0 sm:ml-2 sm:inline">
              Follow along at @kjoz.lb
            </span>
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary !min-h-10 !px-5 !text-[11px]"
          >
            Open Instagram
            <Icon name="arrow-up-right" size={14} className="btn-icon" />
          </a>
        </Reveal>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={GALLERY}
          index={lightboxIndex}
          onClose={closeLightbox}
          onChange={changePhoto}
        />
      )}
    </section>
  );
}
