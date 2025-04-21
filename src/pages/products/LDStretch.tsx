
import React from "react";
const whatsappUrl = (product: string) => `https://wa.me/919574516060?text=${encodeURIComponent(`Hi, I am interested in ${product}, Please give us quote`)}`;
export default function LDStretchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-om-blue/10 p-4 md:p-12 animate-fade-in">
      <div className="max-w-5xl mx-auto rounded-lg shadow-2xl bg-white/70 backdrop-blur-2xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="/lovable-uploads/480d2bbf-1a81-421b-8464-1cef16484dc4.png"
            alt="LD Stretch Film"
            className="rounded-lg max-h-64 w-full object-contain md:w-1/2 border-4 border-om-green/20"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-om-blue mb-2">LD Stretch Film</h1>
            <ul className="mb-4 space-y-2 text-[1.08rem]">
              <li><b className="text-om-green">Cost-Effective:</b> Ideal for bundling and protecting goods.</li>
              <li><b className="text-om-green">Strong & Stretchable:</b> Tear-resistant with excellent elasticity.</li>
              <li><b className="text-om-green">Versatile:</b> Compatible with manual and machine use.</li>
            </ul>
            <div className="mb-4">
              <table className="w-full text-center border-collapse bg-om-blue/10 rounded">
                <thead>
                  <tr className="bg-om-blue text-white">
                    <th className="p-2">Width (mm)</th>
                    <th className="p-2">150</th>
                    <th className="p-2">250</th>
                    <th className="p-2">300</th>
                    <th className="p-2">450</th>
                    <th className="p-2">600</th>
                  </tr>
                </thead>
              </table>
            </div>
            <a
              href={whatsappUrl("LD Stretch Film")}
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
              <li>Logistics & Warehousing: Securing pallets, protecting goods from dust/moisture.</li>
              <li>Industrial Packaging: Wrapping machinery/tools/equipment.</li>
              <li>Retail & E-commerce: Wrapping cartons/package for shipping.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-om-blue">Video: Application</h2>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Food & Beverage: Wrapping food containers, beverage protection.</li>
              <li>Furniture & Household: Wrapping furniture, securing items.</li>
              <li>Agriculture: Bundling/Protection of tools, hay bales, seed bags.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
