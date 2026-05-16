import Image from "next/image";

import { cn } from "@/lib/utils";

export function ProjectImage({
  image,
  priority = false,
  className,
}: {
  image: {
    src: string;
    alt: string;
    credit: string;
  };
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-[2px] border bg-card shadow-sm",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/35 via-transparent to-transparent" />
      <figcaption className="absolute bottom-4 left-4 bg-card/90 px-3 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
        {image.credit}
      </figcaption>
    </figure>
  );
}
