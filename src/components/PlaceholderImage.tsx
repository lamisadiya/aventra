type PlaceholderImageProps = {
  alt: string;
  className?: string;
  tone?: "warm" | "cool" | "deep";
  index?: number;
  grayscale?: boolean;
};

const tones: Record<string, [string, string]> = {
  warm: ["#3a2f22", "#171410"],
  cool: ["#22271f", "#11140f"],
  deep: ["#1c1815", "#0c0b09"],
};

const grayscaleTones: [string, string] = ["#3a3a38", "#15140f"];

/**
 * Stand-in for real photography. Renders a moody gradient panel with a thin
 * brass corner mark and the image's alt text, so layout, aspect ratio, and
 * pacing can be evaluated without using any copyrighted photographs.
 */
export default function PlaceholderImage({
  alt,
  className = "",
  tone = "warm",
  index,
  grayscale = false,
}: PlaceholderImageProps) {
  const [from, to] = grayscale ? grayscaleTones : tones[tone];

  return (
    <figure
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-panel ${className}`}
      style={{
        backgroundImage: `linear-gradient(160deg, ${from} 0%, ${to} 100%)`,
        filter: grayscale ? "saturate(0)" : undefined,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #f7f4ec 0px, #f7f4ec 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="absolute left-4 top-4 h-5 w-5 border-l border-t border-brass/50" />
      <div className="absolute right-4 bottom-4 h-5 w-5 border-r border-b border-brass/50" />
      <figcaption className="absolute inset-0 flex items-end p-4">
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-ivory-dim/70">
          {typeof index === "number" ? `${String(index + 1).padStart(2, "0")} — ` : ""}
          {alt}
        </span>
      </figcaption>
    </figure>
  );
}
