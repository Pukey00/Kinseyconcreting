import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { ServiceArea } from "@/components/ServiceArea";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <Hero />
        <Gallery />
        <Testimonials />
        <ServiceArea />
        <ContactForm />
      </main>
    </>
  );
};

export default Index;