
import React from "react";
const whatsappUrl = (product: string) => `https://wa.me/919574516060?text=${encodeURIComponent(`Hi, I am interested in ${product}, Please give us quote`)}`;
export default function POFPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-om-blue/10 p-4 md:p-12 animate-fade-in">
      <div className="max-w-5xl mx-auto rounded-lg shadow-2xl bg-white/70 backdrop-blur-2xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="/lovable-uploads/49e42f6c-9f9c-40d4-bd5c-01e885545b0a.png"
            alt="POF Shrink Film"
            className="rounded-lg max-h-64 w-full object-contain md:w-1/2 border-4 border-om-green/20"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-om-blue mb-2">POF Shrink Film</h1>
            <p className="mb-4 text-[1.08rem]">
              This is an economical, cost-effective product. High clear, strong, and abrasion resistant. Wide range of applications. Suitable for most automatic and semi-automatic shrink wrap machines.
            </p>
            <div className="mb-4">
              <table className="w-full text-center border-collapse bg-om-blue/10 rounded">
                <thead>
                  <tr className="bg-om-blue text-white">
                    <th className="p-2">Thickness (mic/gauge)</th>
                    <th className="p-2">15/60</th>
                    <th className="p-2">19/80</th>
                    <th className="p-2">25/100</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">Meter</td>
                    <td>1332</td>
                    <td>1067</td>
                    <td>800</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Inch</td>
                    <td colSpan={3}>4 to 30</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              href={whatsappUrl("POF shrink film")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2 bg-om-green text-white font-semibold rounded shadow-lg hover:scale-105 hover:bg-om-blue/90 transition-transform"
            >
              Contact for quote
            </a>
          </div>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold mb-2 text-om-blue">Applications</h2>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Food Packaging: Ready meals, snacks, frozen food, bakery/meat.</li>
              <li>Beverage: Bottled drinks, single/multipack, retail wrap.</li>
              <li>Retail Packaging: Cosmetics, books, toys, electronics, gadgets.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-om-blue">Video: Application</h2>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Industrial: Hardware, tools, automotive parts, bulk wires/cables.</li>
              <li>Pharma/Medical: Medications & instruments.</li>
              <li>E-commerce: Tamper-proof packaging for online orders.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
