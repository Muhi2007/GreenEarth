import { PageHero } from "@/components/sections/PageHero";
import { Link } from "react-router-dom";
import { Download, PlayCircle, BookOpen } from "lucide-react";

export function Resources() {
  const resources = [
    {
      type: "eBook",
      title: "The Ultimate Guide to Soil Biology",
      icon: <BookOpen className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop"
    },
    {
      type: "Webinar",
      title: "Maximizing Fertilizer Efficiency with BeCrop",
      icon: <PlayCircle className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1599818817296-658b4daed653?q=80&w=600&auto=format&fit=crop"
    },
    {
      type: "Guide",
      title: "Interpreting Your BeCrop Test Report",
      icon: <Download className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-bg-white relative">
      <PageHero 
        eyebrow="Resource Centre"
        heading="Knowledge is power"
        subheading="Guides, webinars, and ebooks to help you master soil biology."
        image="https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-bg-section">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((res, i) => (
              <div key={i} className="group relative bg-white flex flex-col hover:shadow-xl transition-shadow duration-300 border border-border">
                <div className="h-[200px] w-full overflow-hidden relative">
                  <img 
                    src={res.image} 
                    alt={res.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                     {res.icon} {res.type}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-text-primary mb-6 flex-grow">{res.title}</h3>
                  <Link to="#" className="inline-flex items-center gap-2 font-semibold text-brand-green hover:text-brand-green-dark">
                    {res.type === 'Webinar' ? 'Watch Now' : 'Download Now'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
