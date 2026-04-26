import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  image: string;
  size?: 'full' | 'compact';
  minimal?: boolean;
}

export function PageHero({ eyebrow, heading, subheading, image, size = 'full', minimal = false }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        minimal ? "bg-bg-white" : "bg-brand-green-dark",
        size === 'full' ? "min-h-[60vh]" : "min-h-[320px] pt-32 pb-16",
        minimal && "min-h-auto pt-32 pb-16 text-text-primary"
      )}
    >
      {!minimal && (
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={heading}
              className="w-full h-full object-cover"
            />
            {/* Green-tinted gradient overlay instead of plain black */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(27,67,50,0.88) 0%, rgba(45,106,79,0.70) 100%)',
              }}
            />
          </div>
        </>
      )}

      <div className={cn("container relative z-10 mx-auto px-5 max-w-4xl text-center", minimal && "max-w-3xl")}>
        {eyebrow && (
          <div
            className={cn(
              "text-sm font-semibold uppercase tracking-widest mb-4",
              minimal ? "text-brand-green" : "text-brand-green-light"
            )}
          >
            {eyebrow}
          </div>
        )}
        <h1
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-balance",
            minimal ? "text-text-primary" : "text-white"
          )}
        >
          {heading}
        </h1>
        {subheading && (
          <p
            className={cn(
              "text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed text-balance",
              minimal ? "text-text-muted" : "text-white/85"
            )}
          >
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
