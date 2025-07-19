export default function Services() {
  const services = [
    "SCADA System Integration",
    "Energy Monitoring & Audits",
    "Smart Industrial Automation",
    "IoT-Enabled Smart Systems"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-lg border">
            <h3 className="text-xl font-semibold text-blue-700">{service}</h3>
            <p className="text-gray-600 mt-2">High quality solutions tailored to your industrial needs.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
