import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const images = [
  {
    url: "/lovable-uploads/103bae6e-535c-4546-9ded-a4d779536131.png",
    alt: "Concrete driveway installation",
    title: "Driveways",
  },
  {
    url: "/lovable-uploads/75b15a45-c698-494c-a990-38cdce748ddd.png",
    alt: "Concrete patio design",
    title: "Patios",
  },
  {
    url: "https://images.unsplash.com/photo-1621510456681-2330135e5871?q=80&w=1200",
    alt: "Commercial concrete flooring",
    title: "Commercial",
  },
  {
    url: "/lovable-uploads/ee94fcdc-fbf7-44ef-b357-4a310e0c5fe5.png",
    alt: "Decorative concrete work",
    title: "Decorative",
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