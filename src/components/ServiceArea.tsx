import { MapPin } from "lucide-react";

export const ServiceArea = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Areas We Service</h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <MapPin className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Based in Barham</h3>
          <p className="text-gray-600 mb-6">
            Servicing Barham and surrounding areas including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
            <div>Moama</div>
            <div>Echuca</div>
            <div>Swan Hill</div>
            <div>Kerang</div>
            <div>Cohuna</div>
            <div>Koondrook</div>
          </div>
        </div>
      </div>
    </section>
  );
};