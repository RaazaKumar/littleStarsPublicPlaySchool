import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* School Info */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Little Stars Public Play School
          </h1>
          <p className="text-yellow-400 mb-2">A Unit of Iris Social Welfare Trust</p>
          <p className="text-sm text-gray-400">
            A nurturing educational institution in Fatuha, Patna providing holistic development for early childhood education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400">Home</Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-yellow-400">About Us</Link>
            </li>
            <li>
              <Link to="/fee" className="hover:text-yellow-400">Fee Structure</Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-yellow-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p className="text-sm text-gray-300">📞 +91 620****</p>
          <p className="text-sm text-gray-300">📧 littlestarspublicplayschool@gmail.com</p>
          <p className="text-sm text-gray-300">📍 Station Road, Fatuha (Patna)</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-yellow-400"><Youtube size={20} /></a>
            <a href="#" className="hover:text-yellow-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-yellow-400"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 Little Stars Public Play School. All rights reserved.
      </div>
    </footer>
  );
}
