import React from 'react';
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyHighlight } from "@/components/sections/CaseStudyHighlight";
import { ProductCTA } from "@/components/sections/ProductCTA";
import { Button } from "@/components/ui/button";

export interface ProductPageData {
  hero: {
    eyebrow: string;
    heading: string;
    image: string;
  };
  intro: {
    heading: string;
    body: string;
  };
  features: {
    icon: React.ReactNode;
    title: string;
    body: string;
  }[];
  steps: {
    number: string;
    title: string;
    body: string;
  }[];
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

export function ProductPageTemplate({ data }: { data: ProductPageData }) {
  return (
    <div className="bg-bg-white relative">
      <PageHero 
        eyebrow={data.hero.eyebrow}
        heading={data.hero.heading}
        image={data.hero.image}
      />
      
      {/* Intro section */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          {data.intro.heading}
        </h2>
        <p className="text-lg md:text-xl text-text-muted leading-relaxed">
          {data.intro.body}
        </p>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-bg-section border-y border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            {data.features.map((feature, i) => (
              <div key={i} className="flex flex-col text-center items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-green mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary">How it Works</h2>
          </div>
          <div className="space-y-12 md:space-y-0 md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-[120px] font-black text-bg-section leading-none absolute -top-10 -left-4 z-0 pointer-events-none select-none">
                  {step.number}
                </div>
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                  <p className="text-text-muted">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
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
