import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white text-secondary py-8 mt-16 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-8 items-center">
            <img 
              src="/lovable-uploads/5b445e2c-a42d-4a88-a7f6-971140657fbd.png" 
              alt="Kinsey Concreting Logo" 
              className="h-16 w-auto"
            />
            <img 
              src="/lovable-uploads/ec590489-30a3-43ec-a968-e50207611f53.png" 
              alt="Kinsey Concreting Hero" 
              className="h-16 w-auto object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <a href="tel:0457078612" className="text-lg hover:underline">
              0457 078 612
            </a>
          </div>
          <p className="text-sm mt-4">
            © {new Date().getFullYear()} Kinsey Concreting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};