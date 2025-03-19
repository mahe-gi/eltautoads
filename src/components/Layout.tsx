import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone } from 'lucide-react';


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Megaphone className="w-8 h-8 text-white" />
              <span className="text-white text-2xl font-bold">EltAutoAds</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
              <Link to="/about" className="text-white hover:text-gray-300">About</Link>
              <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Megaphone className="w-6 h-6" />
              <span className="text-xl font-bold">EltAutoAds</span>
            </div>
            <p className="text-gray-400">
              Premium auto rickshaw advertising solutions for modern businesses
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white">Digital Campaigns</Link></li>
              <li><Link to="/services" className="hover:text-white">Brand Development</Link></li>
              <li><Link to="/services" className="hover:text-white">Market Analysis</Link></li>
              <li><Link to="/services" className="hover:text-white">Strategy Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white">Our Team</Link></li>
              <li><Link to="/about" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@eltautoads.com</li>
              <li>hyderabad</li>
              <li>Telangana</li>
              <li>Ramanthapur,hyd 500032</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;