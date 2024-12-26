import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <img 
          src="/lovable-uploads/5b445e2c-a42d-4a88-a7f6-971140657fbd.png" 
          alt="Kinsey Concreting Logo" 
          className="h-16 w-auto"
        />
      </div>
    </header>
  );
};