
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import Nav from "./Nav";
import Ai from './Ai'
export default function Navbar() {
  return (
   <div>
    <Ai/>
     <header className="w-full top-0 z-50 shadow-md fixed">
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 gap-2">
          {/* Left Side with Logo + Text */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <img
              src="/logo.png"
              alt="School Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-base sm:text-lg leading-tight">
                Little Stars Public Play School
              </p>
              <p className="text-xs sm:text-sm">Little Stars, Big Dreams</p>
              <p className="text-yellow-300 text-xs sm:text-sm">
                Based on CBSE Curriculum & Co-education
              </p>
            </div>
          </div>

          {/* Right Side Contact Info */}
          <div className="flex flex-col md:items-end space-y-1 text-[11px] sm:text-xs">
            <p className="flex items-center gap-1">
              <Phone size={14} /> +91 620******* , 620******* , 620*******
            </p>
            <p className="flex items-center gap-1 break-all">
              <Mail size={14} /> littlestarspublicplayschool@gmail.com
            </p>
            <p className="flex items-center gap-1">
              <MapPin size={14} /> Station Road , Fatwah (Patna)
            </p>
          </div>
        </div>
      </div>
       <Nav/>
    </header>
   </div>
  );
}
