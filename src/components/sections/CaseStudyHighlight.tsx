import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CaseStudyHighlightProps {
  headline: string;
  result: string;
  href: string;
}

export function CaseStudyHighlight({ headline, result, href }: CaseStudyHighlightProps) {
  return (
    <section className="py-16 md:py-24 bg-bg-dark border-y border-border-dark">
      <div className="container mx-auto px-5 max-w-5xl text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold text-sm font-semibold mb-6">
          View Featured Case Study
        </div>
        <div className="text-[64px] md:text-[96px] font-bold text-accent-gold leading-none tracking-tight mb-6">
          {result}
        </div>
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-10 text-balance mx-auto max-w-3xl">
          {headline}
        </h3>
        <Button variant="outline" className="border-border-dark text-white hover:bg-white hover:text-bg-dark" asChild>
          <Link to={href}>
            Read the Case Study <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
