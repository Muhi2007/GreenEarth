import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <div className="bg-bg-white relative">
      <PageHero 
        heading="Get in Touch"
        subheading="Ready to optimize your soil? Have a question about our technology? We're here to help."
        image=""
        minimal={true}
      />

      <section className="py-16 pb-32">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary">Send us a message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-primary">First Name</label>
                    <Input placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-primary">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-primary">Email</label>
                  <Input type="email" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-primary">Role</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Farmer</option>
                    <option>Advisor</option>
                    <option>Manufacturer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-primary">Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[120px]" />
                </div>
                <Button size="lg" className="w-full bg-brand-green hover:bg-brand-green-dark text-white">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Information</h2>
                <div className="space-y-4 text-text-muted">
                  <p>
                    <strong className="text-text-primary">General Inquiries:</strong><br />
                    info@biomemakers.com
                  </p>
                  <p>
                    <strong className="text-text-primary">Support:</strong><br />
                    support@biomemakers.com
                  </p>
                </div>
              </div>
              
              <div className="p-8 bg-brand-green/10 rounded-lg border border-brand-green/20 text-center">
                <h3 className="text-xl font-bold text-brand-green mb-2">Request a Demo</h3>
                <p className="text-text-muted mb-6 text-sm">
                  See BeCrop in action and learn how it can be tailored to your specific operations.
                </p>
                <Button variant="outline" className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
                  Schedule Demo
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
