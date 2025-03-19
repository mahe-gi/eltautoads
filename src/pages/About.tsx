
import { CheckCircle } from 'lucide-react';

function About() {
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold mb-6">About EltAutoAds</h1>
            <p className="text-gray-600 mb-8">
              EltAutoAds is a pioneering force in the auto rickshaw advertising industry. We combine innovative digital solutions with traditional advertising methods to help auto rickshaw businesses grow and thrive in today's competitive market.
            </p>
            <div className="space-y-4">
              {[
                "10+ years of industry experience",
                "500+ successful campaigns",
                "98% client satisfaction rate",
                "Pan-India presence"
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px]">  
            <img
              src="https://imgs.search.brave.com/UtcqNWmYvVshREZ0W6jw1N5AQoWq_EJco3pC2NqhhtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNv/dXJjZS5idXltZWRp/YXNwYWNlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/Ny8zLXdoZWVsZXIt/YWR2ZXJ0aXNpbmct/aXRzLXJhdGVzLndl/YnA"
              className="w-full h-full  rounded-lg"
              alt="Auto rickshaw on street"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            To revolutionize the auto rickshaw advertising industry by providing innovative, effective, and measurable advertising solutions that help businesses reach their target audience and achieve their marketing goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Our Vision",
              description: "To be the leading auto rickshaw advertising platform in India, known for innovation and results."
            },
            {
              title: "Our Values",
              description: "Innovation, integrity, customer focus, and commitment to excellence drive everything we do."
            },
            {
              title: "Our Promise",
              description: "Delivering measurable results and exceptional service to help your business grow."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;