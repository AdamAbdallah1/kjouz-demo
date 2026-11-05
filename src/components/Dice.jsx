const PIPS = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

export default function Dice({ value = 5, rolling = false, size = "md" }) {
  const activePips = PIPS[value] ?? PIPS[5];
  const dimensions = size === "lg" ? "h-24 w-24 p-4" : "h-16 w-16 p-2.5";

  return (
    <div
      className={`grid shrink-0 grid-cols-3 grid-rows-3 rounded-[1.1rem] border border-ink/10 bg-paper text-ink shadow-[0_10px_30px_rgba(0,0,0,0.18)] ${dimensions} ${
        rolling ? "dice-rolling" : ""
      }`}
      aria-hidden="true"
    >
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className="flex items-center justify-center">
          {activePips.includes(index) && (
            <span
              className={`rounded-full bg-ink ${
                size === "lg" ? "h-2.5 w-2.5" : "h-1.5 w-1.5"
              }`}
            />
          )}
        </span>
      ))}
    </div>
  );
}
