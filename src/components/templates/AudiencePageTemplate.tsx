import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyHighlight } from "@/components/sections/CaseStudyHighlight";
import { ProductCTA } from "@/components/sections/ProductCTA";

export interface AudiencePageData {
  hero: {
    heading: string;
    subheading: string;
    image: string;
  };
  painPoints: {
    title: string;
    body: string;
  }[];
  solution: {
    heading: string;
    body: string;
  };
  products: {
    eyebrow: string;
    name: string;
    description: string;
    href: string;
    image: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  caseStudy: {
    headline: string;
    result: string;
    href: string;
  };
  cta: {
    heading: string;
    buttonLabel: string;
    href: string;
  };
}

export function AudiencePageTemplate({ data }: { data: AudiencePageData }) {
  return (
    <div className="bg-bg-white relative">
      <PageHero 
        heading={data.hero.heading}
        subheading={data.hero.subheading}
        image={data.hero.image}
      />

      {/* Pain Points */}
      <section className="py-16 md:py-24 bg-bg-section border-b border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary">Challenges you face</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {data.painPoints.map((point, i) => (
              <div key={i} className="bg-white p-8 border border-border shadow-sm">
                <h3 className="text-xl font-bold text-brand-green mb-4">{point.title}</h3>
                <p className="text-text-muted leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-5 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            {data.solution.heading}
          </h2>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            {data.solution.body}
          </p>
        </div>
      </section>

      <CaseStudyHighlight 
        headline={data.caseStudy.headline}
        result={data.caseStudy.result}
        href={data.caseStudy.href}
      />

      <ProductCTA 
        heading={data.cta.heading}
        buttonLabel={data.cta.buttonLabel}
        href={data.cta.href}
      />
    </div>
  );
}
