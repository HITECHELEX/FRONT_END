export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[rgb(255,92,0)] mb-4">About Hi-Tech Elex LLP</h1>
        <div className="w-24 h-1 bg-[#0098a3] mx-auto"></div>
      </div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-[#0098a3] mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Hi-Tech Elex LLP is a professionally managed company specializing in automation, 
            SCADA integration, and energy solutions. With our strong technical expertise and 
            commitment to quality, we provide comprehensive solutions to industries across various sectors.
          </p>
          <p className="text-gray-700 mb-4">
            Our team consists of highly qualified engineers and professionals who bring 
            years of experience in automation and control systems. We pride ourselves on 
            delivering customized solutions that meet our clients' specific requirements.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-[#0098a3] mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To provide innovative, reliable, and cost-effective automation solutions that enhance 
            operational efficiency and productivity for our clients while maintaining the highest 
            standards of quality and service.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#0098a3] mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be recognized as a leading provider of automation and energy solutions, known for 
            our technical excellence, customer-centric approach, and commitment to sustainable 
            industrial practices.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-[rgb(255,92,0)] mb-8 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="text-[#0098a3] text-4xl mb-3">✓</div>
            <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
            <p className="text-gray-700">
              We maintain the highest standards in automation technology and engineering practices.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-[#0098a3] text-4xl mb-3">✓</div>
            <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
            <p className="text-gray-700">
              Our solutions are tailored to meet each client's unique needs and challenges.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-[#0098a3] text-4xl mb-3">✓</div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-700">
              We continuously explore new technologies to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Company History */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[rgb(255,92,0)] mb-8 text-center">Our Journey</h2>
        <div className="relative">
          {/* Timeline */}
          <div className="border-l-2 border-[#0098a3] pl-8 space-y-12">
            <div className="relative">
              <div className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-[#0098a3] border-4 border-white"></div>
              <h3 className="text-xl font-semibold text-[#0098a3]">Establishment</h3>
              <p className="text-gray-700 mt-2">
                Founded with a vision to provide specialized automation solutions to Indian industries.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-[#0098a3] border-4 border-white"></div>
              <h3 className="text-xl font-semibold text-[#0098a3]">Growth Phase</h3>
              <p className="text-gray-700 mt-2">
                Expanded our service portfolio to include SCADA systems, PLC programming, and energy management.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-[#0098a3] border-4 border-white"></div>
              <h3 className="text-xl font-semibold text-[#0098a3]">Technology Partnerships</h3>
              <p className="text-gray-700 mt-2">
                Formed strategic alliances with leading technology providers to enhance our solution offerings.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-[#0098a3] border-4 border-white"></div>
              <h3 className="text-xl font-semibold text-[#0098a3]">Current Operations</h3>
              <p className="text-gray-700 mt-2">
                Successfully executing projects across multiple industries with a focus on quality and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f1f8fb] p-8 rounded-lg mb-16">
  <h2 className="text-3xl font-bold text-[rgb(255,92,0)] mb-8 text-center">Our Expertise</h2>
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-xl font-semibold text-[rgb(255,92,0)] mb-3">Industrial Automation</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>PLC Programming and Integration</li>
        <li>SCADA System Development</li>
        <li>HMI Design and Implementation</li>
        <li>Process Control Systems</li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-[rgb(255,92,0)] mb-3">Energy Solutions</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Energy Management Systems</li>
        <li>Power Quality Analysis</li>
        <li>Energy Audit Services</li>
        <li>Renewable Energy Integration</li>
      </ul>
    </div>
  </div>
</div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-[rgb(255,92,0)] mb-8 text-center">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0098a3]">Founder's Name</h3>
              <p className="text-[#0098a3] mb-3">Managing Partner</p>
              <p className="text-gray-700">
                With extensive experience in industrial automation, providing strategic direction to the company.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0098a3]">Technical Head</h3>
              <p className="text-[#0098a3] mb-3">Technical Director</p>
              <p className="text-gray-700">
                Oversees all technical operations with specialization in control systems and automation.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0098a3]">Operations Head</h3>
              <p className="text-[#0098a3] mb-3">Operations Director</p>
              <p className="text-gray-700">
                Manages project execution and ensures timely delivery of all solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
