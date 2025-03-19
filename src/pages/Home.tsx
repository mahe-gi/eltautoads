import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Megaphone,
  Target,
  TrendingUp,
  BarChart3,
  Palette,
  MapPin,
} from "lucide-react";

function Home() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.jdmagicbox.com/v2/comp/hyderabad/s3/040pxx40.xx40.190430193544.c7s3/catalogue/gayathri-ads-vanasthalipuram-hyderabad-advertising-agencies-2i8bzfwuvf.jpg",
    "https://imgs.search.brave.com/WXKFGbhg4GvP5g-DIHCQ0y_lRhsCsHnnEbBdAbdw6W0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vV3Uwa3FH/am1fTlJ3TVZaeW51/eUMtdmE4Z0lFNHYx/bjJVU2RfdU9LV1Zo/by9yczpmaXQ6NTYw/OjMyMDoxOjAvZzpj/ZS9hSFIwY0hNNkx5/OXRiSGhoL05tZDNk/WGQ2Y1hJdWFTNXYv/Y0hScGJXOXNaUzVq/YjIwdi9kem94TURJ/MEwyZzZOVFkwL0wz/RTZiV0YxZEc4dlpq/cGkvWlhOMEwyaDBk/SEJ6T2k4di9jSEpo/YW1Gd1lYUnBZV1Iy/L1pYSjBhWE5wYm1j/dVkyOXQvTDNkd0xX/TnZiblJsYm5Rdi9k/WEJzYjJGa2N5OHlN/REkwL0x6RXhMMEYx/ZEc4dFVtbGovYTNO/b1lYY3RTRzl2WkMx/RS9aWE5wWjI0dFUy/bDZaWE10L1VISmhh/bUZ3WVhScExVRmsv/ZG1WeWRHbHphVzVu/TFRFdC9NUzB4TURJ/MGVEVTJOQzB4L0xu/ZGxZbkE.jpeg",
    "https://imgs.search.brave.com/UtcqNWmYvVshREZ0W6jw1N5AQoWq_EJco3pC2NqhhtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNv/dXJjZS5idXltZWRp/YXNwYWNlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/Ny8zLXdoZWVsZXIt/YWR2ZXJ0aXNpbmct/aXRzLXJhdGVzLndl/YnA",
    "https://images.jdmagicbox.com/v2/comp/hyderabad/s3/040pxx40.xx40.190430193544.c7s3/catalogue/gayathri-ads-vanasthalipuram-hyderabad-advertising-agencies-5ng9bhi8by.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Auto Sliding Images */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                className="w-full h-full object-cover"
                alt={`Auto rickshaw advertising ${index + 1}`}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advertise on India's Moving Canvas
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Transforming auto rickshaws into powerful advertising platforms.
            Reach millions of urban customers with our innovative mobile
            advertising solutions.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Start Advertising
          </Link>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Auto Advertising?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Auto rickshaws offer unique advertising opportunities with high
            visibility and local reach
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6 text-blue-600" />,
                title: "High Visibility",
                description:
                  "Reach thousands of potential customers daily in busy urban areas",
                link: "/services#visibility",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
                title: "Cost Effective",
                description:
                  "Maximum impact with minimum investment compared to traditional advertising",
                link: "/services#pricing",
              },
              {
                icon: <Target className="w-6 h-6 text-blue-600" />,
                title: "Local Targeting",
                description:
                  "Reach specific neighborhoods and communities effectively",
                link: "/services#targeting",
              },
            ].map((feature, index) => (
              <Link
                to={feature.link}
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Advertising Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Megaphone className="w-8 h-8 text-blue-600" />,
                title: "Full Vehicle Wraps",
                description:
                  "Eye-catching full auto rickshaw wraps that turn heads and grab attention",
                link: "/services#wraps",
              },
              {
                icon: <Palette className="w-8 h-8 text-blue-600" />,
                title: "Digital Displays",
                description:
                  "Dynamic digital screens for engaging video advertisements",
                link: "/services#digital",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
                title: "Analytics & Tracking",
                description:
                  "Detailed metrics and performance tracking for your campaigns",
                link: "/services#analytics",
              },
            ].map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <div className="text-blue-100">Auto Rickshaws</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Daily Impressions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Visit Our Office
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-6">Head Office</h3>
                  <p className="text-gray-600">
                    Hyderabad <br />
                    Telangana <br />
                    India
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288696.720375527!2d78.24323613415223!3d17.412281018698568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1742366948762!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
