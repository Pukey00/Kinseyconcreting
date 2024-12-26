import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Quality Concrete Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Professional concrete services in Barham and surrounding areas. Expert craftsmanship, reliable service.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
        >
          Contact Now
        </Button>
      </div>
    </div>
  );
};