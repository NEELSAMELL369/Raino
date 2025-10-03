import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-white">Raino</h3>
          <p className="text-gray-400">
            Raino is your one-stop online store for all products. Quality and
            satisfaction guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/catalog" className="hover:text-blue-400 transition">
                Catalog
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Contact</h3>
          <p className="text-gray-400">Email: support@raino.com</p>
          <p className="text-gray-400">Phone: +91 12345 67890</p>
          <p className="text-gray-400">Address: Mumbai, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-gray-500 text-center py-4 mt-6">
        &copy; {new Date().getFullYear()} Raino. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
