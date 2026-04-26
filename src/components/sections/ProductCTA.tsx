import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProductCTAProps {
  heading: string;
  buttonLabel: string;
  href: string;
}

export function ProductCTA({ heading, buttonLabel, href }: ProductCTAProps) {
  return (
    <section className="py-20 md:py-24 bg-brand-green overflow-hidden relative">
      <div className="container relative z-10 mx-auto px-5 max-w-4xl text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto leading-tight">
          {heading}
        </h2>
        <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100 shadow-xl group" asChild>
          <Link to={href}>
            {buttonLabel} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
