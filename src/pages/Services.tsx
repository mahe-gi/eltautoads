
import {  Star, Users, CheckCircle, Megaphone } from 'lucide-react';

function Services() {
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Megaphone className="w-8 h-8 text-blue-600" />,
              title: "Digital Campaigns",
              description: "Strategic digital advertising campaigns tailored for auto rickshaw businesses",
              features: [
                "Social media marketing",
                "Digital billboard advertising",
                "Location-based campaigns",
                "Performance tracking"
              ]
            },
            {
              icon: <Star className="w-8 h-8 text-blue-600" />,
              title: "Brand Development",
              description: "Build a strong, recognizable brand in the auto rickshaw industry",
              features: [
                "Brand strategy",
                "Visual identity",
                "Brand guidelines",
                "Marketing collateral"
              ]
            },
            {
              icon: <Users className="w-8 h-8 text-blue-600" />,
              title: "Market Analysis",
              description: "In-depth market research and competitor analysis",
              features: [
                "Market research",
                "Competitor analysis",
                "Target audience insights",
                "Growth opportunities"
              ]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;