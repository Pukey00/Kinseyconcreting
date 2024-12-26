import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <img 
          src="/lovable-uploads/f31a86d1-b589-467f-808f-ae752081492d.png" 
          alt="Kinsey Concreting Logo" 
          className="h-16 w-auto"
        />
      </div>
    </header>
  );
};