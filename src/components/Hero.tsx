import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/ec590489-30a3-43ec-a968-e50207611f53.png')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Quality Concrete Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white">
          Professional concrete services in Barham and surrounding areas. Expert craftsmanship, reliable service.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
        >
          Contact Now
        </Button>
        <div className="mt-4 flex items-center justify-center gap-2 text-white">
          <Phone className="w-5 h-5" />
          <a href="tel:0457078612" className="text-lg hover:underline">
            0457 078 612
          </a>
        </div>
      </div>
    </div>
  );
};