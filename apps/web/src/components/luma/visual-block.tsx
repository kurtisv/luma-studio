import { cn } from "@/lib/utils";

const palettes = [
  "from-[#d9c6b4] via-[#f4ede4] to-[#8d6b50]",
  "from-[#c7b39f] via-[#f7f2ea] to-[#34424a]",
  "from-[#ede4d8] via-[#b99a78] to-[#171717]",
  "from-[#f2eadf] via-[#d8c1a6] to-[#6c756f]",
];

export function VisualBlock({
  title,
  index = 0,
  className,
}: {
  title: string;
  index?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative min-h-72 overflow-hidden rounded-[2px] border bg-card shadow-sm",
        className,
      )}
      aria-label={`${title} visual study`}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", palettes[index % palettes.length])} />
      <div className="absolute inset-x-8 bottom-8 top-12 border border-white/45 bg-white/20 backdrop-blur-[1px]" />
      <div className="absolute bottom-8 left-8 h-24 w-24 bg-dark/80" />
      <div className="absolute right-8 top-12 h-28 w-20 bg-white/70" />
      <div className="absolute bottom-8 right-8 max-w-44 bg-card/90 p-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </div>
    </div>
  );
}
