
import React from "react";

const whatsappUrl = (product: string) => 
  `https://wa.me/919574516060?text=${encodeURIComponent("Hi, I am interested in " + product + ", Please give us quote")}`;

export default function POFPage() {
  // Key industry applications, as bulleted list.
  const industryApplications = [
    { 
      sector: "E-commerce & Logistics",
      details: "Shrink film used to bundle items (books, gadgets), secure parcels; essential for high-volume shipping."
    },
    { 
      sector: "Food & Beverage",
      details: "Ideal for direct food contact and wrapping; used for baked goods, frozen foods, and bottle bundling."
    },
    { 
      sector: "Pharma & Healthcare",
      details: "Ensures hygiene and tamper protection for medicines; FDA approved."
    },
    {
      sector: "FMCG & Supermarkets",
      details: "Wrapping individual FMCG items, multipacks, combo deals."
    },
    {
      sector: "Textile, Printing & Stationery",
      details: "Protects garments, printed material (books, diaries) with clear finish."
    }
  ];
  return (
    <div className="min-h-screen bg-white py-8 px-3 md:px-12 animate-fade-in">
      <div className="max-w-3xl shadow-xl border mx-auto rounded-lg bg-white/95 p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
          <img
            src="/lovable-uploads/49e42f6c-9f9c-40d4-bd5c-01e885545b0a.png"
            alt="POF Shrink Film roll"
            className="rounded-lg max-h-48 w-auto md:w-1/3 object-contain border-2 border-om-blue/10"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-om-blue mb-2">POF (Polyolefin) Shrink Film</h1>
            <p className="text-gray-700 mb-2 text-base">
              <b>Use:</b> Wrapping, bundling, and tamper-proof packaging.
            </p>
            <p className="text-gray-700 mb-2 text-base">
              <b>Properties:</b> Durable, glossy, FDA approved for food, puncture-resistant, shrinks tightly with heat.
            </p>
            <p className="text-gray-700 mb-2 text-base"><b>Available Widths:</b> <span className="font-semibold text-om-green">4 - 30 inch</span></p>
            <a
              href={whatsappUrl("POF Shrink Film")}
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
                <th className="p-2">Thickness<br/>(mic/gauge)</th>
                <th className="p-2">15/60</th>
                <th className="p-2">19/80</th>
                <th className="p-2">25/100</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-sm">
                <td className="font-semibold">Meters/Roll</td>
                <td>1332</td>
                <td>1067</td>
                <td>800</td>
              </tr>
              <tr className="bg-blue-50 text-xs">
                <td colSpan={4} className="pt-2 pb-1 font-medium text-gray-700">
                  <b>Widths:</b> 4 - 30 inch &nbsp; | &nbsp; <b>Rolls:</b> Centerfold / single wound / tube.
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
