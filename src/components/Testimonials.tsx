import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "John Smith",
    location: "Barham",
    text: "Kinsey Concreting did an amazing job on our driveway. Professional, punctual, and perfect results!",
  },
  {
    name: "Sarah Johnson",
    location: "Swan Hill",
    text: "The team's attention to detail on our patio project was outstanding. Highly recommend their services.",
  },
  {
    name: "Mike Williams",
    location: "Moama",
    text: "Great communication throughout the project. The finished concrete work exceeded our expectations.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white shadow-lg">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};