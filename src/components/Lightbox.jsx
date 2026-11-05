import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Icon from "./Icon";

export default function Lightbox({ items, index, onClose, onChange }) {
  const containerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        onChange(1);
        return;
      }

      if (event.key === "ArrowLeft") {
        onChange(-1);
        return;
      }

      if (event.key === "Tab") {
        const focusable = containerRef.current?.querySelectorAll(
          "button:not([disabled])",
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [onClose, onChange]);

  const image = items[index];

  if (!image) return null;

  return createPortal(
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${items.length}: ${image.caption}`}
      className="fixed inset-0 z-[90] flex flex-col bg-ink/96 text-cream backdrop-blur-sm"
    >
      <button
        type="button"
        aria-label="Close photo viewer"
        onClick={onClose}
        className="absolute inset-0 cursor-zoom-out"
      />

      <div className="relative z-10 flex items-center justify-between border-b border-cream/15 px-5 py-4 sm:px-8">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cream/70">
          KJOZ / Gallery
        </p>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.12em] text-cream/65">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close photo viewer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-ink"
          >
            <Icon name="close" size={18} />
          </button>
        </div>
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-4 py-5 sm:px-16 sm:py-8">
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
        />

        <button
          type="button"
          onClick={() => onChange(-1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 bg-ink/50 text-cream backdrop-blur transition-colors hover:bg-cream hover:text-ink sm:left-6"
        >
          <Icon name="chevron-left" size={19} />
        </button>
        <button
          type="button"
          onClick={() => onChange(1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 bg-ink/50 text-cream backdrop-blur transition-colors hover:bg-cream hover:text-ink sm:right-6"
        >
          <Icon name="chevron-right" size={19} />
        </button>
      </div>

      <div className="relative z-10 flex items-center justify-between gap-4 border-t border-cream/15 px-5 py-4 sm:px-8">
        <p className="serif-italic text-xl text-cream sm:text-2xl">
          {image.caption}
        </p>
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/65">
          KfarJoz · Nabatieh
        </p>
      </div>
    </div>,
    document.body,
  );
}
