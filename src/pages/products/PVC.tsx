
import React from "react";
const whatsappUrl = (product: string) => `https://wa.me/919574516060?text=${encodeURIComponent(`Hi, I am interested in ${product}, Please give us quote`)}`;

export default function PVCPage() {
  const applications = [
    {
      title: "Food Packaging",
      description: "Display/packaging of food products with excellent clarity",
      image: "/lovable-uploads/eddaf6fe-b903-46aa-86c4-e3d9fa73c907.png"
    },
    {
      title: "Retail/E-commerce",
      description: "Secure products for delivery & display, bulk shipping",
      image: "/lovable-uploads/4a8d71b5-2c50-4bba-baf7-1c5fd9415a10.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-om-blue/10 p-4 md:p-12 animate-fade-in">
      <div className="max-w-5xl mx-auto rounded-lg shadow-2xl bg-white/70 backdrop-blur-2xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="/lovable-uploads/eddaf6fe-b903-46aa-86c4-e3d9fa73c907.png"
            alt="PVC Shrink"
            className="rounded-lg max-h-64 w-full object-contain md:w-1/2 border-4 border-om-green/20"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-om-blue mb-2">PVC Shrink</h1>
            <ul className="mb-4 space-y-2 text-[1.08rem]">
              <li><b className="text-om-green">High Clarity:</b> Excellent transparency for attractive product display.</li>
              <li><b className="text-om-green">Strong & Durable:</b> Protection against dust, moisture, tampering.</li>
              <li><b className="text-om-green">Versatile Application:</b> Manual/machine shrink-wrapping in industries.</li>
            </ul>
            <a
              href={whatsappUrl("PVC Shrink")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2 bg-om-green text-white font-semibold rounded shadow-lg hover:scale-105 hover:bg-om-blue/90 transition-transform"
            >
              Contact for quote
            </a>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-om-blue">Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-om-green mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
