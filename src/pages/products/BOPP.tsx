
import React from "react";

const whatsappUrl = (product: string) =>
  `https://wa.me/919574516060?text=${encodeURIComponent("Hi, I am interested in " + product + ", Please give us quote")}`;

export default function BOPPPage() {
  // Key industry applications, bulleted.
  const industryApplications = [
    { sector: "E-commerce & Logistics", details: "Sealing cartons and boxes for transportation, essential for every shipment." },
    { sector: "Branding", details: "Custom-printed tapes used for logos and company info, enhances brand recall." },
    { sector: "Food, Pharma, FMCG", details: "Used in carton sealing; moisture-resistant and suitable for cold chain as well." },
    { sector: "Manufacturing", details: "Bundling products, securing pallet loads, protecting items during handling." }
  ];
  return (
    <div className="min-h-screen bg-white py-8 px-3 md:px-12 animate-fade-in">
      <div className="max-w-3xl shadow-xl border mx-auto rounded-lg bg-white/95 p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
          <img
            src="/lovable-uploads/3e12cd79-e852-4cc5-b080-929b9878c9df.png"
            alt="BOPP Self Adhesive Tape"
            className="rounded-lg max-h-48 w-auto md:w-1/3 object-contain border-2 border-om-blue/10"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-om-blue mb-2">BOPP Self-Adhesive Tape</h1>
            <p className="text-gray-700 mb-2 text-base">
              <b>Use:</b> Sealing boxes, branding, bundling.
            </p>
            <p className="text-gray-700 mb-2 text-base">
              <b>Properties:</b> Excellent adhesion, printability for branding, moisture-resistant, available in multiple colors/widths.
            </p>
            <a
              href={whatsappUrl("BOPP Self Adhesive Tape")}
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
                <th className="p-2">Width (mm)</th>
                <th className="p-2">Colors</th>
                <th className="p-2">Meters/Roll</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-sm">
                <td>72 / 48 / 24</td>
                <td>Transparent, Brown, Yellow, Red, Printed</td>
                <td>65</td>
              </tr>
              <tr className="bg-blue-50 text-xs">
                <td colSpan={3} className="pt-2 pb-1 font-medium text-gray-700">
                  <b>Grades:</b> Industrial, general purpose, printed. &nbsp; | &nbsp;<b>Packs:</b> 6/12/36/72 rolls.
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
