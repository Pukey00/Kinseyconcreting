import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const images = [
  {
    url: "/lovable-uploads/8fbf838c-7570-4884-869b-02e17d6d8d28.png",
    alt: "Decorative concrete finish",
    title: "Decorative",
  },
  {
    url: "/lovable-uploads/d71fcb07-8698-4e98-a94f-ad0a942f2830.png",
    alt: "Commercial concrete installation",
    title: "Commercial",
  },
  {
    url: "/lovable-uploads/47e48125-8e6d-4ec1-9ffa-d1c412779948.png",
    alt: "Concrete pathway installation",
    title: "Pathways",
  },
  {
    url: "/lovable-uploads/4dc31dd1-33c4-466a-8afb-d1ded72973ad.png",
    alt: "Pool surrounds concrete work",
    title: "Pools",
  },
  {
    url: "/lovable-uploads/c8509ae1-7143-42e9-a01a-2c006d09aaea.png",
    alt: "Rural concrete solutions",
    title: "Rural",
  },
];

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Solutions</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <Card
                key={index}
                className="min-w-full px-4"
              >
                <div className="aspect-video relative">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                    <h3 className="text-xl font-semibold">{image.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};