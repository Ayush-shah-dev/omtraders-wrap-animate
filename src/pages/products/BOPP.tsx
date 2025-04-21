
import React from "react";
const whatsappUrl = (product: string) => `https://wa.me/919574516060?text=${encodeURIComponent(`Hi, I am interested in ${product}, Please give us quote`)}`;
export default function BOPPPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-om-blue/10 p-4 md:p-12 animate-fade-in">
      <div className="max-w-5xl mx-auto rounded-lg shadow-2xl bg-white/70 backdrop-blur-2xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="/lovable-uploads/3e12cd79-e852-4cc5-b080-929b9878c9df.png"
            alt="BOPP Tape"
            className="rounded-lg max-h-64 w-full object-contain md:w-1/2 border-4 border-om-green/20"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-om-blue mb-2">BOPP Self Adhesive Tape</h1>
            <ul className="mb-4 space-y-2 text-[1.08rem]">
              <li><b className="text-om-green">Strong Adhesion:</b> Provides excellent sealing for cartons and packages.</li>
              <li><b className="text-om-green">Durable and Resistant:</b> Resists tearing, moisture, and wear during handling.</li>
              <li><b className="text-om-green">Versatile Use:</b> Suitable for manual or machine application in various industries.</li>
            </ul>
            <div className="mb-4">
              <table className="w-full text-center border-collapse bg-om-blue/10 rounded">
                <thead>
                  <tr className="bg-om-blue text-white">
                    <th className="p-2">Width (mm)</th>
                    <th className="p-2">Colour</th>
                    <th className="p-2">Meter</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">72 / 48 / 24</td>
                    <td className="p-2">Transparent, Brown, Yellow, Red, Printing</td>
                    <td className="p-2">65</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              href={whatsappUrl("BOPP self adhesive tape")}
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
              <li>
                <b>Branding and Marketing</b>
                <p>Promotes brand visibility with logos or slogans. Enhances professional appearance for retail and e-commerce shipments.</p>
              </li>
              <li>
                <b>Security and Tamper Evidence</b>
                <p>Provides tamper-proof sealing with custom messages. Helps identify tampered packages during transit.</p>
              </li>
              <li>
                <b>Organizational Use</b>
                <p>Differentiates product categories with color/labeled tapes. Marks specific inventory for easy identification.</p>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-om-blue">Video: Application</h2>
            <ol className="list-decimal ml-5 space-y-2">
              <li><b>Packaging & Shipping:</b> Sealing cartons and boxes for transportation, e-commerce and logistics.</li>
              <li><b>Industrial Use:</b> Bundling lightweight products, securing pallets and components.</li>
              <li><b>Retail & Office:</b> General-purpose sealing for office, packaging and stationery.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
