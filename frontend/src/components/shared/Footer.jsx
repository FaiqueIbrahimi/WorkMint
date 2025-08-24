import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const quickLinks = [
    { name: 'Find Jobs', path: '/browse' },
    { name: 'Companies', path: '/admin/companies' },
    { name: 'Post a Job', path: '/admin/jobs/create' },
    { name: 'My Applications', path: '/profile' },
  ];

  const categories = [
    'Software Development',
    'Data Science',
    'Product Management',
    'Design',
    'Marketing',
    'Sales'
  ];

  const resources = [
    'Career Guide',
    'Resume Tips',
    'Interview Prep',
    'Salary Guide',
    'Blog',
    'Help Center'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <button 
                onClick={handleLogoClick}
                className="text-3xl font-bold bg-gradient-to-r from-[#6A38C2] to-[#F83002] bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                WorkMint
              </button>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Your one-stop hub where talent meets opportunity, making job hunting and hiring smarter, faster, and more efficient.
              </p>
            </div>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">hello@workmint.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Popular Categories</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                    {resource}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Newsletter signup */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3 text-white">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#6A38C2] to-[#8B5CF6] text-white text-sm rounded-lg hover:from-[#5b30a6] hover:to-[#7C3AED] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 WorkMint. All rights reserved. | 
              <span className="hover:text-white transition-colors cursor-pointer ml-2">Privacy Policy</span> | 
              <span className="hover:text-white transition-colors cursor-pointer ml-2">Terms of Service</span>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-[#6A38C2] hover:to-[#8B5CF6] transition-all duration-200 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;