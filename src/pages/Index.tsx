import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { ServiceArea } from "@/components/ServiceArea";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Gallery />
      <Testimonials />
      <ServiceArea />
      <ContactForm />
    </main>
  );
};

export default Index;