
import React from "react";

const whatsappUrl = (product: string) =>
  `https://wa.me/919574516060?text=${encodeURIComponent("Hi, I am interested in " + product + ", Please give us quote")}`;

export default function BoxStrappingPage() {
  // Industry-focused applications.
  const industryApplications = [
    { sector: "E-commerce & Logistics", details: "Securing heavy parcels, binding cartons, pallets in warehouses or shipping." },
    { sector: "Manufacturing", details: "Bundling products, components, machinery for safe transit." },
    { sector: "Food, Pharma, FMCG", details: "Used to group multiple cartons for dispatch, enables safe storage/transport." },
    { sector: "Retail Chains", details: "Helpful in in-house logistics, transfers between stores or warehouses." }
  ];
  return (
    <div className="min-h-screen bg-white py-8 px-3 md:px-12 animate-fade-in">
      <div className="max-w-3xl shadow-xl border mx-auto rounded-lg bg-white/95 p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
          <img
            src="/lovable-uploads/4d32cb8b-d506-4559-9e2c-38946f066486.png"
            alt="Box Strapping Roll"
            className="rounded-lg max-h-48 w-auto md:w-1/3 object-contain border-2 border-om-blue/10"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-om-blue mb-2">Box Strapping Roll</h1>
            <p className="text-gray-700 mb-2 text-base">
              <b>Use:</b> Securing cartons and packages.
            </p>
            <p className="text-gray-700 mb-2 text-base">
              <b>Types:</b> Manual, semi-auto, machine grade.
            </p>
            <p className="text-gray-700 mb-2 text-base">
              <b>Properties:</b> High tensile strength, strong hold, resistant to breakage.
            </p>
            <a
              href={whatsappUrl("Box Strapping Roll")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-om-green text-white font-semibold rounded shadow-lg hover:scale-105 hover:bg-om-blue/90 transition-transform"
            >
              Contact for quote
            </a>
          </div>
        </div>
        <div className="mb-6">
          <table className="w-full text-center border border-gray-200 rounded bg-om-blue/10">
            <thead>
              <tr className="bg-om-blue text-white text-base">
                <th className="p-2">Type</th>
                <th className="p-2">Width (mm)</th>
                <th className="p-2">Color</th>
                <th className="p-2">Length (meter)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-sm">
                <td>Manual/Semi-auto</td>
                <td>6, 9, 12, 15, 19</td>
                <td>White, Blue, Green, Yellow</td>
                <td>1000–2000</td>
              </tr>
              <tr className="bg-blue-50 text-xs">
                <td colSpan={4} className="pt-2 pb-1 font-medium text-gray-700">
                  <b>Machine Grade:</b> Available on request, suitable for high-speed strapping. &nbsp; | &nbsp;<b>Rolls:</b> Coreless / with core.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-xl font-bold text-om-blue mb-3">Industry Applications</h2>
          <ul className="ml-5 space-y-2 mb-4">
            {industryApplications.map((app, idx) => (
              <li key={idx} className="list-disc">
                <b>{app.sector}:</b> {app.details}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
